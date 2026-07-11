// server.js
// Minimal Express backend for Deep — serves the static site and
// proxies chat requests to the Anthropic API so the API key never
// reaches the browser.
//
// Setup:
//   1. npm install
//   2. Create a .env file (see .env.example) with your ANTHROPIC_API_KEY
//   3. npm start
//   4. Open http://localhost:3000

const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));

// Serves index.html, style.css, script.js from the project root.
// Put your Deep site files (index.html, style.css, script.js) in
// a folder called "public" next to this file.
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  try {
    const { system, messages } = req.body;

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: "Server is missing ANTHROPIC_API_KEY" });
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array is required" });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 800,
        system: system || undefined,
        messages: messages.map(m => ({ role: m.role, content: m.content }))
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      return res.status(502).json({ error: "Upstream AI request failed" });
    }

    const data = await response.json();
    const textBlock = data.content.find(block => block.type === "text");
    const reply = textBlock ? textBlock.text : "I couldn't generate a response — please try again.";

    res.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
});

app.listen(PORT, () => {
  console.log(`Deep server running on port ${PORT}`);
});

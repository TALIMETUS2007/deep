// api/chat.js
// Vercel serverless function — replaces the Express route for
// deployment on Vercel. Vercel automatically turns any file in
// /api into a live endpoint at /api/<filename>, so this becomes
// POST /api/chat with no extra routing setup needed.
//
// Vercel's Node.js runtime (18+) has fetch built in, so there
// are no npm dependencies to install for this function.

const fs = require("fs");
const path = require("path");

// A starter Cameroon knowledge base, bundled with the deployment
// and injected into every request's system prompt. See
// cameroon-knowledge.json — expand it as your content grows.
// For a much larger knowledge base, see the "scaling up" notes
// in the deployment guide (moving to a real database + retrieval).
let knowledgeBase = null;
function loadKnowledgeBase() {
  if (knowledgeBase) return knowledgeBase;
  try {
    const raw = fs.readFileSync(path.join(__dirname, "cameroon-knowledge.json"), "utf8");
    knowledgeBase = raw;
  } catch (err) {
    console.error("Could not load knowledge base:", err);
    knowledgeBase = "";
  }
  return knowledgeBase;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { system, messages } = req.body || {};

    if (!process.env.ANTHROPIC_API_KEY) {
      res.status(500).json({ error: "Server is missing ANTHROPIC_API_KEY" });
      return;
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: "messages array is required" });
      return;
    }

    const kb = loadKnowledgeBase();
    const fullSystem = kb
      ? `${system || ""}\n\nReference knowledge base (use this for facts; if something isn't covered here, rely on your general knowledge and say when you're not fully certain):\n${kb}`
      : system;

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
        system: fullSystem || undefined,
        messages: messages.map(m => ({ role: m.role, content: m.content }))
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      res.status(502).json({ error: "Upstream AI request failed" });
      return;
    }

    const data = await response.json();
    const textBlock = data.content.find(block => block.type === "text");
    const reply = textBlock ? textBlock.text : "I couldn't generate a response — please try again.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    res.status(500).json({ error: "Something went wrong on the server." });
  }
};

// Hobby plan default function timeout is 10s, which some Claude
// replies exceed — this is the most common cause of "the AI
// doesn't always work." Raising it here asks Vercel for more time;
// check your plan's actual ceiling in Vercel's dashboard/docs if
// this alone doesn't fully resolve it.
module.exports.config = {
  maxDuration: 60,
};

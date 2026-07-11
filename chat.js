// api/chat.js
// Vercel serverless function — replaces the Express route for
// deployment on Vercel. Vercel automatically turns any file in
// /api into a live endpoint at /api/<filename>, so this becomes
// POST /api/chat with no extra routing setup needed.
//
// Vercel's Node.js runtime (18+) has fetch built in, so there
// are no npm dependencies to install for this function.

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

import express from "express";
import OpenAI from "openai";

const router = express.Router();

const FALLBACK_DEFINITIONS = {
  recursion: {
    normal: "Recursion is when a function calls itself to solve a smaller version of the same problem. It has two parts: (1) Base case - when to stop, (2) Recursive case - when to call itself with a smaller input.",
    simple: "Imagine Russian nesting dolls! Each doll opens to reveal a smaller doll inside. Recursion is like that - a function that opens itself and finds a smaller version of the same problem inside.",
  },
  photosynthesis: {
    normal: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce glucose and oxygen.",
    simple: "Plants are like tiny factories! They take sunlight, water, and air, mix them together, and make their own food plus the oxygen we breathe.",
  },
  coding: {
    normal: "Coding is the process of writing instructions in a programming language that a computer can understand and execute.",
    simple: "Coding is like giving a robot very clear step-by-step instructions in a special language the computer understands.",
  },
  work: {
    normal: "In physics, work is the transfer of energy when a force is applied to an object and causes it to move. Work = Force × Distance.",
    simple: "Work is when you push or pull something and it actually moves! The harder you push and the farther it goes, the more work you did.",
  },
  algorithm: {
    normal: "An algorithm is a step-by-step procedure for solving a problem. In programming, algorithms are the logic behind how software processes data.",
    simple: "An algorithm is like a recipe! It tells a computer exactly what steps to follow to solve a problem.",
  },
  array: {
    normal: "An array is a data structure that stores a collection of elements. Each element can be accessed by its index.",
    simple: "An array is like a row of lockers! Each locker has a number and you can put something in each one.",
  },
  variable: {
    normal: "A variable is a named container that holds a value in a program. The value can change during execution.",
    simple: "A variable is like a labeled box! You put a name on it and you can put different things inside.",
  },
  function: {
    normal: "A function is a reusable block of code that performs a specific task. It can take inputs and return an output.",
    simple: "A function is like a helper! You give it a job and it does it for you. You can ask it to do the same job over and over.",
  },
};

function getFallbackResponse(userMessage, simplifyMode) {
  const lower = userMessage.toLowerCase().trim();
  const match = lower.match(/(?:define|definition of|what is|explain|tell me about|give me the defination of)\s+(.+?)(?:\?|$)/);
  const term = (match ? match[1] : lower).trim().replace(/\?$/, "");

  for (const [key, def] of Object.entries(FALLBACK_DEFINITIONS)) {
    if (term.includes(key) || key.includes(term)) {
      return simplifyMode ? def.simple : def.normal;
    }
  }
  return null;
}

const SYSTEM_PROMPT = `You are a friendly, knowledgeable AI tutor for students. Answer clearly, use simple language when asked, and be supportive.`;

router.post("/chat", async (req, res) => {
  try {
    const { messages, simplifyMode } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array required" });
    }

    const lastUser = messages.filter((m) => m.role === "user").pop();
    const userText = lastUser?.content || "";

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      const fallback = getFallbackResponse(userText, !!simplifyMode);
      if (fallback) {
        return res.json({ content: fallback });
      }
      return res.status(500).json({
        error: "OpenAI API key not configured. Add OPENAI_API_KEY to api/.env for full AI support. Try: recursion, photosynthesis, coding, work, algorithm, array, variable, function.",
      });
    }

    const openai = new OpenAI({ apiKey });
    const systemContent = simplifyMode
      ? `${SYSTEM_PROMPT} The student enabled "Explain Like I'm 10" - use very simple language, fun analogies, and everyday examples.`
      : SYSTEM_PROMPT;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemContent },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "I couldn't generate a response.";
    res.json({ content: reply });
  } catch (error) {
    console.error("AI Chat error:", error);
    res.status(500).json({ error: `AI request failed: ${error.message}` });
  }
});

export default router;

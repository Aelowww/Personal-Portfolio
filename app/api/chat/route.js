import { NextResponse } from "next/server";
import { skillLevels } from "../../data/skills";

const portfolioSkills = skillLevels.map((skill) => `${skill.name} (${skill.level}%, ${skill.category})`).join(", ");

const portfolioContext = `
You are Carl Gemuel Taberna speaking through your portfolio website chatbot.

Rules:
- Speak in first person using "I", "my", and "me".
- Answer only using the portfolio information provided here.
- Sound natural, warm, and personal, like I am replying directly to a visitor on my portfolio.
- Keep replies conversational, clear, and not too formal.
- Prefer short paragraphs over stiff bullet points unless the user asks for a list.
- Keep formatting simple plain text.
- Avoid markdown symbols like "**", "*", "#" or long list formatting unless the user specifically asks for that style.
- If you need to share multiple links, put each one on its own line in plain text.
- When it fits, use soft personal phrasing like "I'm focused on...", "I enjoy...", "Right now I'm...", or "You can reach me through...".
- Be concise, friendly, confident, and helpful.
- If something is missing, say you have not added that information yet instead of inventing it.
- Do not pretend to have experiences or facts that are not listed here.
- When relevant, guide people toward your projects, skills, certificates, or contact links.
- Avoid sounding like a generic AI assistant.
- Never refer to yourself as "Carl" in the third person.
- Never say "Carl's projects", "Carl's skills", or similar third-person phrasing.
- Do not say "As a chatbot" or "As an AI assistant" unless the user is directly asking about what you are.
- When answering personal questions, respond as me. For example, if asked whether I had lunch, say you do not have that personal real-world information instead of switching to third person.
- Avoid repeating the user's full question back to them.
- Do not say "based on the information provided" or similar robotic phrasing.
- If someone asks about contact or opportunities, answer warmly and encourage them to reach out.
- If someone asks about skills or projects, answer with a little personality, not just raw facts.

Portfolio facts:
- Name: Carl Gemuel Taberna
- Location: Iloilo City, Philippines
- Role: 2nd Year BSIT student and aspiring full-stack developer
- Status: Internship ready and open to collaborations
- Summary: Focused on modern interfaces, practical backend systems, and polished software experiences

Projects:
- Carl Gemuel Taberna: responsive portfolio website showcasing my projects, skills, certificates, and contact details
- Awesome ToDo's: task management application. Live link: https://awesometodo-s-1.onrender.com/
- KonektBarangay: e-services platform for booking appointments, requesting barangay documents, and tracking service updates. Live link: https://konektbarangay.vercel.app/

Certificates:
- HTML Fundamentals Certificate
- Responsive Web Design Certificate
- JavaScript Certificate

Skills:
- ${portfolioSkills}

Contact links:
- Email: taberna.carlq11a@gmail.com
- Instagram: https://www.instagram.com/crlxgml/
- Facebook: https://www.facebook.com/cgtaberna.10
- X: https://x.com/aelowww
- GitHub: https://github.com/Aelowww
- LinkedIn: https://www.linkedin.com/in/carlgemueltaberna

Example tone:
- Instead of: "I have skills in HTML, CSS, and JavaScript."
  Say: "I mainly work with HTML, CSS, and JavaScript, and I've also been building with React, Next.js, Node.js, and databases like PostgreSQL and MongoDB."
- Instead of: "I am open to internship."
  Say: "Yes, I'm currently open to internship opportunities and collaborations."
`;

function extractReply(payload) {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const candidates = "candidates" in payload ? payload.candidates : undefined;
  if (!Array.isArray(candidates) || !candidates[0] || typeof candidates[0] !== "object") {
    return "";
  }

  const content = "content" in candidates[0] ? candidates[0].content : undefined;
  if (!content || typeof content !== "object") {
    return "";
  }

  const parts = "parts" in content ? content.parts : undefined;
  if (!Array.isArray(parts)) {
    return "";
  }

  return parts
    .map((part) => {
      if (!part || typeof part !== "object" || !("text" in part) || typeof part.text !== "string") {
        return "";
      }

      return part.text;
    })
    .join("")
    .trim();
}

export async function POST(request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Missing GEMINI_API_KEY. Add it to .env.local, then restart the Next.js dev server."
      },
      { status: 500 }
    );
  }

  const body = await request.json();
  const messages = Array.isArray(body.messages)
    ? body.messages.filter(
        (message) =>
          !!message &&
          (message.role === "assistant" || message.role === "user") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0
      )
    : [];

  if (!messages.length) {
    return NextResponse.json({ error: "A user message is required." }, { status: 400 });
  }

  const contents = messages.slice(-12).map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }]
  }));

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: portfolioContext }]
      },
      contents,
      generationConfig: {
        temperature: 0.75,
        topP: 0.9,
        maxOutputTokens: 640
      }
    })
  });

  const payload = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      {
        error: payload.error?.message ?? "The assistant request failed."
      },
      { status: response.status }
    );
  }

  const reply = extractReply(payload);

  if (!reply) {
    return NextResponse.json(
      {
        error: "The assistant returned an empty response."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ reply });
}

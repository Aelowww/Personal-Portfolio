"use client";

import { useEffect, useRef, useState } from "react";

const suggestedPrompts = [
  "Tell me about your tech stack.",
  "What is Awesome ToDo's?",
  "Are you open to internship?",
  "How can I contact you?"
];

const initialMessages = [];

export default function CarlChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [isSending, setIsSending] = useState(false);
  const messagesRef = useRef(null);
  const showSuggestions = messages.length === 0;

  useEffect(() => {
    const element = messagesRef.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [isOpen, isSending, messages]);

  async function submitMessage(rawText) {
    const text = rawText.trim();

    if (!text || isSending) {
      return;
    }

    const nextUserMessage = { role: "user", content: text };
    const nextMessages = [...messages, nextUserMessage];

    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: nextMessages })
      });

      const data = await response.json();

      if (!response.ok || !data.reply) {
        throw new Error(data.error ?? "I couldn't generate a reply right now.");
      }

      setMessages((currentMessages) => [...currentMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : "I couldn't respond right now. Please try again in a moment.";

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: `I couldn't answer right now. ${fallbackMessage}`
        }
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    void submitMessage(input);
  }

  return (
    <div className={`chatbot-shell${isOpen ? " is-open" : ""}`}>
      {isOpen ? (
        <section className="chatbot-panel" aria-label="Carl portfolio assistant">
          <div className="chatbot-header">
            <div className="chatbot-profile">
              <img className="chatbot-avatar" src="/Portfolio-Photo/Portfolio%20Photo.jpg" alt="Carl Gemuel Taberna portrait" />
              <div>
                <h2>Carl Gemuel Taberna</h2>
              </div>
            </div>
            <button className="chatbot-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot">
              <span aria-hidden="true">x</span>
            </button>
          </div>

          <p className="chatbot-intro">
            Hi, I'm Carl. Ask me about my skills, projects, certificates, or how to get in touch.
          </p>

          {showSuggestions ? (
            <div className="chatbot-suggestions" aria-label="Suggested questions">
              {suggestedPrompts.map((prompt) => (
                <button key={prompt} className="chatbot-chip" type="button" onClick={() => void submitMessage(prompt)} disabled={isSending}>
                  {prompt}
                </button>
              ))}
            </div>
          ) : null}

          <div ref={messagesRef} className="chatbot-messages">
            {messages.map((message, index) => (
              <article key={`${message.role}-${index}-${message.content.slice(0, 24)}`} className={`chatbot-bubble ${message.role}`}>
                {message.content}
              </article>
            ))}

            {isSending ? (
              <article className="chatbot-bubble assistant chatbot-loading" aria-label="Carl is typing">
                <span />
                <span />
                <span />
              </article>
            ) : null}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              className="chatbot-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask Carl a question..."
              aria-label="Type your message"
              disabled={isSending}
            />
            <button className="chatbot-send" type="submit" disabled={isSending || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      ) : null}

      <button className="chatbot-toggle" type="button" onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? "Close Chat" : "Chat with Carl"}
      </button>
    </div>
  );
}

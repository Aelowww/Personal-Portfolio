import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import CarlChatbot from "./components/gemini-chatbot";
import "./globals.css";

const themeInitScript = `
  (function () {
    try {
      var stored = window.localStorage.getItem("theme");
      var theme = stored === "light" || stored === "dark"
        ? stored
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.style.colorScheme = theme;
    } catch (error) {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

export const metadata = {
  metadataBase: new URL("https://carldev.vercel.app"),
  title: {
    default: "Carl Gemuel Taberna",
    template: "%s | Carl Gemuel Taberna"
  },
  description: "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring full-stack developer based in Iloilo City, Philippines.",
  applicationName: "Carl Gemuel Taberna",
  authors: [{ name: "Carl Gemuel Taberna", url: "https://carldev.vercel.app" }],
  creator: "Carl Gemuel Taberna",
  publisher: "Carl Gemuel Taberna",
  keywords: [
    "Carl Gemuel Taberna",
    "Carl Taberna",
    "Carl Gemuel Taberna portfolio",
    "Iloilo developer",
    "BSIT student portfolio",
    "full-stack developer portfolio",
    "Next.js portfolio"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Carl Gemuel Taberna",
    description: "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring full-stack developer based in Iloilo City, Philippines.",
    url: "https://carldev.vercel.app",
    siteName: "Carl Gemuel Taberna",
    locale: "en_PH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Carl Gemuel Taberna",
    description: "Portfolio of Carl Gemuel Taberna, a BSIT student and aspiring full-stack developer based in Iloilo City, Philippines."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
        <CarlChatbot />
        <Analytics />
      </body>
    </html>
  );
}

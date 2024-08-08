import localfont from "@next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const acorn = localfont({
  src: "../myfonts/acorn-8.ttf",
  variable: "-font-acorn",
});

export const metadata = {
  title: "Miuru Abeysiriwardana",
  description: "Frontend Developer",
};

export const currentBg =
  "bg-gradient-to-b from-[#ddf2d1] from-10% via-[#cdebc5] via-30% to-[#f6f6db] to-90% ...";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${acorn.className} ${currentBg}`}
      >
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/c/cc/Circle-icons-dev.svg"
          sizes="any"
        />

        <Navbar />
        <main className="flex-grow">
          {children}
          <script
            defer
            src="https://app.fastbots.ai/embed.js"
            data-bot-id={process.env.MIURU_BOT_ID}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import localfont from "@next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miuru Abeysiriwardana",
  description: "Frontend Developer",
};

export const currentBg =
  "bg-gradient-to-b from-[#ddf2d1] from-10% via-[#cdebc5] via-30% to-[#f6f6db] to-90% ...";

const acorn = localfont({ src: "../myfonts/acorn-7.ttf" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${acorn.className} ${currentBg}`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

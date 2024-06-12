import Resume from "@/components/Resume";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col max-w-2xl items-center gap-4">
        <p className="text-8xl font-bold">Hi. I'm Miuru.</p>
        <p> Frontend Developer | NLP Enthusiast</p>
        <p className="text-center">
          Hey there! 👋 Welcome to my portfolio. I'm a Frontend Developer
          passionate about web development, mobile apps and Natural Language
          Processing (NLP). Glad you're here!
        </p>
        <Resume />
      </div>
    </main>
  );
}

import Resume from "@/components/Resume";
import Service from "@/components/Service";
import SubHeadlineHomePage from "@/components/ui/SubHeadlineHomePage";
import localfont from "@next/font/local";
import Link from "next/link";

const ttCommins = localfont({
  src: "../myfonts/TTCommonsLight.otf",
  variable: "-font-ttCommins",
});

const acornRegular = localfont({
  src: "../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12 animate-flyIn">
      <div className="flex flex-col max-w-7xl sm:max-w-4xl items-center gap-24">
        <div className="hidden sm:inline-block" />
        <div className="flex flex-col items-center gap-4">
          <p className="text-4xl sm:text-9xl text-[#2A5F48]">Hi. I'm Miuru.</p>
          {/* <p className={`text-xl sm:text-5xl ${acornRegular.className}`}>
            Frontend Developer
          </p> */}
          <SubHeadlineHomePage />
        </div>
        <p
          className={`text-center max-w-xl text-xl sm:text-2xl -mt-12 ${ttCommins.className}`}
        >
          Hey there! 👋 Welcome to my portfolio. I'm a Frontend Developer
          passionate about web development, mobile apps and Natural Language
          Processing (NLP). Glad you're here!
        </p>
        <Resume />
      </div>
      {/* Services Section */}
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-4xl sm:text-9xl text-[#2A5F48]">Services.</p>
          <p className={`text-xl sm:text-2xl ${ttCommins.className}`}>
            Take a look at the services I offer, and if you don't find what
            you're looking for, feel free to reach out
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12">
          <Link href={"/web-development"}>
            <Service
              title="Web Development"
              bgColor="bg-[#E8B79C]"
              link="https://lh3.googleusercontent.com/pw/AP1GczPHAYOOmgpVVU2el1pYFY2fV8JABJckjMWtz0Hx5RwA1leHsZl3m2mih9GyiI9Kuz2e4GZwZPNBhEOMsYRtAQLGUQktd856xd5fT_5Pr1aiUtkVh3L9=w2400"
            />
          </Link>
          <Link href={"/mobile-development"}>
            <Service
              title="Mobile Development"
              bgColor="bg-[#BDDFFA]"
              link="https://lh3.googleusercontent.com/pw/AP1GczONOVb5-cJcbd95JSqNXo62vv0XYr2GsU-PwfdDYz_l6e4Z42jriTcwCIqVfcpHZLNVjBowEfAsE-IP6lusJkotFq3p3lyMn4ki_SP1XieQWzDBcrIu=w2400"
            />
          </Link>
        </div>
      </div>

      {/* Skills Section */}
    </main>
  );
}

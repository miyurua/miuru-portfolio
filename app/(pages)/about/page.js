import TimelineCard from "@/components/TimelineCard";
import Image from "next/image";
import Link from "next/link";
import localfont from "@next/font/local";

const ttCommins = localfont({
  src: "../../../myfonts/TTCommonsLight.otf",
  variable: "-font-ttCommins",
});

const acornRegular = localfont({
  src: "../../../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-24">
        <div className="hidden sm:inline-block" />
        <div className="flex flex-col items-center gap-3 sm:gap-5 animate-flyIn">
          {/* Add animation class */}
          <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">
            I'm Miuru.
          </p>
          <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">
            A Developer.
          </p>

          <div className="flex flex-col sm:flex-row sm:gap-12 items-center">
            <Image
              src={"https://avatars.githubusercontent.com/u/55921070?v=4"}
              width={300}
              height={300}
              className="rounded-t-full"
            />
            <div className="flex flex-col gap-6 max-w-xl">
              <div />
              <p
                className={`text-xl sm:text-6xl font-extrabold ${acornRegular.className}`}
              >
                I'm a Frontend Developer from Colombo, Sri Lanka
              </p>
              <p className={`text-xl sm:text-2xl ${ttCommins.className}`}>
                I've been honing my skills and creating engaging web experiences
                for the past 2 years. My journey in frontend development has
                allowed me to work with various modern technologies and
                frameworks, and I am always excited to take on new challenges
                and learn new things.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="flex flex-col gap-2 animate-flyIn">
        <div className="gap-12 flex animate-flyIn">
          <div />
          <TimelineCard
            jobTitle="Freelancer"
            company={"~"}
            timespan={"2023 - Present"}
          />
        </div>
        <TimelineCard
          jobTitle="Software Engineer Intern"
          company={"Techlabs Global"}
          timespan={"2022 - 2023"}
        />
      </div>
      {/* Images section */}
      <div className="flex flex-row gap-6">
        <div className="relative group cursor-pointer">
          <Link
            href={
              "https://unsplash.com/photos/aerial-view-of-trees-and-ocean-CKEmZAw0Z8c"
            }
            target="_blank"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1552055569-d54ae89a11b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={700}
              height={200}
              className="rounded-xl"
            />
            <div className="absolute bottom-3 left-3 p-2 bg-slate-300 rounded-xl bg-opacity-75 text-white text-sm hidden group-hover:block">
              Lahugala, Sri lanka
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link
            href={
              "https://unsplash.com/photos/photography-of-people-near-street-during-daytime-8weolGgaa9w"
            }
            target="_blank"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1569669568849-39a2939a4b65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={350}
              height={200}
              className="rounded-xl"
            />
            <div className="absolute bottom-3 left-3 p-2 bg-slate-300 rounded-xl bg-opacity-75 text-white text-sm hidden group-hover:block">
              Colombo, Sri lanka
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;

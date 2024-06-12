import TimelineCard from "@/components/TimelineCard";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12">
      <div className="flex flex-col max-w-8xl sm:max-w-5xl items-center gap-24">
        <div className="hidden sm:inline-block" />
        <div className="flex flex-col items-center gap-12 animate-flyIn">
          {/* Add animation class */}
          <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">
            I'm Miuru.
          </p>
          <div className="flex flex-col sm:flex-row sm:gap-12 items-center">
            <Image
              src={"https://avatars.githubusercontent.com/u/55921070?v=4"}
              width={300}
              height={300}
              className="rounded-t-full"
            />
            <div className="flex flex-col gap-6">
              <div />
              <p className="text-xl sm:text-6xl font-extrabold">
                I'm a Frontend Developer from Colombo, Sri Lanka
              </p>
              <p className=" text-sm sm:text-xl">
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
    </main>
  );
};

export default About;

import localfont from "@next/font/local";
import { webDevelopmentWorkflow } from "../../../info/workflows.js";
import StepperItem from "@/components/StepperItem.jsx";

const ttCommins = localfont({
  src: "../../../myfonts/TTCommonsLight.otf",
  variable: "-font-ttCommins",
});

const acornRegular = localfont({
  src: "../../../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

const page = () => {
  return (
    <main className="flex flex-col max-w-xs mx-auto animate-flyIn sm:max-w-7xl gap-12">
      <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">
        Web Development.
      </p>
      <div
        className="flex items-center w-full bg-[#F5EDE5]"
        style={{ borderRadius: "4rem" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 p-10  mx-auto gap-10">
          {webDevelopmentWorkflow.steps.map((step) => (
            <StepperItem
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;

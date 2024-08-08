import React from "react";
import localfont from "@next/font/local";

const acornRegular = localfont({
  src: "../myfonts/acorn-8.ttf",
  variable: "-font-acorn",
});

const ttCommins = localfont({
  src: "../myfonts/TTCommonsLight.otf",
  variable: "-font-ttCommins",
});

const StepperItem = ({ step, title, description }) => {
  return (
    <main className="flex flex-col max-w-md items-center">
      <div className="flex flex-col p-4 gap-5">
        <p className="text-[#2A5F48] opacity-50 text-xl sm:text-4xl">{step}</p>
        <p
          className={`text-[#2A5F48] text-xl sm:text-4xl ${acornRegular.className}`}
        >
          {title}
        </p>
        <p className={`${ttCommins.className} text-xl sm:text-2xl`}>
          {description}
        </p>
      </div>
    </main>
  );
};

export default StepperItem;

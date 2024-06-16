import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_Sans = Nunito_Sans({ subsets: ["latin"], weight: ["300"] });

const TimelineCard = ({ jobTitle, timespan, company }) => {
  return (
    <main className="w-[300px] sm:w-[400px] border p-6 rounded-full flex gap-6 bg-[#D095E5] text-white justify-between sm:hover:scale-105 duration-300">
      <div className="flex flex-col">
        <p className="text-xs sm:text-lg">{jobTitle}</p>
        <p className={`text-xs sm:text-sm ${nunito_Sans.className}`}>
          {company}
        </p>
      </div>
      <div className={`${nunito_Sans.className}`}>{timespan}</div>
    </main>
  );
};

export default TimelineCard;

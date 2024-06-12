import React from "react";

const TimelineCard = ({ jobTitle, timespan, company }) => {
  return (
    <main className="w-[300px] sm:w-[400px] border p-6 rounded-full flex gap-6 bg-[#D095E5] text-white justify-between sm:hover:scale-105 duration-300">
      <div className="flex flex-col">
        <p className="text-xs sm:text-lg">{jobTitle}</p>
        <p className="text-xs sm:text-sm">{company}</p>
      </div>
      <div>{timespan}</div>
    </main>
  );
};

export default TimelineCard;

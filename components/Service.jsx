import Image from "next/image";
import localfont from "@next/font/local";

const acornRegular = localfont({
  src: "../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

const Service = ({ link, bgColor, title }) => {
  return (
    <main
      className={
        `flex flex-col sm:flex-row justify-between w-full rounded-[50px] shadow-lg px-10 max-w-2xl hover:scale-105 transition-all duration-500 ` +
        bgColor
      }
    >
      <div className="flex flex-col pt-6">
        <p
          className={`text-end text-lg sm:text-3xl -mr-3 ${acornRegular.className}`}
        >
          {title}
        </p>
        <Image src={link} height={400} width={400} />
      </div>
    </main>
  );
};

export default Service;

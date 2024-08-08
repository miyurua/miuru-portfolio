import Link from "next/link";
import localfont from "@next/font/local";

const acornRegular = localfont({
  src: "../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

const Footer = () => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start sm:justify-between w-screen sm:w-2/5 mx-auto gap-10 text-xs sm:text-lg p-6 ${acornRegular.className}`}
    >
      <div className="flex flex-row  gap-2 text-green-800">
        <p>© 2024</p>
        <p>Miuru Abeysiriwardana</p>
        <p>• Colombo</p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col  gap-3 items-center sm:items-start">
          <p className="text-green-800 text-semibold">Contact Me</p>
          <ul className="text-green-700 font-light text-xs sm:text-sm gap-3 flex flex-row sm:flex-col ">
            <Link href={"https://github.com/miyurua"} target="_blank">
              <li>Github</li>
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/miuru-abeysiriwardana-92200a197/"
              }
              target="_blank"
            >
              <li>LinkedIn</li>
            </Link>
            <Link
              href="https://www.figma.com/files/team/1330058144794469486/project/185154402/Team-project?fuid=1330058140377571682"
              target="_blank"
            >
              <li>Figma</li>
            </Link>
          </ul>
        </div>
        <div className="sm:flex flex-col gap-3 items-center hidden sm:items-start">
          <p className="text-green-800 text-semibold">Other</p>
          <ul className="text-green-700 font-light text-xs sm:text-sm gap-3 flex flex-row sm:flex-col ">
            <Link
              href={
                "https://www.dl.dropboxusercontent.com/scl/fi/s6u9l668q5chgcdhzo40d/Miuru-Abeysiriwardana.pdf?rlkey=fmt1jf8e87guux1xn39d5uoei&st=ax8d6e1a&dl=0"
              }
              target="_blank"
            >
              <li>CV</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

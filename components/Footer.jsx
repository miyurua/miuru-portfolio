import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between w-screen sm:w-1/3 mx-auto gap-10 text-xs sm:text-lg p-6">
      <div className="flex flex-row  gap-2 text-green-800">
        <p>© 2024</p>
        <p>Miuru Abeysiriwardana</p>
        <p>• Colombo</p>
      </div>
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
    </div>
  );
};

export default Footer;

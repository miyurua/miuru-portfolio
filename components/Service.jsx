import Image from "next/image";

const Service = ({ link, bgColor, title }) => {
  return (
    <main
      className={
        `flex flex-col sm:flex-row justify-between w-full rounded-xl shadow-lg px-10 max-w-2xl hover:scale-105 transition-all duration-500 ` +
        bgColor
      }
    >
      <div className="flex flex-col pt-6">
        <p className="text-end text-lg sm:text-3xl -mr-5">{title}</p>
        <Image src={link} height={400} width={400} />
      </div>
    </main>
  );
};

export default Service;

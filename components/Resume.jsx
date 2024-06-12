import Image from "next/image";

const Resume = () => {
  return (
    <main className="flex flex-row justify-between w-full rounded-xl shadow-lg bg-[#A2DCD5] px-10 max-w-lg hover:scale-105 transition-all duration-500">
      <div className="flex">
        <button className="p-3 px-6 border rounded-full mx-auto my-auto bg-[#2A5F48] text-white text-xl hover:translate-x-[-2px] hover:translate-y-[-2px] duration-500 hover:shadow-[3px_3px_0px_0px_rgba(42,95,72)]">
          Résumé
        </button>
      </div>
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AP1GczNtSHJdlYRL7_cdSPrJLXAMfV0Q4xd58MDc2SwjQQndux-YV2i7YzH1T6Z1YJ9O-TMFdA-fzV9Qf3e917OfOF9FNmpa75oQ7ZLldBfYQzeKd5JdpkLr=w2400"
          height={300}
          width={300}
        />
      </div>
    </main>
  );
};

export default Resume;

import Image from "next/image";
import Link from "next/link";

const Resume = () => {
  return (
    <main className="flex flex-col sm:flex-row justify-between w-full rounded-[50px] shadow-lg bg-[#A2DCD5] px-10 max-w-2xl hover:scale-105 transition-all duration-500">
      <div className="flex pt-3">
        <Link
          href={
            "https://www.dl.dropboxusercontent.com/scl/fi/s6u9l668q5chgcdhzo40d/Miuru-Abeysiriwardana.pdf?rlkey=fmt1jf8e87guux1xn39d5uoei&st=ax8d6e1a&dl=1"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-6 px-6 sm:px-9 border rounded-[50px] mx-auto my-auto bg-[#2A5F48] text-white text-md sm:text-2xl hover:translate-x-[-2px] hover:translate-y-[-2px] duration-500 hover:shadow-[3px_3px_0px_0px_rgba(42,95,72)]"
        >
          <button>Resumé</button>
        </Link>
      </div>
      <div>
        <Image
          src="https://lh3.googleusercontent.com/pw/AP1GczNtSHJdlYRL7_cdSPrJLXAMfV0Q4xd58MDc2SwjQQndux-YV2i7YzH1T6Z1YJ9O-TMFdA-fzV9Qf3e917OfOF9FNmpa75oQ7ZLldBfYQzeKd5JdpkLr=w2400"
          height={400}
          width={400}
        />
      </div>
    </main>
  );
};

export default Resume;

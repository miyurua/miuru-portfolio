"use client";

import Link from "next/link";
import { RiCodeView } from "react-icons/ri";
import { usePathname } from "next/navigation";
import localfont from "@next/font/local";

const acornRegular = localfont({
  src: "../myfonts/acorn-7.ttf",
  variable: "-font-acorn",
});

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`flex flex-row items-center justify-between max-w-screen p-6 sm:text-3xl text:lg ${acornRegular.className}`}
    >
      <div>
        <Link href={"/"}>
          <p>@miyurua</p>
        </Link>
      </div>
      <div className={`flex flex-row gap-2 sm:gap-6`}>
        <Link
          href={"/projects"}
          className={`p-2 sm:p-3 ${
            pathname === "/projects"
              ? "bg-[#F4EEE6] border rounded-full duration-600"
              : ""
          }`}
        >
          <p className="flex flex-row gap-1 items-center">
            Work <RiCodeView className="border-2 border-slate-300 rounded-md" />
          </p>
        </Link>
        <Link
          href={"/about"}
          className={`p-2 sm:p-3 ${
            pathname === "/about"
              ? "bg-[#F4EEE6] border rounded-full duration-600"
              : ""
          }`}
        >
          <p>About</p>
        </Link>
        <Link
          href={"/contact"}
          className={`p-2 sm:p-3 ${
            pathname === "/contact"
              ? "bg-[#F4EEE6] border rounded-full duration-600"
              : ""
          }`}
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

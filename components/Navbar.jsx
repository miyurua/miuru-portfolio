import Link from "next/link";
import { RiCodeView } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between max-w-screen p-6 sm:text-3xl text:lg">
      <div>
        <Link href={"/"}>
          <p>@miyurua</p>
        </Link>
      </div>
      <div className="flex flex-row gap-6">
        <Link href={"/projects"}>
          <p className="flex flex-row gap-1 items-center">
            Work <RiCodeView className="border-2 border-slate-300 rounded-md" />
          </p>
        </Link>
        <Link href={"/about"}>
          <p>About</p>
        </Link>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;

// /app/components/ProjectInfoCard.js

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

const ProjectInfoCard = ({ project }) => {
  const {
    title,
    collaboratorName,
    techstack,
    exerpt,
    coverImage,
    content,
    paperLink,
    submissionLink,
    github,

    background = "bg-[#2A5F48] text-white",
  } = project.fields;

  return (
    <main
      className={`border-2 text-sm sm:text-lg flex flex-col rounded-t-[50px] max-w-xs sm:max-w-4xl mx-auto relative group hover:opacity-75 duration-500 ${background} animate-flyIn`}
    >
      <div className="p-12 flex flex-col gap-2">
        <p className="text-2xl sm:text-4xl font-bold">{title}</p>
        <p className="text-xs sm:text-lg">
          Collaborator(s) - {collaboratorName}
        </p>
        <p className="text-xs sm:text-lg">Techstack - {techstack}</p>
        <p className="text-xs sm:text-lg">{exerpt}</p>
      </div>
      <img src={coverImage.fields.file.url} className="mx-auto" />
      <div className="absolute inset-0 flex justify-center items-center p-2">
        <div className=" text-white text-sm hidden group-hover:flex gap-2 group-hover:animate-flyIn z-10">
          {submissionLink && (
            <Link
              href={submissionLink}
              target="_blank"
              className="bg-black rounded-xl"
            >
              <FaLink className="text-4xl m-2" />
            </Link>
          )}
          <Link href={github} target="_blank" className="bg-black rounded-xl">
            <FaGithub className="text-4xl m-2" />
          </Link>
          {paperLink && (
            <Link
              href={paperLink}
              target="_blank"
              className="bg-black rounded-xl"
            >
              <SiGoogledocs className="text-4xl m-2" />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectInfoCard;

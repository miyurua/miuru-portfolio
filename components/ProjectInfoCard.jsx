// /app/components/ProjectInfoCard.js

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const ProjectInfoCard = ({ project }) => {
  const {
    title,
    collaboratorName,
    techstack,
    exerpt,
    coverImage,
    content,
    github,
    background = "bg-[#2A5F48] text-white",
  } = project.fields;

  return (
    <main
      className={`border-2 text-sm sm:text-lg flex flex-col rounded-t-[50px] max-w-xs sm:max-w-4xl mx-auto relative group hover:opacity-75 duration-500 ${background} animate-flyIn`}
    >
      <Link href={github} target="_blank">
        <div className="p-12 flex flex-col gap-2">
          <p className="text-4xl font-bold">{title}</p>
          <p className="text-xs sm:text-lg">
            Collaborator(s) - {collaboratorName}
          </p>
          <p className="text-xs sm:text-lg">Techstack - {techstack}</p>
          <p className="text-xs sm:text-lg">{exerpt}</p>
        </div>
        <img src={coverImage.fields.file.url} className="mx-auto" />
        <div className="absolute inset-0 flex justify-center items-center p-2">
          <div className="bg-black rounded-xl text-white text-sm hidden group-hover:block group-hover:animate-flyIn z-10">
            <FaGithub className="text-4xl m-2" />
          </div>
        </div>
      </Link>
    </main>
  );
};

export default ProjectInfoCard;

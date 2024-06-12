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
    background,
  } = project.fields;

  return (
    <main className="border-2 flex flex-col text-white bg-[#2A5F48] rounded-xl max-w-4xl mx-auto relative group hover:opacity-75">
      <Link href={github} target="_blank">
        <div className="p-12">
          <p className="text-3xl">{title}</p>
          <p>Collaborator(s) - {collaboratorName}</p>
          <p>Techstack - {techstack}</p>
          <p>{exerpt}</p>
        </div>
        <img
          src={coverImage.fields.file.url}
          className="rounded-b-xl mx-auto"
        />
        <div className="absolute left-1/2 bottom-1/2 p-2 bg-black rounded-xl text-white text-sm hidden group-hover:block z-10">
          <FaGithub className="text-4xl" />
        </div>
      </Link>
    </main>
  );
};

export default ProjectInfoCard;

// /app/components/ProjectInfoCard.js

import Image from "next/image";

const ProjectInfoCard = ({ project }) => {
  const { title, collaboratorName, techstack, exerpt, coverImage, content } =
    project.fields;

  return (
    <main className="border-2 flex flex-col text-white bg-[#2A5F48] rounded-xl max-w-4xl mx-auto">
      <div className="p-12">
        <p className="text-3xl">{title}</p>
        <p>Collaborator(s) - {collaboratorName}</p>
        <p>Techstack - {techstack}</p>
        <p>exerpt - {exerpt}</p>
      </div>
      <img src={coverImage.fields.file.url} className="rounded-b-xl mx-auto" />
    </main>
  );
};

export default ProjectInfoCard;

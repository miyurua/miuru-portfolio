import ProjectInfoCard from "@/components/ProjectInfoCard";
import { client } from "@/lib/contentful/client";

const fetchProjects = async () => {
  const projects = await client.getEntries({
    content_type: "portfolioProject",
  });
  return projects;
};

export default async function ProjectsPage() {
  const data = await fetchProjects();

  return (
    <main className="flex flex-col max-w-xs sm:max-w-8xl mx-auto animate-flyIn sm:max-w-5xl">
      <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">Projects.</p>

      <div>
        {data.items.map((project) => {
          return (
            <div className="pt-12">
              <ProjectInfoCard key={project.sys.id} project={project} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

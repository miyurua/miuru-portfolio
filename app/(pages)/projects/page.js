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
    <main className="flex flex-col max-w-6xl mx-auto">
      <p className="text-4xl sm:text-9xl">Projects.</p>

      <div>
        {data.items.map((project) => {
          return (
            <div>
              <ProjectInfoCard key={project.sys.id} project={project} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

// src/app/components/ProjectList.tsx
import Link from "next/link";
import { Project } from "../types";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/project/${project.id}`}
          className="bg-white rounded shadow p-6 hover:shadow-lg transition duration-200 transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">
            {project.name}
          </h2>
          <p className="text-gray-600">{project.description}</p>
        </Link>
      ))}
    </div>
  );
}

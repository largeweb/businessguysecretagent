// src/app/components/ProjectCard.tsx
import Link from "next/link";
import { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">
        {project.name}
      </h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between mb-4">
        <span className="text-gray-600">Agents: {project.agents.length}</span>
        <span className="text-gray-600">
          Interactions: {project.interactions.length}
        </span>
      </div>
      <div className="flex space-x-4">
        <Link
          href={`/project/${project.id}`}
          className="px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          View Details
        </Link>
        <Link
          href={`/project/${project.id}/interact`}
          className="px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Interact
        </Link>
      </div>
    </div>
  );
}

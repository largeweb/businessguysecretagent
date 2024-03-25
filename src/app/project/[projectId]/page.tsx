// src/app/project/[projectId]/page.tsx
import { auth } from "../../lib/auth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AgentList from "../../components/AgentList";
import InteractionList from "../../components/InteractionList";
import { Project } from "../../types";
import Link from "next/link";

interface ProjectDetailsPageProps {
  params: {
    projectId: string;
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const session = await auth();
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Please sign in to view this page.</p>
        <a href="/api/auth/signin" className="text-blue-600 underline">
          Sign In
        </a>
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/projects/${params.projectId}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const project: Project = await res.json();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
          {project.name}
        </h1>
        <p className="text-xl text-black text-center mb-8">
          {project.description}
        </p>
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            About the Project
          </h2>
          <p className="text-gray-800 mb-4">{project.aboutTheProject}</p>
          <Link
            href={`/project/${project.id}/interact`}
            className="inline-block px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Interact with Project
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Agents</h2>
            <AgentList agents={project.agents} projectId={project.id} />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Interactions</h2>
            <InteractionList
              interactions={project.interactions}
              projectId={project.id}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

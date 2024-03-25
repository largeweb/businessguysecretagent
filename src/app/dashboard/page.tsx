// src/app/dashboard/page.tsx
import { auth } from "../lib/auth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types";

export default async function DashboardPage() {
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
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const projects: Project[] = await res.json();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

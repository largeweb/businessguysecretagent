// src/app/project/[projectId]/interact/page.tsx
import { auth } from "../../../lib/auth";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Project } from "../../../types";

interface UserInteractionPageProps {
  params: {
    projectId: string;
  };
}

export default async function UserInteractionPage({
  params,
}: UserInteractionPageProps) {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-yellow-400 text-center">
          Interact with {project.name}
        </h1>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">
            Give a Command
          </h2>
          <p className="text-gray-800 mb-4">
            Enter a command below to interact with the project. The leadership
            agent will delegate tasks to other agents and coordinate their
            efforts to achieve the desired outcome.
          </p>
          <form>
            <textarea
              className="w-full px-3 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={4}
              placeholder="Enter your command..."
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-4 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              Submit Command
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

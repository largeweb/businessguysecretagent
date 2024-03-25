// src/app/project/[projectId]/agents/[agentId]/page.tsx
import { auth } from "../../../../lib/auth";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import AgentMonologue from "../../../../components/AgentMonologue";
import { Agent } from "../../../../types";

interface AgentDetailsPageProps {
  params: {
    projectId: string;
    agentId: string;
  };
}

export default async function AgentDetailsPage({
  params,
}: AgentDetailsPageProps) {
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
  const res = await fetch(
    `${baseUrl}/api/projects/${params.projectId}/agents/${params.agentId}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const agent: Agent = await res.json();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-500 via-teal-500 to-blue-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          {agent.name}
        </h1>
        <AgentMonologue monologue={agent.monologue} />
      </main>
      <Footer />
    </div>
  );
}

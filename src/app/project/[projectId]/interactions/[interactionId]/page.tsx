// src/app/project/[projectId]/interactions/[interactionId]/page.tsx
import { auth } from "../../../../lib/auth";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import InteractionDetails from "../../../../components/InteractionDetails";
import { Interaction } from "../../../../types";

export const runtime = "edge";

interface InteractionDetailsPageProps {
  params: {
    projectId: string;
    interactionId: string;
  };
}

export default async function InteractionDetailsPage({
  params,
}: InteractionDetailsPageProps) {
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
    `${baseUrl}/api/projects/${params.projectId}/interactions/${params.interactionId}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const interaction: Interaction = await res.json();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Interaction Details
        </h1>
        <InteractionDetails interaction={interaction} />
      </main>
      <Footer />
    </div>
  );
}

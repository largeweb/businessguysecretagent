// src/app/api/projects/[projectId]/interactions/[interactionId]/route.ts
import { projects } from "../../../../../lib/data";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string; interactionId: string } }
) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

  const interaction = project.interactions.find((i) => i.id === params.interactionId);

  if (!interaction) {
    return new Response("Interaction not found", { status: 404 });
  }

  return new Response(JSON.stringify(interaction), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
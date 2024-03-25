// src/app/api/projects/[projectId]/agents/[agentId]/route.ts
import { projects } from "../../../../../lib/data";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { projectId: string; agentId: string } }
) {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

  const agent = project.agents.find((a) => a.id === params.agentId);

  if (!agent) {
    return new Response("Agent not found", { status: 404 });
  }

  return new Response(JSON.stringify(agent), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
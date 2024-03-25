// src/app/components/AgentList.tsx
import Link from "next/link";
import { Agent } from "../types";

export default function AgentList({
  agents,
  projectId,
}: {
  agents: Agent[];
  projectId: string;
}) {
  return (
    <div className="space-y-4">
      {agents.map((agent) => (
        <Link
          key={agent.id}
          href={`/project/${projectId}/agents/${agent.id}`}
          className="block bg-white rounded shadow p-4 hover:shadow-lg transition duration-200"
        >
          <h3 className="text-xl font-bold text-blue-600">{agent.name}</h3>
          <p className="text-gray-600 mt-2">{agent.monologue.recentThoughts}</p>
        </Link>
      ))}
    </div>
  );
}

// src/app/components/InteractionList.tsx
import Link from "next/link";
import { Interaction } from "../types";

export default function InteractionList({
  interactions,
  projectId,
}: {
  interactions: Interaction[];
  projectId: string;
}) {
  return (
    <div className="space-y-4">
      {interactions.map((interaction) => (
        <Link
          key={interaction.id}
          href={`/project/${projectId}/interactions/${interaction.id}`}
          className="block bg-white rounded shadow p-4 hover:shadow-lg transition duration-200"
        >
          <h3 className="text-xl font-bold text-green-600">
            {interaction.action}
          </h3>
          <p className="text-gray-600 mt-2">Agent: {interaction.agentId}</p>
          <p className="text-gray-600">Timestamp: {interaction.timestamp}</p>
        </Link>
      ))}
    </div>
  );
}

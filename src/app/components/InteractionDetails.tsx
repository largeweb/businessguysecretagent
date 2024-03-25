// src/app/components/InteractionDetails.tsx
import { Interaction } from "../types";

export default function InteractionDetails({
  interaction,
}: {
  interaction: Interaction;
}) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">
        Interaction: {interaction.action}
      </h2>
      <p className="text-gray-800 mb-4">
        <strong>Agent:</strong> {interaction.agentId}
      </p>
      <p className="text-gray-800">
        <strong>Timestamp:</strong> {interaction.timestamp}
      </p>
    </div>
  );
}

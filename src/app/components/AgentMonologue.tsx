// src/app/components/AgentMonologue.tsx
import { Agent } from "../types";

export default function AgentMonologue({
  monologue,
}: {
  monologue: Agent["monologue"];
}) {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Agent Monologue</h2>
      <p className="text-gray-800 mb-4">
        <strong>Recent Thoughts:</strong> {monologue.recentThoughts}
      </p>
      <p className="text-gray-800 mb-4">
        <strong>Short-term Goal:</strong> {monologue.shortTermGoal}
      </p>
      <p className="text-gray-800">
        <strong>Long-term Goal:</strong> {monologue.longTermGoal}
      </p>
    </div>
  );
}

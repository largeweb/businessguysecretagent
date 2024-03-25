// src/app/types.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  aboutTheProject: string;
  agents: Agent[];
  interactions: Interaction[];
}

export interface Agent {
  id: string;
  name: string;
  monologue: {
    recentThoughts: string;
    shortTermGoal: string;
    longTermGoal: string;
  };
}

export interface Interaction {
  id: string;
  agentId: string;
  action: string;
  timestamp: string;
}
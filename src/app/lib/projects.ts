// src/app/lib/projects.ts
import { Project } from "../types";

export async function getProjects(): Promise<Project[]> {
  // Simulating fetching projects from an API or database
  return [
    {
      id: "project1",
      name: "Customer Sentiment Analysis",
      description: "Analyze customer feedback and sentiment using AI agents.",
      agents: [],
      interactions: [],
      aboutTheProject: ""
    },
    {
      id: "project2",
      name: "Fraud Detection System",
      description: "Detect and prevent fraudulent activities using AI agents.",
      agents: [],
      interactions: [],
      aboutTheProject: ""
    },
    // ... more projects
  ];
}

export async function getProject(projectId: string): Promise<Project> {
  // Simulating fetching a specific project from an API or database
  const projects = await getProjects();
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    throw new Error(`Project with ID ${projectId} not found`);
  }
  return project;
}
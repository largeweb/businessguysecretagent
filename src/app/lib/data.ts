// src/app/lib/data.ts
export const projects = [
  {
    id: "project1",
    name: "Market Expansion Strategy",
    description: "Develop a strategic plan to expand into new markets and increase market share.",
    aboutTheProject: "This project aims to identify new market opportunities and develop a comprehensive strategy to expand the company's presence in those markets. The project will involve market research, competitor analysis, and the development of a strategic plan to guide the company's market expansion efforts.",
    agents: [
      {
        id: "agent1",
        name: "MarketResearchAgent",
        monologue: {
          recentThoughts: "I need to gather market data and analyze consumer trends.",
          shortTermGoal: "Identify potential target markets and assess their viability.",
          longTermGoal: "Develop a comprehensive market expansion strategy.",
        },
      },
      {
        id: "agent2",
        name: "CompetitorAnalysisAgent",
        monologue: {
          recentThoughts: "I should analyze our competitors' strengths and weaknesses.",
          shortTermGoal: "Identify key competitors and their market positioning.",
          longTermGoal: "Develop strategies to differentiate our offerings and gain a competitive edge.",
        },
      },
    ],
    interactions: [
      {
        id: "interaction1",
        agentId: "agent1",
        action: "conductMarketResearch",
        timestamp: "2023-06-12T10:00:00Z",
      },
      {
        id: "interaction2",
        agentId: "agent2",
        action: "analyzeCompetitors",
        timestamp: "2023-06-12T14:30:00Z",
      },
    ],
  },
  {
    id: "project2",
    name: "Product Innovation Pipeline",
    description: "Manage the ideation, development, and launch of innovative new products.",
    aboutTheProject: "This project focuses on creating a pipeline of innovative product ideas and bringing them to market. The project will involve brainstorming new product concepts, developing prototypes, and coordinating with cross-functional teams to launch new products successfully.",
    agents: [
      {
        id: "agent3",
        name: "IdeaGenerationAgent",
        monologue: {
          recentThoughts: "I need to brainstorm new product ideas based on customer needs.",
          shortTermGoal: "Generate a list of potential product concepts.",
          longTermGoal: "Identify the most promising ideas for further development.",
        },
      },
      {
        id: "agent4",
        name: "ProductDevelopmentAgent",
        monologue: {
          recentThoughts: "I should coordinate with the engineering team to develop prototypes.",
          shortTermGoal: "Create detailed product specifications and requirements.",
          longTermGoal: "Oversee the development process and ensure timely delivery.",
        },
      },
    ],
    interactions: [
      {
        id: "interaction3",
        agentId: "agent3",
        action: "generateProductIdeas",
        timestamp: "2023-06-13T09:15:00Z",
      },
      {
        id: "interaction4",
        agentId: "agent4",
        action: "developProductPrototype",
        timestamp: "2023-06-13T13:45:00Z",
      },
    ],
  },
];
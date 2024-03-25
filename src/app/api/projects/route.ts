// src/app/api/projects/route.ts
import { projects } from "../../lib/data";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify(projects), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
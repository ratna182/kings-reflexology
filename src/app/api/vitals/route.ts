import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (process.env.NODE_ENV === "development") {
      console.log("[vitals]", body);
    }
  } catch {
    // ignore malformed payloads
  }
  return new Response("ok", { status: 200 });
}

export const runtime = "edge";

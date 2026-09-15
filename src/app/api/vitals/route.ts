import { vitalsRateLimiter } from "@/lib/rate-limit";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const clientKey =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";
  const rateLimit = vitalsRateLimiter.check(clientKey);

  if (!rateLimit.allowed) {
    return new Response("Too Many Requests", {
      status: 429,
      headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
    });
  }

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

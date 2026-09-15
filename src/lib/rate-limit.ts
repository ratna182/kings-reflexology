export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

interface RateLimiterOptions {
  limit: number;
  windowMs: number;
}

export function createRateLimiter({ limit, windowMs }: RateLimiterOptions) {
  const requests = new Map<string, number[]>();

  return {
    check(key: string, now = Date.now()): RateLimitResult {
      const activeRequests = (requests.get(key) ?? []).filter(
        (timestamp) => now - timestamp < windowMs,
      );

      if (activeRequests.length >= limit) {
        const retryAfterMs = Math.max(
          0,
          windowMs - (now - activeRequests[0]),
        );
        return {
          allowed: false,
          remaining: 0,
          retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
        };
      }

      activeRequests.push(now);
      requests.set(key, activeRequests);
      return {
        allowed: true,
        remaining: limit - activeRequests.length,
        retryAfterSeconds: 0,
      };
    },
  };
}

// ponytail: process-local limiting; use a shared store when telemetry runs across many instances.
export const vitalsRateLimiter = createRateLimiter({
  limit: 30,
  windowMs: 60_000,
});

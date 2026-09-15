import { describe, expect, it } from "vitest";
import { createRateLimiter } from "../src/lib/rate-limit";

describe("createRateLimiter", () => {
  it("allows requests up to the limit and reports remaining capacity", () => {
    const limiter = createRateLimiter({ limit: 2, windowMs: 1000 });

    expect(limiter.check("client", 1000)).toEqual({
      allowed: true,
      remaining: 1,
      retryAfterSeconds: 0,
    });
    expect(limiter.check("client", 1100)).toEqual({
      allowed: true,
      remaining: 0,
      retryAfterSeconds: 0,
    });
  });

  it("rejects requests until the oldest request expires", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });

    expect(limiter.check("client", 1000).allowed).toBe(true);
    expect(limiter.check("client", 1500)).toEqual({
      allowed: false,
      remaining: 0,
      retryAfterSeconds: 1,
    });
    expect(limiter.check("client", 2000)).toEqual({
      allowed: true,
      remaining: 0,
      retryAfterSeconds: 0,
    });
  });

  it("tracks clients independently", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1000 });

    expect(limiter.check("first", 1000).allowed).toBe(true);
    expect(limiter.check("second", 1000).allowed).toBe(true);
  });
});

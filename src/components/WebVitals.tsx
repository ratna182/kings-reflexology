"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const body = JSON.stringify({ ...metric, path: window.location.pathname });

    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      const send = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      send?.("event", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        metric_id: metric.id,
        metric_rating: metric.rating,
        event_category: "Web Vitals",
        non_interaction: true,
      });
    }

    try {
      navigator.sendBeacon?.("/api/vitals", body);
    } catch {
      // endpoint reporting is best-effort
    }
  });

  return null;
}
export default function ServiceIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    massage: (
      <>
        <path d="M7.5 11V7.8a1.8 1.8 0 0 1 3.6 0v2.9" />
        <path d="M11.1 10.7V5.6a1.8 1.8 0 0 1 3.6 0v5.1" />
        <path d="M14.7 10.7V7.9a1.8 1.8 0 0 1 3.6 0v5.4c0 3.4-2.8 6.4-6.3 6.4h-.6c-2.3 0-4.3-1.2-5.4-3.1l-1.9-3.3a1.4 1.4 0 0 1 2.4-1.5l2.1 3" />
      </>
    ),
    reflexology: (
      <>
        <path d="M5.2 13.6c0-3.9 3-7 6.8-7s6.8 3.1 6.8 7c0 4.3-3 6.9-6.8 6.9s-6.8-2.6-6.8-6.9Z" />
        <circle cx="9.4" cy="7.2" r="1.1" />
        <circle cx="12" cy="6.7" r="1.1" />
        <circle cx="14.6" cy="7.2" r="1.1" />
        <path d="M12 13.6v.01" />
        <path d="M9.2 15.6v.01" />
        <path d="M14.8 15.6v.01" />
      </>
    ),
    bekam: (
      <>
        <path d="M7 9.5h10l-1.6 3.6c-.5 3.4-1.1 6.4-3.4 6.4s-2.9-3-3.4-6.4L7 9.5Z" />
        <path d="M8 6h8" />
        <circle cx="12" cy="12.2" r=".7" />
        <circle cx="10.4" cy="14.8" r=".6" />
        <circle cx="13.6" cy="14.8" r=".6" />
      </>
    ),
    "scrub-massage": (
      <>
        <path d="M12 4.5l1.6 4.1 4.1 1.6-4.1 1.6L12 15.9l-1.6-4.1-4.1-1.6 4.1-1.6L12 4.5Z" />
        <path d="M18.6 15.2l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" />
        <path d="M5.4 15.8l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
      </>
    ),
    "ear-candle": (
      <>
        <path d="M10.2 8.5h3.6l-.4 7.9c-.1 1.4-1 2.6-2.3 2.6s-2.2-1.2-2.3-2.6l-.4-7.9Z" />
        <path d="M12 3.5c1.1 1.5 2 2.7 2 3.9a2 2 0 1 1-4 0c0-1.2.9-2.4 2-3.9Z" />
        <path d="M8.8 18.5h6.4" />
      </>
    ),
    "totok-wajah": (
      <>
        <circle cx="12" cy="12.5" r="6.5" />
        <path d="M9.2 15.2c.8.7 1.8 1.1 2.8 1.1s2-.4 2.8-1.1" />
        <circle cx="9.7" cy="11.2" r=".6" />
        <circle cx="14.3" cy="11.2" r=".6" />
        <circle cx="10.2" cy="8.4" r=".7" />
        <circle cx="13.8" cy="8.4" r=".7" />
        <circle cx="9.2" cy="13.4" r=".6" />
        <circle cx="14.8" cy="13.4" r=".6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-6 w-6"}
      aria-hidden="true"
    >
      {paths[slug] ?? <circle cx="12" cy="12" r="7" />}
    </svg>
  );
}

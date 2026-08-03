export default function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.75L3.5 20.5l4.35-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9 9.5c.35 2.4 1.7 4.3 4 5.6.35-.7.55-1.15.75-1.7-1.05-.4-1.75-.75-2.2-1.5-.6.4-.95.6-1.35.45 1-1.5 1.6-2.6 1.4-3.9-.6.25-.9.4-1.25.35-.7-.05-1.35-.4-1.6-.85-.3-.55-.15-1.2.15-1.6" />
    </svg>
  );
}

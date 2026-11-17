type Props = { className?: string };

export default function EagleLogo({ className = "h-10 w-10" }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="eg-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00b4f0" />
          <stop offset="0.55" stopColor="#ec0f8c" />
          <stop offset="1" stopColor="#ffd60a" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#121726" />
      <path
        d="M10 26c8-2 15 0 20 6 1-9 7-16 17-18-3 4-4 8-3 12 4-2 8-2 11 0-5 2-8 5-10 9l-6 12-5-6-6 6-3-9c-6 1-11-1-15-6 4 1 8 0 11-2-4-1-8-2-11-4z"
        fill="url(#eg-wing)"
      />
      <circle cx="43" cy="22" r="1.8" fill="#0a0d16" />
    </svg>
  );
}

"use client";

import { cn } from "@/lib/utils";

type WatchBackgroundProps = {
  className?: string;
  isChatActive?: boolean;
};

export function WatchBackground({
  className,
  isChatActive = false,
}: WatchBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        isChatActive && "opacity-20",
        className
      )}
    >
      {/* Main abstract watch face - larger, more abstract */}
      <div className="absolute -right-32 top-1/4 -translate-y-1/2 opacity-30 md:-right-20 md:top-1/3">
        <svg
          className="text-foreground"
          fill="none"
          height="600"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 200 200"
          width="600"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract watch case - simplified circles */}
          <circle cx="100" cy="100" r="85" />
          <circle cx="100" cy="100" r="70" />
          
          {/* Minimal hour markers - just 4 key positions */}
          <circle cx="100" cy="20" r="2" fill="currentColor" />
          <circle cx="180" cy="100" r="2" fill="currentColor" />
          <circle cx="100" cy="180" r="2" fill="currentColor" />
          <circle cx="20" cy="100" r="2" fill="currentColor" />
          
          {/* Abstract hands - very minimal lines */}
          <line
            strokeWidth="2.5"
            x1="100"
            x2="120"
            y1="100"
            y2="70"
          />
          <line
            strokeWidth="2"
            x1="100"
            x2="80"
            y1="100"
            y2="50"
          />
          
          {/* Center dot */}
          <circle cx="100" cy="100" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Accent element 1: Abstract gear/cog - top left */}
      <div className="absolute -left-16 top-1/4 opacity-30 md:-left-8">
        <svg
          className="text-foreground"
          fill="none"
          height="200"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 100 100"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract gear shape */}
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="20" />
          {/* Gear teeth - minimal */}
          <line x1="50" x2="50" y1="10" y2="20" />
          <line x1="50" x2="50" y1="80" y2="90" />
          <line x1="10" x2="20" y1="50" y2="50" />
          <line x1="80" x2="90" y1="50" y2="50" />
        </svg>
      </div>

      {/* Accent element 2: Abstract time arc - bottom right */}
      <div className="absolute -bottom-20 -right-20 opacity-30 md:-bottom-10 md:-right-10">
        <svg
          className="text-foreground"
          fill="none"
          height="300"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 150 150"
          width="300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract arc representing time passage */}
          <path
            d="M 20 130 Q 75 20, 130 130"
            strokeWidth="1.5"
          />
          {/* Subtle dots along the arc */}
          <circle cx="40" cy="110" r="1.5" fill="currentColor" />
          <circle cx="75" cy="50" r="1.5" fill="currentColor" />
          <circle cx="110" cy="110" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Accent element 3: Minimal watch strap detail - center left */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-30 md:left-1/3">
        <svg
          className="text-foreground"
          fill="none"
          height="150"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          viewBox="0 0 80 80"
          width="150"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract strap/link pattern */}
          <rect height="60" rx="2" width="8" x="20" y="10" />
          <rect height="60" rx="2" width="8" x="35" y="10" />
          <rect height="60" rx="2" width="8" x="50" y="10" />
        </svg>
      </div>
    </div>
  );
}

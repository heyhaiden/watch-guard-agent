"use client";

import { cn } from "@/lib/utils";

type WatchIconProps = {
  className?: string;
  size?: number;
};

export function WatchIcon({ className, size = 32 }: WatchIconProps) {
  return (
    <svg
      className={cn("text-foreground", className)}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      viewBox="0 0 100 100"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer watch case - minimalist circle */}
      <circle cx="50" cy="50" r="42" />
      
      {/* Inner watch face circle */}
      <circle cx="50" cy="50" r="35" />
      
      {/* Hour markers - minimal dots at 12, 3, 6, 9 */}
      <circle cx="50" cy="15" r="1.5" fill="currentColor" />
      <circle cx="85" cy="50" r="1.5" fill="currentColor" />
      <circle cx="50" cy="85" r="1.5" fill="currentColor" />
      <circle cx="15" cy="50" r="1.5" fill="currentColor" />
      
      {/* Subtle hour markers at other positions */}
      <circle cx="50" cy="20" r="0.8" fill="currentColor" />
      <circle cx="80" cy="50" r="0.8" fill="currentColor" />
      <circle cx="50" cy="80" r="0.8" fill="currentColor" />
      <circle cx="20" cy="50" r="0.8" fill="currentColor" />
      
      {/* Watch hands - abstract, minimalist */}
      {/* Hour hand pointing to ~2 o'clock */}
      <line
        strokeWidth="2"
        x1="50"
        x2="58"
        y1="50"
        y2="38"
      />
      
      {/* Minute hand pointing to ~10 o'clock */}
      <line
        strokeWidth="1.5"
        x1="50"
        x2="42"
        y1="50"
        y2="30"
      />
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="2" fill="currentColor" />
      
      {/* Watch crown - subtle detail on the right */}
      <rect
        height="8"
        rx="1"
        width="3"
        x="90"
        y="46"
      />
      
      {/* Abstract strap/lug elements - minimalist lines */}
      <line
        strokeWidth="1.5"
        x1="50"
        x2="50"
        y1="8"
        y2="15"
      />
      <line
        strokeWidth="1.5"
        x1="50"
        x2="50"
        y1="85"
        y2="92"
      />
    </svg>
  );
}

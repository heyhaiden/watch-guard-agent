"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { WatchGuardVersion } from "@/lib/ai/prompts";

type VersionSelectorProps = {
  className?: string;
};

export function VersionSelector({ className }: VersionSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine current version based on pathname
  const currentVersion: WatchGuardVersion = pathname?.startsWith("/refined") ? "refined" : "mvp";

  const handleVersionChange = (newVersion: WatchGuardVersion) => {
    if (newVersion === currentVersion) {
      return; // Already on the correct page
    }

    if (newVersion === "refined") {
      router.push("/refined");
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-background p-1",
        className
      )}
    >
      <Button
        variant={currentVersion === "mvp" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleVersionChange("mvp")}
        className={cn(
          "flex-1 text-xs",
          currentVersion === "mvp" && "bg-primary text-primary-foreground"
        )}
      >
        MVP
      </Button>
      <Button
        variant={currentVersion === "refined" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleVersionChange("refined")}
        className={cn(
          "flex-1 text-xs",
          currentVersion === "refined" && "bg-primary text-primary-foreground"
        )}
      >
        Refined
      </Button>
    </div>
  );
}

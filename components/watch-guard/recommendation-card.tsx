"use client";

import { CheckCircle2Icon, XCircleIcon, AlertCircleIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type RecommendationType = "insure" | "self-insure" | "close-call";

type RecommendationCardProps = {
  type: RecommendationType;
  explanation: string;
  caveat?: string;
  className?: string;
};

export function RecommendationCard({
  type,
  explanation,
  caveat,
  className,
}: RecommendationCardProps) {
  const config = {
    insure: {
      title: "Insurance Likely Makes Sense",
      icon: CheckCircle2Icon,
      iconColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    "self-insure": {
      title: "You May Be Fine Self-Insuring",
      icon: XCircleIcon,
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    "close-call": {
      title: "It's a Close Call",
      icon: AlertCircleIcon,
      iconColor: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
  };

  const { title, icon: Icon, iconColor, bgColor, borderColor } = config[type];

  return (
    <Card
      className={cn(
        "border-2",
        bgColor,
        borderColor,
        className
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Icon className={cn("size-6", iconColor)} />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-base text-foreground">
          {explanation}
        </CardDescription>
        {caveat && (
          <p className="text-sm text-muted-foreground italic">{caveat}</p>
        )}
      </CardContent>
    </Card>
  );
}

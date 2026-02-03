"use client";

import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";
import { useWindowSize } from "usehooks-ts";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import { VersionSelector } from "@/components/watch-guard/version-selector";
import { PlusIcon } from "./icons";
import { useSidebar } from "./ui/sidebar";
import type { VisibilityType } from "./visibility-selector";

function PureChatHeader({
  chatId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { open } = useSidebar();

  const { width: windowWidth } = useWindowSize();

  // Determine which page to navigate to for "New Chat" based on current path
  const newChatPath = pathname?.startsWith("/refined") ? "/refined" : "/";

  return (
    <header className="sticky top-0 z-20 flex items-center gap-2 bg-transparent px-2 py-1.5 md:px-2">
      <SidebarToggle />

      {(!open || windowWidth < 768) && (
        <Button
          className="order-2 ml-auto h-8 px-2 md:order-1 md:ml-0 md:h-fit md:px-2"
          onClick={() => {
            router.push(newChatPath);
            router.refresh();
          }}
          variant="outline"
        >
          <PlusIcon />
          <span className="md:sr-only">New Chat</span>
        </Button>
      )}

      {!isReadonly && (
        <VersionSelector className="order-1 hidden md:order-2 md:flex" />
      )}
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
    prevProps.chatId === nextProps.chatId &&
    prevProps.selectedVisibilityType === nextProps.selectedVisibilityType &&
    prevProps.isReadonly === nextProps.isReadonly
  );
});

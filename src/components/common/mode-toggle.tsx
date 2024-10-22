"use client";

import dynamic from "next/dynamic";

const ModeToggleContent = dynamic(() => import("./mode-toggle-content"), {
  ssr: false,
});

export function ModeToggle() {
  return <ModeToggleContent />;
}

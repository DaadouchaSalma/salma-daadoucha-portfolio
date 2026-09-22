"use client";

import { useEffect, useRef } from "react";

/**
 * A single, page-wide cursor glow. Mount this once in the root layout
 * (not per-section) — it tracks the pointer across the whole viewport and
 * sits above every section's own background so the effect is continuous
 * as you scroll and move, without needing one instance per section.
 *
 * Pure CSS-variable updates on mousemove, no React state/re-renders.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      ref.current?.style.setProperty("--spot-x", `${event.clientX}px`);
      ref.current?.style.setProperty("--spot-y", `${event.clientY}px`);
    }

    function handlePointerLeave() {
      ref.current?.style.setProperty("--spot-y", "-9999px");
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 [background:radial-gradient(600px_circle_at_var(--spot-x,50%)_var(--spot-y,-9999px),rgba(74,108,181,0.12),transparent_65%)]"
    />
  );
}

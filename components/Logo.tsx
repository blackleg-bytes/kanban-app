import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-2 ${className ?? ""}`}
      style={{ fontFamily: "var(--font-ananda-black)" }}
    >
      <span className="font-bold tracking-wide">Sprintly</span>
    </div>
  );
}

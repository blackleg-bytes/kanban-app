import type React from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-secondary/50">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setError(null);

    try {
      // Placeholder forgot password logic
      console.log("Forgot password request for:", email);

      // Simulate success
      setTimeout(() => {
        setMessage("If an account exists, a reset link has been sent.");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-8">
        <div className="flex justify-center">
          <Link href="/">
            <Logo className="text-4xl" />
          </Link>
        </div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-bold text-center">
            Reset your password
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Sending reset link..." : "Send reset link"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Remembered your password?{" "}
          <Link
            href="/auth/login"
            className="text-primary hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </Card>
    </div>
  );
}

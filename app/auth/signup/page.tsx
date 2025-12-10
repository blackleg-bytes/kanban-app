"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Lock, User } from "lucide-react";
import Logo from "@/components/Logo";
import { useSignUp } from "@clerk/nextjs";
import type { ClerkAPIResponseError } from "@clerk/types";

export default function SignupPage() {
  const { signUp, setActive } = useSignUp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    if (formData.password !== formData.confirmPassword) {
      setErrors(["Passwords do not match"]);
      setIsLoading(false);
      return;
    }

    try {
      if (!signUp || !setActive) {
        setErrors(["SignUp not ready. Please try again."]);
        return;
      }

      const result = await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
      });

      await signUp.update({
        firstName: formData.name,
      });

      console.log({result});

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        window.location.href = "/dashboard";
      }
    } catch (err) {
      const clerkErr = err as ClerkAPIResponseError;
      if (clerkErr.errors) {
        setErrors(clerkErr.errors.map((e) => e.message));
      } else {
        setErrors(["Signup failed. Please try again."]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuth = async (strategy: "oauth_google" | "oauth_github") => {
    try {
      if (!signUp) {
        setErrors(["OAuth not ready. Please try again."]);
        return;
      }
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/auth/callback",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      const clerkErr = err as ClerkAPIResponseError;
      if (clerkErr.errors) {
        setErrors(clerkErr.errors.map((e) => e.message));
      } else {
        setErrors(["OAuth failed. Please try again."]);
      }
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
            Create your account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>

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
                value={formData.email}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Confirm Password</label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pl-10"
                required
              />
            </div>
          </div>

          {errors.length > 0 && (
            <ul className="text-sm text-red-500 space-y-1">
              {errors.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        {/* Divider */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-card text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => handleOAuth("oauth_google")}
            >
              Google
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => handleOAuth("oauth_github")}
            >
              GitHub
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
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

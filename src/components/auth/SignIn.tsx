"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type FormValues = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      // Fake API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Example fake validation
      if (data.email !== "admin@example.com" || data.password !== "123456") {
        setError("password", {
          type: "manual",
          message: "Invalid email or password",
        });
        return;
      }

      // Save remember option (optional)
      if (data.remember) {
        localStorage.setItem("rememberUser", data.email);
      }

      // Redirect after success
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:py-48 py-16">
      <Card className=" max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Sign in
          </CardTitle>
          <CardDescription>
            Welcome back — please sign in to your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id="signin-form"
            className="grid gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm cursor-pointer">
                <input
                  {...register("remember")}
                  type="checkbox"
                  className="h-4 w-4 rounded border"
                />
                Remember me
              </label>

              <Link
                href="/sign-in/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <Button
            form="signin-form"
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
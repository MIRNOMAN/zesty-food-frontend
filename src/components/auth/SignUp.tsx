"use client";

import React from "react";
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
  name: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    // TODO: replace with sign-up API call
    await new Promise((r) => setTimeout(r, 600));
    router.push("/sign-in");
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          Sign up to start ordering from local restaurants.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="signup-form"
          className="grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full rounded-md border px-3 py-2 bg-input text-sm"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full rounded-md border px-3 py-2 bg-input text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              type="password"
              className="w-full rounded-md border px-3 py-2 bg-input text-sm"
              placeholder="••••••"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          form="signup-form"
          type="submit"
          className="w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </CardFooter>
    </Card>
  );
}

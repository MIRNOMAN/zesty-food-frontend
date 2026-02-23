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
  email: string;
};

export default function ForgotPassword() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    // TODO: call API to send OTP to `data.email`
    await new Promise((r) => setTimeout(r, 400));
    router.push("/sign-in/forgot-password/otp-verification");
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Forgot password</CardTitle>
        <CardDescription>
          Enter your account email and we&apos;ll send a verification code.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="forgot-form"
          className="grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border px-3 py-2 bg-input text-sm"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          form="forgot-form"
          type="submit"
          className="w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Sending..." : "Send verification code"}
        </Button>
      </CardFooter>
    </Card>
  );
}

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
  code: string;
};

export default function OtpVerification() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    // TODO: verify OTP against API
    await new Promise((r) => setTimeout(r, 400));
    router.push("/sign-in/forgot-password/otp-verification/success");
  }

  return (
<div className="md:py-48 py-16">
      <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Verify code</CardTitle>
        <CardDescription>
          Enter the verification code we sent to your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="otp-form"
          className="grid gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Verification code
            </label>
            <input
              {...register("code", {
                required: "Code is required",
                minLength: { value: 4, message: "Enter a valid code" },
              })}
              type="text"
              inputMode="numeric"
              placeholder="123456"
              className="w-full rounded-md border px-3 py-2 bg-input text-sm tracking-widest text-center"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          form="otp-form"
          type="submit"
          className="w-full"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Verifying..." : "Verify"}
        </Button>
      </CardFooter>
    </Card>
</div>
  );
}

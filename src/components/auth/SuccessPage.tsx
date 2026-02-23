"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function SuccessPage() {
  return (
 <div className="md:py-48 py-16">
     <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle>Password reset</CardTitle>
        <CardDescription>
          Your password was successfully updated.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            You can now sign in with your new password.
          </p>
          <div className="pt-2">
            <Link href="/sign-in">
              <Button>Go to sign in</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
 </div>
  );
}

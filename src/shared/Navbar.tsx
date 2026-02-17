"use client";

import Link from "next/link";
import { Menu, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Browse Menu", href: "#" },
  { label: "Special Offers", href: "#" },
  { label: "Restaurants", href: "#" },
  { label: "Track Order", href: "#" },
];

export default function Navbar() {
  return (
    <div className="w-full bg-white">
     <div className="md:container mx-auto">
       <div className="mx-auto flex w-full  items-center justify-between gap-4 px-4 py-4 md:py-6">
        <div className="flex items-center gap-2">
          <Link href="#" className="text-2xl md:text-5xl font-bold text-slate-900">
            Order
            <span className="ml-1 rounded bg-orange-500 px-1.5 py-0.5 text-xs text-white">
              UK
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm md:text-lg font-medium transition-colors ${
                index === 0
                  ? "rounded-full bg-orange-500 px-4 py-2 text-white"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-800">
            <User className="mr-2 size-4" />
            Login/Signup
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button className="rounded-full bg-slate-900 px-4 text-white hover:bg-slate-800">
            <User className="mr-2 size-4" />
            Login
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pb-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <Button className="mt-2 rounded-full bg-orange-500 text-white hover:bg-orange-600">
                  Browse Menu
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
     </div>
    </div>
  );
}

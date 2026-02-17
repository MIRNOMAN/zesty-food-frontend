import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-700 bg-slate-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            Order.uk Copyright 2024, All Rights Reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Terms
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Pricing
            </Link>
            <Link
              href="/personal-info"
              className="text-sm text-gray-400 hover:text-orange-500 transition"
            >
              Do not sell or share my personal information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

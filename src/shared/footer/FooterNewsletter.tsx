import Link from "next/link";
import { Facebook, Instagram, Smile } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function FooterNewsletter() {
  return (
    <div className="space-y-4">
      {/* Heading */}
      <h3 className="font-bold text-slate-900">
        Get Exclusive Deals in your Inbox
      </h3>

      {/* Email Input */}
      <div className="flex items-center rounded-full bg-gray-200 p-1">
        <input
          type="email"
          placeholder="youremail@gmail.com"
          className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-700 outline-none"
        />
        <button className="rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
          Subscribe
        </button>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-slate-600">
        we wont spam, read our{" "}
        <Link href="/privacy" className="underline hover:text-orange-500">
          email policy
        </Link>
      </p>

      {/* Social Links */}
      <div className="flex gap-4">
        <Link
          href="#"
          className="rounded-full bg-slate-900 p-2 text-white hover:bg-orange-500 transition"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </Link>
        <Link
          href="#"
          className="rounded-full bg-slate-900 p-2 text-white hover:bg-orange-500 transition"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </Link>
        <Link
          href="#"
          className="rounded-full bg-slate-900 p-2 text-white hover:bg-orange-500 transition"
          aria-label="TikTok"
        >
          <FaTiktok size={20} />
        </Link>
        <Link
          href="#"
          className="rounded-full bg-slate-900 p-2 text-white hover:bg-orange-500 transition"
          aria-label="Snapchat"
        >
          <Smile size={20} />
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="space-y-4">
      {/* Logo */}
      <div className="text-3xl font-bold">
        Order<span className="text-gray-400">.uk</span>
      </div>

      {/* Company Info */}
      <p className="text-sm text-slate-600">
        Company # 490039-445, Registered with
        <br />
        House of companies.
      </p>

      {/* App Store Links */}
      <div className="flex gap-3">
        <Link href="#" aria-label="Download on App Store">
          <Image
            src="/app-store.png"
            alt="App Store"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <Link href="#" aria-label="Get it on Google Play">
          <Image
            src="/google-play.png"
            alt="Google Play"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}

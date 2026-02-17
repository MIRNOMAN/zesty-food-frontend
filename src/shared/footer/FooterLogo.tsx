import Link from "next/link";

;
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
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="#"
          aria-label="Download on App Store"
          className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2 text-white shadow-md transition-transform duration-200 hover:scale-105"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-xs font-bold">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] tracking-wide text-white">
              Download on the
            </span>
            <span className="block text-sm font-semibold">App Store</span>
          </span>
        </Link>
        <Link
          href="#"
          aria-label="Get it on Google Play"
          className="inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2 text-white shadow-md transition-transform duration-200 hover:scale-105"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60 text-xs font-bold">
            G
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] tracking-wide text-white">
              Get it on
            </span>
            <span className="block text-sm font-semibold">Google Play</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

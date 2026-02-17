import Link from "next/link";

export default function FooterLegalPages() {
  const pages = [
    { label: "Terms and conditions", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Cookies", href: "/cookies" },
    { label: "Modern Slavery Statement", href: "/slavery-statement" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-slate-900">Legal Pages</h3>
      <ul className="space-y-2">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="text-sm text-slate-600 hover:text-orange-500 hover:underline transition"
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

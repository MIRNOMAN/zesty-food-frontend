import Link from "next/link";

export default function FooterImportantLinks() {
  const links = [
    { label: "Get help", href: "/help" },
    { label: "Add your restaurant", href: "/add-restaurant" },
    { label: "Sign up to deliver", href: "/sign-up-deliver" },
    { label: "Create a business account", href: "/business-account" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-slate-900">Important Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-slate-600 hover:text-orange-500 hover:underline transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

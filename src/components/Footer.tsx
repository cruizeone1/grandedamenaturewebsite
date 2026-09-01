import Link from "next/link";
import Image from "next/image";
import { siteSettings } from "@/content/site-settings";

const footerNav = [
  { href: "/shop/", label: "Shop" },
  { href: "/meet-the-oil/", label: "Meet the Oil" },
  { href: "/ritual/", label: "The Ritual" },
  { href: "/our-roots/", label: "Our Roots" },
  { href: "/contact/", label: "Contact" },
];

const policyNav = [
  { href: "/faq/", label: "FAQ" },
  { href: "/shipping-returns/", label: "Shipping & Returns" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
  { href: "/product-disclaimer/", label: "Product Disclaimer" },
];

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-cream">
      <div className="container-editorial grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
        <div>
          <Image
            src="/assets/logo-green-on-white.jpeg"
            alt={siteSettings.brandName}
            width={72}
            height={72}
            className="mb-4 h-16 w-16 object-cover"
          />
          <p className="font-display text-xl text-forest">{siteSettings.brandName}</p>
          <p className="mt-2 max-w-xs text-sm text-ink/70">
            Botanical massage oils handmade between the United States and Haiti.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="space-y-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Policies</p>
          <ul className="space-y-2">
            {policyNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-forest/10">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.</p>
          <p>
            <a href={`mailto:${siteSettings.contactEmail}`} className="link-underline">
              {siteSettings.contactEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

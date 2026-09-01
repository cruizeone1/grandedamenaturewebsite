"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { siteSettings } from "@/content/site-settings";

const navLinks = [
  { href: "/shop/", label: "Shop" },
  { href: "/meet-the-oil/", label: "Meet the Oil" },
  { href: "/ritual/", label: "The Ritual" },
  { href: "/our-roots/", label: "Our Roots" },
  { href: "/contact/", label: "Get in Touch" },
];

export function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-editorial ${
          scrolled
            ? "border-b border-forest/10 bg-paper/95 backdrop-blur-md"
            : "bg-paper"
        }`}
      >
        <div className="container-editorial flex h-[4.25rem] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image
              src="/assets/logo-green-on-white.jpeg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
            />
            <span className="hidden font-display text-lg tracking-wide text-forest sm:inline">
              {siteSettings.brandName}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink/80 transition-colors hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-forest"
              aria-label="Search"
            >
              Search
            </button>
            <Link
              href="/account/"
              className="hidden text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-forest sm:inline"
            >
              Account
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative text-[0.72rem] font-medium uppercase tracking-[0.12em] text-ink/70 transition-colors hover:text-forest"
              aria-label={`Cart, ${itemCount} items`}
            >
              Cart
              {itemCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[0.6rem] text-paper">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              className="flex flex-col gap-1.5 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={`block h-px w-5 bg-forest transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-forest transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-forest transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-nav"
            className="border-t border-forest/10 bg-paper px-5 py-4 lg:hidden"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-forest/5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-forest"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account/"
              className="block py-3 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-forest"
              onClick={() => setMenuOpen(false)}
            >
              Account
            </Link>
          </nav>
        )}
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-forest/40 px-4 pt-24 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="w-full max-w-lg bg-paper p-6 shadow-2xl">
            <label htmlFor="site-search" className="eyebrow">
              Search
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search products..."
              className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 text-ink outline-none focus:border-gold"
              autoFocus
            />
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setSearchOpen(false)}
              >
                Close
              </button>
              <Link href="/shop/" className="btn-primary" onClick={() => setSearchOpen(false)}>
                View Shop
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

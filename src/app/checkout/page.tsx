import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Grande Dame Nature order.",
};

export default function CheckoutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop/" },
          { label: "Checkout" },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-editorial max-w-xl text-center">
          <Reveal>
            <h1 className="heading-display mb-4 text-4xl">Guest Checkout</h1>
            <p className="mb-8 text-ink/75">
              Secure checkout via Shopify is coming soon. For now, please email us to
              place your order.
            </p>
            <Link href="/contact/" className="btn-primary">
              Contact to Order
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

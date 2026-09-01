import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your Grande Dame Nature account.",
};

export default function AccountPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial max-w-md text-center">
        <Reveal>
          <h1 className="heading-display mb-4 text-4xl">Account</h1>
          <p className="mb-8 text-ink/75">
            Customer accounts will be available when Shopify checkout is connected.
          </p>
          <Link href="/shop/" className="btn-secondary">
            Continue Shopping
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { RitualSteps } from "@/components/RitualSteps";
import { Reveal } from "@/components/Reveal";
import { ritualSteps, ritualCategories } from "@/content/rituals";

export const metadata: Metadata = {
  title: "The Ritual",
  description:
    "An intentional massage ritual centered around touch, aroma, and time for yourself.",
};

export default function RitualPage() {
  return (
    <>
      <Hero
        image="/assets/lymphoid-flow-massage-oil-hero-massage.jpeg"
        headline="The Ritual"
        subcopy="Slow down. Reconnect. Restore."
        primaryCta={{ label: "Shop the Oil", href: "/shop/lymphoid-flow-massage-oil/" }}
        compact
      />

      <section className="relative py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Ritual Categories</p>
            <div className="mb-16 flex flex-wrap gap-3">
              {ritualCategories.map((cat) => (
                <span
                  key={cat.id}
                  className={`border px-4 py-2 text-xs uppercase tracking-widest ${
                    cat.available
                      ? "border-forest bg-forest text-paper"
                      : "border-forest/20 text-ink/40"
                  }`}
                >
                  {cat.label}
                  {!cat.available && " · Coming Soon"}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-20 md:py-28">
        <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="relative hidden aspect-[3/4] overflow-hidden lg:block">
            <Image
              src="/assets/woman-receiving-back-massage.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <RitualSteps steps={ritualSteps} />
        </div>
      </section>

      <section className="py-20 text-center md:py-24">
        <div className="container-editorial">
          <Reveal>
            <p className="font-display text-2xl text-forest md:text-3xl">
              Ready to begin your ritual?
            </p>
            <Link href="/shop/lymphoid-flow-massage-oil/" className="btn-primary mt-8 inline-flex">
              Shop the Oil
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

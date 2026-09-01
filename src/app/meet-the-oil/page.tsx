import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { IngredientGrid } from "@/components/IngredientGrid";
import { Reveal } from "@/components/Reveal";
import { ingredients } from "@/content/ingredients";

export const metadata: Metadata = {
  title: "Meet the Oil",
  description:
    "Explore the ten botanicals in Grande Dame Nature's signature massage oil blend.",
};

export default function MeetTheOilPage() {
  return (
    <>
      <Hero
        image="/assets/lymphoid-flow-massage-oil-front-label.jpeg"
        headline="Meet the Oil"
        subcopy="A botanical blend with a story in every drop."
        primaryCta={{ label: "Shop the Oil", href: "/shop/lymphoid-flow-massage-oil/" }}
        compact
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">The Botanicals</p>
            <h2 className="heading-display mb-4 text-3xl md:text-4xl">
              Ten ingredients. One intentional composition.
            </h2>
            <p className="mb-12 max-w-2xl text-ink/75">
              Select a botanical to learn more. All descriptions are maintained in our
              content system for legal review and updates.
            </p>
          </Reveal>
          <IngredientGrid ingredients={ingredients} />
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-editorial max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">The Blend</p>
            <h2 className="heading-display mb-5 text-3xl md:text-4xl">
              More than individual ingredients.
            </h2>
            <p className="mb-10 text-ink/75">
              Each botanical plays a role in a harmonious whole — crafted for the
              sensory experience of massage, touch, and intentional self-care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">What We Leave Out</p>
            <ul className="mt-6 flex flex-wrap gap-6 text-sm uppercase tracking-widest text-forest">
              <li>Cruelty Free</li>
              <li>Paraben Free</li>
              <li>Sulfate Free</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-forest/10 py-20 text-center md:py-24">
        <div className="container-editorial">
          <Reveal>
            <p className="font-display text-2xl text-forest md:text-3xl">
              You&apos;ve met the botanicals. Now experience the ritual.
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

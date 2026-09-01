import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { Reveal } from "@/components/Reveal";
import { founderStory } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Our Roots",
  description:
    "The family-owned story behind Grande Dame Nature — from garden to ritual, rooted in Haiti and the United States.",
};

export default function OurRootsPage() {
  return (
    <>
      <Hero
        image="/assets/lymphoid-flow-massage-oil-massage-scene-promo.jpeg"
        headline="Our Roots"
        subcopy="From the garden to the ritual."
        primaryCta={{ label: "Shop the Oil", href: "/shop/lymphoid-flow-massage-oil/" }}
        compact
      />

      <section className="py-12 md:py-16">
        <div className="container-editorial">
          <div className="relative mb-16 aspect-[21/9] overflow-hidden">
            <Image
              src="/assets/lymphoid-flow-massage-oil-spa-promo.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <StorySection
            id="family"
            eyebrow="The Family"
            headline="A family-owned botanical care brand"
            body={founderStory.family}
          />
          <StorySection
            id="garden"
            eyebrow="The Garden"
            headline="Grown with intention"
            body={founderStory.garden}
          />
          <StorySection
            id="two-homes"
            eyebrow="Two Homes"
            headline="United States & Haiti"
            body={founderStory.twoHomes}
          />
          <StorySection
            id="philosophy"
            eyebrow="The Philosophy"
            headline="Nature, care, simplicity, heritage"
            body={founderStory.philosophy}
          />

          <Reveal>
            <Link href="/meet-the-oil/" className="btn-secondary mt-8 inline-flex">
              Meet the Oil
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

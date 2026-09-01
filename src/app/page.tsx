import Link from "next/link";
import { Hero } from "@/components/Hero";
import { EditorialSplit } from "@/components/EditorialSplit";
import { Reveal } from "@/components/Reveal";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductBuyBox } from "@/components/ProductBuyBox";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { getFeaturedProduct } from "@/content/products";
import { ingredients } from "@/content/ingredients";
import { founderStory, siteSettings } from "@/content/site-settings";
import { testimonials } from "@/content/policies";

export default function HomePage() {
  const product = getFeaturedProduct();

  const pillars = [
    {
      title: "Botanically Crafted",
      body: "A considered blend of traditional botanicals.",
    },
    {
      title: "Rooted in Heritage",
      body: "Made between the United States and Haiti.",
    },
    {
      title: "Made for the Ritual",
      body: "Created to transform ordinary massage into intentional care.",
    },
  ];

  return (
    <>
      <Hero
        image="/assets/lymphoid-flow-massage-oil-tropical-spa-hero.jpeg"
        headline="Botanical care. Rooted in ritual."
        subcopy="Thoughtfully crafted botanical oils inspired by nature, touch, and the restorative power of taking time for yourself."
        primaryCta={{ label: "Shop the Oil", href: "/shop/lymphoid-flow-massage-oil/" }}
        secondaryCta={{ label: "Discover the Ritual", href: "/ritual/" }}
      />

      <section className="border-b border-forest/10 py-16 md:py-20">
        <div className="container-editorial grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="text-center md:text-left">
                <h2 className="heading-display mb-3 text-2xl">{pillar.title}</h2>
                <p className="text-sm leading-relaxed text-ink/70">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="botanical-accent py-20 md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Meet the Oil</p>
            <h2 className="heading-display mb-5 max-w-xl text-3xl md:text-5xl">
              Ten botanicals. One intentional blend.
            </h2>
            <p className="mb-10 max-w-lg text-ink/75">
              Each botanical is chosen with care — part of a considered composition
              designed for the ritual of touch and aroma.
            </p>
          </Reveal>
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {ingredients.map((ing) => (
              <Reveal key={ing.id}>
                <div className="border border-forest/10 bg-paper/60 p-4 text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-sage/20 font-display text-lg text-sage">
                    {ing.commonName.charAt(0)}
                  </div>
                  <p className="font-display text-sm text-forest">{ing.commonName}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/meet-the-oil/" className="btn-secondary">
              Explore the Botanicals
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-editorial grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ProductGallery images={product.images} alt={product.name} />
          </Reveal>
          <Reveal>
            <ProductBuyBox product={product} />
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-20 text-paper md:py-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-cream/70">The Ritual</p>
            <h2 className="heading-display mb-5 max-w-lg text-3xl text-paper md:text-5xl">
              Care should never feel rushed.
            </h2>
            <p className="mb-8 max-w-md text-paper/75">
              Discover an intentional massage ritual centered around touch, aroma, and
              time for yourself.
            </p>
            <Link href="/ritual/" className="btn-ghost-light">
              Begin the Ritual
            </Link>
          </Reveal>
        </div>
      </section>

      <EditorialSplit
        eyebrow="Our Roots"
        headline="Rooted in two homes."
        body={founderStory.twoHomes}
        image="/assets/botanical-body-massage-oil-bottle-and-label.jpeg"
        cta={{ label: "Discover Our Story", href: "/our-roots/" }}
      />

      <Testimonials items={testimonials} />

      {siteSettings.showInstagram && (
        <section className="py-20">
          <div className="container-editorial">
            <p className="eyebrow">Instagram</p>
            <h2 className="heading-display text-3xl">From the garden</h2>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}

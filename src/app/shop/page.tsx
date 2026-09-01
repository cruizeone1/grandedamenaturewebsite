import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop Grande Dame Nature botanical massage oils.",
};

export default function ShopPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <section className="pb-20 pt-8 md:pb-28">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow">Shop</p>
            <h1 className="heading-display mb-10 text-4xl md:text-5xl">
              Botanical Rituals
            </h1>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

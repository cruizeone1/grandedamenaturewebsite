import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductBuyBox } from "@/components/ProductBuyBox";
import { Accordion } from "@/components/Accordion";
import { StickyBuyBox } from "@/components/StickyBuyBox";
import { Reveal } from "@/components/Reveal";
import { getProduct, products } from "@/content/products";
import { ingredients } from "@/content/ingredients";
import { ProductSchema } from "@/components/ProductSchema";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const botanicalNames = product.ingredientIds
    .map((id) => ingredients.find((i) => i.id === id)?.commonName)
    .filter(Boolean)
    .join(", ");

  const accordionItems = [
    { id: "experience", title: "The Experience", content: product.experience },
    { id: "botanicals", title: "The Botanicals", content: botanicalNames },
    { id: "how-to-use", title: "How to Use", content: product.howToUse },
    { id: "ingredients", title: "Full Ingredients", content: product.fullIngredients },
    { id: "warnings", title: "Warnings", content: product.warnings },
    { id: "shipping", title: "Shipping & Returns", content: product.shippingReturns },
  ];

  return (
    <>
      <ProductSchema product={product} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop/" },
          { label: product.name },
        ]}
      />
      <section className="pb-24 pt-8 md:pb-28">
        <div className="container-editorial grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ProductGallery images={product.images} alt={product.name} />
          </Reveal>
          <Reveal>
            <ProductBuyBox product={product} />
          </Reveal>
        </div>
        <div className="container-editorial mt-16 max-w-3xl">
          <Reveal>
            <Accordion items={accordionItems} />
          </Reveal>
        </div>
      </section>
      <StickyBuyBox product={product} />
    </>
  );
}

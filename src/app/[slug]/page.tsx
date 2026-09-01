import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { policies } from "@/content/policies";

type Props = { params: Promise<{ slug: string }> };

const policySlugs = ["privacy", "terms", "product-disclaimer", "shipping-returns"];

export async function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) return {};
  return { title: policy.title };
}

export default async function PolicyPage({ params }: Props) {
  const { slug } = await params;
  const policy = policies.find((p) => p.slug === slug);
  if (!policy) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: policy.title },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="container-editorial max-w-3xl">
          <Reveal>
            <h1 className="heading-display mb-8 text-4xl">{policy.title}</h1>
            <div className="prose-sm space-y-4 text-sm leading-relaxed text-ink/75">
              <p>{policy.body}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

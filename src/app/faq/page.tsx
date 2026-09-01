import type { Metadata } from "next";
import { faqs } from "@/content/policies";
import { Reveal } from "@/components/Reveal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Grande Dame Nature products, shipping, and returns.",
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      <section className="py-16 md:py-24">
        <div className="container-editorial max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h1 className="heading-display mb-10 text-4xl">Frequently Asked Questions</h1>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <Reveal key={faq.id}>
                <article className="border-b border-forest/10 pb-8">
                  <h2 className="font-display text-xl text-forest">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

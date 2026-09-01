import Image from "next/image";
import { Reveal } from "./Reveal";

type EditorialSplitProps = {
  eyebrow?: string;
  headline: string;
  body: string | React.ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
  dark?: boolean;
};

export function EditorialSplit({
  eyebrow,
  headline,
  body,
  image,
  imageAlt = "",
  reverse = false,
  cta,
  dark = false,
}: EditorialSplitProps) {
  return (
    <section className={dark ? "bg-forest text-paper" : "bg-paper"}>
      <div
        className={`container-editorial grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          {eyebrow && (
            <p className={`eyebrow ${dark ? "text-cream/80" : ""}`}>{eyebrow}</p>
          )}
          <h2 className={`heading-display mb-5 text-3xl md:text-5xl ${dark ? "text-paper" : ""}`}>
            {headline}
          </h2>
          <div className={`space-y-4 text-base leading-relaxed ${dark ? "text-paper/80" : "text-ink/75"}`}>
            {typeof body === "string" ? <p>{body}</p> : body}
          </div>
          {cta && (
            <a href={cta.href} className={`mt-8 inline-block ${dark ? "btn-ghost-light" : "btn-secondary"}`}>
              {cta.label}
            </a>
          )}
        </Reveal>
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-editorial hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

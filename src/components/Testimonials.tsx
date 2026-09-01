import type { Testimonial } from "@/types/content";
import { Reveal } from "./Reveal";

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">Kind Words</p>
          <h2 className="heading-display mb-12 text-3xl md:text-4xl">
            From the garden to your ritual
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.id}>
              <blockquote className="border-l border-gold/40 pl-6">
                <p className="font-display text-xl italic leading-relaxed text-forest">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-ink/60">
                  — {item.author}
                  {item.location && `, ${item.location}`}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

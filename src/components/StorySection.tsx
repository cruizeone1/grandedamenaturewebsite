import { Reveal } from "./Reveal";

type StorySectionProps = {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
};

export function StorySection({ id, eyebrow, headline, body }: StorySectionProps) {
  return (
    <Reveal>
      <section id={id} className="border-t border-forest/10 py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading-display mb-5 max-w-xl text-3xl md:text-4xl">{headline}</h2>
        <p className="max-w-2xl text-base leading-relaxed text-ink/75">{body}</p>
      </section>
    </Reveal>
  );
}

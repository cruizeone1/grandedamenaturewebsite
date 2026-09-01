import type { RitualStep } from "@/types/content";
import { Reveal } from "./Reveal";

export function RitualSteps({ steps }: { steps: RitualStep[] }) {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => (
        <Reveal key={step.id}>
          <article
            className={`grid gap-6 border-t border-paper/15 py-12 md:grid-cols-[6rem_1fr] md:gap-10 ${
              index === 0 ? "border-t-0 pt-0" : ""
            }`}
          >
            <p className="font-display text-5xl text-gold/80 md:text-6xl">{step.number}</p>
            <div>
              <h3 className="heading-display mb-4 text-3xl text-paper">{step.title}</h3>
              <p className="max-w-xl text-base leading-relaxed text-paper/75">{step.body}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

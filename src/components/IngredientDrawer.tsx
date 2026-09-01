"use client";

import type { Ingredient } from "@/types/content";

type Props = {
  ingredient: Ingredient | null;
  onClose: () => void;
};

export function IngredientDrawer({ ingredient, onClose }: Props) {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={ingredient.commonName}>
      <button
        type="button"
        className="absolute inset-0 bg-forest/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />
      <aside className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-paper p-6 shadow-2xl md:left-auto md:right-0 md:top-0 md:max-h-full md:w-[28rem] md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="mb-6 text-xs uppercase tracking-widest text-ink/50 hover:text-forest"
        >
          Close
        </button>
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-cream font-display text-3xl text-gold">
          {ingredient.commonName.charAt(0)}
        </div>
        <p className="eyebrow">Botanical</p>
        <h2 className="heading-display mb-1 text-3xl">{ingredient.commonName}</h2>
        <p className="mb-6 text-sm italic text-ink/50">{ingredient.botanicalName}</p>
        <div className="space-y-5 text-sm leading-relaxed text-ink/75">
          <div>
            <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-sage">About</h3>
            <p>{ingredient.shortDescription}</p>
          </div>
          <div>
            <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-sage">In the Blend</h3>
            <p>{ingredient.roleInProduct}</p>
          </div>
          {ingredient.sourcingNote && (
            <div>
              <h3 className="mb-1 text-xs font-medium uppercase tracking-widest text-sage">Sourcing</h3>
              <p>{ingredient.sourcingNote}</p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

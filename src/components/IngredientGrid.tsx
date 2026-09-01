"use client";

import { useState } from "react";
import type { Ingredient } from "@/types/content";
import { IngredientDrawer } from "./IngredientDrawer";

export function IngredientGrid({ ingredients }: { ingredients: Ingredient[] }) {
  const [active, setActive] = useState<Ingredient | null>(null);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {ingredients.map((ingredient) => (
          <button
            key={ingredient.id}
            type="button"
            onClick={() => setActive(ingredient)}
            className="group border border-forest/10 bg-cream/50 p-5 text-left transition-all duration-500 hover:border-gold/40 hover:bg-cream"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-sage/20 bg-paper font-display text-2xl text-sage transition-colors group-hover:border-gold/30 group-hover:text-gold">
              {ingredient.commonName.charAt(0)}
            </div>
            <p className="font-display text-xl text-forest">{ingredient.commonName}</p>
            <p className="mt-1 text-xs italic text-ink/50">{ingredient.botanicalName}</p>
          </button>
        ))}
      </div>
      <IngredientDrawer ingredient={active} onClose={() => setActive(null)} />
    </>
  );
}

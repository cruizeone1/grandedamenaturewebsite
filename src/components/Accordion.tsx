"use client";

import { useState } from "react";

type AccordionItem = { id: string; title: string; content: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-forest/10 border-y border-forest/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="font-display text-xl text-forest">{item.title}</span>
              <span className="text-gold">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="pb-5 text-sm leading-relaxed text-ink/75">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

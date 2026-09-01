"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { trackAddToCart } from "@/lib/analytics";
import type { Product } from "@/types/content";

export function StickyBuyBox({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity] = useState(1);

  const handleAdd = () => {
    addItem(
      {
        productSlug: product.slug,
        name: product.name,
        price: product.price,
        size: product.size,
        image: product.images[0],
      },
      quantity
    );
    trackAddToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      quantity,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-forest/10 bg-paper/95 p-4 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg text-forest">{product.name}</p>
          <p className="text-sm text-ink/60">${product.price.toFixed(2)}</p>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          disabled={!product.inStock}
          className="btn-primary shrink-0 disabled:opacity-50"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

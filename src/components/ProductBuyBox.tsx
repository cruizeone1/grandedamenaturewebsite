"use client";

import { useState } from "react";
import type { Product } from "@/types/content";
import { useCart } from "@/lib/cart";
import { trackAddToCart } from "@/lib/analytics";

export function ProductBuyBox({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

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
    <div>
      <p className="eyebrow">Signature Oil</p>
      <h1 className="heading-display mb-3 text-3xl md:text-4xl">{product.name}</h1>
      <p className="mb-4 text-2xl font-light text-forest">${product.price.toFixed(2)}</p>
      <p className="mb-6 max-w-md text-sm leading-relaxed text-ink/75">
        {product.shortDescription}
      </p>

      <div className="mb-4 flex items-center gap-4 text-sm">
        <span className="text-ink/60">Size</span>
        <span className="font-medium">{product.size}</span>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <label htmlFor="quantity" className="text-sm text-ink/60">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min={1}
          max={10}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 border border-forest/20 px-2 py-2 text-center text-sm"
        />
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!product.inStock}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {product.inStock ? "Add to Bag" : "Out of Stock"}
        </button>
        <button type="button" className="btn-secondary w-full" disabled>
          Shop Pay · Coming Soon
        </button>
      </div>

      <p className="mt-4 text-center text-xs tracking-wide text-ink/50">
        {product.trustLine}
      </p>

      {!product.inStock && (
        <p className="mt-2 text-center text-xs text-gold">Currently unavailable</p>
      )}
    </div>
  );
}

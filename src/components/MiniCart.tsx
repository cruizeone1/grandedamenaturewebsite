"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export function MiniCart() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Cart">
      <button
        type="button"
        className="absolute inset-0 bg-forest/40 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl">
        <div className="flex items-center justify-between border-b border-forest/10 px-6 py-5">
          <h2 className="font-display text-2xl text-forest">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-sm uppercase tracking-widest text-ink/60 hover:text-forest"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-ink/60">
              Your bag is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.productSlug} className="flex gap-4">
                  <Image
                    src={item.image}
                    alt=""
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain bg-cream"
                  />
                  <div className="flex-1">
                    <p className="font-display text-lg text-forest">{item.name}</p>
                    <p className="text-xs text-ink/60">{item.size}</p>
                    <p className="mt-1 text-sm">${item.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <label className="sr-only" htmlFor={`qty-${item.productSlug}`}>
                        Quantity
                      </label>
                      <input
                        id={`qty-${item.productSlug}`}
                        type="number"
                        min={1}
                        max={10}
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.productSlug, Number(e.target.value))
                        }
                        className="w-14 border border-forest/20 px-2 py-1 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(item.productSlug)}
                        className="text-xs uppercase tracking-wider text-ink/50 hover:text-forest"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-forest/10 px-6 py-5">
          <div className="mb-4 flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout/"
            className="btn-primary w-full"
            onClick={closeCart}
          >
            Checkout
          </Link>
          <p className="mt-3 text-center text-xs text-ink/50">
            Guest checkout available
          </p>
        </div>
      </aside>
    </div>
  );
}

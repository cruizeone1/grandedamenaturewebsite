"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          className="object-contain p-6 md:p-10"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {images.slice(0, 5).map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden bg-cream transition-opacity ${
              active === i ? "ring-1 ring-gold" : "opacity-60 hover:opacity-100"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={src} alt="" fill className="object-contain p-1" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}

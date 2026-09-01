import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}/`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl text-forest">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/60">{product.size}</p>
        <p className="mt-2 text-sm font-medium">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

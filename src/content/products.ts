import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "lymphoid-flow-massage-oil",
    name: "Lymphoid Flow Massage Oil",
    shortDescription:
      "A thoughtfully crafted botanical massage oil made with ten traditional botanicals for intentional self-care rituals.",
    longDescription:
      "Our signature botanical massage oil brings together ten carefully selected botanicals in a blend designed for the ritual of touch. Handmade between the United States and Haiti, each bottle reflects our commitment to natural ingredients, intentional care, and the restorative power of taking time for yourself.",
    price: 48,
    currency: "USD",
    size: "4 oz",
    sku: "GDN-LFO-4OZ",
    inStock: true,
    images: [
      "/assets/lymphoid-flow-massage-oil-front-label.jpeg",
      "/assets/lymphoid-flow-massage-oil-two-bottles.jpeg",
      "/assets/lymphoid-flow-massage-oil-ingredients-label.jpeg",
      "/assets/lymphoid-flow-massage-oil-description-label.jpeg",
      "/assets/lymphoid-flow-massage-oil-spa-towels.jpeg",
      "/assets/lymphoid-flow-massage-oil-hero-massage.jpeg",
    ],
    ingredientIds: [
      "arnica",
      "calendula",
      "clove",
      "ginger",
      "goldenseal",
      "grapefruit",
      "lemongrass",
      "palm-christi",
      "peppermint",
      "turmeric",
    ],
    trustLine: "Cruelty Free · Paraben Free · Sulfate Free",
    experience:
      "A silky botanical oil designed to elevate everyday massage into a moment of intentional care. Warm a few drops between your palms, breathe in the aroma, and let touch become ritual.",
    howToUse:
      "Apply to clean, dry skin. Massage gently using slow, deliberate strokes until absorbed. Suitable for daily moisturizing or a longer massage ritual. For external use only.",
    fullIngredients:
      "Arnica, Calendula, Clove, Ginger, Goldenseal, Grapefruit, Lemongrass, Palm Christi, Peppermint, Turmeric, and supporting botanical carrier oils.",
    warnings:
      "If allergic to any of the herbs listed or if an allergic reaction develops, discontinue use and contact your primary care provider.",
    shippingReturns:
      "Orders are prepared with care and shipped within 3–5 business days. Standard shipping rates apply. Unopened items may be returned within 14 days of delivery. Please contact us for return authorization.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProduct() {
  return products[0];
}

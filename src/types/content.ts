export type Ingredient = {
  id: string;
  commonName: string;
  botanicalName: string;
  shortDescription: string;
  roleInProduct: string;
  sourcingNote?: string;
  image?: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  currency: string;
  size: string;
  sku: string;
  inStock: boolean;
  images: string[];
  ingredientIds: string[];
  trustLine: string;
  experience: string;
  howToUse: string;
  fullIngredients: string;
  warnings: string;
  shippingReturns: string;
};

export type RitualStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  category?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export type Policy = {
  slug: string;
  title: string;
  body: string;
};

export type FounderStory = {
  family: string;
  garden: string;
  twoHomes: string;
  philosophy: string;
};

export type SiteSettings = {
  brandName: string;
  announcement: string;
  contactEmail: string;
  shippingNote: string;
  returnsNote: string;
  newsletterHeadline: string;
  newsletterCopy: string;
  showTestimonials: boolean;
  showInstagram: boolean;
  social: {
    instagram?: { url: string; handle: string };
    facebook?: { url: string };
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
};

export type CartItem = {
  productSlug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
};

export type ContactReason =
  | "product-question"
  | "order-support"
  | "wholesale"
  | "partnership"
  | "press"
  | "other";

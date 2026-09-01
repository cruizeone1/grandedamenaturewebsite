import type { Testimonial, FAQ, Policy } from "@/types/content";

export const testimonials: Testimonial[] = [];

export const faqs: FAQ[] = [
  {
    id: "shipping-time",
    question: "How long does shipping take?",
    answer:
      "Orders are prepared with care and typically ship within 3–5 business days. You will receive tracking information once your order is on its way.",
    category: "shipping",
  },
  {
    id: "returns",
    question: "What is your return policy?",
    answer:
      "Unopened items may be returned within 14 days of delivery. Please contact us to receive return authorization before sending items back.",
    category: "returns",
  },
  {
    id: "allergies",
    question: "What if I have allergies?",
    answer:
      "If you are allergic to any of the herbs listed on our product label, or if you develop an allergic reaction, discontinue use and contact your primary care provider.",
    category: "product",
  },
  {
    id: "wholesale",
    question: "Do you offer wholesale?",
    answer:
      "We are open to wholesale and partnership inquiries. Please reach out through our contact form and select Wholesale as your reason for contact.",
    category: "general",
  },
];

export const policies: Policy[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    body: "Your privacy matters to us. This policy outlines how Grande Dame Nature collects, uses, and protects your personal information. Full policy content to be provided by legal review.",
  },
  {
    slug: "terms",
    title: "Terms of Service",
    body: "These terms govern your use of the Grande Dame Nature website and purchase of our products. Full terms to be provided by legal review.",
  },
  {
    slug: "product-disclaimer",
    title: "Product Disclaimer",
    body: "Grande Dame Nature products are for external use only. These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure, or prevent any disease. If allergic to any listed herbs or if an allergic reaction develops, discontinue use and contact your primary care provider.",
  },
  {
    slug: "shipping-returns",
    title: "Shipping & Returns",
    body: "Orders ship within 3–5 business days. Standard shipping rates apply. Unopened items may be returned within 14 days of delivery. Contact us for return authorization.",
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}

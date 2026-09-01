"use client";

import { useState } from "react";
import type { ContactReason } from "@/types/content";

const reasons: { value: ContactReason; label: string }[] = [
  { value: "product-question", label: "Product Question" },
  { value: "order-support", label: "Order Support" },
  { value: "wholesale", label: "Wholesale" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="rounded border border-sage/30 bg-cream/50 p-6 text-sm text-ink/75">
        Thank you for reaching out. We will respond within 2–3 business days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-widest text-ink/60">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border-b border-forest/20 bg-transparent py-2 outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-widest text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-b border-forest/20 bg-transparent py-2 outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="reason" className="mb-1 block text-xs uppercase tracking-widest text-ink/60">
          Reason for Contact
        </label>
        <select
          id="reason"
          name="reason"
          required
          className="w-full border-b border-forest/20 bg-transparent py-2 outline-none focus:border-gold"
        >
          {reasons.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-widest text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-forest/20 bg-paper px-3 py-2 outline-none focus:border-gold"
        />
      </div>
      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}

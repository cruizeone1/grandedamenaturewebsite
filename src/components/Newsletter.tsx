"use client";

import { useState } from "react";
import { siteSettings } from "@/content/site-settings";
import { Reveal } from "./Reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="botanical-accent border-y border-forest/10 py-20 md:py-24">
      <div className="container-editorial max-w-xl text-center">
        <Reveal>
          <p className="eyebrow">Newsletter</p>
          <h2 className="heading-display mb-4 text-3xl md:text-4xl">
            {siteSettings.newsletterHeadline}
          </h2>
          <p className="mb-8 text-ink/70">{siteSettings.newsletterCopy}</p>
          {submitted ? (
            <p className="text-sm text-sage">Thank you for joining the garden.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 border border-forest/20 bg-paper px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

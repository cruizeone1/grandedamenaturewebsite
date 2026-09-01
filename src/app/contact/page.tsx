import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: "Get in Touch",
  description: "Contact Grande Dame Nature for product questions, orders, wholesale, and more.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="heading-display mb-4 text-4xl md:text-5xl">Get in Touch</h1>
          <p className="mb-6 text-ink/75">We&apos;d love to hear from you.</p>
          <p className="text-sm text-ink/60">
            Email us directly at{" "}
            <a
              href={`mailto:${siteSettings.contactEmail}`}
              className="link-underline text-forest"
            >
              {siteSettings.contactEmail}
            </a>
          </p>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

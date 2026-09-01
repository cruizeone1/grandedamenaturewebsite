import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  image: string;
  headline: string;
  subcopy: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  compact?: boolean;
};

export function Hero({
  image,
  headline,
  subcopy,
  primaryCta,
  secondaryCta,
  dark = true,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "min-h-[60vh]" : "min-h-[92vh]"}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center scale-105 animate-[heroDrift_20s_ease-in-out_infinite_alternate]"
        sizes="100vw"
      />
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-r from-forest/80 via-forest/50 to-forest/30"
            : "bg-gradient-to-t from-paper via-paper/40 to-transparent"
        }`}
      />
      <div className="container-editorial relative z-10 flex min-h-[inherit] flex-col justify-end pb-16 pt-28 md:pb-24">
        <p className="eyebrow text-paper/70">Grande Dame Nature</p>
        <h1
          className={`heading-display mb-5 max-w-2xl text-balance text-4xl md:text-6xl ${
            dark ? "text-paper" : "text-forest"
          }`}
        >
          {headline}
        </h1>
        <p
          className={`mb-8 max-w-lg text-base font-light leading-relaxed md:text-lg ${
            dark ? "text-paper/85" : "text-ink/75"
          }`}
        >
          {subcopy}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={primaryCta.href} className="btn-primary">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-ghost-light">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

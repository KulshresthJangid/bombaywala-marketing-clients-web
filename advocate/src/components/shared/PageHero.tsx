import type { ReactNode } from "react";
import FadeInUp from "./FadeInUp";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="pg-hero panel-navy crest-pattern relative overflow-hidden">
      <div className="max-w relative">
        <FadeInUp>
          <span className="overline overline-light">{eyebrow}</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream/75 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </FadeInUp>
      </div>
    </section>
  );
}

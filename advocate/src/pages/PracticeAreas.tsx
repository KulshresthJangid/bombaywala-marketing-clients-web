import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/shared/SEO";
import PageHero from "../components/shared/PageHero";
import FadeInUp from "../components/shared/FadeInUp";
import PracticeIcon from "../components/shared/PracticeIcon";
import { practiceAreas, practiceAreaCategories } from "../lib/config";
import { cn } from "../lib/utils";

export default function PracticeAreas() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...practiceAreaCategories];

  const visible =
    active === "All"
      ? practiceAreas
      : practiceAreas.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Practice Areas"
        description="Civil, criminal, arbitration, banking, corporate and family law representation from SAS Law Associates, Fort, Mumbai."
        path="/practice-areas"
      />

      <PageHero
        eyebrow="What We Handle"
        title="Practice Areas"
        description="Focused representation across litigation, corporate and family matters — each handled with the same direct, result-oriented approach."
      />

      <section className="pg-section bg-cream">
        <div className="max-w">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-full border transition-colors",
                  active === c
                    ? "bg-navy text-cream border-navy"
                    : "border-border text-muted hover:border-navy/40"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="cards-grid mt-10">
            {visible.map((area, i) => (
              <FadeInUp key={area.slug} delay={(i % 6) * 0.05}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="group block panel p-7 h-full hover:border-gold/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <PracticeIcon slug={area.slug} size={22} className="text-navy" />
                    </div>
                    <span className="text-[0.65rem] uppercase tracking-wide text-gold-dark border border-gold/30 rounded-full px-2.5 py-1">
                      {area.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl text-navy">{area.name}</h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {area.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark group-hover:gap-2.5 transition-all">
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

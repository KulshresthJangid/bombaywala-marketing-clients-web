import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/shared/SEO';
import FadeInUp from '../components/shared/FadeInUp';
import TricolorRule from '../components/shared/TricolorRule';
import { products, categories, type ProductCategory } from '../lib/config';
import { cn } from '../lib/utils';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') as ProductCategory | null;
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = !activeCategory || p.category === activeCategory;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function setCategory(cat: ProductCategory | null) {
    if (!cat) {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  }

  return (
    <>
      <SEO title="Products" description="19 tractor implements for tillage, harrowing, ploughing, sugarcane cultivation and land preparation — engineered for Indian farms." />

      <section className="pt-[76px] bg-forest-dark">
        <div className="max-w-site py-16 sm:py-20 text-center">
          <span className="overline text-orange-light">Our Range</span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-white mt-4">Products</h1>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            19 heavy-duty tractor implements engineered for tillage, harrowing, ploughing, sugarcane cultivation
            and land preparation.
          </p>
          <TricolorRule center className="mt-6" />
        </div>
      </section>

      <section className="section bg-cream !pt-10">
        <div className="max-w-site">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10">
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setCategory(null)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-display uppercase tracking-wide border transition-colors',
                  !activeCategory
                    ? 'bg-orange text-white border-orange'
                    : 'bg-white text-forest-dark border-forest/15 hover:border-orange'
                )}
              >
                All ({products.length})
              </button>
              {categories.map((c) => {
                const count = products.filter((p) => p.category === c).length;
                return (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-display uppercase tracking-wide border transition-colors',
                      activeCategory === c
                        ? 'bg-orange text-white border-orange'
                        : 'bg-white text-forest-dark border-forest/15 hover:border-orange'
                    )}
                  >
                    {c} ({count})
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-64 shrink-0">
              <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-white border border-forest/15 rounded-full pl-10 pr-4 py-2.5 text-sm outline-none focus:border-orange transition-colors"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-ink/50 py-20">No products match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <FadeInUp key={p.slug} delay={(i % 6) * 0.05}>
                  <Link to={`/products/${p.slug}`} className="card group block overflow-hidden h-full">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] uppercase tracking-[0.15em] text-orange font-display font-semibold">
                        {p.category}
                      </span>
                      <h3 className="font-display text-lg text-forest-dark mt-1.5 group-hover:text-orange transition-colors">
                        {p.name}
                      </h3>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

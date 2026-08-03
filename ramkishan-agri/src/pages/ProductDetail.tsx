import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import SEO from '../components/shared/SEO';
import FadeInUp from '../components/shared/FadeInUp';
import { getProductBySlug, getProductsByCategory, contact } from '../lib/config';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={product.name}
        description={`${product.name} — ${product.category} implement from Ramkishan Agri Innovate Pvt Ltd. ${product.features[0] ?? ''}`}
        image={product.image}
      />

      <section className="pt-[76px] bg-cream">
        <div className="max-w-site pt-8">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-forest-dark hover:text-orange transition-colors font-display uppercase tracking-wide">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        <div className="max-w-site py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeInUp>
            <div className="rounded-md overflow-hidden card">
              <img src={product.image} alt={product.name} className="w-full aspect-[16/9] object-cover" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <span className="overline">{product.category}</span>
            <h1 className="text-3xl sm:text-4xl font-display font-semibold text-ink mt-3 mb-6">
              {product.name}
            </h1>

            {product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="font-display text-lg text-forest-dark uppercase tracking-wide mb-4">Features</h2>
                <ul className="space-y-2.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-ink/70 leading-relaxed text-[15px]">
                      <CheckCircle2 size={18} className="text-orange shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="btn-primary">
                <Phone size={16} /> Enquire Now
              </a>
              <Link to="/contact" className="btn-outline">
                Request A Quote
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Spec table */}
      <section className="section bg-white !pt-0">
        <div className="max-w-site">
          <FadeInUp>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">
              Technical Specification of {product.name}
            </h2>

            {product.specColumns ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse spec-table">
                  <thead>
                    <tr>
                      <th>{product.specColumns.header}</th>
                      {product.specColumns.rows[0]?.values.map((_, i) => (
                        <th key={i}>Option {i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specColumns.rows.map((row) => (
                      <tr key={row.label}>
                        <td className="font-semibold text-forest-dark">{row.label}</td>
                        {row.values.map((v, i) => (
                          <td key={i}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse spec-table max-w-3xl">
                  <thead>
                    <tr>
                      <th className="w-1/3">Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label}>
                        <td className="font-semibold text-forest-dark">{spec.label}</td>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </FadeInUp>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="section bg-cream">
          <div className="max-w-site">
            <FadeInUp className="mb-10">
              <span className="overline">Related</span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink mt-3">
                More in {product.category}
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <FadeInUp key={p.slug} delay={i * 0.05}>
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
                      <h3 className="font-display text-lg text-forest-dark group-hover:text-orange transition-colors">
                        {p.name}
                      </h3>
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

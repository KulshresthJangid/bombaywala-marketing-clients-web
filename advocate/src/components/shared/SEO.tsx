import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../lib/config";

type SEOProps = {
  title: string;
  description?: string;
  path?: string;
};

export default function SEO({ title, description, path = "" }: SEOProps) {
  const fullTitle = `${title} | ${siteConfig.brandName}`;
  const desc = description ?? siteConfig.description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`https://saslawassociates.com${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

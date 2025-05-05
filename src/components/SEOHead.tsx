import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Darshan Gaikwad - Frontend Developer",
  description = "Portfolio of Darshan Gaikwad, Frontend Developer specializing in React and modern web development.",
  canonicalUrl = "https://darshan-portfolio.vercel.app",
  ogImage = "/images/profile.jpg", // Fixed path (removed "public")
  noIndex = false,
}) => {
  const fullTitle = title.includes("Darshan Gaikwad")
    ? title
    : `${title} | Darshan Gaikwad`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Tags (works for both Facebook and Twitter) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Indexing Control */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Darshan Gaikwad",
          url: canonicalUrl,
          jobTitle: "Frontend Developer",
          image: ogImage,
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

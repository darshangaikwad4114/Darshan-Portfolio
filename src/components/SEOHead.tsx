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
  ogImage = "/images/og-preview.jpg",
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

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* If noIndex is true, tell search engines not to index this page */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Add viewport control optimized for all devices */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      
      {/* Theme colors for different modes */}
      <meta
        name="theme-color"
        content="#0090f5"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1a1a1a"
        media="(prefers-color-scheme: dark)"
      />

      {/* Add structured data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Darshan Gaikwad",
            "url": "${canonicalUrl}",
            "jobTitle": "Frontend Developer",
            "image": "${ogImage}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;

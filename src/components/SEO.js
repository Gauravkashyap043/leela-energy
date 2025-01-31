// components/SEO.js
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Leela Energy Solutions",
          image: "https://your-domain.com/logo.jpg",
          description: description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Your Address",
            addressLocality: "Your City",
            addressRegion: "Your State",
            postalCode: "000000",
          },
          telephone: "+91-9876543210",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

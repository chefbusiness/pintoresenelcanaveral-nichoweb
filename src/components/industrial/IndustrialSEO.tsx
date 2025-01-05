import { Helmet } from 'react-helmet-async';

const IndustrialSEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Naves Industriales en El Cañaveral",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pintores El Cañaveral",
      "image": "https://pintoreselcanaveral.com/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Cañaveral",
        "addressRegion": "Madrid",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.4378698",
        "longitude": "-3.5797852"
      },
      "url": "https://pintoreselcanaveral.com",
      "telephone": "+34744717942"
    },
    "areaServed": {
      "@type": "City",
      "name": "El Cañaveral"
    },
    "description": "Servicio profesional de pintura para naves industriales en El Cañaveral. Soluciones duraderas y de alta calidad para espacios industriales.",
    "serviceType": "Pintura de Naves Industriales"
  };

  return (
    <Helmet>
      <title>Pintores de Naves Industriales en El Cañaveral | Pintores El Cañaveral</title>
      <meta name="description" content="Servicio profesional de pintura para naves industriales en El Cañaveral. Soluciones duraderas y de alta calidad para espacios industriales. Solicite presupuesto sin compromiso." />
      
      {/* Open Graph */}
      <meta property="og:title" content="Pintores de Naves Industriales en El Cañaveral | Pintores El Cañaveral" />
      <meta property="og:description" content="Servicio profesional de pintura para naves industriales en El Cañaveral. Soluciones duraderas y de alta calidad para espacios industriales." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pintoreselcanaveral.com/servicios/naves" />
      <meta property="og:image" content="https://pintoreselcanaveral.com/og-image.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pintores de Naves Industriales en El Cañaveral | Pintores El Cañaveral" />
      <meta name="twitter:description" content="Servicio profesional de pintura para naves industriales en El Cañaveral. Soluciones duraderas y de alta calidad para espacios industriales." />
      <meta name="twitter:image" content="https://pintoreselcanaveral.com/og-image.png" />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href="https://pintoreselcanaveral.com/servicios/naves" />
      <meta name="robots" content="index, follow" />
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="El Cañaveral" />
      <meta name="geo.position" content="40.4378698;-3.5797852" />
      <meta name="ICBM" content="40.4378698, -3.5797852" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default IndustrialSEO;
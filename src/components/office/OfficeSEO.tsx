import { Helmet } from 'react-helmet-async';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Servicio de Pintura de Oficinas en El Cañaveral",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pintores El Cañaveral",
    "image": "https://pintoreselcanaveral.pro/og-image.png",
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
    "url": "https://pintoreselcanaveral.pro",
    "telephone": "+34744717942"
  },
  "areaServed": {
    "@type": "City",
    "name": "El Cañaveral"
  },
  "description": "Servicio profesional de pintura para oficinas y espacios de trabajo en El Cañaveral. Trabajamos en horarios flexibles para minimizar interrupciones.",
  "serviceType": "Pintura de Oficinas"
};

const OfficeSEO = () => {
  return (
    <Helmet>
      <title>Pintores de Oficinas en El Cañaveral | Pintores El Cañaveral</title>
      <meta name="description" content="Servicio profesional de pintura para oficinas en El Cañaveral. Trabajamos en horarios flexibles para minimizar interrupciones en su actividad. Solicite presupuesto sin compromiso." />
      
      {/* Open Graph */}
      <meta property="og:title" content="Pintores de Oficinas en El Cañaveral | Pintores El Cañaveral" />
      <meta property="og:description" content="Servicio profesional de pintura para oficinas en El Cañaveral. Trabajamos en horarios flexibles para minimizar interrupciones en su actividad." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/pintura-oficinas" />
      <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pintores de Oficinas en El Cañaveral | Pintores El Cañaveral" />
      <meta name="twitter:description" content="Servicio profesional de pintura para oficinas en El Cañaveral. Trabajamos en horarios flexibles para minimizar interrupciones en su actividad." />
      <meta name="twitter:image" content="https://pintoreselcanaveral.pro/og-image.png" />
      
      {/* Additional SEO tags */}
      <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/pintura-oficinas" />
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

export default OfficeSEO;
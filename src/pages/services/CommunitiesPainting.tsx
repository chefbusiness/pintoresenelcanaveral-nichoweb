import { Helmet } from 'react-helmet-async';
import CommunitiesHero from '@/components/communities/CommunitiesHero';
import CommunitiesServices from '@/components/communities/CommunitiesServices';
import CommunitiesTestimonials from '@/components/communities/CommunitiesTestimonials';
import CommunitiesCTA from '@/components/communities/CommunitiesCTA';

const CommunitiesPainting = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Comunidades en El Cañaveral",
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
    "description": "Servicio profesional de pintura para comunidades de vecinos en El Cañaveral. Especialistas en zonas comunes, escaleras y garajes comunitarios.",
    "serviceType": "Pintura de Comunidades"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Comunidades en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura para comunidades de vecinos en El Cañaveral. Especialistas en zonas comunes, escaleras y garajes comunitarios. Solicita presupuesto sin compromiso." />
        <meta property="og:title" content="Pintores de Comunidades en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura para comunidades de vecinos en El Cañaveral. Especialistas en zonas comunes, escaleras y garajes comunitarios." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.com/servicios/comunidades" />
        <meta property="og:image" content="https://pintoreselcanaveral.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintores de Comunidades en El Cañaveral | Pintores El Cañaveral" />
        <meta name="twitter:description" content="Servicio profesional de pintura para comunidades de vecinos en El Cañaveral. Especialistas en zonas comunes, escaleras y garajes comunitarios." />
        <meta name="twitter:image" content="https://pintoreselcanaveral.com/og-image.png" />
        <link rel="canonical" href="https://pintoreselcanaveral.com/servicios/comunidades" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="ES-M" />
        <meta name="geo.placename" content="El Cañaveral" />
        <meta name="geo.position" content="40.4378698;-3.5797852" />
        <meta name="ICBM" content="40.4378698, -3.5797852" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <CommunitiesHero />
      <CommunitiesServices />
      <CommunitiesTestimonials />
      <CommunitiesCTA />
    </div>
  );
};

export default CommunitiesPainting;
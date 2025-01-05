import { Helmet } from 'react-helmet-async';
import RestaurantsHero from '@/components/restaurants/RestaurantsHero';
import RestaurantsServices from '@/components/restaurants/RestaurantsServices';
import RestaurantsTestimonials from '@/components/restaurants/RestaurantsTestimonials';
import RestaurantsCTA from '@/components/restaurants/RestaurantsCTA';

const RestaurantsPainting = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Restaurantes en El Cañaveral",
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
    "description": "Servicio profesional de pintura para restaurantes en El Cañaveral. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción.",
    "serviceType": "Pintura de Restaurantes"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Restaurantes en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura para restaurantes en El Cañaveral. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción. Solicite presupuesto sin compromiso." />
        <meta property="og:title" content="Pintores de Restaurantes en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura para restaurantes en El Cañaveral. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/restaurantes" />
        <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintores de Restaurantes en El Cañaveral | Pintores El Cañaveral" />
        <meta name="twitter:description" content="Servicio profesional de pintura para restaurantes en El Cañaveral. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción." />
        <meta name="twitter:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/restaurantes" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="ES-M" />
        <meta name="geo.placename" content="El Cañaveral" />
        <meta name="geo.position" content="40.4378698;-3.5797852" />
        <meta name="ICBM" content="40.4378698, -3.5797852" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <RestaurantsHero />
      <RestaurantsServices />
      <RestaurantsTestimonials />
      <RestaurantsCTA />
    </div>
  );
};

export default RestaurantsPainting;
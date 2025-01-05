import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import HousesBenefits from '@/components/houses/HousesBenefits';
import HousesServices from '@/components/houses/HousesServices';
import HousesTestimonials from '@/components/houses/HousesTestimonials';
import HousesCTA from '@/components/houses/HousesCTA';

const HousesPainting = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Viviendas en El Cañaveral",
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
    "description": "Servicio profesional de pintura para viviendas en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada.",
    "serviceType": "Pintura de Viviendas"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Viviendas en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura para viviendas en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada. Solicite presupuesto sin compromiso." />
        <meta property="og:title" content="Pintores de Viviendas en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura para viviendas en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/viviendas" />
        <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/viviendas" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <ServiceDetailHero
        title="Pintores de Viviendas en El Cañaveral"
        description="Servicios profesionales de pintura para viviendas. Transformamos su hogar con acabados de calidad superior."
        Icon={Home}
      />
      
      <HousesServices />
      <HousesBenefits />
      <HousesTestimonials />
      <HousesCTA />
    </div>
  );
};

export default HousesPainting;
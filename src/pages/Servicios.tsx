import { Helmet } from 'react-helmet-async';
import ServicesHero from '@/components/services/ServicesHero';
import InteriorPaintingSection from '@/components/services/InteriorPaintingSection';
import ExteriorPaintingSection from '@/components/services/ExteriorPaintingSection';
import DecorativePaintingSection from '@/components/services/DecorativePaintingSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import ServicesCTA from '@/components/services/ServicesCTA';

const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de Pintura en El Cañaveral | Pintores Profesionales Madrid</title>
        <meta name="description" content="Servicios profesionales de pintura en El Cañaveral: pintura interior, exterior, decorativa, fachadas y más. Calidad y experiencia garantizada en Madrid." />
        <meta name="keywords" content="servicios de pintura El Cañaveral, pintores Madrid, pintura interior, pintura exterior, pintura decorativa" />
        <meta property="og:title" content="Servicios de Pintura en El Cañaveral | Pintores Profesionales" />
        <meta property="og:description" content="Descubre nuestros servicios profesionales de pintura en El Cañaveral. Especialistas en pintura interior, exterior y decorativa." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://pintoreselcanaveral.com/servicios" />
        
        {/* Schema.org markup para página de servicios */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicios de Pintura El Cañaveral",
            "serviceType": "Servicios de Pintura",
            "areaServed": {
              "@type": "City",
              "name": "El Cañaveral",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid",
                "addressCountry": "ES"
              }
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pintores El Cañaveral",
              "image": "https://pintoreselcanaveral.com/og-image.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "El Cañaveral",
                "addressLocality": "Madrid",
                "postalCode": "28052",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.4378698,
                "longitude": -3.5797773
              },
              "url": "https://pintoreselcanaveral.com",
              "telephone": "+34744717942"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Pintura",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pintura Interior"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pintura Exterior"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pintura Decorativa"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="animate-fade-in">
        <ServicesHero />
        
        {/* Servicios Detallados */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="space-y-16">
              <InteriorPaintingSection />
              <ExteriorPaintingSection />
              <DecorativePaintingSection />
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <ServicesCTA />
      </div>
    </>
  );
};

export default Servicios;
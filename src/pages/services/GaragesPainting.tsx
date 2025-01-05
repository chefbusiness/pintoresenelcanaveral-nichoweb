import { Helmet } from 'react-helmet-async';
import GaragesHero from '@/components/garages/GaragesHero';
import GaragesServices from '@/components/garages/GaragesServices';
import GaragesBenefits from '@/components/garages/GaragesBenefits';
import GaragesProcess from '@/components/garages/GaragesProcess';
import GaragesCTA from '@/components/garages/GaragesCTA';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: "Carlos Martínez",
    rating: 5,
    text: "Excelente trabajo en el garaje de nuestra comunidad. Quedó como nuevo y el equipo fue muy profesional.",
    service: "Pintura de Garaje Comunitario"
  },
  {
    name: "Ana García",
    rating: 5,
    text: "Pintaron mi plaza de garaje y quedó perfecta. El acabado antideslizante es justo lo que necesitaba.",
    service: "Pintura de Plaza Individual"
  }
];

const GaragesPainting = () => {
  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Garajes en El Cañaveral | Pintura Epoxy Profesional</title>
        <meta 
          name="description" 
          content="Servicio profesional de pintura para garajes en El Cañaveral. Especialistas en pintura epoxy, señalización y acabados antideslizantes. Presupuesto gratuito." 
        />
        <meta 
          name="keywords" 
          content="pintores garajes El Cañaveral, pintura epoxy garajes, pintura antideslizante, señalización garajes Madrid" 
        />
        <meta property="og:title" content="Pintores de Garajes en El Cañaveral | Pintura Epoxy Profesional" />
        <meta 
          property="og:description" 
          content="Servicio especializado en pintura de garajes con materiales de alta calidad y acabados profesionales. Solicita presupuesto sin compromiso." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://pintoreselcanaveral.com/servicios/garajes" />

        {/* Schema.org markup para servicio de pintura de garajes */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pintura de Garajes El Cañaveral",
            "serviceType": "Pintura de Garajes",
            "description": "Servicio profesional de pintura para garajes con pintura epoxy y acabados antideslizantes",
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Pintura de Garajes",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pintura Epoxy para Garajes"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Señalización de Plazas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acabados Antideslizantes"
                  }
                }
              ]
            },
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Carlos Martínez"
                },
                "reviewBody": "Excelente trabajo en el garaje de nuestra comunidad. Quedó como nuevo y el equipo fue muy profesional."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Ana García"
                },
                "reviewBody": "Pintaron mi plaza de garaje y quedó perfecta. El acabado antideslizante es justo lo que necesitaba."
              }
            ]
          })}
        </script>
      </Helmet>

      <GaragesHero />
      <GaragesServices />
      <GaragesBenefits />
      <GaragesProcess />
      
      {/* Sección de Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Opiniones de Nuestros Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <GaragesCTA />
    </div>
  );
};

export default GaragesPainting;

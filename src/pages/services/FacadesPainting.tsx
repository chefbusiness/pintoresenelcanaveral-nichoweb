import { Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import TestimonialCard from '@/components/TestimonialCard';
import FacadesServices from '@/components/facades/FacadesServices';
import FacadesWorkProcess from '@/components/facades/FacadesWorkProcess';
import FacadesCTA from '@/components/facades/FacadesCTA';

const FacadesPainting = () => {
  const testimonials = [
    {
      name: "Laura Martínez",
      rating: 5,
      text: "Excelente trabajo en la fachada de nuestra comunidad. El equipo fue muy profesional y el resultado es espectacular.",
      service: "Pintura de Fachada"
    },
    {
      name: "Antonio Ruiz",
      rating: 5,
      text: "Transformaron por completo el aspecto exterior de nuestro edificio. Muy satisfecho con el acabado y la limpieza.",
      service: "Rehabilitación de Fachada"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Fachadas en El Cañaveral",
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
    "description": "Servicio profesional de pintura para fachadas en El Cañaveral. Transformamos su espacio gastronómico con acabados de calidad y mínima interrupción.",
    "serviceType": "Pintura de Fachadas"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Fachadas en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura de fachadas en El Cañaveral. Especialistas en rehabilitación y mantenimiento de fachadas con más de 15 años de experiencia. Solicita presupuesto sin compromiso." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pintores de Fachadas en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura de fachadas en El Cañaveral. Especialistas en rehabilitación y mantenimiento de fachadas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/fachadas" />
        <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintores de Fachadas en El Cañaveral | Pintores El Cañaveral" />
        <meta name="twitter:description" content="Servicio profesional de pintura de fachadas en El Cañaveral. Especialistas en rehabilitación y mantenimiento de fachadas." />
        <meta name="twitter:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/fachadas" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="ES-M" />
        <meta name="geo.placename" content="El Cañaveral" />
        <meta name="geo.position" content="40.4378698;-3.5797852" />
        <meta name="ICBM" content="40.4378698, -3.5797852" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <ServiceDetailHero
        title="Pintores de Fachadas en El Cañaveral"
        description="Especialistas en pintura y rehabilitación de fachadas. Mejoramos el aspecto y la protección de tu edificio con acabados profesionales y duraderos."
        Icon={Building2}
      />
      
      <FacadesServices />
      <FacadesWorkProcess />

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <FacadesCTA />
    </div>
  );
};

export default FacadesPainting;
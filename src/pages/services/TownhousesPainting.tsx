import { Home, CheckCircle2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';
import { Helmet } from 'react-helmet-async';

const TownhousesPainting = () => {
  const benefits = [
    {
      title: "Experiencia en Adosados",
      description: "Amplia experiencia en pintura de casas adosadas"
    },
    {
      title: "Servicio Integral",
      description: "Atención personalizada y servicio completo"
    },
    {
      title: "Acabados Premium",
      description: "Materiales de alta calidad y acabados duraderos"
    }
  ];

  const testimonials = [
    {
      name: "Ana García",
      rating: 5,
      text: "Excelente trabajo en la pintura de nuestro adosado. El equipo fue muy profesional y detallista.",
      service: "Pintura de Adosado"
    },
    {
      name: "Carlos Martínez",
      rating: 5,
      text: "Transformaron por completo nuestro adosado. El resultado superó nuestras expectativas.",
      service: "Renovación de Adosado"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Adosados en El Cañaveral",
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
    "description": "Servicio profesional de pintura para adosados en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada.",
    "serviceType": "Pintura de Adosados"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Adosados en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura para adosados en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada. Solicite presupuesto sin compromiso." />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pintores de Adosados en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura para adosados en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/pintura-adosados" />
        <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintores de Adosados en El Cañaveral | Pintores El Cañaveral" />
        <meta name="twitter:description" content="Servicio profesional de pintura para adosados en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada." />
        <meta name="twitter:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        
        {/* Additional SEO tags */}
        <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/pintura-adosados" />
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

      <ServiceDetailHero
        title="Pintores de Adosados en El Cañaveral"
        description="Servicios profesionales de pintura para adosados. Transformamos su hogar con acabados de calidad superior."
        Icon={Home}
      />
      
      {/* Beneficios */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Beneficios de Nuestro Servicio</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita pintar su adosado en El Cañaveral?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacte con nosotros para obtener un presupuesto personalizado sin compromiso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Solicitar Presupuesto
            </Link>
            <a href="tel:744717942" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TownhousesPainting;
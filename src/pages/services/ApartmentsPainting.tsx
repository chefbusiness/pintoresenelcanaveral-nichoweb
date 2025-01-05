import { Home, CheckCircle2 } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';
import { Helmet } from 'react-helmet-async';

const ApartmentsPainting = () => {
  const benefits = [
    {
      title: "Experiencia en Pisos",
      description: "Amplia experiencia en pintura de viviendas"
    },
    {
      title: "Atención Personalizada",
      description: "Servicio adaptado a sus necesidades específicas"
    },
    {
      title: "Acabados de Calidad",
      description: "Materiales premium y acabados duraderos"
    }
  ];

  const testimonials = [
    {
      name: "Ana Martínez",
      rating: 5,
      text: "Excelente trabajo en la pintura de mi piso. El equipo fue muy profesional y limpio.",
      service: "Pintura de Piso"
    },
    {
      name: "Carlos Ruiz",
      rating: 5,
      text: "Transformaron por completo mi vivienda. Muy satisfecho con el resultado.",
      service: "Renovación de Piso"
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicio de Pintura de Pisos en El Cañaveral",
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
    "description": "Servicio profesional de pintura para pisos en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada.",
    "serviceType": "Pintura de Pisos"
  };

  return (
    <div className="animate-fade-in">
      <Helmet>
        <title>Pintores de Pisos en El Cañaveral | Pintores El Cañaveral</title>
        <meta name="description" content="Servicio profesional de pintura para pisos en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada. Solicite presupuesto sin compromiso." />
        <meta property="og:title" content="Pintores de Pisos en El Cañaveral | Pintores El Cañaveral" />
        <meta property="og:description" content="Servicio profesional de pintura para pisos en El Cañaveral. Transformamos su hogar con acabados de calidad y atención personalizada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pintoreselcanaveral.pro/servicios/pisos" />
        <meta property="og:image" content="https://pintoreselcanaveral.pro/og-image.png" />
        <link rel="canonical" href="https://pintoreselcanaveral.pro/servicios/pisos" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <ServiceDetailHero
        title="Pintores de Pisos en El Cañaveral"
        description="Servicios profesionales de pintura para pisos y apartamentos. Transformamos su hogar con acabados de calidad."
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
            ¿Necesita pintar su piso en El Cañaveral?
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

export default ApartmentsPainting;

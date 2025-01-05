import { Building2, PaintBucket, CheckCircle2, Clock } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';
import { Helmet } from 'react-helmet-async';

const IndustrialPainting = () => {
  const benefits = [
    {
      title: "Experiencia Industrial",
      description: "Amplia experiencia en pintura de naves industriales y espacios de gran formato"
    },
    {
      title: "Equipamiento Especializado",
      description: "Contamos con maquinaria y herramientas específicas para trabajos industriales"
    },
    {
      title: "Acabados Duraderos",
      description: "Utilizamos pinturas industriales de alta resistencia y durabilidad"
    }
  ];

  const testimonials = [
    {
      name: "Roberto García",
      rating: 5,
      text: "Excelente trabajo en nuestra nave industrial. El equipo fue muy profesional y cumplió con todos los plazos establecidos.",
      service: "Pintura Industrial Completa"
    },
    {
      name: "María Sánchez",
      rating: 5,
      text: "La calidad del acabado en nuestra nave es excepcional. Muy satisfechos con el servicio y la atención recibida.",
      service: "Renovación Industrial"
    }
  ];

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
    <div className="animate-fade-in">
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

      <ServiceDetailHero
        title="Pintores de Naves Industriales en El Cañaveral"
        description="Servicios profesionales de pintura para naves industriales y espacios de gran formato. Soluciones duraderas y de alta calidad para su negocio."
        Icon={Building2}
      />
      
      {/* Servicios Específicos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestros Servicios para Naves Industriales</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Servicios Incluidos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de estructuras metálicas</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Recubrimientos industriales</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Pintura de suelos industriales</span>
                </li>
                <li className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-6 w-6" />
                  <span>Señalización industrial</span>
                </li>
              </ul>
              <Link to="/contacto" className="btn-primary inline-block mt-4">
                Solicitar Presupuesto
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                alt="Pintura industrial profesional"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Nuestro Proceso de Trabajo</h2>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Evaluación</h3>
              <p className="text-gray-600">Análisis detallado del proyecto</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planificación</h3>
              <p className="text-gray-600">Programación y logística</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Trabajo profesional y eficiente</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Entrega</h3>
              <p className="text-gray-600">Control de calidad y garantía</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita pintar su nave industrial en El Cañaveral?
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

export default IndustrialPainting;

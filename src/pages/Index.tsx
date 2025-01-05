import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ServiceList from '@/components/ServiceList';
import ServiceGallery from '@/components/ServiceGallery';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const testimonials = [
    {
      name: "Carlos Martínez",
      rating: 5,
      text: "Excelente trabajo en la pintura de mi piso en El Cañaveral. Muy profesionales y puntuales.",
      service: "Pintura Interior"
    },
    {
      name: "Laura Sánchez",
      rating: 5,
      text: "Transformaron la fachada de nuestra comunidad. El resultado es espectacular.",
      service: "Pintura Exterior"
    },
    {
      name: "Miguel Ángel García",
      rating: 5,
      text: "Gran trabajo con el papel pintado. Quedó perfecto y en el tiempo acordado.",
      service: "Papel Pintado"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pintores en El Cañaveral | Servicios Profesionales de Pintura en Madrid</title>
        <meta name="description" content="Servicios profesionales de pintura en El Cañaveral, Madrid. Especialistas en pintura de interiores, exteriores, fachadas y comunidades. Presupuesto sin compromiso." />
        <meta name="keywords" content="pintores El Cañaveral, pintura Madrid, servicios de pintura, pintores profesionales, pintura interiores, pintura exteriores" />
        <meta property="og:title" content="Pintores en El Cañaveral | Servicios Profesionales de Pintura" />
        <meta property="og:description" content="Servicios profesionales de pintura en El Cañaveral, Madrid. Especialistas en pintura de interiores, exteriores, fachadas y comunidades." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://pintoreselcanaveral.com" />
        
        {/* Schema.org markup para negocio local */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pintores El Cañaveral",
            "image": "https://pintoreselcanaveral.com/og-image.png",
            "description": "Servicios profesionales de pintura en El Cañaveral, Madrid. Especialistas en pintura de interiores, exteriores, fachadas y comunidades.",
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
            "telephone": "+34744717942",
            "priceRange": "€€",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
      </Helmet>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pintores Profesionales en El Cañaveral
              </h1>
              <p className="text-xl mb-8">
                Transformamos espacios con calidad y profesionalidad en El Cañaveral, Madrid y alrededores
              </p>
              <Link to="/contacto" className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Solicitar Presupuesto Gratuito
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">Nuestros Servicios</h2>
            <ServiceList />
          </div>
        </section>

        {/* Nueva Sección de Galería */}
        <ServiceGallery />

        {/* Testimonios Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Lo que dicen nuestros clientes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                {[
                  "Más de 10 años de experiencia",
                  "Presupuestos sin compromiso",
                  "Materiales de primera calidad",
                  "Garantía en todos los trabajos",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Equipo profesional cualificado",
                  "Puntualidad y compromiso",
                  "Limpieza tras el trabajo",
                  "Precios competitivos",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas un presupuesto para tu proyecto?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacta con nosotros y te ofreceremos un presupuesto detallado sin compromiso
            </p>
            <Link to="/contacto" className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contactar Ahora
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;

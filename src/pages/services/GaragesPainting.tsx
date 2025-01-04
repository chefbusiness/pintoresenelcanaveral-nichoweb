import { Helmet } from 'react-helmet-async';
import { Warehouse, CheckCircle2, Clock, PaintBucket } from 'lucide-react';
import ServiceDetailHero from '@/components/ServiceDetailHero';
import { Link } from 'react-router-dom';
import TestimonialCard from '@/components/TestimonialCard';

const GaragesPainting = () => {
  const benefits = [
    {
      title: "Durabilidad Garantizada",
      description: "Utilizamos pinturas epoxy de alta calidad que garantizan una durabilidad excepcional"
    },
    {
      title: "Acabado Profesional",
      description: "Nuestro equipo especializado asegura un acabado perfecto y uniforme"
    },
    {
      title: "Servicio Rápido",
      description: "Nos adaptamos a tus tiempos para minimizar las molestias"
    }
  ];

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

      <ServiceDetailHero
        title="Pintores de Garajes en El Cañaveral"
        description="Especialistas en pintura de garajes comunitarios y particulares. Servicio profesional con los mejores materiales y acabados."
        Icon={Warehouse}
      />
      
      {/* Sección de Servicios Específicos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Nuestros Servicios de Pintura para Garajes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">¿Qué incluye nuestro servicio?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Pintura epoxy de alta resistencia</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Señalización de plazas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Tratamiento antideslizante</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                  <span>Numeración de plazas</span>
                </li>
              </ul>
              <Link to="/contacto" className="btn-primary inline-block mt-4">
                Solicitar Presupuesto
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
                alt="Pintura profesional de garajes en El Cañaveral"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <PaintBucket className="text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proceso */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Evaluación</h3>
              <p className="text-gray-600">Visitamos tu garaje y evaluamos el trabajo necesario</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Presupuesto</h3>
              <p className="text-gray-600">Te enviamos un presupuesto detallado sin compromiso</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Ejecución</h3>
              <p className="text-gray-600">Realizamos el trabajo en el tiempo acordado</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Garantía</h3>
              <p className="text-gray-600">Garantizamos la calidad de nuestro trabajo</p>
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas pintar tu garaje en El Cañaveral?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para obtener un presupuesto personalizado sin compromiso
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

export default GaragesPainting;

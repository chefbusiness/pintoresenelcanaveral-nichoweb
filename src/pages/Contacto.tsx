import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | Pintores El Cañaveral - Solicita Presupuesto Gratuito</title>
        <meta 
          name="description" 
          content="Contacta con Pintores El Cañaveral para un presupuesto gratuito. Servicios profesionales de pintura en Madrid. Llámanos al 744 717 942 o escríbenos." 
        />
        <meta 
          name="keywords" 
          content="contacto pintores El Cañaveral, presupuesto pintura Madrid, pintores profesionales contacto, teléfono pintores Madrid" 
        />
        <meta property="og:title" content="Contacto | Pintores El Cañaveral - Solicita Presupuesto" />
        <meta 
          property="og:description" 
          content="Contacta con nuestro equipo de pintores profesionales en El Cañaveral. Presupuesto sin compromiso." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="canonical" href="https://pintoreselcanaveral.pro/contacto" />

        {/* Schema.org markup para página de contacto */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto Pintores El Cañaveral",
            "description": "Página de contacto para servicios de pintura en El Cañaveral",
            "url": "https://pintoreselcanaveral.pro/contacto",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Pintores El Cañaveral",
              "image": "https://pintoreselcanaveral.pro/og-image.png",
              "telephone": "+34744717942",
              "email": "info@pintoreselcanaveral.pro",
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34744717942",
                "contactType": "customer service",
                "areaServed": "El Cañaveral",
                "availableLanguage": "Spanish"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl">
            Solicita tu presupuesto gratuito o consúltanos cualquier duda
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <a 
                      href="tel:744717942" 
                      className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                      744 717 942
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@pintoreselcanaveral.pro</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Área de Servicio</h3>
                    <p className="text-gray-600">El Cañaveral, Madrid y alrededores</p>
                    <p className="text-gray-600">Código Postal: 28052</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Horario de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 19:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Solicita Presupuesto</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12137.078148006495!2d-3.5534387871582036!3d40.42513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ff33d2b6f45%3A0x2e5e9611d48fb085!2sEl%20Ca%C3%B1averal%2C%2028052%20Madrid!5e0!3m2!1ses!2ses!4v1710799027252!5m2!1ses!2ses"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de El Cañaveral"
        ></iframe>
      </section>
    </>
  );
};

export default Contacto;
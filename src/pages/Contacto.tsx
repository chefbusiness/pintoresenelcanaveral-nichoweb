import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contacto = () => {
  return (
    <div>
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
    </div>
  );
};

export default Contacto;
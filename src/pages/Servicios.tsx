import { Link } from 'react-router-dom';

const Servicios = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios de Pintura Profesional
          </h1>
          <p className="text-xl">
            Descubre nuestra amplia gama de servicios de pintura en El Cañaveral
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Pintura Interior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pintura Interior</h2>
                <p className="text-gray-600 mb-6">
                  Transformamos los espacios interiores de tu hogar o negocio con acabados profesionales y duraderos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Pintura de paredes y techos</li>
                  <li>✓ Tratamiento de humedades</li>
                  <li>✓ Alisado de paredes</li>
                  <li>✓ Aplicación de esmaltes</li>
                </ul>
                <Link to="/contacto" className="btn-primary">
                  Solicitar Presupuesto
                </Link>
              </div>
              <div className="bg-gray-100 h-64 rounded-lg"></div>
            </div>

            {/* Pintura Exterior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-100 h-64 rounded-lg"></div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4">Pintura Exterior</h2>
                <p className="text-gray-600 mb-6">
                  Protegemos y embellecemos las fachadas con materiales de alta calidad resistentes a la intemperie.
                </p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Pintura de fachadas</li>
                  <li>✓ Impermeabilización</li>
                  <li>✓ Reparación de grietas</li>
                  <li>✓ Tratamientos anti-humedad</li>
                </ul>
                <Link to="/contacto" className="btn-primary">
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            {/* Pintura Decorativa */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pintura Decorativa</h2>
                <p className="text-gray-600 mb-6">
                  Creamos ambientes únicos con técnicas decorativas especiales y acabados personalizados.
                </p>
                <ul className="space-y-2 mb-6">
                  <li>✓ Efectos decorativos</li>
                  <li>✓ Papel pintado</li>
                  <li>✓ Veladuras</li>
                  <li>✓ Estuco veneciano</li>
                </ul>
                <Link to="/contacto" className="btn-primary">
                  Solicitar Presupuesto
                </Link>
              </div>
              <div className="bg-gray-100 h-64 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para discutir tu proyecto y obtener un presupuesto detallado sin compromiso
          </p>
          <Link to="/contacto" className="btn-primary">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
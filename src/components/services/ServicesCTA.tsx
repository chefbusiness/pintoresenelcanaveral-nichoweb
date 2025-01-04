import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">
          ¿Necesitas un servicio personalizado?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contacta con nosotros para discutir tu proyecto y obtener un presupuesto detallado sin compromiso
        </p>
        <Link to="/contacto" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
          Contactar Ahora
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;
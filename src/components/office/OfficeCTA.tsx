import { Link } from 'react-router-dom';

const OfficeCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">
          ¿Necesita pintar su oficina en El Cañaveral?
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
  );
};

export default OfficeCTA;
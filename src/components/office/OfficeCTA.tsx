import { Link } from 'react-router-dom';

const OfficeCTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Necesita un presupuesto para pintar su oficina?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contáctenos hoy mismo y reciba un presupuesto detallado sin compromiso
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Solicitar Presupuesto
        </Link>
      </div>
    </section>
  );
};

export default OfficeCTA;
import { PaintBucket } from 'lucide-react';

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

const GaragesBenefits = () => {
  return (
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
  );
};

export default GaragesBenefits;
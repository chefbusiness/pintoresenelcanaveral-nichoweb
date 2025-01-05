import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Experiencia en Viviendas",
    description: "Amplia experiencia en pintura de casas"
  },
  {
    title: "Servicio Integral",
    description: "Atención personalizada y servicio completo"
  },
  {
    title: "Acabados Premium",
    description: "Materiales de alta calidad y acabados duraderos"
  }
];

const HousesBenefits = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Beneficios de Nuestro Servicio</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg shadow-md">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesBenefits;
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: "Pedro Sánchez",
    rating: 5,
    text: "Excelente trabajo en la pintura de mi casa. El equipo fue muy profesional y detallista.",
    service: "Pintura de Vivienda"
  },
  {
    name: "María López",
    rating: 5,
    text: "Transformaron por completo nuestra casa. El resultado superó nuestras expectativas.",
    service: "Renovación de Vivienda"
  }
];

const HousesTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HousesTestimonials;
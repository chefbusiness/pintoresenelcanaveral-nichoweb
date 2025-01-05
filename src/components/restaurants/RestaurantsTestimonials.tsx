import TestimonialCard from '@/components/TestimonialCard';

const RestaurantsTestimonials = () => {
  const testimonials = [
    {
      name: "Miguel Ángel Rodríguez",
      rating: 5,
      text: "Excelente trabajo en la renovación de nuestro restaurante. El equipo fue muy profesional y respetó nuestros horarios.",
      service: "Pintura de Restaurante"
    },
    {
      name: "Laura García",
      rating: 5,
      text: "Transformaron completamente nuestro local. El resultado es increíble y el proceso fue muy profesional.",
      service: "Renovación de Restaurante"
    }
  ];

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

export default RestaurantsTestimonials;
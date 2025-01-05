import TestimonialCard from '@/components/TestimonialCard';

const CommunitiesTestimonials = () => {
  const testimonials = [
    {
      name: "Pedro Sánchez",
      rating: 5,
      text: "Excelente trabajo en la pintura de todas las zonas comunes de nuestra comunidad. Muy profesionales y organizados.",
      service: "Pintura de Zonas Comunes"
    },
    {
      name: "María López",
      rating: 5,
      text: "Pintaron todos los pasillos y escaleras de nuestra comunidad. El resultado es espectacular y el precio muy competitivo.",
      service: "Pintura de Escaleras"
    }
  ];

  return (
    <section className="py-16 bg-white">
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

export default CommunitiesTestimonials;
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';

const Contacto = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="Contacto - Pintores El Cañaveral"
        description="Contacte con nuestro equipo de pintores profesionales en El Cañaveral, Madrid. Solicite presupuesto sin compromiso. Respuesta rápida garantizada."
      />
      <ContactForm />
    </div>
  );
};

export default Contacto;
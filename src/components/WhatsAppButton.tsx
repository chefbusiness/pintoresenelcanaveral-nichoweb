import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '34744717942'; // Número de teléfono de la empresa
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de pintura.');
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
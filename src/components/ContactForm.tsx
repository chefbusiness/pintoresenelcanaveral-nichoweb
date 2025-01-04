import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Pintura Interior',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: 'Pintura Interior',
      mensaje: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.nombre}
          onChange={(e) => setFormData({...formData, nombre: e.target.value})}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.telefono}
          onChange={(e) => setFormData({...formData, telefono: e.target.value})}
        />
      </div>

      <div>
        <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
          Servicio de interés
        </label>
        <select
          id="servicio"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.servicio}
          onChange={(e) => setFormData({...formData, servicio: e.target.value})}
        >
          <option>Pintura Interior</option>
          <option>Pintura Exterior</option>
          <option>Pintura de Viviendas</option>
          <option>Pintura de Chalets</option>
          <option>Pintura de Apartamentos</option>
          <option>Pintura de Oficinas</option>
          <option>Pintura de Restaurantes</option>
          <option>Pintura de Garajes</option>
          <option>Pintura de Comunidades</option>
          <option>Pintura Industrial</option>
          <option>Pintura Comercial</option>
          <option>Pintura Decorativa</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.mensaje}
          onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
        ></textarea>
      </div>

      <button type="submit" className="btn-primary w-full">
        Solicitar Presupuesto
      </button>
    </form>
  );
};

export default ContactForm;
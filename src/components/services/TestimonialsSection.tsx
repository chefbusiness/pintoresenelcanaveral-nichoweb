import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonios = [
  {
    nombre: "María García",
    texto: "Excelente trabajo en la pintura de mi casa. El equipo fue muy profesional y limpio.",
    rating: 5,
    servicio: "Pintura Interior"
  },
  {
    nombre: "Juan Rodríguez",
    texto: "Transformaron por completo la fachada de mi negocio. Muy satisfecho con el resultado.",
    rating: 5,
    servicio: "Pintura Exterior"
  },
  {
    nombre: "Ana Martínez",
    texto: "El acabado decorativo que realizaron en mi salón es espectacular. Superó mis expectativas.",
    rating: 5,
    servicio: "Pintura Decorativa"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {testimonio.nombre}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonio.texto}</p>
                <p className="text-sm text-primary mt-2">{testimonio.servicio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
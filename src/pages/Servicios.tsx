import { Link } from 'react-router-dom';
import { PaintBucket, Brush, Palette, SprayCanIcon, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Servicios = () => {
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

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios de Pintura Profesional en El Cañaveral
          </h1>
          <p className="text-xl">
            Transformamos espacios con calidad y profesionalismo
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {/* Pintura Interior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <PaintBucket className="text-primary h-8 w-8" />
                  <h2 className="text-3xl font-bold">Pintura Interior</h2>
                </div>
                <p className="text-gray-600">
                  Transformamos los espacios interiores de tu hogar o negocio con acabados profesionales y duraderos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Pintura de paredes y techos
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Tratamiento de humedades
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Alisado de paredes
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Aplicación de esmaltes
                  </li>
                </ul>
                <Link to="/contacto" className="btn-primary inline-block">
                  Solicitar Presupuesto
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg" 
                  alt="Pintura interior profesional"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Pintura Exterior */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
                  alt="Pintura exterior profesional"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <SprayCanIcon className="text-primary h-8 w-8" />
                  <h2 className="text-3xl font-bold">Pintura Exterior</h2>
                </div>
                <p className="text-gray-600">
                  Protegemos y embellecemos las fachadas con materiales de alta calidad resistentes a la intemperie.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Pintura de fachadas
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Impermeabilización
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Reparación de grietas
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Tratamientos anti-humedad
                  </li>
                </ul>
                <Link to="/contacto" className="btn-primary inline-block">
                  Solicitar Presupuesto
                </Link>
              </div>
            </div>

            {/* Pintura Decorativa */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Palette className="text-primary h-8 w-8" />
                  <h2 className="text-3xl font-bold">Pintura Decorativa</h2>
                </div>
                <p className="text-gray-600">
                  Creamos ambientes únicos con técnicas decorativas especiales y acabados personalizados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Efectos decorativos
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Papel pintado
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Veladuras
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush className="text-primary h-5 w-5" />
                    Estuco veneciano
                  </li>
                </ul>
                <Link to="/contacto" className="btn-primary inline-block">
                  Solicitar Presupuesto
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg" 
                  alt="Pintura decorativa profesional"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
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

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros para discutir tu proyecto y obtener un presupuesto detallado sin compromiso
          </p>
          <Link to="/contacto" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
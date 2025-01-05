const ServiceGallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Nuestros Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Imagen 1 - Pintura Interior */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/lovable-uploads/5d2e5339-5ae4-4381-ace3-9c3894cdfd1a.png"
                alt="Pintura interior profesional - Pintores trabajando en una pared naranja"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">Pintura Interior</h3>
                <p className="text-white/90 text-sm mt-2">Acabados profesionales y duraderos</p>
              </div>
            </div>
          </div>

          {/* Imagen 2 - Pintura Exterior */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/lovable-uploads/f15c4fe9-5ea9-420e-ad9d-13db818c047a.png"
                alt="Pintura exterior profesional - Pintores trabajando en una fachada"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">Pintura Exterior</h3>
                <p className="text-white/90 text-sm mt-2">Protección y belleza para fachadas</p>
              </div>
            </div>
          </div>

          {/* Imagen 3 - Pintura Decorativa */}
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/lovable-uploads/137cc4d5-1385-4c29-848c-8fde28cd1bf9.png"
                alt="Pintura decorativa - Muestras de color y herramientas de pintura"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold">Pintura Decorativa</h3>
                <p className="text-white/90 text-sm mt-2">Diseños únicos y personalizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
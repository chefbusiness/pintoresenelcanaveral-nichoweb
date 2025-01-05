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
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Pintura interior profesional"
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
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
                alt="Pintura exterior profesional"
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
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="Pintura decorativa"
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
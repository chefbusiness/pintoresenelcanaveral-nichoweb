import React from 'react';

const BrandLogos = () => {
  const brands = [
    {
      name: "Titanlux",
      logo: "https://www.titanlux.es/wp-content/themes/titan/assets/images/logo-titan.svg",
      alt: "Logo Titanlux"
    },
    {
      name: "Valentine",
      logo: "https://www.valentine.es/wp-content/themes/valentine/images/logo.svg",
      alt: "Logo Valentine"
    },
    {
      name: "Bruguer",
      logo: "https://www.bruguer.es/content/dam/akzonobel-flourish/bruguer/spain/logos/bruguer-logo.png",
      alt: "Logo Bruguer"
    },
    {
      name: "Jotun",
      logo: "https://www.jotun.com/images/jotun-logo-default.svg",
      alt: "Logo Jotun"
    },
    {
      name: "Procolor",
      logo: "https://www.procolor.es/wp-content/themes/procolor/images/logo.svg",
      alt: "Logo Procolor"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">
          Trabajamos con las mejores marcas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
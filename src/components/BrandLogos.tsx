import React from 'react';

const BrandLogos = () => {
  const brands = [
    {
      name: "Titanlux",
      logo: "/lovable-uploads/0fc7644c-a266-485e-821e-2982531d6328.png",
      alt: "Logo Titanlux"
    },
    {
      name: "Hempel",
      logo: "/lovable-uploads/6439d25b-78ac-4c4a-aa26-cff43370827b.png",
      alt: "Logo Hempel"
    },
    {
      name: "Bruguer",
      logo: "/lovable-uploads/5ad84870-d34e-4b87-8844-e1dbbb2db449.png",
      alt: "Logo Bruguer"
    },
    {
      name: "Procolor",
      logo: "/lovable-uploads/6a2463e1-8ac6-4646-9c9a-d0ff8674f43f.png",
      alt: "Logo Procolor"
    },
    {
      name: "Guadiel",
      logo: "/lovable-uploads/a7e6c81d-7b20-466a-a9db-c32373541bf4.png",
      alt: "Logo Guadiel"
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
const GaragesProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Evaluación</h3>
            <p className="text-gray-600">Visitamos tu garaje y evaluamos el trabajo necesario</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Presupuesto</h3>
            <p className="text-gray-600">Te enviamos un presupuesto detallado sin compromiso</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Ejecución</h3>
            <p className="text-gray-600">Realizamos el trabajo en el tiempo acordado</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold mb-2">Garantía</h3>
            <p className="text-gray-600">Garantizamos la calidad de nuestro trabajo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaragesProcess;
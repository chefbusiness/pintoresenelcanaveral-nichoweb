const FacadesWorkProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestro Proceso de Trabajo</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Inspección</h3>
            <p className="text-gray-600">Evaluación detallada del estado de la fachada</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Preparación</h3>
            <p className="text-gray-600">Limpieza y reparación de superficies</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Ejecución</h3>
            <p className="text-gray-600">Aplicación de pinturas de alta calidad</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold mb-2">Acabado</h3>
            <p className="text-gray-600">Revisión final y garantía del trabajo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacadesWorkProcess;
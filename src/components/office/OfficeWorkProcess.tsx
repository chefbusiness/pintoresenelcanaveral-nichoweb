const OfficeWorkProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestro Proceso de Trabajo</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2">Evaluación</h3>
            <p className="text-gray-600">Análisis detallado de sus necesidades</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2">Planificación</h3>
            <p className="text-gray-600">Programación adaptada a su horario</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2">Ejecución</h3>
            <p className="text-gray-600">Trabajo profesional y eficiente</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-xl">4</span>
            </div>
            <h3 className="font-semibold mb-2">Entrega</h3>
            <p className="text-gray-600">Revisión final y garantía</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeWorkProcess;
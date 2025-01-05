const WorkProcess = () => {
  const steps = [
    { number: 1, title: "Evaluación", description: "Análisis detallado del proyecto" },
    { number: 2, title: "Planificación", description: "Programación y logística" },
    { number: 3, title: "Ejecución", description: "Trabajo profesional y eficiente" },
    { number: 4, title: "Entrega", description: "Control de calidad y garantía" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Nuestro Proceso de Trabajo</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
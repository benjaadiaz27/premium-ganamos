export default function Benefits() {
  const items = [
    {
      icon: "⚡",
      title: "Cargas rápidas",
      text: "Procesos simples y rápidos para que puedas empezar."
    },
    {
      icon: "💎",
      title: "Experiencia premium",
      text: "Diseño moderno y atención personalizada."
    },
    {
      icon: "📱",
      title: "Atención 24/7",
      text: "Soporte disponible cuando lo necesites."
    }
  ];

  return (
    <section className="benefits">

      <h2>
        ¿Por qué elegir Premium Ganamos?
      </h2>

      <div className="benefit-grid">

        {items.map((item, index) => (
          <div className="benefit-card" key={index}>

            <span className="benefit-icon">
              {item.icon}
            </span>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
export default function Testimonials() {
  const items = [
    {
      quote: 'Duplicamos las ventas en 60 días. El chatbot cerró operaciones mientras dormíamos.',
      author: 'Sofía, E-commerce de moda'
    },
    {
      quote: 'La creatividad y la velocidad nos sorprendieron. Pasamos de idea a resultados reales en semanas.',
      author: 'Martín, SaaS B2B'
    },
    {
      quote: 'Automatizamos atención y postventa. Ahorro mensual del 30% en costos operativos.',
      author: 'Lucía, Educación online'
    }
  ]

  return (
    <section id="testimonios" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Resultados reales</h2>
          <p className="mt-3 text-emerald-100/80">Impacto tangible en ventas, eficiencia y crecimiento.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <figure key={idx} className="relative border border-emerald-500/20 rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent">
              <blockquote className="text-emerald-100/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-emerald-300/80">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function FAQ() {
  const faqs = [
    {
      q: '¿Pueden garantizar resultados?',
      a: 'Trabajamos con objetivos claros y métricas. No prometemos magia: prometemos un sistema que optimiza conversiones y reduce pérdidas.'
    },
    {
      q: '¿Es difícil integrar todo?',
      a: 'Nos encargamos del setup completo. Integramos con tus herramientas actuales (CRM, WhatsApp, mailers) y entrenamos a tu equipo.'
    },
    {
      q: '¿Cuál es el potencial económico?',
      a: 'La IA bien aplicada genera más ingresos con menos esfuerzo. Nuestra meta: aumentar tus ventas y disminuir el costo por adquisición.'
    }
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Preguntas frecuentes</h2>
          <p className="mt-3 text-emerald-100/80">Resolvemos tus dudas para que tomes decisiones con confianza.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-emerald-500/20 rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent">
              <summary className="cursor-pointer text-white font-medium list-none flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-emerald-300 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-emerald-100/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

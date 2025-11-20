export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden border border-emerald-500/20 rounded-3xl p-10 bg-gradient-to-br from-emerald-500/10 via-black to-lime-400/10">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-lime-400/20 blur-3xl" />

          <h3 className="text-white text-2xl sm:text-3xl font-bold">Listo para multiplicar tus ganancias</h3>
          <p className="mt-2 text-emerald-100/80 max-w-2xl">Agendá una evaluación estratégica sin costo para detectar oportunidades concretas de IA en tu negocio.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(163,230,53,0.45)] transition-all">Agendar evaluación</a>
            <a href="#faq" className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">Ver FAQ</a>
          </div>
        </div>
      </div>
    </section>
  )
}

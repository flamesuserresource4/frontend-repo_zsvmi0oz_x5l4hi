import { CheckCircle2, Brain, Wrench, UploadCloud } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: Brain,
      title: 'Evaluación estratégica',
      desc: 'Analizamos tu negocio, embudos y oportunidades de IA.'
    },
    {
      icon: Wrench,
      title: 'Creación con foco en ROI',
      desc: 'Diseñamos e implementamos tu nueva estructura inteligente.'
    },
    {
      icon: UploadCloud,
      title: 'Lanzamiento y optimización',
      desc: 'Publicamos, medimos y mejoramos con experimentos continuos.'
    }
  ]

  return (
    <section id="proceso" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Nuestro proceso en 3 pasos</h2>
          <p className="mt-3 text-emerald-100/80">De la estrategia al lanzamiento, con foco en impacto medible.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-emerald-500/20 rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 text-black flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-emerald-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 space-y-2 text-emerald-200/80 text-sm">
          {['Integración total de procesos', 'Chatbots y agentes smart 24/7', 'Optimización de conversiones', 'Ahorro de tiempo y recursos'].map(i => (
            <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" />{i}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

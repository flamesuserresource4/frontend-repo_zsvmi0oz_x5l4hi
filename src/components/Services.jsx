import { Cpu, Bot, Workflow, Rocket, LineChart, PlugZap } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Webs y funnels que convierten',
    desc: 'Diseño y desarrollo con enfoque en conversiones y performance.'
  },
  {
    icon: Bot,
    title: 'Chatbots y agentes smart',
    desc: 'Atención 24/7 con IA conversacional para ventas y soporte.'
  },
  {
    icon: Workflow,
    title: 'Automatización end-to-end',
    desc: 'Integramos tus procesos y sistemas para ahorrar tiempo y costos.'
  },
  {
    icon: PlugZap,
    title: 'Integraciones',
    desc: 'Conectamos CRM, WhatsApp, mailers y herramientas clave.'
  },
  {
    icon: LineChart,
    title: 'Analytics & ROI',
    desc: 'Métricas claras: optimizamos para más ingresos, menos fuga.'
  },
  {
    icon: Rocket,
    title: 'Lanzamiento y escalamiento',
    desc: 'Plan de crecimiento con experimentación y mejoras continuas.'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Automatización y crecimiento con IA</h2>
          <p className="mt-3 text-emerald-100/80">Soluciones enfocadas en resultados: más ingresos, menos esfuerzo.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative border border-emerald-500/20 rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent hover:border-emerald-400/40 transition overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 text-black flex items-center justify-center shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-emerald-100/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Cpu, Bot, Workflow, Rocket, LineChart, PlugZap, ShieldCheck, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

const cards = [
  {
    icon: Cpu,
    title: 'Webs y funnels que convierten',
    intro: 'Arquitectura orientada a performance.',
    bullets: [
      'Landing + funnel con tests A/B continuos',
      'Velocidad + SEO técnico para bajar CPA',
      'Copywriting persuasivo entrenado con datos'
    ],
    roi: 'Incremento del CVR y reducción del costo por adquisición.'
  },
  {
    icon: Bot,
    title: 'Chatbots y agentes smart',
    intro: 'Conversaciones que venden 24/7.',
    bullets: [
      'Cualificación automática de leads',
      'Hand-off a humano por WhatsApp/CRM',
      'Entrenados con tu base de conocimiento'
    ],
    roi: 'Más leads calificados y menor tiempo de respuesta.'
  },
  {
    icon: Workflow,
    title: 'Automatización end‑to‑end',
    intro: 'Procesos orquestados con IA.',
    bullets: [
      'Zaps y microservicios para tareas repetitivas',
      'Rutas condicionadas por scoring de intent',
      'Alertas y reportes automáticos'
    ],
    roi: 'Ahorro de horas operativas y menos errores.'
  },
  {
    icon: PlugZap,
    title: 'Integraciones',
    intro: 'Todo tu stack, conectado.',
    bullets: [
      'CRM, WhatsApp Cloud API, mailers, sheets',
      'Webhooks y APIs internas/externas',
      'Sinergia entre marketing, ventas y soporte'
    ],
    roi: 'Datos unificados para decisiones más rápidas.'
  },
  {
    icon: LineChart,
    title: 'Analytics & ROI',
    intro: 'Métricas que importan.',
    bullets: [
      'Dashboard con KPIs de embudo y cohortes',
      'Tracking server‑side y attribution básica',
      'Alertas de anomalías y oportunidades'
    ],
    roi: 'Optimización continua basada en evidencia.'
  },
  {
    icon: Rocket,
    title: 'Lanzamiento y escalamiento',
    intro: 'Crecimiento con método.',
    bullets: [
      'Roadmap de experimentos por impacto/esfuerzo',
      'Mejora continua de UX y mensajes',
      'Playbooks replicables por canal'
    ],
    roi: 'Mayor LTV y retorno acumulado en 90 días.'
  }
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Automatización y crecimiento con IA</h2>
          <p className="mt-3 text-emerald-100/80">Soluciones enfocadas en ROI: más ingresos, menos costo y menos fricción.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, intro, bullets, roi }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="group relative border border-emerald-500/20 rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent overflow-hidden"
            >
              {/* glow */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition" />

              {/* header */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 text-black flex items-center justify-center shadow-md ring-1 ring-amber-300/50">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-emerald-100/80 text-sm">{intro}</p>
                </div>
              </div>

              {/* collapsed content */}
              <ul className="mt-4 space-y-2 text-emerald-100/80 text-sm">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-amber-300/40" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* hover reveal */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <div className="m-4 rounded-xl border border-emerald-400/30 bg-black/70 backdrop-blur-xl p-4">
                  <p className="text-amber-300 text-xs font-medium">Impacto en ROI</p>
                  <p className="text-emerald-100/90 text-sm mt-1">{roi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

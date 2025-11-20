import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="inicio">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Estructuras AI que multiplican tus ganancias
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tu negocio trabajando por vos mientras tu competencia duerme
          </h1>
          <p className="mt-6 text-lg text-emerald-100/90 max-w-2xl">
            Escalamos y automatizamos tu operación con inteligencia artificial: convertimos visitas en ventas, atendemos 24/7 con agentes inteligentes y conectamos todos tus procesos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(163,230,53,0.45)] transition-all">Multiplica tus ganancias</a>
            <a href="#servicios" className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">Ver servicios</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

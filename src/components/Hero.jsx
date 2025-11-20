import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Clover } from 'lucide-react'

const coinVariants = {
  float: (i) => ({
    rotate: [0, 360],
    y: [0, -12, 0],
    transition: {
      rotate: { duration: 8 + i, repeat: Infinity, ease: 'linear' },
      y: { duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }
    }
  })
}

export default function Hero() {
  const coins = Array.from({ length: 10 }).map((_, i) => ({
    size: 24 + (i % 3) * 6,
    delay: i * 0.15,
    distance: 120 + (i % 5) * 18,
    angle: (i / 10) * Math.PI * 2,
  }))

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" id="inicio">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay to ensure readable contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none" />

      {/* Branded 3D-like centerpiece: clover + multiplying gold coins */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Glow rings */}
        <div className="absolute w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_60%)] blur-2xl" />
        <div className="absolute w-[40rem] h-[40rem] rounded-full border border-emerald-400/20" />
        {/* Central clover */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [0.95, 1, 0.98, 1], opacity: 1 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 w-40 h-40 rounded-3xl grid place-items-center bg-gradient-to-br from-emerald-400 to-lime-400 shadow-[0_0_80px_rgba(16,185,129,0.55)] ring-4 ring-emerald-400/30"
        >
          <Clover className="w-20 h-20 text-black drop-shadow-[0_0_12px_rgba(0,0,0,0.25)]" />
          {/* Gold rim */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-amber-300/60" />
        </motion.div>

        {/* Orbiting, multiplying coins */}
        {coins.map((c, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={coinVariants}
            animate="float"
            style={{
              width: c.size,
              height: c.size,
              transform: `translate(${Math.cos(c.angle) * c.distance}px, ${Math.sin(c.angle) * c.distance}px)`
            }}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.6)] ring-2 ring-amber-300/70"
          >
            {/* coin shine */}
            <span className="absolute left-1 top-1 w-2 h-2 rounded-full bg-white/70 blur-[1px]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Estructuras AI que multiplican tus ganancias
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Tu negocio trabajando por vos mientras tu competencia duerme
          </h1>
          <p className="mt-6 text-lg text-emerald-100/90 max-w-2xl">
            Escalamos y automatizamos tu operación con inteligencia artificial: convertimos visitas en ventas, atendemos 24/7 con agentes inteligentes y conectamos todos tus procesos.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_60px_rgba(163,230,53,0.55)] transition-all">
              <span className="relative z-10">Multiplica tus ganancias</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-amber-300/60" />
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a href="#servicios" className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">Ver servicios</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

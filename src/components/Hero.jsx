import { motion } from 'framer-motion'
import { Clover } from 'lucide-react'

// Variants
const pulseRing = {
  animate: {
    scale: [0.9, 1.6],
    opacity: [0.35, 0],
    transition: { duration: 2.2, repeat: Infinity, ease: 'easeOut' }
  }
}

const coinOrbit = {
  float: (i) => ({
    rotate: [0, 360],
    y: [0, -10, 0],
    transition: {
      rotate: { duration: 9 + i * 0.4, repeat: Infinity, ease: 'linear' },
      y: { duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }
    }
  })
}

export default function Hero() {
  // Precomputed elements
  const coins = Array.from({ length: 12 }).map((_, i) => ({
    size: 20 + (i % 4) * 6,
    distance: 130 + (i % 6) * 16,
    angle: (i / 12) * Math.PI * 2,
  }))

  // Luck burst particles (simulate "multiplying" coins shooting out and reappearing)
  const bursts = Array.from({ length: 14 }).map((_, i) => ({
    delay: i * 0.25,
    angle: (i / 14) * Math.PI * 2,
  }))

  const metrics = [
    { label: '+237% ROAS', x: -220, y: -40 },
    { label: 'x3 LTV', x: 210, y: 30 },
    { label: '-42% CAC', x: -120, y: 160 },
    { label: '+78% CR', x: 140, y: -150 },
  ]

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" id="inicio">
      {/* Clean, brand background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18)_0%,rgba(0,0,0,0)_55%)]" />
        {/* Subtle grid depth */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(transparent 23px, rgba(255,255,255,0.06) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.06) 24px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Rotating luck rays behind the clover */}
      <motion.div
        aria-hidden
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52rem] h-[52rem] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(250,204,21,0.12), rgba(16,185,129,0.0) 12deg, rgba(16,185,129,0) 45deg)'
        }}
      />

      {/* Centerpiece: clover emits wealth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft inner glow ring */}
        <div className="absolute w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_65%)] blur-2xl" />
        <div className="absolute w-[38rem] h-[38rem] rounded-full border border-emerald-400/20" />

        {/* Pulsing luck ring (suggests compounding) */}
        <motion.div
          variants={pulseRing}
          animate="animate"
          className="absolute w-80 h-80 rounded-full ring-2 ring-amber-300/40"
        />

        {/* Clover */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: [0.96, 1.02, 0.98, 1.01], opacity: 1 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 w-44 h-44 rounded-3xl grid place-items-center bg-gradient-to-br from-emerald-400 to-lime-400 shadow-[0_0_90px_rgba(16,185,129,0.6)] ring-4 ring-emerald-400/30"
        >
          <Clover className="w-20 h-20 text-black drop-shadow-[0_0_14px_rgba(0,0,0,0.25)]" />
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-amber-300/60" />
        </motion.div>

        {/* Orbit coins (steady compounding) */}
        {coins.map((c, i) => (
          <motion.div
            key={`orbit-${i}`}
            custom={i}
            variants={coinOrbit}
            animate="float"
            style={{
              width: c.size,
              height: c.size,
              transform: `translate(${Math.cos(c.angle) * c.distance}px, ${Math.sin(c.angle) * c.distance}px)`
            }}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.55)] ring-2 ring-amber-300/70"
          >
            <span className="absolute left-1 top-1 w-2 h-2 rounded-full bg-white/70 blur-[1px]" />
          </motion.div>
        ))}

        {/* Luck burst coins (multiplication moment) */}
        {bursts.map((b, i) => (
          <motion.span
            key={`burst-${i}`}
            initial={{ opacity: 0, scale: 0.4, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.6, 1],
              x: [0, Math.cos(b.angle) * 220],
              y: [0, Math.sin(b.angle) * 220]
            }}
            transition={{
              delay: 0.8 + b.delay,
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: 'easeOut'
            }}
            className="absolute block w-3 h-3 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.6)]"
          />
        ))}

        {/* Floating ROI badges (signals of growth) */}
        {metrics.map((m, i) => (
          <motion.div
            key={`metric-${i}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [6, -6, 6] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: `translate(${m.x}px, ${m.y}px)` }}
            className="absolute px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 text-sm backdrop-blur-sm shadow-[0_0_16px_rgba(16,185,129,0.35)]"
          >
            {/* subtle glint */}
            <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40" />
            <span className="relative font-semibold">{m.label}</span>
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
            Suerte diseñada: multiplicamos tus ganancias
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Multiplicá tus ganancias como por suerte, pero sin dejarla al azar
          </h1>
          <p className="mt-6 text-lg text-emerald-100/90 max-w-2xl">
            Estructuras de IA que atraen, convierten y retienen: agentes que venden 24/7, funnels optimizados y automatizaciones que hacen crecer tu ROAS mientras dormís.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_60px_rgba(163,230,53,0.55)] transition-all">
              <span className="relative z-10">Quiero multiplicar ahora</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-amber-300/60" />
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a href="#servicios" className="px-6 py-3 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">Ver cómo lo logramos</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

// Smooth infinite loop helpers
const loopRotate = (duration = 36, reverse = false) => ({
  rotate: reverse ? [0, -360] : [0, 360],
  transition: { duration, ease: 'linear', repeat: Infinity }
})

const floatY = (amp = 10, duration = 3.6, delay = 0) => ({
  y: [0, -amp, 0, amp, 0],
  transition: { duration, ease: 'easeInOut', repeat: Infinity, delay }
})

export default function Hero() {
  const ring1Coins = 10
  const ring2Coins = 14

  const metrics = [
    { label: '+237% ROAS', x: -220, y: -40 },
    { label: 'x3 LTV', x: 210, y: 30 },
    { label: '-42% CAC', x: -120, y: 160 },
    { label: '+78% CR', x: 140, y: -150 },
  ]

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" id="inicio">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.20)_0%,rgba(0,0,0,0)_55%)]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(transparent 23px, rgba(255,255,255,0.06) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.06) 24px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Luck rays */}
      <motion.div
        aria-hidden
        animate={loopRotate(48)}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(250,204,21,0.12), rgba(16,185,129,0.0) 10deg, rgba(16,185,129,0) 45deg)'
        }}
      />

      {/* Center stage */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Glow core */}
        <div className="absolute w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_65%)] blur-2xl" />
        <div className="absolute w-[44rem] h-[44rem] rounded-full border border-emerald-400/15" />

        {/* Pulsing ring (soft, never disappears) */}
        <motion.div
          className="absolute w-[24rem] h-[24rem] rounded-full ring-1 ring-amber-300/35"
          animate={{ scale: [0.95, 1.2, 0.95] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Glass neon 3D clover */}
        <CloverGlass />

        {/* Orbit system: two persistent rings (gives sense of multiplication without popping) */}
        <motion.div
          className="absolute"
          style={{ width: 0, height: 0 }}
          animate={loopRotate(28)}
        >
          {[...Array(ring1Coins)].map((_, i) => {
            const angle = (i / ring1Coins) * Math.PI * 2
            const r = 170
            const delay = (i / ring1Coins) * 0.4
            return (
              <motion.div
                key={`r1-${i}`}
                className="absolute rounded-full shadow-[0_0_20px_rgba(245,158,11,0.55)] ring-2 ring-amber-300/70"
                style={{
                  width: 18,
                  height: 18,
                  left: Math.cos(angle) * r,
                  top: Math.sin(angle) * r,
                  background:
                    'linear-gradient(135deg, #fde68a 0%, #f59e0b 55%, #d97706 100%)'
                }}
                animate={floatY(8, 3.2, delay)}
              >
                <span className="absolute left-1 top-1 w-1.5 h-1.5 rounded-full bg-white/80 blur-[1px]" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Second ring: slower, larger radius, staggered entry that eases in once then stays */}
        <motion.div className="absolute" style={{ width: 0, height: 0 }} animate={loopRotate(42, true)}>
          {[...Array(ring2Coins)].map((_, i) => {
            const angle = (i / ring2Coins) * Math.PI * 2
            const r = 230
            const delay = 0.6 + (i / ring2Coins) * 0.6
            return (
              <motion.div
                key={`r2-${i}`}
                className="absolute rounded-full shadow-[0_0_24px_rgba(245,158,11,0.55)] ring-[2px] ring-amber-200/70"
                style={{
                  width: 14,
                  height: 14,
                  left: Math.cos(angle) * r,
                  top: Math.sin(angle) * r,
                  background:
                    'linear-gradient(135deg, #fef08a 0%, #fbbf24 55%, #b45309 100%)'
                }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay }}
              >
                <motion.span className="absolute left-1 top-1 w-1.5 h-1.5 rounded-full bg-white/80 blur-[1px]" animate={floatY(6, 2.8, i * 0.08)} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Soft gold dust trail along an inner arc (always present, no popping) */}
        <GoldDustArc />

        {/* Floating ROI badges */}
        {metrics.map((m, i) => (
          <motion.div
            key={`metric-${i}`}
            animate={{ opacity: 1, y: [6, -6, 6] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transform: `translate(${m.x}px, ${m.y}px)` }}
            className="absolute px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-200 text-sm backdrop-blur-sm shadow-[0_0_16px_rgba(16,185,129,0.35)]"
          >
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

// Components
function CloverGlass() {
  return (
    <div className="relative z-10 w-56 h-56">
      {/* Outer bloom */}
      <div className="absolute inset-[-18%] rounded-full blur-3xl bg-emerald-400/25" />

      {/* Four-leaf clover (clear 4 hojas + pequeño tallo) */}
      <svg viewBox="-120 -120 240 240" className="relative w-full h-full drop-shadow-[0_0_90px_rgba(16,185,129,0.6)]">
        <defs>
          <radialGradient id="petal-grad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#10b981" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.25" />
          </radialGradient>
          <linearGradient id="petal-gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="glass-soft">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.35" />
          </filter>
        </defs>

        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 90}) translate(0,-46)`}>
            {/* Petal heart shape oriented outwards */}
            <path
              d="M0,-28 C14,-52 48,-40 40,-14 C34,8 10,18 0,30 C-10,18 -34,8 -40,-14 C-48,-40 -14,-52 0,-28 Z"
              fill="url(#petal-grad)"
              stroke="#34d399"
              strokeOpacity="0.45"
              strokeWidth="1.5"
              filter="url(#glass-soft)"
            />
            {/* Gloss */}
            <path
              d="M-6,-24 C-18,-40 -36,-18 -28,0 C-18,18 6,18 18,6 C26,-2 12,-18 -6,-24 Z"
              fill="url(#petal-gloss)"
              opacity="0.9"
            />
          </g>
        ))}

        {/* Small stem */}
        <path d="M4,34 C22,58 8,80 -8,96" stroke="#34d399" strokeOpacity="0.6" strokeWidth="4" fill="none" />
        <path d="M4,34 C18,54 10,72 -2,86" stroke="#a7f3d0" strokeOpacity="0.5" strokeWidth="2" fill="none" />

        {/* Center gem and rim */}
        <circle cx="0" cy="0" r="10" fill="#a7f3d0" opacity="0.85" />
        <radialGradient id="center-gloss" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#ecfeff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
        </radialGradient>
        <circle cx="0" cy="0" r="10" fill="url(#center-gloss)" />
      </svg>

      {/* Glass rim and inner pulse */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-[28px] ring-2 ring-emerald-300/30"
        animate={{ boxShadow: [
          '0 0 60px rgba(16,185,129,0.35)',
          '0 0 90px rgba(16,185,129,0.55)',
          '0 0 60px rgba(16,185,129,0.35)'
        ] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function GoldDustArc() {
  const dots = 36
  const r = 120
  return (
    <div className="absolute" style={{ width: 0, height: 0 }}>
      {[...Array(dots)].map((_, i) => {
        const angle = (i / dots) * Math.PI * 2 * 0.65 - Math.PI * 0.2 // partial arc
        const x = Math.cos(angle) * r
        const y = Math.sin(angle) * r
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: x,
              top: y,
              width: 6,
              height: 6,
              background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(250,204,21,0.9) 50%, rgba(245,158,11,0.4) 100%)',
              filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.5))'
            }}
            animate={{ opacity: [0.6, 0.95, 0.6], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2.2 + (i % 5) * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
          />
        )
      })}
    </div>
  )
}

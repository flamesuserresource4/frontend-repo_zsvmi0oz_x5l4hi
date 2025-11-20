import { useState } from 'react'
import { Clover, Menu, X } from 'lucide-react'

export default function Navbar({ onOpenChat }) {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Casos', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-emerald-500/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 ring-2 ring-emerald-400/40 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            <Clover className="w-5 h-5 text-black" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold tracking-wide">MakingLuck</span>
            <span className="text-xs text-emerald-300/80">Agency</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={l.href} className="text-sm text-emerald-100/80 hover:text-emerald-300 transition-colors">
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(163,230,53,0.45)] transition-all">Multiplica tus ganancias</a>
          <button onClick={onOpenChat} className="px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 transition">Hablar con IA</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-emerald-500/30 text-emerald-300">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-emerald-500/10 bg-black/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-emerald-100/80 hover:text-emerald-300 py-2">
                {l.name}
              </a>
            ))}
            <button onClick={() => { setOpen(false); onOpenChat?.() }} className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black font-semibold">Hablar con IA</button>
          </div>
        </div>
      )}
    </header>
  )
}

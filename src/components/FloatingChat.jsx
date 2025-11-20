import { useState } from 'react'
import { MessageCircleMore } from 'lucide-react'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:scale-105 transition">
        <MessageCircleMore className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 border border-emerald-500/20 rounded-2xl overflow-hidden bg-black/80 backdrop-blur-xl">
          <div className="p-4 border-b border-emerald-500/10 text-white font-semibold">Agente de IA</div>
          <div className="h-64 p-4 text-sm text-emerald-100/80 space-y-3 overflow-y-auto">
            <p>Hola! Soy tu asistente. ¿Qué objetivo querés lograr con IA?</p>
            <p className="text-emerald-300">Opciones: aumentar ventas, automatizar atención, integrar procesos…</p>
          </div>
          <div className="p-3 border-t border-emerald-500/10 flex gap-2">
            <input className="flex-1 px-3 py-2 rounded-lg bg-black/60 border border-emerald-500/20 text-emerald-100 placeholder-emerald-300/50" placeholder="Escribe tu mensaje..." />
            <button className="px-3 py-2 rounded-lg bg-emerald-500 text-black font-medium">Enviar</button>
          </div>
        </div>
      )}
    </div>
  )
}

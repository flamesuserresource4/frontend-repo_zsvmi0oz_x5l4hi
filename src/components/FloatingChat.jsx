import { useEffect, useRef, useState } from 'react'
import { MessageCircleMore, Link2 } from 'lucide-react'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hola! Soy tu agente. Contame: ¿buscás aumentar ventas, automatizar atención o integrar procesos?' }
  ])
  const [input, setInput] = useState('')
  const [webhookUrl, setWebhookUrl] = useState(localStorage.getItem('ml_webhook') || '')
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const sendMessage = async () => {
    if (!input.trim()) return
    const newMsg = { role: 'user', content: input.trim() }
    setMessages((m) => [...m, newMsg])
    setInput('')

    // If webhook configured, forward conversation snapshot
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'makingluck-site',
            timestamp: Date.now(),
            messages: [...messages, newMsg]
          })
        })
      } catch (e) {
        console.error('Webhook error', e)
      }
    }

    // simple optimistic assistant hint
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Perfecto. ¿Cuál es el objetivo en 90 días y presupuesto estimado? Puedo derivar a WhatsApp/CRM.' }
      ])
    }, 400)
  }

  return (
    <div>
      <button id="floating-chat-button" onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 text-black shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:scale-105 transition">
        <MessageCircleMore className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm border border-emerald-500/20 rounded-2xl overflow-hidden bg-black/80 backdrop-blur-xl">
          <div className="p-4 border-b border-emerald-500/10 text-white font-semibold flex items-center justify-between">
            <span>Agente de IA</span>
            <div className="flex items-center gap-2">
              <input
                value={webhookUrl}
                onChange={(e) => {
                  setWebhookUrl(e.target.value)
                  localStorage.setItem('ml_webhook', e.target.value)
                }}
                placeholder="Webhook URL"
                className="hidden sm:block text-xs px-2 py-1 rounded-md bg-black/60 border border-emerald-500/20 text-emerald-200 placeholder-emerald-300/40 w-56"
              />
              <span className="hidden sm:inline text-emerald-300/70 text-xs">Webhook</span>
            </div>
          </div>

          <div ref={listRef} className="h-64 p-4 text-sm text-emerald-100/90 space-y-3 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'assistant' ? 'text-emerald-200' : 'text-white'}>
                <span className="text-emerald-300/70 mr-2">{m.role === 'assistant' ? 'IA' : 'Vos'}:</span>
                {m.content}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-emerald-500/10 flex gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-lg bg-black/60 border border-emerald-500/20 text-emerald-100 placeholder-emerald-300/50"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="px-3 py-2 rounded-lg bg-emerald-500 text-black font-medium">Enviar</button>
          </div>
        </div>
      )}
    </div>
  )
}

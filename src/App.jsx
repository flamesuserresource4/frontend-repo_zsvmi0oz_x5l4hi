import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import FloatingChat from './components/FloatingChat'

function App() {
  return (
    <div className="min-h-screen bg-black text-emerald-100">
      <Navbar onOpenChat={() => { const el = document.querySelector('#floating-chat-button'); el?.click() }} />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <div id="floating-chat-button">
        <FloatingChat />
      </div>
      <footer className="py-10 border-t border-emerald-500/10 text-center text-emerald-300/70">
        © {new Date().getFullYear()} MakingLuck Agency — Latinoamérica
      </footer>
    </div>
  )
}

export default App

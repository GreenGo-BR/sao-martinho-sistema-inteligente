import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#visao', label: 'Visão' },
  { href: '#equipe-estrategia', label: 'Equipe' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#ia', label: 'Motor IA' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#custo-inacao', label: 'Custo' },
  { href: '#futuro', label: 'Futuro' },
  { href: '#integracao', label: 'Integração' },
  { href: '#internacional', label: 'Internacional' },
  { href: '#seo', label: 'SEO/GEO' },
  { href: '#2030', label: '2030' },
  { href: '#plano', label: '12 meses' },
  { href: '#metricas', label: 'Métricas' },
  { href: '#investimento', label: 'Investimento' },
]

export default function Nav() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 80)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4"
        >
          {/* Desktop */}
          <div
            className="hidden md:flex gap-1 px-3 py-2 rounded-full"
            style={{
              background: 'rgba(7,17,31,0.82)',
              border: '1px solid rgba(255,255,255,0.14)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
            }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-xs font-bold px-3 py-2 rounded-full transition-all hover:bg-white/10 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex md:hidden w-full max-w-sm justify-between items-center px-4 py-2 rounded-full"
            style={{
              background: 'rgba(7,17,31,0.9)',
              border: '1px solid rgba(255,255,255,0.14)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <span className="text-white font-bold text-sm">São Martinho</span>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="text-white/70 hover:text-white p-1"
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-current mb-1 rounded" />
              <div className="w-5 h-0.5 bg-current mb-1 rounded" />
              <div className="w-5 h-0.5 bg-current rounded" />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-14 left-4 right-4 md:hidden rounded-2xl overflow-hidden z-50"
                style={{ background: 'rgba(7,17,31,0.96)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(20px)' }}
              >
                {links.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white/80 hover:text-white text-sm font-semibold px-5 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                  >
                    {l.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

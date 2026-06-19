import { motion } from 'framer-motion'

const stats = [
  { label: 'CRM', sub: 'base única de doadores', color: '#39d98a', icon: '🗄️' },
  { label: 'Automação', sub: 'relacionamento em escala', color: '#45b7ff', icon: '⚡' },
  { label: 'SEO/GEO', sub: 'visibilidade Google e IA', color: '#a78bfa', icon: '🔍' },
  { label: 'Global', sub: 'doação nacional e exterior', color: '#ffd166', icon: '🌎' },
]

export default function Hero() {
  return (
    <header
      id="visao"
      className="relative rounded-[38px] overflow-hidden min-h-[690px] p-10 md:p-16 mt-20"
      style={{
        background: 'linear-gradient(135deg, rgba(6,16,29,0.95), rgba(12,55,56,0.82)), radial-gradient(circle at 75% 25%, rgba(57,217,138,0.35), transparent 35%), radial-gradient(circle at 10% 90%, rgba(69,183,255,0.22), transparent 35%)',
        border: '1px solid rgba(255,255,255,0.14)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
      }}
    >
      {/* Orbs */}
      <div className="orb" style={{ width: 340, height: 340, background: 'rgba(57,217,138,0.16)', right: -90, top: -80, animationDuration: '7s' }} />
      <div className="orb" style={{ width: 240, height: 240, background: 'rgba(69,183,255,0.14)', left: -80, bottom: -80, animationDuration: '8s', animationDelay: '1.2s' }} />
      <div className="orb" style={{ width: 160, height: 160, background: 'rgba(255,209,102,0.16)', right: '22%', bottom: '12%', animationDuration: '6s', animationDelay: '2s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 90%)',
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          Proposta estratégica 2026–2027
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(38px,6.5vw,78px)] font-black leading-[0.95] tracking-tight mb-5"
        >
          <span className="gradient-text">Motor de Arrecadação</span>
          <br />
          <span className="text-white">São Martinho</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/75 max-w-3xl leading-relaxed font-medium"
        >
          Uma estrutura integrada que transforma comunicação em relacionamento, relacionamento em confiança e confiança em arrecadação sustentável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[#04111d] transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #39d98a, #45b7ff)', boxShadow: '0 20px 60px rgba(57,217,138,0.3)' }}
          >
            Ver dashboard executivo
          </a>
          <a
            href="#equipe"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:bg-white/15"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            Como apoia a equipe atual
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              className="rounded-[22px] p-4 transition-transform hover:scale-105 hover:-translate-y-1 cursor-default"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)' }}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <strong className="block text-2xl font-black" style={{ color: s.color }}>{s.label}</strong>
              <span className="text-white/55 text-[13px]">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </header>
  )
}

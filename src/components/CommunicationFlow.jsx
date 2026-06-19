import { motion } from 'framer-motion'

const nodes = [
  { icon: '📸', label: 'Instagram', sub: 'posts, reels, stories, campanhas', color: '#fb923c' },
  { icon: '🔍', label: 'Google', sub: 'SEO, busca local e GEO', color: '#39d98a' },
  { icon: '🌐', label: 'Site', sub: 'páginas por causa e doação', color: '#45b7ff' },
  { icon: '🗄️', label: 'CRM', sub: 'ficha viva do doador', color: '#a78bfa' },
  { icon: '✉️', label: 'E-mail', sub: 'impacto e reativação', color: '#ffd166' },
  { icon: '💚', label: 'Doação', sub: 'Pix, cartão, mensal, exterior', color: '#39d98a' },
  { icon: '📊', label: 'Relatório', sub: 'dados para decisão', color: '#45b7ff' },
]

const mapLeft = [
  { title: 'Redes sociais', desc: 'Conteúdo rastreado por campanha, causa e público.' },
  { title: 'Eventos e QR Codes', desc: 'Doações presenciais conectadas à base.' },
  { title: 'WhatsApp', desc: 'Entrada rápida com organização posterior no CRM.' },
]

const mapRight = [
  { title: 'SEO e GEO', desc: 'Conteúdos para Google e respostas de IA.' },
  { title: 'Automação', desc: 'Agradecimento, impacto, recorrência e reativação.' },
  { title: 'Diretoria', desc: 'Indicadores claros para decisões mensais.' },
]

export default function CommunicationFlow() {
  return (
    <section id="integracao" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">Comunicação Inteligente Integrada</h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          Todo canal da ONG passa a fazer parte de uma jornada única. A equipe continua criando comunicação; o sistema conecta, mede e potencializa.
        </p>
      </motion.div>

      {/* Flow nodes */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-3 min-w-max md:min-w-0 md:grid md:grid-cols-7">
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="rounded-[20px] p-4 text-center cursor-default relative overflow-hidden min-h-[120px] flex flex-col justify-center"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                minWidth: 120,
              }}
            >
              {/* animated bottom glow bar */}
              <div
                className="absolute bottom-0 left-[15%] right-[15%] h-[3px] rounded-full bar-chart-item"
                style={{ background: `linear-gradient(90deg, ${n.color}, #45b7ff, #a78bfa)` }}
              />
              <div className="text-2xl mb-2">{n.icon}</div>
              <strong className="block text-sm font-bold mb-1">{n.label}</strong>
              <span className="text-white/45 text-[11px] leading-tight">{n.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 items-center">
        <div className="space-y-3">
          {mapLeft.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[20px] p-4"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <strong className="block text-sm font-bold mb-1">{m.title}</strong>
              <span className="text-white/45 text-[13px]">{m.desc}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[34px] p-8 text-center min-h-[280px] flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(57,217,138,0.28), transparent 45%), linear-gradient(135deg, rgba(57,217,138,0.14), rgba(69,183,255,0.1))',
            border: '1px solid rgba(57,217,138,0.25)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
          }}
        >
          <div className="text-4xl mb-3">🧭</div>
          <h3 className="text-2xl font-black mb-2">Central de Captação</h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-[200px]">
            Um sistema único para organizar campanhas, doadores, automações, relatórios e oportunidades de crescimento.
          </p>
        </motion.div>

        <div className="space-y-3">
          {mapRight.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-[20px] p-4"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <strong className="block text-sm font-bold mb-1">{m.title}</strong>
              <span className="text-white/45 text-[13px]">{m.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

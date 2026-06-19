import { motion } from 'framer-motion'

const cards = [
  { icon: '🌎', title: 'Doações internacionais', desc: 'Página em inglês, storytelling global e campanhas para brasileiros no exterior.' },
  { icon: '🤖', title: 'IA para comunicação', desc: 'Ideias de campanhas, títulos, e-mails, relatórios e segmentações com revisão humana.' },
  { icon: '📊', title: 'Relatórios executivos', desc: 'Impacto social e arrecadação traduzidos em números claros para diretoria e parceiros.' },
  { icon: '🎯', title: 'Campanhas segmentadas', desc: 'Mensagens diferentes para doadores novos, recorrentes, antigos e grandes apoiadores.' },
  { icon: '🔍', title: 'SEO e GEO', desc: 'Presença no Google e em respostas de IA para temas sociais do Rio de Janeiro.' },
  { icon: '📱', title: 'Portal do doador', desc: 'Área futura para histórico, impacto, recibos e campanhas apoiadas.' },
  { icon: '❤️', title: 'Clube de apoiadores', desc: 'Programa mensal de doadores com comunicação especial e reconhecimento.' },
  { icon: '📍', title: 'Mapa de impacto', desc: 'Visualização de projetos, territórios atendidos, causas e resultados.' },
]

const timeline = [
  { year: '2026', label: 'Fundação', color: '#39d98a', desc: 'CRM, piloto de campanhas, automações básicas e dashboard executivo.' },
  { year: '2027', label: 'Escala', color: '#45b7ff', desc: 'SEO consolidado, doações internacionais, portal do doador e 2.000+ doadores.' },
  { year: '2028+', label: 'Visão nacional', color: '#a78bfa', desc: 'Referência nacional em captação digital para ONGs, 6.000+ doadores e presença global.' },
]

export default function NationalNGOVision() {
  return (
    <section className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[34px] p-8 md:p-10"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(255,209,102,0.18), transparent 30%), linear-gradient(135deg, rgba(69,183,255,0.12), rgba(167,139,250,0.09))',
          border: '1px solid rgba(255,255,255,0.16)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
      >
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
            style={{ background: 'rgba(255,209,102,0.15)', color: '#ffd166', border: '1px solid rgba(255,209,102,0.25)' }}
          >
            Visão aspiracional
          </span>
          <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-3">
            Se o São Martinho fosse uma <span className="gradient-text-gold">ONG nacional</span>
          </h2>
          <p className="text-white/55 text-base max-w-2xl leading-relaxed">
            Esta seção é aspiracional: mostra o futuro possível da instituição construindo uma operação digital de captação com padrão profissional. É o horizonte que guia cada decisão hoje.
          </p>
        </div>

        {/* Timeline visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${t.color}30` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />
              <div className="text-3xl font-black mb-1" style={{ color: t.color }}>{t.year}</div>
              <h3 className="font-bold text-base mb-2">{t.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-[22px] p-5 cursor-default"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)' }}
            >
              <div className="text-2xl mb-2">{c.icon}</div>
              <h3 className="font-bold text-sm mb-1.5">{c.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

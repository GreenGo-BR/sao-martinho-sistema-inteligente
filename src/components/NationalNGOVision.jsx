import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2026',
    label: 'Organizar',
    color: '#39d98a',
    bg: 'rgba(57,217,138,0.08)',
    border: 'rgba(57,217,138,0.22)',
    desc: 'CRM estruturado, piloto de campanhas, automações básicas e primeiro dashboard executivo com dados reais.',
    items: ['Base de doadores centralizada', 'Tracking por origem de campanha', 'Jornada pós-doação ativa', 'Dashboard mensal para diretoria'],
  },
  {
    year: '2027',
    label: 'Automatizar',
    color: '#45b7ff',
    bg: 'rgba(69,183,255,0.08)',
    border: 'rgba(69,183,255,0.22)',
    desc: 'SEO consolidado, doações internacionais ativas, recorrência escalando e Motor IA em operação.',
    items: ['SEO/GEO posicionado no Google', 'Página em inglês com doação internacional', '+2.000 doadores ativos', 'Motor IA com recomendações semanais'],
  },
  {
    year: '2028',
    label: 'Expandir',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.22)',
    desc: 'Portal do doador ativo, clube de apoiadores, mapa de impacto e campanhas segmentadas por perfil.',
    items: ['Portal do doador com histórico', 'Clube mensal de apoiadores', 'Campanhas por perfil e causa', 'Relatórios executivos automáticos'],
  },
  {
    year: '2029',
    label: 'Internacionalizar',
    color: '#ffd166',
    bg: 'rgba(255,209,102,0.08)',
    border: 'rgba(255,209,102,0.22)',
    desc: 'Presença consolidada entre brasileiros no exterior, fundações internacionais e campanhas globais.',
    items: ['Comunidades BR no exterior ativas', 'Parceria com fundações internacionais', 'Storytelling global em 3 idiomas', '+500 doadores internacionais'],
  },
  {
    year: '2030',
    label: 'Referência Nacional',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.22)',
    desc: 'São Martinho como modelo de captação digital para ONGs brasileiras — replicável, mensurável e sustentável.',
    items: ['+6.000 doadores ativos', 'R$ 2M+ de arrecadação anual', 'Referência em social tech no Brasil', 'Modelo copiado por outras ONGs'],
  },
]

const features = [
  { icon: '🌎', title: 'Doações internacionais', desc: 'Página em inglês, storytelling global e campanhas para brasileiros no exterior.' },
  { icon: '🤖', title: 'Motor IA', desc: 'Ideias de campanhas, títulos, e-mails, relatórios e segmentações com revisão humana.' },
  { icon: '📊', title: 'Relatórios executivos', desc: 'Impacto social e arrecadação traduzidos em números claros para diretoria e parceiros.' },
  { icon: '🎯', title: 'Campanhas segmentadas', desc: 'Mensagens diferentes para doadores novos, recorrentes, antigos e grandes apoiadores.' },
  { icon: '🔍', title: 'SEO e GEO', desc: 'Presença no Google e em respostas de IA para temas sociais do Rio de Janeiro.' },
  { icon: '📱', title: 'Portal do doador', desc: 'Área para histórico, impacto, recibos e campanhas apoiadas.' },
  { icon: '❤️', title: 'Clube de apoiadores', desc: 'Programa mensal de doadores com comunicação especial e reconhecimento.' },
  { icon: '📍', title: 'Mapa de impacto', desc: 'Visualização de projetos, territórios atendidos, causas e resultados.' },
]

export default function NationalNGOVision() {
  return (
    <section id="2030" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[34px] p-8 md:p-10 relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(255,209,102,0.16), transparent 30%), linear-gradient(135deg, rgba(69,183,255,0.1), rgba(167,139,250,0.08))',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
      >
        {/* Decorative glow */}
        <div className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,209,102,0.1), transparent 70%)' }} />

        <div className="relative z-10">
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
              style={{ background: 'rgba(255,209,102,0.14)', color: '#ffd166', border: '1px solid rgba(255,209,102,0.25)' }}
            >
              🚀 Visão de longo prazo
            </span>
            <h2 className="text-[clamp(28px,4.5vw,48px)] font-black tracking-tight leading-tight mb-3">
              <span className="gradient-text-gold">São Martinho 2030</span>
            </h2>
            <p className="text-white/55 text-base max-w-2xl leading-relaxed">
              Uma visão aspiracional de onde a instituição pode chegar construindo uma operação digital de captação com padrão profissional. Cada ano tem um objetivo claro.
            </p>
          </div>

          {/* Timeline — horizontal on desktop, vertical on mobile */}
          <div className="mb-10">
            {/* Mobile: vertical */}
            <div className="flex flex-col gap-4 md:hidden">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-5 relative overflow-hidden"
                  style={{ background: t.bg, border: `1px solid ${t.border}` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl font-black" style={{ color: t.color }}>{t.year}</div>
                    <span className="font-bold text-white text-base">{t.label}</span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">{t.desc}</p>
                  <ul className="space-y-1">
                    {t.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-white/55 text-xs">
                        <span style={{ color: t.color }}>›</span>{item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Desktop: horizontal with connecting line */}
            <div className="hidden md:block relative">
              {/* Connector */}
              <div
                className="absolute top-[52px] left-[10%] right-[10%] h-0.5 z-0"
                style={{ background: 'linear-gradient(90deg, #39d98a, #45b7ff, #a78bfa, #ffd166, #fb923c)' }}
              />

              <div className="grid grid-cols-5 gap-4 relative z-10">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col"
                  >
                    {/* Year bubble */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="w-[64px] h-[64px] rounded-2xl flex flex-col items-center justify-center text-center"
                        style={{ background: t.bg, border: `2px solid ${t.color}50`, boxShadow: `0 0 20px ${t.color}20` }}
                      >
                        <span className="text-sm font-black leading-none" style={{ color: t.color }}>{t.year}</span>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl p-4 flex-1 cursor-default"
                      style={{ background: t.bg, border: `1px solid ${t.border}` }}
                    >
                      <strong className="block font-black text-sm mb-1" style={{ color: t.color }}>{t.label}</strong>
                      <p className="text-white/50 text-xs leading-relaxed mb-3">{t.desc}</p>
                      <ul className="space-y-1">
                        {t.items.map(item => (
                          <li key={item} className="flex items-start gap-1.5 text-white/45 text-[11px]">
                            <span style={{ color: t.color }} className="shrink-0 mt-0.5">›</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <h3 className="font-black text-lg text-white mb-4">Capacidades que se constroem ao longo do caminho</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {features.map((c, i) => (
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
        </div>
      </motion.div>
    </section>
  )
}

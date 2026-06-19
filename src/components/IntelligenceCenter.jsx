import { motion } from 'framer-motion'

const aiCards = [
  {
    icon: '🏆',
    tag: 'Melhor campanha do mês',
    tagColor: '#39d98a',
    tagBg: 'rgba(57,217,138,0.14)',
    tagBorder: 'rgba(57,217,138,0.25)',
    title: 'Gastronomia & Impacto',
    value: '+312%',
    valueLabel: 'de conversão',
    desc: 'Campanha com storytelling do projeto de culinária profissional gerou o maior volume de doações recorrentes do trimestre.',
    highlight: 'rgba(57,217,138,0.08)',
    border: 'rgba(57,217,138,0.18)',
  },
  {
    icon: '⚠️',
    tag: 'Doadores em risco',
    tagColor: '#fb7185',
    tagBg: 'rgba(251,113,133,0.12)',
    tagBorder: 'rgba(251,113,133,0.25)',
    title: '87 apoiadores silenciosos',
    value: '87',
    valueLabel: 'precisam de reativação',
    desc: 'Não interagiram nos últimos 90 dias. Sequência de 3 e-mails personalizados pode recuperar até 40% desses doadores.',
    highlight: 'rgba(251,113,133,0.07)',
    border: 'rgba(251,113,133,0.16)',
  },
  {
    icon: '🔄',
    tag: 'Oportunidade de recorrência',
    tagColor: '#45b7ff',
    tagBg: 'rgba(69,183,255,0.12)',
    tagBorder: 'rgba(69,183,255,0.25)',
    title: '234 doadores únicos prontos',
    value: '234',
    valueLabel: 'candidatos à recorrência',
    desc: 'Doadores únicos com 2 ou mais doações nos últimos 6 meses. Proposta de doação mensal tem alta probabilidade de conversão.',
    highlight: 'rgba(69,183,255,0.07)',
    border: 'rgba(69,183,255,0.16)',
  },
  {
    icon: '🎯',
    tag: 'Próxima campanha sugerida',
    tagColor: '#a78bfa',
    tagBg: 'rgba(167,139,250,0.12)',
    tagBorder: 'rgba(167,139,250,0.25)',
    title: 'Volta às aulas — Fevereiro',
    value: 'R$ 38k',
    valueLabel: 'potencial estimado',
    desc: 'Histórico mostra alta conversão no tema educação em fevereiro. Segmentação para doadores de classe média com filhos.',
    highlight: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.16)',
  },
  {
    icon: '📡',
    tag: 'Melhor canal de aquisição',
    tagColor: '#ffd166',
    tagBg: 'rgba(255,209,102,0.12)',
    tagBorder: 'rgba(255,209,102,0.25)',
    title: 'Instagram Reels — 3.2x ROI',
    value: '3.2x',
    valueLabel: 'retorno por campanha',
    desc: 'Reels com depoimento real de beneficiado convertem 3x mais do que posts estáticos. CPA 68% menor que Google Ads.',
    highlight: 'rgba(255,209,102,0.07)',
    border: 'rgba(255,209,102,0.16)',
  },
]

export default function IntelligenceCenter() {
  return (
    <section id="ia" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-black"
            style={{ background: 'rgba(167,139,250,0.14)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
          >
            Inteligência Artificial
          </span>
        </div>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">
          São Martinho Intelligence <span className="gradient-text">AI</span>
        </h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          Motor de IA que analisa dados de doadores, campanhas e canais para gerar recomendações acionáveis — sempre com revisão humana da equipe de comunicação.
        </p>
      </motion.div>

      {/* AI Dashboard frame */}
      <div
        className="rounded-[34px] p-5 md:p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(167,139,250,0.08), rgba(69,183,255,0.05)), rgba(7,17,31,0.8)',
          border: '1px solid rgba(167,139,250,0.2)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{ background: 'linear-gradient(135deg,#a78bfa,#45b7ff)' }}
          >
            🤖
          </div>
          <div>
            <strong className="block font-black text-base">São Martinho AI</strong>
            <span className="text-white/40 text-xs">Última análise: hoje às 08:42</span>
          </div>
          <div
            className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black"
            style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.22)' }}
          >
            <div className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            Processando dados
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiCards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl p-5 cursor-default"
              style={{ background: c.highlight, border: `1px solid ${c.border}` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black"
                  style={{ background: c.tagBg, color: c.tagColor, border: `1px solid ${c.tagBorder}` }}
                >
                  {c.icon} {c.tag}
                </span>
              </div>
              <h3 className="font-bold text-base mb-1">{c.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-black" style={{ color: c.tagColor }}>{c.value}</span>
                <span className="text-white/40 text-xs">{c.valueLabel}</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}

          {/* Last card: AI disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-5 flex flex-col justify-between"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div>
              <div className="text-2xl mb-3">⚖️</div>
              <h3 className="font-bold text-base mb-2">Sempre com supervisão humana</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Todas as recomendações da IA são sugestões. A equipe de comunicação valida, adapta e decide o que será executado.
              </p>
            </div>
            <div
              className="mt-4 p-3 rounded-xl text-xs text-white/40 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              IA como apoio, não como substituto da criatividade e julgamento humano.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

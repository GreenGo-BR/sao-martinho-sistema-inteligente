import { motion } from 'framer-motion'

const comparisons = [
  {
    area: 'Doadores únicos',
    sem: 'Doam uma vez e somem. Sem jornada pós-doação, a relação acaba na primeira transação.',
    com: 'Recebem agradecimento automático, histórias de impacto e convite à recorrência — e ficam.',
    semIcon: '😶',
    comIcon: '🔄',
  },
  {
    area: 'Dados de doadores',
    sem: 'Espalhados em planilhas, formulários e ferramentas distintas. Impossível ter visão unificada.',
    com: 'CRM centralizado com ficha viva por doador: histórico, origem, campanhas e comportamento.',
    semIcon: '🗂️',
    comIcon: '🗄️',
  },
  {
    area: 'Campanhas',
    sem: 'Lançadas sem tracking de origem. Não se sabe qual canal, post ou mensagem gerou a doação.',
    com: 'Cada campanha tem UTM, origem rastreada e relatório de ROI — repetindo o que funciona.',
    semIcon: '❓',
    comIcon: '📊',
  },
  {
    area: 'Doações recorrentes',
    sem: 'Não há processo estruturado para convidar doadores únicos a se tornarem mensais.',
    com: 'Sequência automatizada convida no momento ideal — quando o engajamento está mais alto.',
    semIcon: '📉',
    comIcon: '📈',
  },
  {
    area: 'Visibilidade da diretoria',
    sem: 'Relatórios manuais e esporádicos. Decisões tomadas sem dados confiáveis em tempo real.',
    com: 'Dashboard executivo com arrecadação, retenção, metas e insights atualizados em tempo real.',
    semIcon: '🙈',
    comIcon: '👁️',
  },
  {
    area: 'Doadores internacionais',
    sem: 'Brasileiros no exterior e doadores globais não encontram uma porta de entrada clara.',
    com: 'Página em inglês, pagamento internacional e storytelling global abrem nova fonte de captação.',
    semIcon: '🚪',
    comIcon: '🌎',
  },
]

const costs = [
  { label: 'Doadores perdidos por mês', value: '~85', color: '#fb7185' },
  { label: 'Doações recorrentes não convertidas', value: '~R$ 12k', color: '#fb923c' },
  { label: 'Campanhas sem tracking de ROI', value: '100%', color: '#ffd166' },
  { label: 'Potencial não aproveitado', value: 'Alto', color: '#fb7185' },
]

export default function CostOfInaction() {
  return (
    <section id="custo-inacao" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(251,113,133,0.13)', color: '#fb7185', border: '1px solid rgba(251,113,133,0.25)' }}
        >
          ⚡ Oportunidade em risco
        </span>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-3">
          Quanto custa <span style={{ color: '#fb7185' }}>não fazer isso?</span>
        </h2>
        <p className="text-white/55 text-base max-w-2xl leading-relaxed">
          Cada mês sem estrutura integrada é um mês de relacionamentos interrompidos, dados perdidos e oportunidades de arrecadação que não voltam.
        </p>
      </motion.div>

      {/* Cost indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {costs.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-[22px] p-5 text-center"
            style={{ background: 'rgba(251,113,133,0.07)', border: '1px solid rgba(251,113,133,0.18)' }}
          >
            <div className="text-2xl font-black mb-1" style={{ color: c.color }}>{c.value}</div>
            <p className="text-white/50 text-xs leading-tight">{c.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="rounded-[30px] overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 30px 80px rgba(0,0,0,0.35)' }}>
        {/* Header */}
        <div className="grid grid-cols-3 text-xs font-black uppercase tracking-wider px-5 py-3"
          style={{ background: 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-white/50">Área</span>
          <span style={{ color: '#fb7185' }}>❌ Sem o Motor</span>
          <span style={{ color: '#39d98a' }}>✅ Com o Motor</span>
        </div>

        {comparisons.map((r, i) => (
          <motion.div
            key={r.area}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="grid grid-cols-3 px-5 py-4 transition-colors hover:bg-white/[0.03]"
            style={{ borderBottom: i < comparisons.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
          >
            <span className="text-white font-semibold text-sm pr-3">{r.area}</span>
            <span className="text-white/50 text-xs leading-relaxed pr-3">
              <span className="mr-1.5">{r.semIcon}</span>{r.sem}
            </span>
            <span className="text-white/70 text-xs leading-relaxed">
              <span className="mr-1.5">{r.comIcon}</span>{r.com}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 rounded-2xl p-6 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.09), rgba(69,183,255,0.06))',
          border: '1px solid rgba(57,217,138,0.2)',
        }}
      >
        <p className="text-white font-bold text-lg leading-relaxed max-w-2xl mx-auto">
          "A inação também tem um custo — ele só não aparece no relatório mensal.
          <span className="text-[#39d98a]"> O Motor de Arrecadação torna esse custo visível e, ao mesmo tempo, elimina ele."</span>
        </p>
      </motion.div>
    </section>
  )
}

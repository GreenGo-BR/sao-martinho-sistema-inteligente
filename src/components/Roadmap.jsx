import { motion } from 'framer-motion'

const phases = [
  {
    number: '01',
    label: 'FASE 1',
    title: 'Implantação Inicial',
    period: 'Julho → Outubro 2026',
    color: '#39d98a',
    glow: 'rgba(57,217,138,0.22)',
    bg: 'rgba(57,217,138,0.07)',
    border: 'rgba(57,217,138,0.22)',
    items: [
      'Mapeamento dos processos atuais',
      'Organização da base de dados',
      'Estruturação inicial do CRM',
      'Definição dos indicadores de arrecadação',
      'Integração entre campanhas, site e comunicação',
      'Primeiros dashboards executivos',
      'Construção da base do Motor de Arrecadação',
    ],
    quote: 'Esta fase permitirá estruturar os fundamentos do Motor de Arrecadação e gerar os primeiros aprendizados que orientarão as próximas etapas de crescimento.',
  },
  {
    number: '02',
    label: 'FASE 2',
    title: 'Consolidação',
    period: 'Novembro 2026 → Março 2027',
    color: '#45b7ff',
    glow: 'rgba(69,183,255,0.22)',
    bg: 'rgba(69,183,255,0.07)',
    border: 'rgba(69,183,255,0.22)',
    items: [
      'CRM completo e operacional',
      'Automações de relacionamento',
      'SEO e GEO estruturados',
      'Relatórios executivos automatizados',
      'Estratégia de recorrência ativa',
      'Segmentação avançada de campanhas',
      'Otimização da jornada do doador',
    ],
    quote: null,
  },
  {
    number: '03',
    label: 'FASE 3',
    title: 'Expansão',
    period: 'Abril → Dezembro 2027',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.22)',
    bg: 'rgba(167,139,250,0.07)',
    border: 'rgba(167,139,250,0.22)',
    items: [
      'Doações internacionais ativas',
      'Portal do doador com histórico',
      'IA de apoio à comunicação',
      'Expansão da base de apoiadores',
      'Campanhas de maior escala',
      'Consolidação do Motor de Arrecadação',
    ],
    quote: null,
  },
]

export default function Roadmap() {
  return (
    <section id="plano" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(57,217,138,0.13)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
        >
          📅 Plano de execução
        </span>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-2">
          Plano de execução em 3 fases
        </h2>
        <p className="text-white/55 text-base max-w-2xl leading-relaxed">
          Julho de 2026 a dezembro de 2027 — cada fase com objetivos claros, entregáveis definidos e aprendizados que alimentam a fase seguinte.
        </p>
      </motion.div>

      {/* Timeline horizontal connector — desktop */}
      <div className="relative">
        <div
          className="hidden md:block absolute top-[52px] left-[17%] right-[17%] h-0.5 z-0"
          style={{ background: 'linear-gradient(90deg, #39d98a, #45b7ff, #a78bfa)' }}
        />

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {phases.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14 }}
              whileHover={{ y: -5 }}
              className="cursor-default"
            >
              {/* Phase bubble — centered above card on desktop */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="flex flex-col items-center justify-center w-[72px] h-[72px] rounded-2xl text-center"
                  style={{
                    background: p.bg,
                    border: `2px solid ${p.color}50`,
                    boxShadow: `0 0 24px ${p.glow}`,
                  }}
                  animate={{ boxShadow: [`0 0 16px ${p.glow}`, `0 0 32px ${p.glow}`, `0 0 16px ${p.glow}`] }}
                  transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-[10px] font-black text-white/40 leading-none">{p.label}</span>
                  <span className="text-2xl font-black leading-tight" style={{ color: p.color }}>{p.number}</span>
                </motion.div>
              </div>

              {/* Card body */}
              <div
                className="rounded-[28px] p-6 h-full"
                style={{
                  background: p.bg,
                  border: `1px solid ${p.border}`,
                  boxShadow: '0 24px 70px rgba(0,0,0,0.35)',
                }}
              >
                {/* Header */}
                <div className="mb-5">
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-black mb-2"
                    style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}30` }}
                  >
                    {p.period}
                  </span>
                  <h3 className="font-black text-xl leading-tight text-white">{p.title}</h3>
                </div>

                {/* Items */}
                <ul className="space-y-2.5 mb-4">
                  {p.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-start gap-2.5 text-white/65 text-sm leading-relaxed"
                    >
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                        style={{ background: `${p.color}20`, color: p.color }}
                      >
                        ›
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Quote (Fase 1 only) */}
                {p.quote && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 rounded-xl p-4 text-xs text-white/50 leading-relaxed italic"
                    style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${p.color}20` }}
                  >
                    "{p.quote}"
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline bar summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="mt-6 rounded-[22px] p-5 md:p-6"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p className="text-white/40 text-xs font-black uppercase tracking-wider mb-4">Linha do tempo consolidada</p>
        <div className="flex flex-col md:flex-row gap-2">
          {[
            { label: 'Jul–Out 2026', desc: 'Implantação Inicial', color: '#39d98a', flex: 2 },
            { label: 'Nov 2026–Mar 2027', desc: 'Consolidação', color: '#45b7ff', flex: 2.5 },
            { label: 'Abr–Dez 2027', desc: 'Expansão', color: '#a78bfa', flex: 4 },
          ].map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: 'easeOut' }}
              className="rounded-xl px-4 py-3 origin-left"
              style={{
                background: `${seg.color}14`,
                border: `1px solid ${seg.color}30`,
                flex: seg.flex,
              }}
            >
              <span className="block text-xs font-black" style={{ color: seg.color }}>{seg.label}</span>
              <span className="text-white/45 text-xs">{seg.desc}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

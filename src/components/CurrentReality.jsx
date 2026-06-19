import { motion } from 'framer-motion'

const problems = [
  { title: 'Campanhas podem ficar isoladas', desc: 'Redes sociais, landing pages, formulários, pagamentos e CRM podem funcionar separadamente, dificultando a visão completa do doador.' },
  { title: 'Doadores únicos podem desaparecer', desc: 'Sem uma jornada pós-doação, muitos doadores não recebem impacto, reativação ou convite para recorrência.' },
  { title: 'A diretoria vê pouco do funil', desc: 'Sem dashboard executivo, é difícil saber quais canais, campanhas e mensagens realmente aumentam a arrecadação.' },
]

const opportunities = [
  { tag: 'Benchmark', tagColor: '#45b7ff', tagBg: 'rgba(69,183,255,0.12)', tagBorder: 'rgba(69,183,255,0.25)', title: 'Receita online', desc: 'Crescimento relevante de doações digitais quando há campanhas, dados e recorrência estruturados.' },
  { tag: 'Recorrência', tagColor: '#ffd166', tagBg: 'rgba(255,209,102,0.12)', tagBorder: 'rgba(255,209,102,0.25)', title: 'Doação mensal', desc: 'A maior oportunidade está em transformar doadores únicos em apoiadores mensais.' },
  { tag: 'Retenção', tagColor: '#a78bfa', tagBg: 'rgba(167,139,250,0.12)', tagBorder: 'rgba(167,139,250,0.25)', title: 'Relacionamento', desc: 'Manter doadores ativos costuma ser um grande desafio para ONGs. Automação e impacto ajudam nessa jornada.' },
  { tag: 'Ativo interno', tagColor: '#39d98a', tagBg: 'rgba(57,217,138,0.12)', tagBorder: 'rgba(57,217,138,0.25)', title: 'Base própria', desc: 'Uma base organizada de doadores vira patrimônio estratégico da instituição.' },
]

export default function CurrentReality() {
  return (
    <section id="realidade" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">A situação atual e a oportunidade</h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          O São Martinho já tem história, credibilidade, impacto e equipe. O próximo passo é transformar comunicação em uma operação integrada de relacionamento e captação.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -3 }}
            className="rounded-[26px] p-6 cursor-default"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
          >
            <span
              className="inline-flex px-3 py-1 rounded-full text-xs font-black mb-3"
              style={{ background: 'rgba(251,113,133,0.12)', color: '#fb7185', border: '1px solid rgba(251,113,133,0.25)' }}
            >
              Hoje
            </span>
            <h3 className="font-bold text-[17px] mb-2 leading-snug">{p.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {opportunities.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
            whileHover={{ y: -3 }}
            className="rounded-[26px] p-5 cursor-default"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
          >
            <span
              className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-black mb-3"
              style={{ background: o.tagBg, color: o.tagColor, border: `1px solid ${o.tagBorder}` }}
            >
              {o.tag}
            </span>
            <h3 className="font-bold text-base mb-2">{o.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

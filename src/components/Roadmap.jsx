import { motion } from 'framer-motion'

const quarters = [
  {
    period: 'Meses 1–3',
    title: 'Diagnóstico + Piloto',
    color: '#39d98a',
    items: ['Levantar números atuais', 'Mapear canais e ferramentas', 'Organizar base inicial de doadores', 'Criar campanha-piloto', 'Instalar tracking por origem'],
  },
  {
    period: 'Meses 4–6',
    title: 'Funil de Doadores',
    color: '#45b7ff',
    items: ['Jornada pós-doação', 'Sequência de e-mails', 'Campanhas de recorrência', 'Landing pages por causa', 'Dashboard mensal'],
  },
  {
    period: 'Meses 7–9',
    title: 'Escala Orgânica',
    color: '#a78bfa',
    items: ['SEO e GEO', 'Conteúdos para Google', 'Reativação de doadores antigos', 'QR Codes em eventos', 'Segmentação de campanhas'],
  },
  {
    period: 'Meses 10–12',
    title: 'Sistema Próprio',
    color: '#ffd166',
    items: ['CRM exclusivo São Martinho', 'Central de campanhas', 'Doação internacional', 'Relatórios automáticos', 'Plano fixo para 2027'],
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
        className="mb-6"
      >
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">Plano de execução em 12 meses</h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          A proposta começa com um piloto prático e evolui para uma estrutura fixa com dados reais.
        </p>
      </motion.div>

      {/* Timeline connector */}
      <div className="relative">
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 z-0"
          style={{ background: 'linear-gradient(90deg, #39d98a, #45b7ff, #a78bfa, #ffd166)' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {quarters.map((q, i) => (
            <motion.div
              key={q.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="rounded-[26px] p-6 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: `1px solid ${q.color}25`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Phase dot */}
              <div
                className="hidden md:flex w-8 h-8 rounded-full items-center justify-center text-xs font-black mb-4 mx-auto"
                style={{ background: q.color, color: '#04111d' }}
              >
                {i + 1}
              </div>

              <strong className="block text-xs font-black mb-1" style={{ color: q.color }}>{q.period}</strong>
              <h3 className="font-bold text-lg mb-4 leading-tight">{q.title}</h3>
              <ul className="space-y-2">
                {q.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-white/55 text-sm">
                    <span style={{ color: q.color }} className="shrink-0 mt-0.5">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

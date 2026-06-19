import { motion } from 'framer-motion'

const current = [
  'Postagem nas redes sociais',
  'Pessoa acessa campanha ou site',
  'Talvez doe uma vez',
  'Pouco acompanhamento automático',
  'Dados espalhados em ferramentas diferentes',
]

const future = [
  'Redes sociais integradas ao site',
  'Landing pages por causa',
  'CRM centralizado de doadores',
  'E-mails automáticos de impacto',
  'Convite para doação recorrente',
  'Dashboard para diretoria e comunicação',
]

export default function FutureVision() {
  return (
    <section id="futuro" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">Visão 2027: antes e depois</h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          A proposta mostra para onde a ONG pode evoluir em um ano de construção estruturada.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[30px] p-8"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
        >
          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-black mb-4"
            style={{ background: 'rgba(251,113,133,0.12)', color: '#fb7185', border: '1px solid rgba(251,113,133,0.25)' }}
          >
            Modelo atual
          </span>
          <h3 className="font-bold text-xl mb-5">Comunicação com pouca integração</h3>
          <ul className="space-y-3">
            {current.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-3 text-white/60 text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-[#fb7185]/20 text-[#fb7185] flex items-center justify-center shrink-0 mt-0.5 text-xs">✕</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[30px] p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(57,217,138,0.14), rgba(69,183,255,0.09))',
            border: '1px solid rgba(57,217,138,0.25)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
          }}
        >
          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-black mb-4"
            style={{ background: 'rgba(57,217,138,0.15)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
          >
            Modelo futuro
          </span>
          <h3 className="font-bold text-xl mb-5">Ecossistema inteligente de doação</h3>
          <ul className="space-y-3">
            {future.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex items-start gap-3 text-white/75 text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-[#39d98a]/20 text-[#39d98a] flex items-center justify-center shrink-0 mt-0.5 text-xs">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

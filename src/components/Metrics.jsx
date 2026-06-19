import { motion } from 'framer-motion'

const metrics = [
  { indicator: 'Doadores novos', what: 'Quantas pessoas doaram pela primeira vez', why: 'Mostra aquisição e alcance' },
  { indicator: 'Doadores recorrentes', what: 'Quantas pessoas doam mensalmente', why: 'Cria previsibilidade financeira' },
  { indicator: 'Taxa de retenção', what: 'Quantos doadores voltam a doar', why: 'Aumenta valor de longo prazo' },
  { indicator: 'Origem da doação', what: 'Instagram, Google, e-mail, evento, WhatsApp', why: 'Mostra canais mais eficientes' },
  { indicator: 'Receita por campanha', what: 'Quanto cada causa arrecada', why: 'Ajuda a repetir o que funciona' },
  { indicator: 'Base internacional', what: 'Doadores e interessados fora do Brasil', why: 'Abre nova fonte de captação' },
]

export default function Metrics() {
  return (
    <section id="metricas" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">Métricas para provar valor</h2>
        <p className="text-white/55 text-base mt-2 max-w-2xl">
          O projeto precisa ser medido por clareza, controle e aumento do potencial de arrecadação.
        </p>
      </motion.div>

      <div
        className="rounded-[26px] overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 30px 80px rgba(0,0,0,0.3)' }}
      >
        <div
          className="grid grid-cols-3 px-6 py-3 text-xs font-black text-white/80 uppercase tracking-wider"
          style={{ background: 'rgba(57,217,138,0.12)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span>Indicador</span>
          <span>O que mostra</span>
          <span>Por que importa</span>
        </div>
        {metrics.map((m, i) => (
          <motion.div
            key={m.indicator}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grid grid-cols-3 px-6 py-4 text-sm transition-colors hover:bg-white/5"
            style={{ borderBottom: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
          >
            <span className="text-white font-semibold">{m.indicator}</span>
            <span className="text-white/55 pr-4">{m.what}</span>
            <span className="text-[#39d98a] font-semibold">{m.why}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

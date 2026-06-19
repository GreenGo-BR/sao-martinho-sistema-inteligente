import { motion } from 'framer-motion'

const roles = [
  { icon: '✍️', title: 'A equipe cria', desc: 'Conteúdo autêntico, histórias reais e campanhas com propósito — o coração da comunicação do São Martinho.', color: '#39d98a' },
  { icon: '🗄️', title: 'O sistema organiza', desc: 'Dados de doadores, campanhas, canais e resultados em um único lugar — sem perda de informação.', color: '#45b7ff' },
  { icon: '⚡', title: 'Automações ampliam', desc: 'E-mails de agradecimento, impacto e reativação chegam no momento certo, sem esforço manual extra.', color: '#a78bfa' },
  { icon: '📊', title: 'A diretoria acompanha', desc: 'Indicadores claros de arrecadação, retenção e alcance para decisões estratégicas mensais.', color: '#ffd166' },
  { icon: '🤝', title: 'Todos trabalham juntos', desc: 'Comunicação, tecnologia e liderança alinhadas em torno de um objetivo: ampliar impacto social.', color: '#fb923c' },
]

export default function TeamSupportMessage() {
  return (
    <section id="equipe" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[30px] p-8 md:p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.12), rgba(69,183,255,0.08)), rgba(255,255,255,0.06)',
          border: '1px solid rgba(57,217,138,0.22)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
        }}
      >
        <span
          className="inline-flex px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(57,217,138,0.14)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
        >
          Mensagem central
        </span>
        <h2 className="text-[clamp(26px,4vw,42px)] font-black leading-tight tracking-tight mb-3">
          O papel da equipe de comunicação continua essencial
        </h2>
        <p className="text-white/65 text-lg leading-relaxed max-w-3xl mb-8">
          Esta proposta <strong className="text-white">não substitui</strong> a equipe de comunicação. O objetivo é agregar tecnologia, automação, dados e IA para ampliar o trabalho que a equipe já realiza. A comunicação continua sendo protagonista; o Centro de Inteligência Social funciona como um acelerador — transformando alcance, conteúdo e relacionamento em doações, recorrência e impacto mensurável.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl p-5 cursor-default"
              style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${r.color}22` }}
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-base mb-2" style={{ color: r.color }}>{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

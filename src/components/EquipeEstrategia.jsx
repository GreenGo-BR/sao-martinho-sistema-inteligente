import { motion } from 'framer-motion'

export default function EquipeEstrategia() {
  return (
    <section id="equipe-estrategia" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[34px] p-8 md:p-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.09), rgba(69,183,255,0.06)), rgba(7,17,31,0.7)',
          border: '1px solid rgba(57,217,138,0.2)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
      >
        {/* Decorative orb */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(57,217,138,0.1), transparent 70%)', transform: 'translate(30%, -30%)' }}
        />

        <div className="relative z-10">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-5"
            style={{ background: 'rgba(57,217,138,0.14)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
          >
            🤝 Posicionamento central
          </span>

          <h2 className="text-[clamp(28px,4.5vw,48px)] font-black tracking-tight leading-tight mb-4">
            A equipe continua no centro da estratégia
          </h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-10">
            O Motor de Arrecadação não substitui ninguém — ele amplifica cada esforço da equipe de comunicação, transformando relacionamento em arrecadação sustentável.
          </p>

          {/* Equation visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center text-center rounded-[24px] px-8 py-6 min-w-[180px]"
              style={{ background: 'rgba(57,217,138,0.1)', border: '1px solid rgba(57,217,138,0.25)' }}
            >
              <span className="text-4xl mb-3">✍️</span>
              <strong className="text-white font-black text-lg block">Comunicação</strong>
              <span className="text-white/50 text-sm mt-1">cria, inspira e conecta</span>
            </motion.div>

            {/* Plus */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-4xl font-black text-white/30"
            >
              +
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center rounded-[24px] px-8 py-6 min-w-[180px]"
              style={{ background: 'rgba(69,183,255,0.1)', border: '1px solid rgba(69,183,255,0.25)' }}
            >
              <span className="text-4xl mb-3">⚡</span>
              <strong className="text-white font-black text-lg block">Motor de Arrecadação</strong>
              <span className="text-white/50 text-sm mt-1">organiza, automatiza e mede</span>
            </motion.div>

            {/* Equals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-black text-white/30"
            >
              =
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex flex-col gap-2 min-w-[200px]"
            >
              {[
                { icon: '📈', label: 'Mais Impacto', color: '#39d98a' },
                { icon: '❤️', label: 'Mais Relacionamento', color: '#45b7ff' },
                { icon: '💚', label: 'Mais Arrecadação', color: '#ffd166' },
              ].map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl font-bold text-base"
                  style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${r.color}25`, color: r.color }}
                >
                  <span className="text-xl">{r.icon}</span>
                  {r.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 5 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { icon: '✍️', title: 'A equipe cria', desc: 'Conteúdo autêntico, histórias reais e campanhas com propósito.', color: '#39d98a' },
              { icon: '🗄️', title: 'O sistema organiza', desc: 'Dados de doadores, campanhas e canais em um único lugar.', color: '#45b7ff' },
              { icon: '⚡', title: 'Automações ampliam', desc: 'E-mails de agradecimento e reativação no momento certo.', color: '#a78bfa' },
              { icon: '📊', title: 'A diretoria acompanha', desc: 'Indicadores claros para decisões estratégicas mensais.', color: '#ffd166' },
              { icon: '🤝', title: 'Todos crescem juntos', desc: 'Comunicação, tecnologia e liderança em torno do mesmo objetivo.', color: '#fb923c' },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 cursor-default"
                style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${p.color}20` }}
              >
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="font-bold text-sm mb-1.5" style={{ color: p.color }}>{p.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

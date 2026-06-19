import { motion } from 'framer-motion'

const deliverables = [
  { icon: '🗄️', title: 'Organização de Dados', desc: 'Base de doadores consolidada, histórico mapeado e dados prontos para análise.', color: '#39d98a' },
  { icon: '📊', title: 'Indicadores e Dashboards', desc: 'Primeiros painéis executivos com arrecadação, origem e metas em tempo real.', color: '#45b7ff' },
  { icon: '🔗', title: 'Integração de Campanhas', desc: 'Campanhas, site e comunicação conectados com tracking de origem.', color: '#a78bfa' },
  { icon: '⚡', title: 'Base Tecnológica do Motor', desc: 'CRM, automações e infraestrutura prontos para escalar nas próximas fases.', color: '#ffd166' },
]

const timelineMonths = [
  { month: 'Julho 2026', milestone: 'Estruturação', color: '#39d98a', desc: 'Mapeamento, dados e CRM inicial' },
  { month: 'Agosto', milestone: 'Integração', color: '#45b7ff', desc: 'Campanhas, site e tracking' },
  { month: 'Setembro', milestone: 'Validação', color: '#a78bfa', desc: 'Dashboards e primeiros resultados' },
  { month: 'Outubro 2026', milestone: 'Aprendizados', color: '#ffd166', desc: 'Relatório executivo e próximos passos' },
]

export default function FinalCTA() {
  return (
    <section id="implantacao" className="mt-12 scroll-mt-24">
      {/* ── Main block ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-[34px] p-8 md:p-10 mb-5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.13), rgba(69,183,255,0.09)), rgba(7,17,31,0.85)',
          border: '1px solid rgba(57,217,138,0.25)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
        }}
      >
        {/* Decorative orbs */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(57,217,138,0.14), transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(69,183,255,0.1), transparent 70%)' }} />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
              style={{ background: 'rgba(57,217,138,0.15)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.3)' }}
            >
              🚀 Próximo passo
            </span>
            <h2 className="text-[clamp(28px,4.5vw,50px)] font-black tracking-tight leading-tight mb-1">
              Início da Implantação do
              <br />
              <span className="gradient-text">Motor de Arrecadação</span>
            </h2>
            <p className="text-[#39d98a] font-black text-lg mt-2">Julho → Outubro 2026</p>
          </div>

          {/* Body text */}
          <div
            className="rounded-2xl p-6 mb-8 text-white/70 text-base leading-relaxed space-y-4"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <p>
              A primeira etapa do projeto consiste em estruturar os fundamentos do Motor de Arrecadação, incluindo organização de dados, definição de indicadores, integração de campanhas, primeiros dashboards e construção da base tecnológica necessária para o crescimento futuro.
            </p>
            <p>
              Esta fase coincide com o período atual de colaboração junto ao São Martinho, permitindo iniciar a implantação da proposta de forma prática, gradual e alinhada à realidade da instituição.
            </p>
            <p>
              Ao final desta etapa, a organização terá uma visão mais clara dos resultados, aprendizados e oportunidades identificadas, podendo então avaliar os caminhos mais adequados para a continuidade e evolução do Motor de Arrecadação nos anos seguintes.
            </p>
            <p className="text-white font-semibold">
              O objetivo desta proposta não é criar uma iniciativa temporária, mas estabelecer uma estrutura de crescimento capaz de gerar valor permanente para o São Martinho.
            </p>
          </div>

          {/* 4 deliverable cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {deliverables.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 cursor-default"
                style={{ background: `${d.color}0f`, border: `1px solid ${d.color}28` }}
              >
                <div className="text-2xl mb-3">{d.icon}</div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                    style={{ background: `${d.color}22`, color: d.color }}
                  >
                    ✓
                  </span>
                  <strong className="text-sm font-black" style={{ color: d.color }}>{d.title}</strong>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-2">
            <p className="text-white/40 text-xs font-black uppercase tracking-wider mb-4">Timeline da implantação</p>

            {/* Desktop horizontal */}
            <div className="hidden md:block relative">
              <div
                className="absolute top-[28px] left-[12%] right-[12%] h-0.5"
                style={{ background: 'linear-gradient(90deg, #39d98a, #45b7ff, #a78bfa, #ffd166)' }}
              />
              <div className="grid grid-cols-4 gap-4 relative z-10">
                {timelineMonths.map((t, i) => (
                  <motion.div
                    key={t.month}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      className="w-[56px] h-[56px] rounded-xl flex items-center justify-center mb-3 text-xs font-black"
                      style={{ background: `${t.color}16`, border: `2px solid ${t.color}45`, color: t.color, boxShadow: `0 0 18px ${t.color}20` }}
                      animate={{ boxShadow: [`0 0 12px ${t.color}20`, `0 0 24px ${t.color}30`, `0 0 12px ${t.color}20`] }}
                      transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {i + 1}
                    </motion.div>
                    <span className="text-xs font-black mb-0.5" style={{ color: t.color }}>{t.milestone}</span>
                    <span className="text-white/35 text-[11px] font-semibold mb-1">{t.month}</span>
                    <span className="text-white/35 text-[10px] leading-tight">{t.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile vertical */}
            <div className="flex flex-col gap-3 md:hidden">
              {timelineMonths.map((t, i) => (
                <motion.div
                  key={t.month}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{ background: `${t.color}0f`, border: `1px solid ${t.color}25` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{ background: `${t.color}18`, color: t.color }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <span className="font-black text-sm block" style={{ color: t.color }}>{t.milestone}</span>
                    <span className="text-white/40 text-xs">{t.month} · {t.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Closing highlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-[28px] p-7 md:p-9 mb-5 text-center"
        style={{
          background: 'linear-gradient(135deg, #39d98a, #45b7ff)',
          boxShadow: '0 28px 90px rgba(57,217,138,0.25)',
        }}
      >
        <div className="text-3xl mb-4">💡</div>
        <p className="text-[#04111d] font-bold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          "Esta etapa permitirá que o São Martinho avalie o potencial real do Motor de Arrecadação a partir de resultados concretos e aprendizados obtidos durante a implantação."
        </p>
      </motion.div>

      {/* ── Disclaimer ── */}
      <p className="text-center text-white/30 text-xs mt-6 max-w-2xl mx-auto leading-relaxed">
        Documento conceitual para discussão interna. Números e projeções são ilustrativos e devem ser definidos após acesso aos dados reais de arrecadação, canais, campanhas e base de doadores do São Martinho.
      </p>
    </section>
  )
}

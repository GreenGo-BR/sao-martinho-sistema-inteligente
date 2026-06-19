import { motion } from 'framer-motion'

const outcomes = [
  { icon: '📊', title: 'Indicadores definidos', desc: 'Métricas de arrecadação claras e acompanhadas.' },
  { icon: '📈', title: 'Primeiros dashboards executivos', desc: 'Visão em tempo real para gestores e diretoria.' },
  { icon: '🔗', title: 'Campanhas integradas', desc: 'Site, comunicação e campanhas conectados.' },
  { icon: '🧭', title: 'Visão dos próximos passos', desc: 'Previsões e oportunidades identificadas com dados reais.' },
]

const learnItems = [
  'Estruturar as bases do projeto',
  'Gerar aprendizados reais',
  'Validar processos',
  'Identificar oportunidades',
  'Criar previsões mais consistentes para o futuro',
]

const timelineMonths = [
  { month: 'Julho 2026', milestone: 'Estruturação', color: '#39d98a', desc: 'Dados e CRM inicial' },
  { month: 'Agosto', milestone: 'Integração', color: '#45b7ff', desc: 'Campanhas e tracking' },
  { month: 'Setembro', milestone: 'Validação', color: '#a78bfa', desc: 'Dashboards e resultados' },
  { month: 'Outubro 2026', milestone: 'Aprendizados', color: '#ffd166', desc: 'Relatório e próximos passos' },
]

function BlockLabel({ children, color = '#39d98a' }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black mb-4 uppercase tracking-wider"
      style={{ background: `${color}15`, color, border: `1px solid ${color}28` }}
    >
      {children}
    </span>
  )
}

export default function FinalCTA() {
  return (
    <section id="implantacao" className="mt-12 scroll-mt-24 space-y-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(57,217,138,0.13)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
        >
          🚀 Próximo passo
        </span>
        <h2 className="text-[clamp(28px,4.5vw,50px)] font-black tracking-tight leading-tight mb-1">
          Início da Implantação do Motor de Arrecadação
        </h2>
        <p className="text-[#39d98a] font-black text-lg">Julho → Outubro 2026</p>
      </motion.div>

      {/* BLOCO 1 — Por que esta etapa é importante? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-[26px] p-7 md:p-8"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.3)',
        }}
      >
        <BlockLabel color="#39d98a">Contexto</BlockLabel>
        <h3 className="font-black text-xl text-white mb-3">Por que esta etapa é importante?</h3>
        <p className="text-white/65 text-base leading-relaxed max-w-3xl">
          A primeira etapa do projeto consiste em estruturar os fundamentos do Motor de Arrecadação, incluindo organização de dados, definição de indicadores, integração de campanhas, primeiros dashboards e construção da base tecnológica necessária para o crescimento futuro.
        </p>

        {/* Timeline */}
        <div className="mt-7">
          <p className="text-white/35 text-[11px] font-black uppercase tracking-widest mb-4">Timeline da implantação</p>

          {/* Desktop */}
          <div className="hidden md:block relative">
            <div
              className="absolute top-7 left-[12%] right-[12%] h-px"
              style={{ background: 'linear-gradient(90deg, #39d98a, #45b7ff, #a78bfa, #ffd166)' }}
            />
            <div className="grid grid-cols-4 gap-4 relative z-10">
              {timelineMonths.map((t, i) => (
                <motion.div
                  key={t.month}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black mb-3"
                    style={{ background: `${t.color}14`, border: `2px solid ${t.color}40`, color: t.color }}
                    animate={{ boxShadow: [`0 0 0px ${t.color}00`, `0 0 18px ${t.color}30`, `0 0 0px ${t.color}00`] }}
                    transition={{ duration: 2.2 + i * 0.3, repeat: Infinity }}
                  >
                    {i + 1}
                  </motion.div>
                  <span className="text-xs font-black block mb-0.5" style={{ color: t.color }}>{t.milestone}</span>
                  <span className="text-white/35 text-[11px] font-semibold mb-1">{t.month}</span>
                  <span className="text-white/30 text-[10px] leading-tight">{t.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-2.5 md:hidden">
            {timelineMonths.map((t, i) => (
              <div key={t.month}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: `${t.color}0d`, border: `1px solid ${t.color}25` }}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: `${t.color}18`, color: t.color }}>
                  {i + 1}
                </div>
                <div>
                  <span className="font-black text-sm block" style={{ color: t.color }}>{t.milestone}</span>
                  <span className="text-white/40 text-xs">{t.month} · {t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* BLOCO 2 — Serviços comunitários + oportunidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-[26px] p-7 md:p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(69,183,255,0.1), rgba(57,217,138,0.06))',
          border: '1px solid rgba(69,183,255,0.2)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.25)',
        }}
      >
        <BlockLabel color="#45b7ff">Janela de oportunidade</BlockLabel>
        <h3 className="font-black text-xl text-white mb-3">Serviços comunitários + oportunidade de construção</h3>
        <p className="text-white/65 text-base leading-relaxed max-w-3xl">
          Esta fase coincide com o período restante dos serviços comunitários atualmente realizados junto ao São Martinho, criando uma oportunidade concreta para iniciar a implantação da proposta de forma prática, gradual e alinhada à realidade da instituição.
        </p>
      </motion.div>

      {/* BLOCO 3 — Outubro não é o final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-[26px] p-7 md:p-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,209,102,0.1), rgba(251,146,60,0.06))',
          border: '1px solid rgba(255,209,102,0.22)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.25)',
        }}
      >
        <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,209,102,0.12), transparent 70%)' }} />

        <div className="relative z-10">
          <BlockLabel color="#ffd166">Perspectiva estratégica</BlockLabel>
          <h3 className="font-black text-xl text-white mb-2">Outubro não é o final do projeto</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            O encerramento dos serviços comunitários não representa a conclusão do Motor de Arrecadação. Esta etapa existe para:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {learnItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: 'rgba(255,209,102,0.09)', border: '1px solid rgba(255,209,102,0.18)' }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: 'rgba(255,209,102,0.22)', color: '#ffd166' }}
                >
                  ✓
                </span>
                <span className="text-white/75 text-sm font-medium capitalize">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* BLOCO 4 — O que o São Martinho terá */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-[26px] p-7 md:p-8"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.11)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <BlockLabel color="#a78bfa">Entregáveis</BlockLabel>
        <h3 className="font-black text-xl text-white mb-5">O que o São Martinho terá ao final desta fase?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 cursor-default"
              style={{
                background: 'rgba(167,139,250,0.07)',
                border: '1px solid rgba(167,139,250,0.18)',
              }}
            >
              <div className="text-2xl mb-3">{o.icon}</div>
              <strong className="block text-sm font-black text-white mb-1.5">{o.title}</strong>
              <p className="text-white/45 text-xs leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BLOCO 5 — Visão de longo prazo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="rounded-[26px] p-7 md:p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.09), rgba(69,183,255,0.07))',
          border: '1px solid rgba(57,217,138,0.18)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.25)',
        }}
      >
        <BlockLabel color="#39d98a">Visão de longo prazo</BlockLabel>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: 'rgba(57,217,138,0.15)', border: '1px solid rgba(57,217,138,0.28)' }}
            >
              🌱
            </div>
          </div>
          <div>
            <h3 className="font-black text-xl text-white mb-3">Visão de longo prazo</h3>
            <p className="text-white/65 text-base leading-relaxed mb-4">
              Acredito que o verdadeiro potencial do Motor de Arrecadação começa a aparecer após esta fase inicial.
            </p>
            <div
              className="rounded-xl p-5 text-white/70 text-sm leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(57,217,138,0.15)' }}
            >
              Tenho interesse em continuar contribuindo com a evolução do projeto após o encerramento dos serviços comunitários, dedicando parte significativa da minha rotina profissional ao desenvolvimento do Motor de Arrecadação, em um formato que faça sentido para a instituição e para seus objetivos de longo prazo.
            </div>
          </div>
        </div>
      </motion.div>

      {/* BLOCO FINAL — grande callout institucional */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.65 }}
        className="rounded-[30px] p-8 md:p-12 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #39d98a, #45b7ff)',
          boxShadow: '0 40px 100px rgba(57,217,138,0.28)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.18), transparent 60%)' }} />
        <div className="relative z-10">
          <div className="text-4xl mb-5">🏛️</div>
          <p className="text-[#04111d] font-black text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            "O objetivo desta proposta não é criar uma iniciativa temporária,
            <br className="hidden md:block" />
            mas estabelecer uma estrutura de crescimento capaz de
            <span className="underline decoration-[#04111d]/40 decoration-2 underline-offset-4"> gerar valor permanente</span>
            {' '}para o São Martinho."
          </p>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <p className="text-center text-white/30 text-xs pt-2 max-w-2xl mx-auto leading-relaxed">
        Documento conceitual para discussão interna. Números e projeções são ilustrativos e devem ser definidos após acesso aos dados reais de arrecadação, canais, campanhas e base de doadores do São Martinho.
      </p>
    </section>
  )
}

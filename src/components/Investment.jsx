import { motion } from 'framer-motion'

const techItems = [
  { label: 'Hospedagem e Infraestrutura', cost: 'US$ 20–50/mês', icon: '🖥️', color: '#45b7ff' },
  { label: 'CRM e Banco de Dados', cost: 'US$ 25–50/mês', icon: '🗄️', color: '#39d98a' },
  { label: 'E-mails e Automação', cost: 'US$ 20–50/mês', icon: '✉️', color: '#a78bfa' },
  { label: 'Inteligência Artificial', cost: 'US$ 20–50/mês', icon: '🤖', color: '#ffd166' },
  { label: 'Ferramentas Complementares', cost: 'US$ 20–50/mês', icon: '🔧', color: '#fb923c' },
]

const responsibilities = [
  'Estratégia de arrecadação',
  'CRM e relacionamento',
  'SEO e GEO',
  'Automação e IA',
  'Relatórios executivos',
  'Evolução contínua da plataforma',
]

const traditional = [
  'Ferramentas isoladas',
  'Dados espalhados',
  'Dependência de fornecedores',
  'Pouca integração',
  'Menor visibilidade de resultados',
]

const motor = [
  'Plataforma própria',
  'Dados centralizados',
  'Conhecimento interno',
  'Comunicação integrada',
  'Crescimento sustentável',
  'Visão executiva em tempo real',
]

export default function Investment() {
  return (
    <section id="investimento" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(57,217,138,0.14)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
        >
          💡 Viabilidade financeira
        </span>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-2">
          Investimento Necessário
        </h2>
        <p className="text-white/55 text-base max-w-2xl leading-relaxed">
          Baixo custo tecnológico comparado ao potencial de crescimento institucional que o Motor de Arrecadação representa.
        </p>
      </motion.div>

      {/* ── 1. Tech infrastructure ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[30px] p-7 md:p-9 mb-5"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04)), rgba(7,17,31,0.82)',
          border: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
        }}
      >
        {/* Section header */}
        <div className="mb-6">
          <h3 className="font-black text-xl text-white mb-1">Infraestrutura do Motor de Arrecadação</h3>
          <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
            O foco do investimento está na construção de uma capacidade permanente de arrecadação e relacionamento. A tecnologia necessária é relativamente acessível.
          </p>
        </div>

        {/* Table */}
        <div
          className="rounded-[20px] overflow-hidden mb-4"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-2 px-5 py-3 text-xs font-black uppercase tracking-wider"
            style={{ background: 'rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-white/60">Componente</span>
            <span className="text-white/60 text-right">Custo estimado</span>
          </div>

          {techItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="grid grid-cols-2 items-center px-5 py-4 transition-colors hover:bg-white/[0.04]"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  {item.icon}
                </span>
                <span className="text-white/75 text-sm font-medium">{item.label}</span>
              </div>
              <div className="text-right font-bold text-sm" style={{ color: item.color }}>
                {item.cost}
              </div>
            </motion.div>
          ))}

          {/* Total row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
            className="grid grid-cols-2 items-center px-5 py-5"
            style={{ background: 'linear-gradient(135deg, rgba(57,217,138,0.12), rgba(69,183,255,0.08))' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0"
                style={{ background: 'rgba(57,217,138,0.2)', border: '1px solid rgba(57,217,138,0.35)' }}
              >
                💰
              </span>
              <span className="text-white font-black text-base">TOTAL ESTIMADO</span>
            </div>
            <div className="text-right">
              <span
                className="text-xl font-black"
                style={{ color: '#39d98a', textShadow: '0 0 20px rgba(57,217,138,0.4)' }}
              >
                US$ 100–200/mês
              </span>
            </div>
          </motion.div>
        </div>

        <p className="text-white/35 text-xs leading-relaxed">
          Valores estimados para ferramentas SaaS. Ajustes possíveis conforme volume e escolha de plataformas específicas.
        </p>
      </motion.div>

      {/* ── 2. Coordination ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-[30px] p-7 md:p-9 mb-5"
        style={{
          background: 'linear-gradient(135deg, rgba(69,183,255,0.1), rgba(167,139,250,0.07)), rgba(7,17,31,0.7)',
          border: '1px solid rgba(69,183,255,0.18)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
        }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: description */}
          <div className="md:w-1/2">
            <span
              className="inline-flex px-3 py-1 rounded-full text-xs font-black mb-4"
              style={{ background: 'rgba(69,183,255,0.14)', color: '#45b7ff', border: '1px solid rgba(69,183,255,0.25)' }}
            >
              Recurso humano
            </span>
            <h3 className="font-black text-xl text-white mb-3">Coordenação do Motor de Arrecadação</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              O projeto requer uma coordenação dedicada para conectar comunicação, campanhas, relacionamento com doadores, automações, relatórios e evolução contínua da plataforma.
            </p>

            <div className="space-y-3">
              {[
                { label: 'Carga de dedicação prevista', value: '4 dias por semana', color: '#39d98a' },
                { label: 'Formato', value: 'Remoto', color: '#45b7ff' },
                { label: 'Modelo de contratação', value: 'A definir após fase piloto', color: '#a78bfa' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.09)' }}
                >
                  <span className="text-white/40 text-xs font-semibold min-w-[130px] shrink-0">{item.label}</span>
                  <span className="font-bold text-sm" style={{ color: item.color }}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: responsibility cards */}
          <div className="md:w-1/2">
            <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">Áreas de atuação</p>
            <div className="grid grid-cols-2 gap-3">
              {responsibilities.map((r, i) => (
                <motion.div
                  key={r}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(69,183,255,0.15)' }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0"
                    style={{ background: 'rgba(57,217,138,0.2)', color: '#39d98a' }}
                  >
                    ✓
                  </span>
                  <span className="text-white/70 text-sm font-medium leading-tight">{r}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 3. Comparison ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-[30px] p-7 md:p-9 mb-5"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.11)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
        }}
      >
        <div className="mb-6">
          <h3 className="font-black text-xl text-white mb-1">Por que desenvolver internamente?</h3>
          <p className="text-white/45 text-sm">Comparativo entre o modelo atual e a proposta do Motor de Arrecadação.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[22px] p-6"
            style={{ background: 'rgba(251,113,133,0.07)', border: '1px solid rgba(251,113,133,0.18)' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">📦</span>
              <h4 className="font-black text-base" style={{ color: '#fb7185' }}>Modelo tradicional</h4>
            </div>
            <ul className="space-y-3">
              {traditional.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-white/55 text-sm"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5"
                    style={{ background: 'rgba(251,113,133,0.18)', color: '#fb7185' }}
                  >
                    ✕
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Motor */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[22px] p-6"
            style={{
              background: 'linear-gradient(135deg, rgba(57,217,138,0.12), rgba(69,183,255,0.07))',
              border: '1px solid rgba(57,217,138,0.25)',
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">⚡</span>
              <h4 className="font-black text-base" style={{ color: '#39d98a' }}>Motor de Arrecadação São Martinho</h4>
            </div>
            <ul className="space-y-3">
              {motor.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-white/75 text-sm"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5"
                    style={{ background: 'rgba(57,217,138,0.2)', color: '#39d98a' }}
                  >
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* ── 4. Closing highlight ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-[24px] p-7 md:p-8 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.13), rgba(69,183,255,0.09))',
          border: '1px solid rgba(57,217,138,0.22)',
          boxShadow: '0 0 60px rgba(57,217,138,0.08)',
        }}
      >
        <div className="text-3xl mb-4">🏛️</div>
        <p className="text-white font-bold text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          "A proposta busca construir uma capacidade institucional permanente de crescimento e arrecadação,
          <span className="text-[#39d98a]"> e não apenas implementar mais uma ferramenta."</span>
        </p>
      </motion.div>
    </section>
  )
}

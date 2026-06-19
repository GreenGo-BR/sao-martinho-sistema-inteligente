import { motion } from 'framer-motion'

const steps = [
  {
    icon: '👁️',
    title: 'Vê a campanha',
    desc: 'No Instagram, Google ou boca a boca — uma história toca o coração.',
    color: '#45b7ff',
    glow: 'rgba(69,183,255,0.25)',
  },
  {
    icon: '💚',
    title: 'Faz a doação',
    desc: 'Pix, cartão ou mensal. Processo simples, seguro e em 60 segundos.',
    color: '#39d98a',
    glow: 'rgba(57,217,138,0.25)',
  },
  {
    icon: '📩',
    title: 'Recebe agradecimento',
    desc: 'E-mail personalizado em minutos — com o nome dela e o impacto real da doação.',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.25)',
  },
  {
    icon: '📖',
    title: 'Recebe histórias',
    desc: 'Nos próximos dias, histórias de crianças e projetos chegam ao seu e-mail.',
    color: '#ffd166',
    glow: 'rgba(255,209,102,0.25)',
  },
  {
    icon: '📊',
    title: 'Vê o impacto',
    desc: 'Um relatório mostra o que sua doação ajudou a construir — concretamente.',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.25)',
  },
  {
    icon: '🔄',
    title: 'Torna-se recorrente',
    desc: 'Com um convite no momento certo, transforma-se em apoiador mensal.',
    color: '#39d98a',
    glow: 'rgba(57,217,138,0.25)',
  },
  {
    icon: '🌱',
    title: 'Indica novos apoiadores',
    desc: 'Compartilha com amigos e família — o impacto se multiplica organicamente.',
    color: '#45b7ff',
    glow: 'rgba(69,183,255,0.25)',
  },
]

export default function DonorJourney() {
  return (
    <section id="jornada" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
          style={{ background: 'rgba(57,217,138,0.14)', color: '#39d98a', border: '1px solid rgba(57,217,138,0.25)' }}
        >
          ❤️ Jornada do doador
        </span>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-3">
          O que acontece quando uma pessoa doa?
        </h2>
        <p className="text-white/55 text-base max-w-2xl leading-relaxed">
          Sem o Motor de Arrecadação, a jornada termina na doação. Com ele, cada doação é o começo de um relacionamento duradouro.
        </p>
      </motion.div>

      {/* Flow */}
      <div className="relative">
        {/* Connecting line — desktop */}
        <div
          className="hidden lg:block absolute top-[52px] left-[7%] right-[7%] h-0.5 z-0"
          style={{ background: 'linear-gradient(90deg, #45b7ff, #39d98a, #a78bfa, #ffd166, #fb923c, #39d98a, #45b7ff)' }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center cursor-default"
            >
              {/* Icon bubble */}
              <motion.div
                className="w-[64px] h-[64px] rounded-2xl flex items-center justify-center text-2xl mb-4 relative"
                style={{
                  background: `radial-gradient(circle at 40% 35%, ${s.glow}, rgba(7,17,31,0.9))`,
                  border: `1px solid ${s.color}40`,
                  boxShadow: `0 0 24px ${s.glow}`,
                }}
                animate={{ boxShadow: [`0 0 16px ${s.glow}`, `0 0 32px ${s.glow}`, `0 0 16px ${s.glow}`] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {s.icon}
                {/* Step number */}
                <span
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center"
                  style={{ background: s.color, color: '#04111d' }}
                >
                  {i + 1}
                </span>
              </motion.div>

              <strong className="block text-sm font-bold mb-1" style={{ color: s.color }}>{s.title}</strong>
              <p className="text-white/45 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5"
        style={{
          background: 'linear-gradient(135deg, rgba(57,217,138,0.1), rgba(69,183,255,0.07))',
          border: '1px solid rgba(57,217,138,0.2)',
        }}
      >
        <div className="text-4xl shrink-0">💡</div>
        <div>
          <strong className="block text-white font-bold text-lg mb-1">Cada doador tem potencial de virar embaixador</strong>
          <p className="text-white/55 text-sm leading-relaxed max-w-2xl">
            Quando a jornada é bem construída — agradecimento, impacto, recorrência e vínculo — o doador não apenas continua apoiando: ele convida outras pessoas. Esse é o efeito composto que o Motor de Arrecadação ativa.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

const features = [
  { icon: '🇧🇷', title: 'Brasileiros no exterior', desc: 'Campanhas segmentadas por país, comunidade e diaspora brasileira no mundo. Conexão emocional com a terra natal.' },
  { icon: '🌐', title: 'Página em inglês', desc: 'Storytelling global: "Help Brazilian children build their future." Interface limpa, objetiva e acessível para doadores internacionais.' },
  { icon: '💳', title: 'Cartão internacional', desc: 'Processamento seguro via Stripe ou PayPal. Moedas: USD, EUR, GBP. Recibo automático em inglês para declaração fiscal.' },
  { icon: '📖', title: 'Storytelling global', desc: 'Histórias de impacto adaptadas para o público internacional, com foco em educação, gastronomia social e transformação de vida.' },
  { icon: '🗺️', title: 'Campanhas por país', desc: 'Segmentação por país ou comunidade: "São Paulo community in New York raises $10k for São Martinho." Identidade local + impacto global.' },
  { icon: '📈', title: 'Relatório de origem', desc: 'Dashboard com mapa-múndi mostrando de onde vêm as doações internacionais, valor médio por região e taxa de recorrência.' },
]

export default function InternationalDonations() {
  return (
    <section id="internacional" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-[34px] p-8 md:p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(69,183,255,0.1), rgba(57,217,138,0.07)), rgba(7,17,31,0.6)',
          border: '1px solid rgba(69,183,255,0.2)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.35)',
        }}
      >
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black mb-4"
            style={{ background: 'rgba(69,183,255,0.14)', color: '#45b7ff', border: '1px solid rgba(69,183,255,0.25)' }}
          >
            🌎 Nova frente de captação
          </span>
          <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-3">
            Doações Internacionais
          </h2>
          <p className="text-white/55 text-base max-w-2xl leading-relaxed">
            Abrir o São Martinho para o mundo. Brasileiros no exterior querem apoiar causas da sua terra natal — especialmente quando o storytelling é poderoso e o processo é simples.
          </p>
        </div>

        {/* English-style teaser */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-white/40 font-mono">saomartinho.org/en</span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-black"
              style={{ background: 'rgba(57,217,138,0.15)', color: '#39d98a' }}
            >
              EN
            </span>
          </div>
          <h3 className="text-xl font-black text-white mb-2">
            "Help Brazilian children build their future"
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg">
            São Martinho has been transforming the lives of children and teenagers in Rio de Janeiro since 1993. Your donation, wherever you are in the world, creates real, lasting change.
          </p>
          <div className="flex gap-3 mt-4">
            <span
              className="px-4 py-2 rounded-full text-xs font-bold text-[#04111d]"
              style={{ background: 'linear-gradient(135deg,#39d98a,#45b7ff)' }}
            >
              Donate Now — USD
            </span>
            <span
              className="px-4 py-2 rounded-full text-xs font-bold text-white"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}
            >
              Our Impact
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 cursor-default"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

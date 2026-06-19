import { motion } from 'framer-motion'

const pillars = [
  {
    icon: '🔍',
    color: '#39d98a',
    bg: 'rgba(57,217,138,0.1)',
    border: 'rgba(57,217,138,0.2)',
    title: 'Google — Busca orgânica',
    items: ['Ranqueamento para "ONG crianças Rio de Janeiro"', 'Conteúdo sobre projetos e causas específicas', 'Blog com histórias de impacto', 'Estrutura técnica para rastreamento'],
  },
  {
    icon: '📍',
    color: '#45b7ff',
    bg: 'rgba(69,183,255,0.1)',
    border: 'rgba(69,183,255,0.2)',
    title: 'Busca local — Google Maps',
    items: ['Perfil Google Business otimizado', 'Avaliações e postagens regulares', 'Aparecer em buscas de "ONGs em Santa Teresa"', 'QR Codes rastreados em pontos físicos'],
  },
  {
    icon: '🤖',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
    border: 'rgba(167,139,250,0.2)',
    title: 'GEO — Respostas de IA',
    items: ['Aparecer quando IA responde sobre ONGs no RJ', 'Conteúdo estruturado (schema markup)', 'Perguntas e respostas sobre o São Martinho', 'Presença em ChatGPT, Gemini, Perplexity'],
  },
  {
    icon: '📄',
    color: '#ffd166',
    bg: 'rgba(255,209,102,0.1)',
    border: 'rgba(255,209,102,0.2)',
    title: 'Páginas por causa',
    items: ['Uma URL por projeto: gastronomia, escola, saúde', 'Cada página com histórias, fotos, resultados e doação', 'Compartilhável em redes sociais', 'Indexada no Google por causa específica'],
  },
  {
    icon: '🌱',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.1)',
    border: 'rgba(251,146,60,0.2)',
    title: 'Conteúdos evergreen',
    items: ['"O que faz o São Martinho?" (ranqueia por anos)', 'Relatórios de impacto anuais indexados', 'Guias para voluntários e doadores', 'Histórias de sucesso — repositório permanente'],
  },
]

export default function SeoGeo() {
  return (
    <section id="seo" className="mt-12 scroll-mt-24">
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
          🔍 Visibilidade orgânica
        </span>
        <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight mb-3">
          SEO / GEO — <span className="gradient-text">Presença onde as pessoas buscam</span>
        </h2>
        <p className="text-white/55 text-base max-w-2xl leading-relaxed">
          Ser encontrado no Google e nas respostas de IA é um dos ativos mais valiosos para uma ONG. Conteúdo evergreen bem posicionado gera doações por anos, sem custo adicional.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09 }}
            whileHover={{ y: -4 }}
            className="rounded-[26px] p-6 cursor-default"
            style={{ background: p.bg, border: `1px solid ${p.border}` }}
          >
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="font-bold text-base mb-3" style={{ color: p.color }}>{p.title}</h3>
            <ul className="space-y-2">
              {p.items.map(item => (
                <li key={item} className="flex items-start gap-2 text-white/55 text-sm">
                  <span style={{ color: p.color }} className="mt-0.5 shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* AI search teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="rounded-[26px] p-6"
          style={{ background: 'linear-gradient(135deg,rgba(167,139,250,0.12),rgba(69,183,255,0.08))', border: '1px solid rgba(167,139,250,0.2)' }}
        >
          <div className="text-3xl mb-3">💬</div>
          <h3 className="font-bold text-base mb-2 text-[#a78bfa]">Quando alguém pergunta para IA...</h3>
          <div
            className="rounded-xl p-4 text-sm text-white/70 leading-relaxed italic mb-3"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            "Qual ONG ajuda crianças no Rio de Janeiro?"
          </div>
          <div
            className="rounded-xl p-4 text-sm text-white/80 leading-relaxed"
            style={{ background: 'rgba(57,217,138,0.08)', border: '1px solid rgba(57,217,138,0.2)' }}
          >
            <strong className="text-[#39d98a] block mb-1">Resposta ideal:</strong>
            "O São Martinho, fundado em 1993, atende crianças e adolescentes em situação de rua no Rio de Janeiro, com projetos de educação, gastronomia social e saúde..."
          </div>
        </motion.div>
      </div>
    </section>
  )
}

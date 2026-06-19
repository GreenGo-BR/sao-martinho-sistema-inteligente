import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scenarios = {
  hoje: {
    label: 'Hoje',
    arrecadacao: 'R$ 28.400',
    doadores: '620',
    recorrentes: '148',
    campanha: '1.4x',
    arrecadacaoGrowth: '+8%',
    doadoresGrowth: '+5%',
    recorrentesGrowth: '+12%',
    bars: [35, 42, 38, 55, 48, 60, 52],
    donut: 'conic-gradient(#39d98a 0 32%, #45b7ff 32% 52%, #a78bfa 52% 68%, #ffd166 68% 80%, rgba(255,255,255,0.15) 80% 100%)',
    donutLegend: 'Instagram 32% · Google 20% · E-mail 16% · Eventos 12% · Outros 20%',
    aiInsight: '"Campanha de final de ano gerou maior engajamento. Sugerimos reativar doadores que doaram em dezembro via e-mail personalizado nos próximos 15 dias."',
  },
  '90dias': {
    label: '90 Dias',
    arrecadacao: 'R$ 47.800',
    doadores: '1.140',
    recorrentes: '312',
    campanha: '2.1x',
    arrecadacaoGrowth: '+68%',
    doadoresGrowth: '+84%',
    recorrentesGrowth: '+111%',
    bars: [45, 58, 62, 70, 75, 82, 78],
    donut: 'conic-gradient(#39d98a 0 38%, #45b7ff 38% 58%, #a78bfa 58% 74%, #ffd166 74% 87%, rgba(255,255,255,0.15) 87% 100%)',
    donutLegend: 'Instagram 38% · Google 20% · E-mail 16% · Eventos 13% · Outros 13%',
    aiInsight: '"Identificamos 87 doadores em risco de abandono. Sequência de reativação com 3 e-mails pode recuperar até 40% desses apoiadores com base nos dados do piloto."',
  },
  '12meses': {
    label: '12 Meses',
    arrecadacao: 'R$ 82.450',
    doadores: '1.842',
    recorrentes: '623',
    campanha: '3.2x',
    arrecadacaoGrowth: '+37% vs anterior',
    doadoresGrowth: '+18% crescimento',
    recorrentesGrowth: '+41% recorrência',
    bars: [45, 62, 56, 78, 88, 72, 96],
    donut: 'conic-gradient(#39d98a 0 42%, #45b7ff 42% 63%, #a78bfa 63% 81%, #ffd166 81% 92%, rgba(255,255,255,0.15) 92% 100%)',
    donutLegend: 'Instagram 42% · Google 21% · E-mail 18% · Eventos 11% · Outros 8%',
    aiInsight: '"A campanha de Gastronomia tem maior potencial de recorrência. Recomenda-se criar uma sequência de 4 e-mails com histórias de impacto, convite para doação mensal e segmentação para quem já clicou nos posts."',
  },
  futuro: {
    label: 'Futuro',
    arrecadacao: 'R$ 248.000',
    doadores: '6.400',
    recorrentes: '2.850',
    campanha: '8.7x',
    arrecadacaoGrowth: '▲ Nacional + exterior',
    doadoresGrowth: '▲ Crescimento orgânico',
    recorrentesGrowth: '▲ Programa recorrente',
    bars: [60, 72, 80, 85, 95, 88, 100],
    donut: 'conic-gradient(#39d98a 0 35%, #45b7ff 35% 55%, #a78bfa 55% 68%, #ffd166 68% 82%, #fb923c 82% 94%, rgba(255,255,255,0.15) 94% 100%)',
    donutLegend: 'Instagram 35% · Google 20% · Internacional 13% · E-mail 14% · Eventos 12% · Outros 6%',
    aiInsight: '"Sistema de IA identifica automaticamente: melhor horário de disparo por doador, campanha com maior LTV e oportunidades de patrocínio corporativo baseadas no perfil da base."',
  },
}

function AnimCounter({ target, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const prevTarget = useRef(target)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const raw = target.replace(/[^\d.]/g, '')
    const to = parseFloat(raw)
    const isFloat = target.includes('.')
    let from = 0
    const dur = 1200
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      const v = from + (to - from) * e
      el.textContent = prefix + (isFloat ? v.toFixed(1) : Math.floor(v).toLocaleString('pt-BR')) + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
    prevTarget.current = target
  }, [target, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export default function ExecutiveDashboard() {
  const [scenario, setScenario] = useState('12meses')
  const d = scenarios[scenario]

  return (
    <section id="dashboard" className="mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-[clamp(28px,4.5vw,46px)] font-black tracking-tight leading-tight">Dashboard Executivo Premium</h2>
            <p className="text-white/55 text-base mt-2 max-w-2xl">Ilustração de como a diretoria acompanha arrecadação, origem de doadores, campanhas, recorrência e insights de IA em tempo real.</p>
          </div>
          {/* Scenario Switcher */}
          <div
            className="flex gap-1 p-1 rounded-2xl shrink-0"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            {Object.entries(scenarios).map(([key, s]) => (
              <button
                key={key}
                onClick={() => setScenario(key)}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all"
                style={scenario === key
                  ? { background: 'linear-gradient(135deg,#39d98a,#45b7ff)', color: '#04111d' }
                  : { color: 'rgba(255,255,255,0.55)' }
                }
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard frame */}
        <div
          className="rounded-[34px] p-5 md:p-6"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04)), rgba(7,17,31,0.8)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
          }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#fb7185]" />
                <div className="w-3 h-3 rounded-full bg-[#ffd166]" />
                <div className="w-3 h-3 rounded-full bg-[#39d98a]" />
              </div>
              <div>
                <strong className="block text-lg font-black">Centro de Inteligência Social</strong>
                <span className="text-white/45 text-[13px]">Visão executiva · {d.label}</span>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[#39d98a] text-[13px] font-black"
              style={{ background: 'rgba(57,217,138,0.12)', border: '1px solid rgba(57,217,138,0.22)' }}
            >
              <div className="pulse-dot" />
              Dados em tempo real
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scenario}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {/* Metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                {[
                  { label: 'Arrecadação mensal', value: d.arrecadacao, sub: d.arrecadacaoGrowth, prefix: '', suffix: '' },
                  { label: 'Doadores ativos', value: d.doadores, sub: d.doadoresGrowth },
                  { label: 'Doadores recorrentes', value: d.recorrentes, sub: d.recorrentesGrowth },
                  { label: 'Campanha destaque', value: d.campanha, sub: 'Gastronomia converte mais', suffix: '' },
                ].map(m => (
                  <div
                    key={m.label}
                    className="rounded-[22px] p-4"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    <small className="text-white/50 font-bold text-xs">{m.label}</small>
                    <div className="text-3xl font-black leading-tight my-2 text-white">
                      {m.value.startsWith('R$') ? (
                        <span>R$ <AnimCounter target={m.value} prefix="" suffix="" /></span>
                      ) : m.value.endsWith('x') ? (
                        <AnimCounter target={m.value} suffix="x" />
                      ) : (
                        <AnimCounter target={m.value} />
                      )}
                    </div>
                    <div className="text-[#39d98a] text-[13px] font-bold">▲ {m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                {/* Bar chart */}
                <div
                  className="md:col-span-2 rounded-[22px] p-5"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(69,183,255,0.12)', color: '#45b7ff', border: '1px solid rgba(69,183,255,0.25)' }}
                  >
                    Arrecadação por semana
                  </span>
                  <h3 className="font-bold text-base mb-4">Evolução das campanhas</h3>
                  <div className="flex items-end gap-2" style={{ height: 120 }}>
                    {d.bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.1, opacity: 0.3 }}
                        animate={{ scaleY: h / 100, opacity: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }}
                        style={{ background: 'linear-gradient(180deg,#39d98a,#45b7ff)', transformOrigin: 'bottom', height: `${h}%`, minHeight: 20, borderRadius: '999px 999px 8px 8px', flex: 1 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7'].map(l => (
                      <span key={l} className="text-white/30 text-[10px]">{l}</span>
                    ))}
                  </div>
                </div>

                {/* Donut chart */}
                <div
                  className="rounded-[22px] p-5"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
                  >
                    Origem das doações
                  </span>
                  <div
                    className="donut-chart mx-auto my-4 relative"
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: '50%',
                      background: d.donut,
                    }}
                  >
                    <div
                      className="absolute inset-0 m-auto rounded-full flex items-center justify-center text-white/50 text-[11px] font-black"
                      style={{ inset: '22px', background: '#0b1728', position: 'absolute', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      Origem
                    </div>
                  </div>
                  <p className="text-white/40 text-[11px] text-center leading-relaxed">{d.donutLegend}</p>
                </div>
              </div>

              {/* AI cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  className="rounded-[22px] p-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(69,183,255,0.09)), rgba(255,255,255,0.06)',
                    border: '1px solid rgba(167,139,250,0.22)',
                  }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
                  >
                    IA Insights
                  </span>
                  <h3 className="font-bold text-base mb-3">Recomendações para a comunicação</h3>
                  <div
                    className="p-4 rounded-[18px] text-white/80 text-sm leading-relaxed italic"
                    style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {d.aiInsight}
                  </div>
                </div>

                <div
                  className="rounded-[22px] p-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,209,102,0.12), rgba(251,146,60,0.08)), rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,209,102,0.22)',
                  }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(255,209,102,0.12)', color: '#ffd166', border: '1px solid rgba(255,209,102,0.25)' }}
                  >
                    Doação internacional
                  </span>
                  <h3 className="font-bold text-base mb-3">Nova frente de captação</h3>
                  <div
                    className="p-4 rounded-[18px] text-white/80 text-sm leading-relaxed"
                    style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    Página em inglês, storytelling internacional, campanhas para brasileiros no exterior e acompanhamento de origem por país — ampliando o alcance global do São Martinho.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

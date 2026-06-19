import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scenarios = {
  hoje: {
    label: 'Hoje',
    totalArrecadado: 'R$ 28.400',
    metaAnual: '18%',
    doadoresAtivos: '620',
    recorrentes: '148',
    retencao: '41%',
    campanhaVencedora: 'Natal 2025',
    internacional: 'R$ 0',
    arrecadacaoGrowth: '+8% vs mês ant.',
    metaGrowth: 'de R$ 160k/ano',
    doadoresGrowth: '+5% crescimento',
    recorrentesGrowth: '+12% recorrência',
    retencaoGrowth: 'média mercado 38%',
    campanhaGrowth: '1.4x conversão',
    internacionalGrowth: 'ainda não ativo',
    bars: [35, 42, 38, 55, 48, 60, 52],
    donut: 'conic-gradient(#39d98a 0 32%, #45b7ff 32% 52%, #a78bfa 52% 68%, #ffd166 68% 80%, rgba(255,255,255,0.15) 80% 100%)',
    donutLegend: 'Instagram 32% · Google 20% · E-mail 16% · Eventos 12% · Outros 20%',
    aiInsight: '"Campanha de final de ano gerou maior engajamento. Sugerimos reativar doadores que doaram em dezembro via e-mail personalizado nos próximos 15 dias."',
    metaPercent: 18,
  },
  '90dias': {
    label: '90 Dias',
    totalArrecadado: 'R$ 47.800',
    metaAnual: '30%',
    doadoresAtivos: '1.140',
    recorrentes: '312',
    retencao: '58%',
    campanhaVencedora: 'Gastronomia',
    internacional: 'R$ 3.200',
    arrecadacaoGrowth: '+68% vs início',
    metaGrowth: 'de R$ 160k/ano',
    doadoresGrowth: '+84% crescimento',
    recorrentesGrowth: '+111% recorrência',
    retencaoGrowth: '+17pp vs início',
    campanhaGrowth: '2.1x conversão',
    internacionalGrowth: '12 doadores ext.',
    bars: [45, 58, 62, 70, 75, 82, 78],
    donut: 'conic-gradient(#39d98a 0 38%, #45b7ff 38% 58%, #a78bfa 58% 74%, #ffd166 74% 87%, rgba(255,255,255,0.15) 87% 100%)',
    donutLegend: 'Instagram 38% · Google 20% · E-mail 16% · Eventos 13% · Outros 13%',
    aiInsight: '"Identificamos 87 doadores em risco de abandono. Sequência de reativação com 3 e-mails pode recuperar até 40% desses apoiadores com base nos dados do piloto."',
    metaPercent: 30,
  },
  '12meses': {
    label: '12 Meses',
    totalArrecadado: 'R$ 82.450',
    metaAnual: '51%',
    doadoresAtivos: '1.842',
    recorrentes: '623',
    retencao: '72%',
    campanhaVencedora: 'Gastronomia',
    internacional: 'R$ 14.800',
    arrecadacaoGrowth: '+37% vs mês ant.',
    metaGrowth: 'de R$ 160k/ano',
    doadoresGrowth: '+18% crescimento',
    recorrentesGrowth: '+41% recorrência',
    retencaoGrowth: '+31pp vs início',
    campanhaGrowth: '3.2x conversão',
    internacionalGrowth: '48 doadores ext.',
    bars: [45, 62, 56, 78, 88, 72, 96],
    donut: 'conic-gradient(#39d98a 0 42%, #45b7ff 42% 63%, #a78bfa 63% 81%, #ffd166 81% 92%, rgba(255,255,255,0.15) 92% 100%)',
    donutLegend: 'Instagram 42% · Google 21% · E-mail 18% · Eventos 11% · Outros 8%',
    aiInsight: '"A campanha de Gastronomia tem maior potencial de recorrência. Recomenda-se criar uma sequência de 4 e-mails com histórias de impacto, convite para doação mensal e segmentação para quem já clicou nos posts."',
    metaPercent: 51,
  },
  futuro: {
    label: 'Futuro',
    totalArrecadado: 'R$ 248.000',
    metaAnual: '155%',
    doadoresAtivos: '6.400',
    recorrentes: '2.850',
    retencao: '89%',
    campanhaVencedora: 'Impacto Global',
    internacional: 'R$ 62.000',
    arrecadacaoGrowth: 'Nacional + exterior',
    metaGrowth: 'de R$ 160k/ano',
    doadoresGrowth: 'crescimento orgânico',
    recorrentesGrowth: 'programa recorrente',
    retencaoGrowth: 'referência do setor',
    campanhaGrowth: '8.7x conversão',
    internacionalGrowth: '+500 doadores ext.',
    bars: [60, 72, 80, 85, 95, 88, 100],
    donut: 'conic-gradient(#39d98a 0 35%, #45b7ff 35% 55%, #a78bfa 55% 68%, #ffd166 68% 82%, #fb923c 82% 94%, rgba(255,255,255,0.15) 94% 100%)',
    donutLegend: 'Instagram 35% · Google 20% · Internacional 13% · E-mail 14% · Eventos 12% · Outros 6%',
    aiInsight: '"Motor IA identifica automaticamente: melhor horário de disparo por doador, campanha com maior LTV e oportunidades de patrocínio corporativo baseadas no perfil da base."',
    metaPercent: 100,
  },
}

function AnimCounter({ target, prefix = '', suffix = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const raw = target.replace(/[^\d.]/g, '')
    const to = parseFloat(raw)
    if (isNaN(to)) { el.textContent = prefix + target + suffix; return }
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
  }, [target, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

function MetricCard({ label, value, growth, growthNeutral, accent = '#39d98a' }) {
  const isNegative = growth && growth.startsWith('-')
  const growthColor = growthNeutral ? '#45b7ff' : isNegative ? '#fb7185' : '#39d98a'

  return (
    <div
      className="rounded-[20px] p-4"
      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)' }}
    >
      <small className="text-white/45 font-bold text-[11px] block mb-2">{label}</small>
      <div className="text-[22px] font-black leading-tight text-white mb-1.5">
        {value.startsWith('R$') ? (
          <span>R$ <AnimCounter target={value} /></span>
        ) : value.endsWith('%') ? (
          <AnimCounter target={value} suffix="%" />
        ) : value.endsWith('x') ? (
          <AnimCounter target={value} suffix="x" />
        ) : (
          <AnimCounter target={value} />
        )}
      </div>
      <div className="text-[11px] font-semibold" style={{ color: growthColor }}>
        {!growthNeutral && '▲ '}{growth}
      </div>
    </div>
  )
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
            <p className="text-white/55 text-base mt-2 max-w-2xl">Visão em tempo real de arrecadação, doadores, retenção, campanha vencedora e doações internacionais — por cenário.</p>
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
                className="px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap"
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
            background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04)), rgba(7,17,31,0.82)',
            border: '1px solid rgba(255,255,255,0.14)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
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
                <strong className="block text-base font-black">Motor de Arrecadação São Martinho</strong>
                <span className="text-white/45 text-[12px]">Visão executiva · Cenário: {d.label}</span>
              </div>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[#39d98a] text-[12px] font-black"
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
              {/* 7 KPI metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-3 mb-3">
                <MetricCard label="Total arrecadado" value={d.totalArrecadado} growth={d.arrecadacaoGrowth} />
                <MetricCard label="Meta anual" value={d.metaAnual} growth={d.metaGrowth} growthNeutral />
                <MetricCard label="Doadores ativos" value={d.doadoresAtivos} growth={d.doadoresGrowth} />
                <MetricCard label="Doadores recorrentes" value={d.recorrentes} growth={d.recorrentesGrowth} />
                <MetricCard label="Retenção" value={d.retencao} growth={d.retencaoGrowth} />
                <MetricCard label="Campanha vencedora" value={d.campanhaVencedora} growth={d.campanhaGrowth} />
                <MetricCard label="Doações internacionais" value={d.internacional} growth={d.internacionalGrowth} />
              </div>

              {/* Meta progress bar */}
              <div
                className="rounded-2xl p-4 mb-3"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/60 text-xs font-bold">Progresso — Meta anual R$ 160k</span>
                  <span className="text-[#39d98a] text-xs font-black">{d.metaAnual}</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#39d98a,#45b7ff)' }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${Math.min(d.metaPercent, 100)}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
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
                  <h3 className="font-bold text-sm mb-3">Evolução das campanhas</h3>
                  <div className="flex items-end gap-2" style={{ height: 110 }}>
                    {d.bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.1, opacity: 0.3 }}
                        animate={{ scaleY: h / 100, opacity: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }}
                        style={{ background: 'linear-gradient(180deg,#39d98a,#45b7ff)', transformOrigin: 'bottom', height: `${h}%`, minHeight: 16, borderRadius: '999px 999px 6px 6px', flex: 1 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7'].map(l => (
                      <span key={l} className="text-white/25 text-[10px]">{l}</span>
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
                    className="donut-chart mx-auto my-3 relative"
                    style={{ width: 120, height: 120, borderRadius: '50%', background: d.donut }}
                  >
                    <div
                      style={{ position: 'absolute', inset: '22px', background: '#0b1728', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 900 }}
                    >
                      Origem
                    </div>
                  </div>
                  <p className="text-white/35 text-[10px] text-center leading-relaxed">{d.donutLegend}</p>
                </div>
              </div>

              {/* AI insight + international */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  className="rounded-[22px] p-5"
                  style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.14), rgba(69,183,255,0.08)), rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.22)' }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
                  >
                    Motor IA — Insight
                  </span>
                  <h3 className="font-bold text-sm mb-2">Recomendação automática</h3>
                  <div
                    className="p-3 rounded-[14px] text-white/75 text-xs leading-relaxed italic"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {d.aiInsight}
                  </div>
                </div>

                <div
                  className="rounded-[22px] p-5"
                  style={{ background: 'linear-gradient(135deg, rgba(255,209,102,0.12), rgba(251,146,60,0.07)), rgba(255,255,255,0.05)', border: '1px solid rgba(255,209,102,0.22)' }}
                >
                  <span
                    className="inline-flex px-2.5 py-1 rounded-full text-xs font-black mb-2"
                    style={{ background: 'rgba(255,209,102,0.12)', color: '#ffd166', border: '1px solid rgba(255,209,102,0.25)' }}
                  >
                    Doação internacional
                  </span>
                  <h3 className="font-bold text-sm mb-2">Nova frente de captação</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-black text-[#ffd166]">
                      {d.internacional.startsWith('R$ 0') ? 'R$ 0' : d.internacional}
                    </span>
                    <span className="text-white/40 text-xs">{d.internacionalGrowth}</span>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed">
                    Página em inglês, pagamento internacional e storytelling global — ampliando o alcance do São Martinho além do Brasil.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 items-center rounded-[34px] p-8 md:p-10"
        style={{
          background: 'linear-gradient(135deg, #39d98a, #45b7ff)',
          color: '#04111d',
          boxShadow: '0 28px 90px rgba(69,183,255,0.25)',
        }}
      >
        <div>
          <span
            className="inline-flex px-3 py-1 rounded-full text-xs font-black mb-4"
            style={{ background: 'rgba(4,17,29,0.18)', color: '#04111d' }}
          >
            Próximo passo
          </span>
          <h2 className="text-[clamp(26px,4vw,42px)] font-black leading-tight tracking-tight mb-3">
            Proposta de entrada: piloto de 90 dias
          </h2>
          <p className="text-[#04111d]/75 text-lg leading-relaxed max-w-lg">
            Antes da contratação fixa, o caminho mais forte é propor um piloto: organizar dados, integrar uma campanha, criar automação de relacionamento e apresentar um relatório real de aprendizado. Se o piloto provar valor, a contratação fixa vira uma evolução natural.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[24px] p-6 text-lg font-black leading-snug"
          style={{
            background: 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(255,255,255,0.55)',
            color: '#04111d',
          }}
        >
          "O objetivo não é vender uma ferramenta. É construir uma nova capacidade estratégica de captação para o São Martinho."
        </motion.div>
      </motion.div>

      <p className="text-center text-white/35 text-xs mt-6 max-w-2xl mx-auto leading-relaxed">
        Documento conceitual para discussão interna. Números e projeções são ilustrativos e devem ser definidos após acesso aos dados reais de arrecadação, canais, campanhas e base de doadores do São Martinho.
      </p>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Shield, BarChart3, Layers, Globe, Users } from 'lucide-react'

const traits = [
  { icon: <Code2 size={18} />, label: 'Full-Stack Development', desc: 'PHP, JS, React, SQL' },
  { icon: <Shield size={18} />, label: 'Secure Architecture', desc: 'Auth, RBAC, data integrity' },
  { icon: <BarChart3 size={18} />, label: 'Dashboard Systems', desc: 'Real-time data, reporting' },
  { icon: <Layers size={18} />, label: 'Scalable Systems', desc: 'Government-grade platforms' },
  { icon: <Globe size={18} />, label: 'Digital Transformation', desc: 'Manual → digital workflows' },
  { icon: <Users size={18} />, label: 'Creative Operations', desc: 'Video, AI, e-commerce' },
]

function FadeInWhenVisible({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle opacity-60" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-900/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeInWhenVisible>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">01 / About</span>
          </div>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Turning Complex Workflows into{' '}
                <span className="text-gradient">Elegant Systems</span>
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-slate-400 leading-relaxed mb-4">
                I&rsquo;m <span className="text-white font-semibold">Peter</span>, a Full-Stack Software Engineer with{' '}
                <span className="text-cyan-400 font-semibold">3 years of hands-on experience</span> building complex
                digital systems for the <span className="text-white">City Government of Davao</span>. My work spans
                budgeting platforms, infrastructure monitoring tools, real-time dashboards, reporting systems, and
                secure backend architecture.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-slate-400 leading-relaxed mb-6">
                I use <span className="text-violet-400 font-mono text-sm">PHP</span>,{' '}
                <span className="text-cyan-400 font-mono text-sm">JavaScript</span>,{' '}
                <span className="text-blue-400 font-mono text-sm">React.js</span>, and{' '}
                <span className="text-violet-400 font-mono text-sm">SQL</span> to build practical solutions
                that improve transparency, automate workflows, and handle large-scale government data.
                Beyond development, I bring creative and operational depth through video editing, AI content
                creation, and digital operations.
              </p>
            </FadeInWhenVisible>

            {/* Stats row */}
            <FadeInWhenVisible delay={0.4}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: '3+', label: 'Years Exp.' },
                  { value: '5+', label: 'Gov Systems' },
                  { value: '20+', label: 'Modules' },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-xl p-4 text-center border border-white/5">
                    <p className="text-2xl font-black text-gradient-blue">{s.value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-2 gap-3">
            {traits.map((t, i) => (
              <FadeInWhenVisible key={i} delay={0.1 + i * 0.08}>
                <motion.div
                  className="glass rounded-xl p-4 border border-white/5 group cursor-default"
                  whileHover={{
                    borderColor: 'rgba(14, 165, 233, 0.3)',
                    backgroundColor: 'rgba(14, 165, 233, 0.04)',
                    y: -2,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                    {t.icon}
                  </div>
                  <p className="text-sm font-semibold text-white mb-0.5">{t.label}</p>
                  <p className="text-xs text-slate-500">{t.desc}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

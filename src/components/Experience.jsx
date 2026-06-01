import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Calendar, CheckCircle2, Video, Zap } from 'lucide-react'

const responsibilities = [
  'Developed a Budget Management Environment System for Davao City government offices — budget planning, tracking, and automated reporting.',
  'Built a City Infrastructure Monitoring System tracking project timelines, progress, slippage, and location-based map data.',
  'Implemented role-based access control for multiple departments with secure user authentication.',
  'Designed responsive dashboards with real-time data visualization for city operations.',
  'Created backend architecture and database schemas for large-scale government data management.',
  'Deployed systems, conducted user training, and produced technical documentation.',
  "Supported Davao City's digital governance and infrastructure transparency initiatives.",
]

function TimelineItem({ children, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Experience() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-blue-900/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">03 / Experience</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Where I&rsquo;ve{' '}
            <span className="text-gradient">Made an Impact</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {/* Primary role */}
          <TimelineItem delay={0.1}>
            <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-cyan-500/15 relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-violet-600 rounded-l-2xl" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Building2 size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Junior Full-Stack Web Developer</h3>
                    <p className="text-cyan-400 font-mono text-sm">Project DocTrack — City Government of Davao</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Calendar size={12} className="text-slate-500" />
                      <span className="text-xs text-slate-500 font-mono">February 2023 — Present</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded-full">Active</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Developed secure, responsive, and scalable government systems deployed across Davao City offices —
                spanning budgeting, infrastructure monitoring, reporting, and digital workflow automation.
              </p>

              {/* Responsibilities */}
              <div className="grid sm:grid-cols-2 gap-3">
                {responsibilities.map((r, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-3 text-sm text-slate-400 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <CheckCircle2 size={14} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                {['PHP', 'JavaScript', 'React.js', 'MySQL', 'REST API', 'RBAC', 'Dashboards', 'Reporting'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TimelineItem>

          {/* Part-time creative */}
          <TimelineItem delay={0.2}>
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-violet-600 rounded-l-2xl" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <Video size={22} className="text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Real Estate &amp; AI Video Editor</h3>
                  <p className="text-pink-400 font-mono text-sm">Part-time Creative Work</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Zap size={12} className="text-slate-500" />
                    <span className="text-xs text-slate-500 font-mono">Ongoing</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Edited real estate property videos, produced AI-generated video content, crafted compelling story
                flows, and published polished content across social media platforms — combining technical precision
                with creative visual storytelling.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut', 'AI Video Tools', 'Content Strategy'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TimelineItem>
        </div>
      </div>
    </section>
  )
}

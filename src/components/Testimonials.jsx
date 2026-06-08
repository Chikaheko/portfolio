import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Peter consistently shows strong work ethic, technical initiative, and analytical thinking in development work. He is quick to understand operational needs, finds practical ways to improve systems, and stays ahead in applying coding and technical solutions that make information easier to manage and use.',
    name: 'Hyanen J.',
    role: 'Project Manager - Happy to Help',
    image: '/Hyanen.png',
    initials: 'HJ',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    quote: 'Working with Peter on the rally bracket system was smooth and professional. He was responsive, patient with revisions, and focused on making the system practical for actual tournament use, from match encoding to standings updates.',
    name: 'Bevelie M.',
    role: 'Assistant Chief - Bureau of Internal Revenue',
    image: '/Beverlie.jpg',
    initials: 'BM',
    color: 'from-violet-500 to-purple-600',
  },
  {
    quote: 'Handled our AI video editing and visual content work with a good balance of technical skill and creative judgment. He communicated clearly, worked efficiently, and stayed open to feedback until the final output matched what we needed.',
    name: 'Frank G.',
    role: 'ROI Pros Founder',
    image: '/Frank.jpg',
    initials: 'FG',
    color: 'from-blue-500 to-indigo-600',
  },
]

const trustBadges = [
  'Government-Grade Systems',
  'Secure Architecture',
  'Responsive Design',
  'Real-Time Dashboards',
  'Role-Based Access',
  'API-First Development',
  'User Training & Docs',
  'Data Transparency',
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-violet-900/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">07 / Trust</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-black text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Proven by{' '}
          <span className="text-gradient">Real Work</span>
        </motion.h2>
        <motion.p
          className="text-slate-500 mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          What my work says about how I build, think, and deliver.
        </motion.p>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-6 border border-white/5 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ borderColor: 'rgba(14,165,233,0.25)', y: -4 }}
            >
              <Quote size={20} className="text-cyan-500/40 mb-4" />

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold overflow-hidden`}>
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    t.initials
                  )}
                </div>
                <div>
                  <p className="text-xs text-slate-500">{t.name}</p>
                  <p className="text-xs text-slate-400 font-semibold">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={10} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge marquee */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4 text-center">Core Competencies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {trustBadges.map((badge, i) => (
              <motion.span
                key={badge}
                className="text-xs font-mono text-slate-400 glass border border-white/8 px-3 py-1.5 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

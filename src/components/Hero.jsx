import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, ChevronDown, Wifi, Activity, Cpu, Database } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
}

function ApiStatusCard() {
  return (
    <motion.div
      className="glass-strong rounded-2xl p-5 w-full max-w-sm"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">API Status</span>
        </div>
        <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">ONLINE</span>
      </div>

      {/* Endpoint list */}
      <div className="space-y-2 mb-4">
        {[
          { method: 'GET', path: '/peter/projects', status: 200, color: 'text-cyan-400' },
          { method: 'POST', path: '/peter/contact', status: 201, color: 'text-violet-400' },
          { method: 'GET', path: '/peter/skills', status: 200, color: 'text-cyan-400' },
          { method: 'GET', path: '/peter/experience', status: 200, color: 'text-cyan-400' },
        ].map((ep, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 bg-white/[0.03] rounded-lg px-3 py-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <span className={`text-[10px] font-bold font-mono ${ep.color} w-8`}>{ep.method}</span>
            <span className="text-xs font-mono text-slate-400 flex-1">{ep.path}</span>
            <span className="text-[10px] font-mono text-green-400">{ep.status}</span>
          </motion.div>
        ))}
      </div>

      {/* System metrics */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: <Activity size={12} />, label: 'Uptime', value: '99.9%', color: 'text-green-400' },
          { icon: <Cpu size={12} />, label: 'Response', value: '<100ms', color: 'text-cyan-400' },
          { icon: <Database size={12} />, label: 'Systems', value: '5+', color: 'text-violet-400' },
          { icon: <Wifi size={12} />, label: 'Modules', value: '20+', color: 'text-blue-400' },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/[0.02] rounded-lg px-2.5 py-2">
            <span className={m.color}>{m.icon}</span>
            <div>
              <p className="text-[9px] text-slate-500 uppercase tracking-wider">{m.label}</p>
              <p className={`text-xs font-bold font-mono ${m.color}`}>{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated pulse line */}
      <div className="mt-3 h-8 flex items-center gap-0.5 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-full bg-cyan-500/40"
            animate={{ scaleY: [0.2, Math.random() * 0.8 + 0.2, 0.2] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05 }}
            style={{ height: '100%', transformOrigin: 'center' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a1628]/80 to-[#0d1840]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-900/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-cyan-400 border border-cyan-500/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for freelance &amp; opportunities
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              Building Digital Systems
              <br />
              for{' '}
              <span className="relative">
                <span className="text-gradient">Smarter Cities</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              I&rsquo;m <span className="text-white font-semibold">Peter</span>, a Full-Stack Software Engineer and
              GoHighLevel Digital Marketing Specialist crafting secure, scalable, and user-focused web systems — from{' '}
              <span className="text-cyan-400">government operations</span> and{' '}
              <span className="text-violet-400">infrastructure tracking</span> to{' '}
              <span className="text-blue-400">websites, funnels, and creative content</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-cyan-500/40 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <Github size={18} />, href: 'https://github.com/Chikaheko', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/jpeterlc/', label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: 'mailto:jpeterlc@gmail.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 border border-white/5 transition-colors"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
              <span className="text-slate-600 text-sm ml-2 font-mono">Jeff Peter C.</span>
            </motion.div>
          </div>

          {/* Right — API status card */}
          <div className="flex-shrink-0 w-full max-w-sm">
            <ApiStatusCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

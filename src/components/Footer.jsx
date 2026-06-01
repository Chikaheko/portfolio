import { motion } from 'framer-motion'
import { Terminal, Github, Linkedin, Mail, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#020817] py-12 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
              <Terminal size={16} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white font-mono">Peter<span className="text-cyan-400">.</span>dev</p>
              <p className="text-xs text-slate-500">Full-Stack Web Developer</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: 'https://github.com/Chikaheko', label: 'GitHub' },
              { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/jpeterlc/', label: 'LinkedIn' },
              { icon: <Mail size={16} />, href: 'mailto:jpeterlc@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            <span className="text-slate-400 font-semibold">Peter</span> | Full-Stack Web Developer
            <span className="mx-2 text-slate-700">—</span>
            City Government of Davao
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-cyan-400 font-mono">React</span> &amp;
            <span className="text-cyan-400 font-mono">Tailwind CSS</span>
            — Deployed on
            <span className="text-violet-400 font-mono">Vercel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

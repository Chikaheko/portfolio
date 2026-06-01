import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPhp, SiJavascript, SiReact, SiHtml5, SiCss, SiMysql,
  SiGithub, SiVercel, SiDavinciresolve, SiOpenai,
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { Database, Shield, LayoutDashboard, Code2, Wrench, Palette } from 'lucide-react'

const categories = [
  {
    label: 'Development',
    icon: <Code2 size={16} />,
    color: 'from-cyan-500 to-blue-600',
    glow: 'rgba(14,165,233,0.3)',
    skills: [
      { name: 'PHP', icon: <SiPhp size={24} />, color: 'text-indigo-400' },
      { name: 'JavaScript', icon: <SiJavascript size={24} />, color: 'text-yellow-400' },
      { name: 'React.js', icon: <SiReact size={24} />, color: 'text-cyan-400' },
      { name: 'HTML5', icon: <SiHtml5 size={24} />, color: 'text-orange-500' },
      { name: 'CSS3', icon: <SiCss size={24} />, color: 'text-blue-400' },
      { name: 'MySQL', icon: <SiMysql size={24} />, color: 'text-blue-300' },
      { name: 'REST APIs', icon: <Shield size={24} />, color: 'text-violet-400' },
      { name: 'Dashboards', icon: <LayoutDashboard size={24} />, color: 'text-green-400' },
      { name: 'SQL & DB Design', icon: <Database size={24} />, color: 'text-amber-400' },
    ],
  },
  {
    label: 'Tools & Platforms',
    icon: <Wrench size={16} />,
    color: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
    skills: [
      { name: 'VS Code', icon: <VscCode size={24} />, color: 'text-blue-500' },
      { name: 'GitHub', icon: <SiGithub size={24} />, color: 'text-white' },
      { name: 'Vercel', icon: <SiVercel size={24} />, color: 'text-white' },
      { name: 'SQL Workbench', icon: <Database size={24} />, color: 'text-orange-400' },
      { name: 'ChatGPT', icon: <SiOpenai size={24} />, color: 'text-green-400' },
      { name: 'Claude AI', icon: <Code2 size={24} />, color: 'text-violet-400' },
    ],
  },
  {
    label: 'Creative Tools',
    icon: <Palette size={16} />,
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.3)',
    skills: [
      { name: 'Premiere Pro', icon: <FaCode size={24} />, color: 'text-purple-400' },
      { name: 'After Effects', icon: <FaCode size={24} />, color: 'text-indigo-400' },
      { name: 'DaVinci Resolve', icon: <SiDavinciresolve size={24} />, color: 'text-yellow-400' },
      { name: 'CapCut', icon: <FaCode size={24} />, color: 'text-white' },
      { name: 'AI Video Tools', icon: <SiOpenai size={24} />, color: 'text-pink-400' },
    ],
  },
]

function SkillCard({ skill, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className="group flex flex-col items-center gap-2.5 glass rounded-xl p-4 border border-white/5 cursor-default"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.08,
        borderColor: 'rgba(14,165,233,0.35)',
        boxShadow: '0 0 20px rgba(14,165,233,0.12)',
      }}
    >
      <span className={`${skill.color} group-hover:scale-110 transition-transform duration-200`}>
        {skill.icon}
      </span>
      <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080f20]/50 to-transparent" />
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full bg-cyan-900/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">02 / Skills</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My{' '}
            <span className="text-gradient">Toolkit</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 mb-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Technologies and tools I use to build, ship, and scale digital systems.
          </motion.p>
        </div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${cat.color} flex items-center justify-center text-white`}>
                  {cat.icon}
                </div>
                <span className="text-sm font-semibold text-white">{cat.label}</span>
                <div className="flex-1 h-px bg-white/5 ml-2" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={ci * 0.1 + si * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

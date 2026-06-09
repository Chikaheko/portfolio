import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Github, Linkedin, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const socials = [
    { icon: <Mail size={18} />, label: 'Email', value: 'jpeterlc@gmail.com', href: 'mailto:jpeterlc@gmail.com', color: 'text-cyan-400' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/jpeterlc/', href: 'https://linkedin.com/in/jpeterlc/', color: 'text-blue-400' },
    { icon: <Github size={18} />, label: 'GitHub', value: 'github.com/Chikaheko', href: 'https://github.com/Chikaheko', color: 'text-violet-400' },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07111f]/40 to-[#020817]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-900/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">09 / Contact</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-black text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Let&rsquo;s{' '}
          <span className="text-gradient">Build Something</span>
          {' '}Useful
        </motion.h2>
        <motion.p
          className="text-slate-500 mb-12 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Have a project, collaboration, or opportunity in mind? I&rsquo;d love to hear from you.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — form */}
          <motion.div
            className="glass-strong rounded-2xl p-6 sm:p-8 border border-cyan-500/10"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form
              action="https://formsubmit.co/jpeterlc@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_captcha" value="false" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Name</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-white/[0.04] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Email</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jpeterlc@gmail.com"
                        className="w-full bg-white/[0.04] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project inquiry, collaboration..."
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1.5 block uppercase tracking-wider">Message</label>
                  <div className="relative">
                    <MessageSquare size={14} className="absolute left-3 top-3 text-slate-500" />
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className="w-full bg-white/[0.04] border border-white/8 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
                  Let&rsquo;s Build Something Useful
                </motion.button>
              </form>
          </motion.div>

          {/* Right — info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Open to Opportunities</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&rsquo;m available for freelance projects, full-time roles, and collaborative work on
                web systems, government platforms, and digital transformation initiatives.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-white/15 group transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{s.label}</p>
                    <p className="text-sm text-white font-mono">{s.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass rounded-xl p-4 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Available</span>
              </div>
              <p className="text-sm text-slate-300">
                Currently open to new projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

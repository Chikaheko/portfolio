import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, Server, Database, Cpu, Wifi, BarChart3, Clock, Shield } from 'lucide-react'

function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, started])
  return count
}

const metrics = [
  { icon: <Activity size={20} />, label: 'API Status', value: 'Online', suffix: '', raw: null, color: 'text-green-400', bg: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/20', pulse: true },
  { icon: <Server size={20} />, label: 'Systems Built', value: 5, suffix: '+', raw: 5, color: 'text-cyan-400', bg: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/20', pulse: false },
  { icon: <Database size={20} />, label: 'Gov Modules', value: 20, suffix: '+', raw: 20, color: 'text-violet-400', bg: 'from-violet-500/10 to-purple-500/10', border: 'border-violet-500/20', pulse: false },
  { icon: <Clock size={20} />, label: 'Experience', value: 3, suffix: '+ Years', raw: 3, color: 'text-blue-400', bg: 'from-blue-500/10 to-indigo-500/10', border: 'border-blue-500/20', pulse: false },
  { icon: <BarChart3 size={20} />, label: 'Dashboards', value: 10, suffix: '+', raw: 10, color: 'text-amber-400', bg: 'from-amber-500/10 to-orange-500/10', border: 'border-amber-500/20', pulse: false },
  { icon: <Shield size={20} />, label: 'Auth Systems', value: 5, suffix: '+', raw: 5, color: 'text-pink-400', bg: 'from-pink-500/10 to-rose-500/10', border: 'border-pink-500/20', pulse: false },
]

function MetricCard({ metric, index, started }) {
  const count = useCounter(metric.raw || 0, 2000, started)

  return (
    <motion.div
      className={`glass rounded-2xl p-5 border ${metric.border} bg-gradient-to-br ${metric.bg} relative overflow-hidden`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ scale: 1.03, y: -2 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className={`${metric.color} mb-3 flex items-center gap-2`}>
          {metric.icon}
          {metric.pulse && (
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          )}
        </div>

        <div className={`text-3xl font-black font-mono ${metric.color} mb-1`}>
          {metric.raw !== null ? (
            <>{count}{metric.suffix}</>
          ) : (
            <span className="text-2xl">{metric.value}</span>
          )}
        </div>

        <p className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</p>
      </div>
    </motion.div>
  )
}

function LiveLog() {
  const [logs, setLogs] = useState([
    { time: '09:41:02', msg: 'Budget module updated — fiscal year 2025', type: 'info' },
    { time: '09:41:15', msg: 'Infrastructure report generated', type: 'success' },
    { time: '09:41:30', msg: 'User session authenticated — admin role', type: 'auth' },
    { time: '09:41:45', msg: 'New project coordinates saved to DB', type: 'info' },
  ])

  useEffect(() => {
    const messages = [
      { msg: 'Dashboard data refreshed', type: 'info' },
      { msg: 'Report export completed — PDF', type: 'success' },
      { msg: 'Module health check passed', type: 'success' },
      { msg: 'API endpoint responded 200 OK', type: 'success' },
      { msg: 'Database query optimized', type: 'info' },
    ]
    let i = 0
    const interval = setInterval(() => {
      const now = new Date()
      const time = now.toTimeString().slice(0, 8)
      setLogs((prev) => [
        { time, msg: messages[i % messages.length].msg, type: messages[i % messages.length].type },
        ...prev.slice(0, 5),
      ])
      i++
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const typeColor = { info: 'text-cyan-400', success: 'text-green-400', auth: 'text-violet-400' }

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-cyan-400" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Live System Log</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono text-green-400">LIVE</span>
        </div>
      </div>

      <div className="space-y-2 max-h-40 overflow-hidden">
        {logs.map((log, i) => (
          <motion.div
            key={`${log.time}-${i}`}
            className="flex gap-3 text-xs font-mono"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1 - i * 0.15, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-slate-600 flex-shrink-0">{log.time}</span>
            <span className={typeColor[log.type] || 'text-slate-400'}>{log.msg}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function ApiDashboard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dashboard" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#07111f] to-[#020817]" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-900/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">06 / Dashboard</span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl font-black text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Developer{' '}
          <span className="text-gradient">System Metrics</span>
        </motion.h2>
        <motion.p
          className="text-slate-500 mb-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Real-world impact across government systems, modules, and digital deployments.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {metrics.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} started={inView} />
          ))}
        </div>

        <LiveLog />
      </div>
    </section>
  )
}

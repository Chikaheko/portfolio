import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('init')

  useEffect(() => {
    const steps = [
      { target: 30, delay: 200, label: 'init' },
      { target: 60, delay: 500, label: 'loading' },
      { target: 85, delay: 800, label: 'mounting' },
      { target: 100, delay: 1200, label: 'ready' },
    ]

    let current = 0
    const run = () => {
      if (current >= steps.length) return
      const step = steps[current]
      setTimeout(() => {
        setProgress(step.target)
        setPhase(step.label)
        current++
        run()
      }, step.delay)
    }
    run()

    const timer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => clearTimeout(timer)
  }, [onComplete])

  const statusMessages = {
    init: '> Initializing system...',
    loading: '> Loading modules...',
    mounting: '> Mounting components...',
    ready: '> System ready.',
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020817] overflow-hidden"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Animated dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-900/30 via-violet-900/10 to-transparent blur-3xl" />

        {/* Corner decorations */}
        {[
          'top-8 left-8 border-t border-l',
          'top-8 right-8 border-t border-r',
          'bottom-8 left-8 border-b border-l',
          'bottom-8 right-8 border-b border-r',
        ].map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 border-cyan-500/50 ${cls}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
          />
        ))}

        {/* Main content */}
        <div className="relative flex flex-col items-center gap-8 px-8">
          {/* Logo / Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glow ring */}
            <div className="relative inline-block mb-6">
              <motion.div
                className="w-24 h-24 rounded-full border-2 border-cyan-500/40 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 rounded-full border border-violet-500/30"
                  style={{ transform: 'rotate(45deg)' }} />
              </motion.div>
              <motion.div
                className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 flex items-center justify-center text-2xl font-bold font-mono text-white"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                P
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-black tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-white">Peter</span>
              <span className="text-gradient"> Dev</span>
            </motion.h1>

            <motion.p
              className="text-cyan-400/70 font-mono text-sm mt-2 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Full-Stack Web Developer
            </motion.p>
          </motion.div>

          {/* Terminal status */}
          <motion.div
            className="glass rounded-lg p-4 w-72 font-mono text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <motion.p
              key={phase}
              className="text-cyan-400"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {statusMessages[phase]}
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-72"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>Loading portfolio</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            {/* Scanline glow */}
            <div className="relative mt-1 h-px">
              <motion.div
                className="absolute h-px w-8 bg-cyan-400/60 blur-sm"
                animate={{ left: [`0%`, `${progress}%`] }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{ left: `${progress}%` }}
              />
            </div>
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

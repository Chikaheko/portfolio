import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Tag, ImageOff } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const [current, setCurrent] = useState(0)
  const images = project.images || []
  const hasImages = images.length > 0

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col glass-strong rounded-2xl border border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className={`h-0.5 w-full bg-gradient-to-r ${project.accent} flex-shrink-0`} />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 py-4 flex-shrink-0 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-mono font-bold text-white bg-gradient-to-r ${project.accent} px-2.5 py-0.5 rounded-full`}>
                {project.badge}
              </span>
              {hasImages && (
                <span className="text-[10px] font-mono text-slate-500">
                  {current + 1} / {images.length}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white leading-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 min-h-0 scrollbar-hide">
          {/* Image area */}
          <div className="relative bg-[#020817] flex items-center justify-center overflow-hidden" style={{ minHeight: '320px', maxHeight: '55vh' }}>
            {hasImages ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={images[current]}
                    alt={`${project.title} screenshot ${current + 1}`}
                    className="max-h-full max-w-full object-contain"
                    style={{ maxHeight: '55vh' }}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Prev / Next */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/25 transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/25 transition-all backdrop-blur-sm"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Keyboard hint */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-slate-600">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/8">←</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/8">→</kbd>
                  <span>navigate</span>
                  <span className="mx-1 text-slate-700">·</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/8">Esc</kbd>
                  <span>close</span>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-3 text-slate-700 py-16">
                <ImageOff size={36} />
                <p className="text-sm font-mono">No screenshots available yet</p>
              </div>
            )}
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-2 px-6 py-3 overflow-x-auto border-b border-white/5 flex-shrink-0">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                    i === current
                      ? 'border-cyan-500 scale-105'
                      : 'border-white/10 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" draggable={false} />
                </button>
              ))}
            </div>
          )}

          {/* Description + tags */}
          <div className="px-6 py-5">
            <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.long || project.short}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full"
                >
                  <Tag size={9} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

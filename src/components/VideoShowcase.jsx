import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Play, Youtube } from 'lucide-react'

const categories = ['All', 'Real Estate', 'AI Content', 'Short-Form']

const videos = [
  {
    title: 'Real Estate Property Video',
    category: 'Real Estate',
    duration: 'YouTube',
    url: 'https://youtu.be/UYchnG-t7MY',
    thumbnail: 'https://img.youtube.com/vi/UYchnG-t7MY/hqdefault.jpg',
  },
  {
    title: 'AI Video Content',
    category: 'AI Content',
    duration: 'YouTube',
    url: 'https://youtu.be/Hz9pgGy7Lgw',
    thumbnail: 'https://img.youtube.com/vi/Hz9pgGy7Lgw/hqdefault.jpg',
  },
  {
    title: 'AI Shorts Story 1',
    category: 'Short-Form',
    duration: 'Shorts',
    url: 'https://youtube.com/shorts/9J9ZgD_4rwc?feature=share',
    thumbnail: 'https://img.youtube.com/vi/9J9ZgD_4rwc/hqdefault.jpg',
  },
  {
    title: 'AI Shorts Story 2',
    category: 'Short-Form',
    duration: 'Shorts',
    url: 'https://youtube.com/shorts/1sJjGI_ZinQ?feature=share',
    thumbnail: 'https://img.youtube.com/vi/1sJjGI_ZinQ/hqdefault.jpg',
  },
  {
    title: 'AI Shorts Story 3',
    category: 'Short-Form',
    duration: 'Shorts',
    url: 'https://youtube.com/shorts/eLCom5gZdM4?feature=share',
    thumbnail: 'https://img.youtube.com/vi/eLCom5gZdM4/hqdefault.jpg',
  },
  {
    title: 'Instagram Shorts',
    category: 'Short-Form',
    duration: 'Instagram Story',
    url: 'https://youtube.com/shorts/fe7TkcBfC70?feature=share',
    thumbnail: 'https://img.youtube.com/vi/fe7TkcBfC70/hqdefault.jpg',
  },
]

function VideoCard({ video, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className="group glass rounded-xl overflow-hidden border border-white/5 hover:border-violet-500/30 transition-colors cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      {/* Thumbnail */}
      <div className="relative h-36 bg-gradient-to-br from-slate-900 via-[#0d1640] to-slate-900 flex items-center justify-center overflow-hidden">
        <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors" />

        {/* Play button */}
        <motion.div
          className="relative w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-violet-500/30 group-hover:border-violet-400/50 transition-all"
          whileHover={{ scale: 1.2 }}
        >
          <Play size={18} className="text-white ml-0.5" fill="white" />
        </motion.div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white bg-black/50 px-1.5 py-0.5 rounded">
          {video.duration}
        </div>

        {/* YouTube icon */}
        <div className="absolute top-2 left-2 text-slate-600">
          <Youtube size={14} />
        </div>

        {/* Link label */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[9px] font-mono text-white/80 bg-black/45 px-1.5 py-0.5 rounded">
          <ExternalLink size={10} />
          watch on YouTube
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="text-sm font-semibold text-white leading-tight">{video.title}</h4>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full">
            {video.category}
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Video edit</span>
        </div>
      </div>
    </motion.a>
  )
}

export default function VideoShowcase() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? videos
    : videos.filter((v) => v.category === activeCategory)

  return (
    <section id="videos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06091a]/60 to-transparent" />
      <div className="absolute left-1/4 top-1/4 w-80 h-80 rounded-full bg-violet-900/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">05 / Video Work</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Creative{' '}
            <span className="text-gradient">Video Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Real estate property videos, AI-generated content, and short-form edits for YouTube Shorts and Instagram Stories.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white'
                  : 'glass text-slate-400 hover:text-white border border-white/8'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((video, i) => (
            <VideoCard key={video.title} video={video} index={i} />
          ))}
        </div>

        <motion.p
          className="text-center text-xs font-mono text-slate-600 mt-8"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Video work hosted on YouTube and YouTube Shorts.
        </motion.p>
      </div>
    </section>
  )
}

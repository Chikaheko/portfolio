import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react'

const graphicDesigns = [
  {
    title: 'Social Media Postings & Advertisements',
    type: 'Social Media Design',
    description: 'Promotional social media creatives and advertisement layouts designed for clear messaging and visual impact.',
    images: [
      '/graphic/FB1.png',
      '/graphic/FB2.png',
      '/graphic/FB3.png',
      '/graphic/FB4.png',
      '/graphic/FB5.png',
      '/graphic/FB6.png',
      '/graphic/FB7.png',
      '/graphic/FB8.png',
      '/graphic/FB9.png',
    ],
  },
  {
    title: 'Real Estate Website Design',
    type: 'Website Design',
    description: 'Responsive real estate website concepts focused on clear property presentation and lead generation.',
    images: ['/graphic/WebDesign.PNG', '/graphic/WebDesign2.PNG', '/graphic/WebDesign3.PNG'],
  },
  {
    title: 'Real Estate Book Design',
    type: 'Book Design',
    description: 'A cohesive real estate book layout covering the front cover, contents, introduction, and back cover.',
    images: ['/graphic/Book1.PNG', '/graphic/Book2.PNG', '/graphic/Book3.PNG', '/graphic/Book4.PNG'],
  },
  {
    title: 'Beyond Loyalty Podcast Logo',
    type: 'Logo Design',
    description: 'A bold circular brand mark designed for strong recognition across digital and print applications.',
    images: ['/graphic/Logo.png'],
  },
]

function GraphicDesignCard({ design, index, onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={() => onOpen(design)}
      className="group glass rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-colors text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-56 -mb-px bg-slate-950 overflow-hidden">
        <img
          src={design.images[0]}
          alt={design.title}
          className="block w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-mono text-white bg-black/60 px-2 py-1 rounded-full">
          <Images size={11} />
          {design.images.length} {design.images.length === 1 ? 'design' : 'designs'}
        </div>
      </div>

      <div className="relative bg-[#020817]/80 p-4">
        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
          {design.type}
        </span>
        <h3 className="text-sm font-semibold text-white mt-1 mb-2">{design.title}</h3>
        <p className="text-xs text-slate-500 leading-relaxed">{design.description}</p>
      </div>
    </motion.button>
  )
}

export default function VisualDesignShowcase() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })
  const [selectedDesign, setSelectedDesign] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const openDesign = (design) => {
    setSelectedDesign(design)
    setSelectedImage(0)
  }

  const changeImage = (direction) => {
    setSelectedImage((current) => (
      (current + direction + selectedDesign.images.length) % selectedDesign.images.length
    ))
  }

  return (
    <section id="visual-design" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle opacity-30" />
      <div className="absolute right-1/4 top-1/3 w-80 h-80 rounded-full bg-cyan-900/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
          >
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">06 / Visual Design Works</span>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl font-black text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Graphic <span className="text-gradient">Design Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-slate-500 mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Website concepts, editorial layouts, and brand identity work created for digital and print use.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {graphicDesigns.map((design, index) => (
            <GraphicDesignCard
              key={design.title}
              design={design}
              index={index}
              onOpen={openDesign}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[92vh] glass-strong rounded-2xl p-4 sm:p-6 flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedDesign(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center"
                aria-label="Close design preview"
              >
                <X size={18} />
              </button>

              <div className="pr-12 mb-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  {selectedDesign.type}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedDesign.title}</h3>
              </div>

              <div className="relative min-h-0 flex-1 bg-slate-950/70 rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={selectedDesign.images[selectedImage]}
                  alt={`${selectedDesign.title} ${selectedImage + 1}`}
                  className="max-w-full max-h-[65vh] object-contain"
                />

                {selectedDesign.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => changeImage(-1)}
                      className="absolute left-3 w-10 h-10 rounded-full bg-slate-950/75 text-white flex items-center justify-center hover:bg-cyan-500/80"
                      aria-label="Previous design"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={() => changeImage(1)}
                      className="absolute right-3 w-10 h-10 rounded-full bg-slate-950/75 text-white flex items-center justify-center hover:bg-cyan-500/80"
                      aria-label="Next design"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {selectedDesign.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {selectedDesign.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-cyan-400' : 'border-transparent opacity-60'
                      }`}
                      aria-label={`View design ${index + 1}`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import VideoShowcase from './components/VideoShowcase'
import VisualDesignShowcase from './components/VisualDesignShowcase'
import ApiDashboard from './components/ApiDashboard'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'videos', 'visual-design', 'dashboard', 'testimonials', 'contact']

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (loading) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-[#020817] text-slate-200"
        >
          <ScrollProgress />
          <Navbar activeSection={activeSection} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <VideoShowcase />
            <VisualDesignShowcase />
            <ApiDashboard />
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  )
}

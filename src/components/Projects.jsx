import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Tag, Trophy, ImageIcon } from 'lucide-react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'BME - Budget Management Environment',
    short: 'Citywide budgeting and procurement platform used by Davao City offices for annual budgets, reports, summaries, printables, and transparent digital workflows.',
    long: 'A citywide budgeting and procurement system deployed across Davao City government offices. BME handles annual budget planning, fund tracking, procurement workflows, automated report generation, printable summaries, and provides a transparent digital trail for all budget-related activity. Built to handle multi-department access with role-based permissions.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Reporting', 'Government'],
    accent: 'from-cyan-500 to-blue-600',
    glow: 'rgba(14,165,233,0.2)',
    badge: 'Government System',
    images: ['/BME.PNG', '/BME2.PNG', '/BME3.PNG', '/BME4.PNG', '/BME5.PNG', '/BME6.PNG'],
  },
  {
    title: 'OVP Budgeting System',
    short: 'A specialized national-office budgeting platform inspired by BME — requested after national recognition — supporting customized budget workflows for the Office of the Vice President.',
    long: 'A specialized budgeting platform developed after the BME system gained national-level recognition. Requested directly by the Office of the Vice President, this system adapts the BME framework with custom workflows, reporting structures, and access controls designed for national office operations.',
    tags: ['PHP', 'React', 'MySQL', 'Budget', 'National'],
    accent: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.2)',
    badge: 'Featured',
    images: ['/OVP.PNG', '/OVP2.PNG', '/OVP3.PNG', '/OVP4.PNG'],
  },
  {
    title: 'CIMS - City Infrastructure Monitoring',
    short: 'A complex infrastructure management system with 10+ modules: map tracking, project progress, coordinate pinning, boundary drawing, report generation, graphs, and engineer profiles.',
    long: 'One of the most complex systems in the portfolio — CIMS gives the City Government of Davao a full digital view of infrastructure projects across the city. Features include interactive map tracking with coordinate pinning and boundary drawing, project timeline and progress monitoring, slippage detection, engineer and contractor profiles, dynamic report generation, data graphs, and over 10 integrated modules. Used daily by city engineers and administrators.',
    tags: ['PHP', 'JavaScript', 'Maps', 'MySQL', 'GIS', 'Dashboards'],
    accent: 'from-blue-500 to-indigo-600',
    glow: 'rgba(99,102,241,0.2)',
    badge: '10+ Modules',
    images: ['/CIMS.PNG', '/CIMS2.PNG', '/CIMS3.PNG', '/CIMS4.PNG', '/CIMS5.PNG', '/CIMS6.PNG', '/CIMS7.PNG', '/CIMS8.PNG'],
  },
  {
    title: 'Rally Bracket Tournament HQ',
    short: 'An interactive tournament bracket system for racket sports — recently used for the Region XI Bureau of Internal Revenue 2026 pickleball qualification event.',
    long: 'A clean and interactive tournament bracket generator built for competitive events. Handles bracket generation, match result encoding, and real-time standings updates. Recently deployed for the Region XI Bureau of Internal Revenue 2026 Pickleball Qualification Tournament and the Mindanao Inter-School Law Tournament.',
    tags: ['TypeScript / TSX', 'React', 'Node.js / Express', 'JavaScript', 'Tournament', 'Sports'],
    accent: 'from-green-500 to-emerald-600',
    glow: 'rgba(16,185,129,0.2)',
    badge: 'BIR Region XI 2026',
    images: ['/RBS.png', '/RBS2.png', '/RBS3.png', '/RBS4.png', '/RBS5.png'],
  },
  {
    title: 'PET - Parking Efficiency Tool',
    short: 'A parking ticket encoding and tracking system for local transport operations — personal data records, issued ticket monitoring, and map-based ticket assignments.',
    long: 'A digital parking management system for local transport operations. Handles ticket encoding, personal data records for violators, ticket status monitoring, and map-based assignment of ticket locations. Replaces a fully manual paper-based process with a searchable, printable digital system.',
    tags: ['PHP', 'MySQL', 'Maps', 'Transport', 'Records'],
    accent: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.2)',
    badge: 'Transport',
    images: ['/PET.png', '/PET2.png'],
  },
  {
    title: 'Internal Operations Entry Checker',
    short: 'A management tool requested by internal offices to track city projects at a glance and print follow-up reports for assigned offices and employees. Works alongside CIMS to give admins and higher-ups a fast, consolidated view of critical project data.',
    long: 'Checker was built in response to requests from internal city offices who needed a simpler, faster way to monitor project status without navigating the full CIMS interface. It provides a consolidated at-a-glance dashboard of all active city projects, highlights pending follow-ups, and generates printable reports for assigned offices and personnel. Designed to complement CIMS — higher-ups and administrators use Checker for quick executive-level oversight while engineers use CIMS for detailed operations.',
    tags: ['PHP', 'MySQL', 'Reporting', 'Government', 'CIMS'],
    accent: 'from-teal-500 to-cyan-600',
    glow: 'rgba(20,184,166,0.2)',
    badge: 'Internal Tool',
    images: ['/Checker.PNG', '/Checker2.PNG'],
  },
  {
    title: 'City Infrastructure Executive Dashboard',
    short: 'A high-level infrastructure monitoring dashboard for administrative and executive offices, curated from the City Infrastructure Monitoring System.',
    long: 'A focused infrastructure monitoring dashboard designed for administrative and higher-level offices. It curates key project data from the City Infrastructure Monitoring System into a cleaner executive view for faster oversight, status tracking, and decision-making without requiring users to navigate the full operational system.',
    tags: ['PHP', 'MySQL', 'Dashboard', 'Infrastructure', 'Government'],
    accent: 'from-sky-500 to-cyan-600',
    glow: 'rgba(14,165,233,0.2)',
    badge: 'Executive Dashboard',
    images: ['/INFRA.png'],
  },
]

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const mainImage = project.images?.[0]

  return (
    <motion.div
      ref={ref}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        boxShadow: hovered ? `0 20px 60px ${project.glow}` : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Image / Placeholder area */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-900 to-[#0a1628]">
        {mainImage ? (
          <>
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/60 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10`} />
            <div className="dot-grid-subtle absolute inset-0 opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-700">
              <ImageIcon size={28} />
              <span className="text-[10px] font-mono">[ Image placeholder ]</span>
            </div>
          </>
        )}

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-mono font-bold text-white bg-gradient-to-r ${project.accent} px-2.5 py-1 rounded-full flex items-center gap-1`}>
            <Trophy size={9} />
            {project.badge}
          </span>
        </div>

        {/* Image count pill */}
        {project.images?.length > 1 && (
          <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
            {project.images.length} photos
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.accent} text-white text-xs font-bold shadow-lg`}>
            View Details
          </div>
        </motion.div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="font-bold text-white text-base mb-2 leading-tight">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{project.short}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-white/5 border border-white/8 px-2 py-0.5 rounded-full"
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid-subtle opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-blue-900/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={titleRef}>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
            >
              <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">04 / Projects</span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-black text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Featured{' '}
              <span className="text-gradient">Systems</span>
            </motion.h2>
            <motion.p
              className="text-slate-500 mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Government-grade and operational systems built for real-world scale and impact.
              Click any card to explore.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

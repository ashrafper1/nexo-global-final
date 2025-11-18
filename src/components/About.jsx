import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Award, TrendingUp, ShieldCheck, Lightbulb } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Target, number: '500+', label: 'Transformative Programs' },
    { icon: Users, number: '200+', label: 'Enterprise Clients' },
    { icon: Award, number: '10+', label: 'Years Shipping Impact' },
    { icon: TrendingUp, number: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center"
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-[0.4em] text-[#0b1f4a]"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mt-4"
            >
              Building bold technology partnerships that last.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed mt-6"
            >
              Nexo Global blends strategy, design, and engineering into multidisciplinary squads that deliver measurable outcomes. We activate modern architectures, AI-first thinking, and human-centered change to keep you ahead of disruption.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 grid sm:grid-cols-2 gap-4"
            >
              {[{
                title: 'Outcome obsessed',
                description: 'OKR-driven playbooks ensure every sprint ladders up to value.'
              },
              {
                title: 'Security-first culture',
                description: 'Zero-trust blueprints and governance embedded from day one.'
              }].map((item) => (
                <div key={item.title} className="bg-[#07132f] rounded-2xl border border-[#0d1a3a] p-5 shadow-[0_20px_50px_rgba(7,19,47,0.35)]">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[36px] bg-[#07132f] opacity-10 blur-3xl" aria-hidden="true" />
            <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 left-6 bg-white rounded-2xl border border-slate-200 shadow-xl p-5 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-green-500" />
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400">Trusted partner</p>
                <p className="text-2xl font-bold text-[#07132f]">Global delivery footprint</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white  rounded-2xl border border-[#0d1a3a] p-6 text-center shadow-[0_25px_60px_rgba(7,19,47,0.4)]"
            >
              <stat.icon className="w-10 h-10 mx-auto text-[#B4E50D]" />
              <p className="text-3xl font-bold text-black mt-4">{stat.number}</p>
              <p className="text-blue-900 text-sm text-b mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid  lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Studio pods',
              description: 'Cross-functional teams attach to your roadmap with discovery-to-delivery accountability.',
              icon: Users,
            },
            {
              title: 'Innovation lab',
              description: 'Rapid prototyping cycles transform use-cases into validated pilots within weeks.',
              icon: Lightbulb,
            },
            {
              title: 'Growth partnerships',
              description: 'We co-create governance, change enablement, and capability uplift with your leaders.',
              icon: ShieldCheck,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="bg-[#07132f] text-white rounded-2xl border border-[#0d1a3a] p-6 shadow-[0_25px_60px_rgba(7,19,47,0.4)]"
            >
              <item.icon className="w-10 h-10 text-white" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-slate-200 mt-3">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

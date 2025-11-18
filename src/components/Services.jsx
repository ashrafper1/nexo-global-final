import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Brain,
  Database,
  LineChart,
  Shield,
  GraduationCap,
  Cloud,
  HardDrive,
  Network,
  Code2,
  Megaphone,
} from 'lucide-react'
import servicesData from '../data/servicesData'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const iconMap = {
    'artificial-intelligence': { icon: Brain, bg: 'bg-pink-100 text-pink-600' },
    'data-science': { icon: Database, bg: 'bg-sky-100 text-sky-600' },
    'machine-learning': { icon: LineChart, bg: 'bg-amber-100 text-amber-600' },
    'cyber-security': { icon: Shield, bg: 'bg-rose-100 text-rose-600' },
    'it-training': { icon: GraduationCap, bg: 'bg-indigo-100 text-indigo-600' },
    'cloud-services': { icon: Cloud, bg: 'bg-cyan-100 text-cyan-600' },
    storage: { icon: HardDrive, bg: 'bg-violet-100 text-violet-600' },
    'network-services': { icon: Network, bg: 'bg-green-100 text-green-600' },
    programming: { icon: Code2, bg: 'bg-blue-100 text-blue-600' },
    marketing: { icon: Megaphone, bg: 'bg-purple-100 text-purple-600' },
  }

  const services = servicesData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className=" text-green-700 font-semibold uppercase tracking-wider text-sm"
          >
            Our Services  
          </motion.span>  
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }} 
            className="text-4xl md:text-5xl font-bold mt-4 mb-4"
          >
            <span className="text-black">What We</span>{' '}
            <span className="text-blue-900">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white via-white to-gray-50 border border-gray-100 rounded-2xl p-6 h-full cursor-pointer shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  {(() => {
                    const iconConfig = iconMap[service.slug]
                    const Icon = iconConfig?.icon
                    return (
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold ${
                          iconConfig?.bg ?? 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {Icon ? <Icon className="w-6 h-6" /> : <span>{service.title.charAt(0)}</span>}
                      </div>
                    )
                  })()}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-green-700 font-semibold text-sm hover:underline"
                  >
                    Explore Service →
                  </Link>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="mt-6 h-0.5 bg-green-600"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

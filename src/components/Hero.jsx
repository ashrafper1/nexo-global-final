import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const expertiseCards = [
    {
      title: 'IT Services',
      description: 'Advanced technology consulting across AI, cloud infrastructure, and digital transformation initiatives.',
      buttonText: 'Explore IT Services',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=90',
      href: '#services',
    },
    {
      title: 'Non IT Services',
      description: 'Non-technical consulting services provide expert, knowledge-based guidance on strategy, management, operations, finance, and human resources to help businesses optimize processes and solve problems.',
      buttonText: 'NON IT Services',
      image: 'https://www.reliablesoft.net/wp-content/uploads/2021/04/digital-marketing-services.jpeg',
      href: '#services',
    },
  ]

  const handleClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 bg-clip-text text-transparent"
          >
Discover What We Do Best</motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
We specialize in driving industrial evolution, using innovative consulting to harmonize cutting-edge technology with scientific breakthroughs for transformative outcomes.          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16"
        >
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.2 }}
                      className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                  
                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.2 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleClick(card.href)}
                    className="self-start bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all group-hover:bg-green-50 group-hover:text-green-700"
                  >
                    {card.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  )
}

export default Hero

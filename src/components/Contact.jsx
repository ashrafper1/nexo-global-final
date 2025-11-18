import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Globe } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Strategy Workshop',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', phone: '', projectType: 'Strategy Workshop', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const formFields = [
    { id: 'name', label: 'Full name', type: 'text', placeholder: 'Ada Lovelace', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Nexo Global', required: false },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '(+1) 415-555-0182', required: false },
  ]

  return (
    <section id="contact" ref={ref} className="py-10 px-2 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-850/4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-green-600 font-semibold uppercase tracking-wider text-sm"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-3 mb-3"
          >
            <span className="text-black">Let's Build</span>{' '}
            <span className="text-blue-900">Something Great</span>
          </motion.h2>  
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-700 text-lg max-w-2xl mx-auto"
          >
            Ready to transform your ideas into reality? Contact us today and let's discuss your project.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-full"
          >
            <div className="hidden lg:block absolute -inset-4 bg-slate-200 rounded-[36px] opacity-10" aria-hidden="true" />
            <div className="rounded-[32px] bg-white/5 border border-white/20 shadow-xl overflow-hidden">
              <img
                src="https://watermark.lovepik.com/photo/20211123/large/lovepik-business-women-call-picture_500839991.jpg"
                alt="Support specialist"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-xl border border-slate-100">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.3em] font-bold text-slate-900">Contact us</p>
               
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-semibold text-slate-800 mb-2">
                        {field.label}
                        {field.required && <span className="text-rose-500"> *</span>}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:bg-white border border-slate-200"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {formFields.slice(2).map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-semibold text-slate-800 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:bg-white border border-slate-200"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-800 mb-2">
                    What type of engagement?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:bg-white border border-slate-200"
                  >
                    <option>Strategy Workshop</option>
                    <option>Custom Engineering</option>
                    <option>Cloud & DevOps</option>
                    <option>AI & Data Innovation</option>
                    <option>Managed Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:bg-white border border-slate-200 resize-none"
                    placeholder="Timeline, goals, success metrics…"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#07132f] text-white font-semibold text-lg rounded-2xl px-6 py-4 shadow-lg shadow-slate-900/40 hover:bg-[#0b1f4a]"
                >
                  Send proposal brief
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

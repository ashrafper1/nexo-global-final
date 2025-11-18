import { ArrowLeft, CheckCircle2, Sparkles, Target, Shield, Zap } from 'lucide-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import servicesData from '../data/servicesData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const accentIcons = [Sparkles, Target, Shield, Zap]

const ServiceDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const service = servicesData.find((item) => item.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#07132f] text-white rounded-lg hover:bg-[#0b1f4a] transition"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex items-center gap-4 text-sm text-slate-500">
            <ArrowLeft className="w-4 h-4" />
            <Link to="/" className="font-semibold text-[#07132f] hover:underline">
              Back to Services
            </Link>
          </div>

          <section className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-slate-500">{service.title}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#07132f] mt-4 mb-6">
                {service.title} Excellence
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">{service.detail}</p>
              <p className="text-slate-500 leading-relaxed">{service.summary}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {service.highlights.slice(0, 2).map((highlight, index) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 bg-[#07132f] text-white rounded-2xl px-4 py-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span className="text-sm leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-[#07132f] rounded-[32px] opacity-10 blur-3xl" aria-hidden="true" />
              <div className="rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          <section className="mt-16 grid lg:grid-cols-3 gap-6">
            {service.highlights.map((highlight, index) => {
              const Icon = accentIcons[index % accentIcons.length]
              return (
                <div key={highlight} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#07132f]/10 text-[#07132f] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">{highlight}</p>
                </div>
              )
            })}
          </section>

          <section className="mt-16 bg-[#050f2a] text-white rounded-[32px] p-10">
            <h2 className="text-3xl font-semibold mb-4">What we bring</h2>
            <p className="text-slate-200 max-w-3xl">
              Dedicated pods of strategists, architects, and engineers partner with your teams to deliver rapid impact,
              governed execution, and measurable outcomes tailored to {service.title.toLowerCase()} programs.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {['Discovery Sprint', 'Delivery Playbooks', 'Adoption & Support'].map((item) => (
                <div key={item} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <p className="text-sm tracking-[0.3em] uppercase text-emerald-200">Phase</p>
                  <h3 className="text-xl font-semibold mt-2">{item}</h3>
                  <p className="text-sm text-slate-200 mt-3">
                    We run collaborative workshops, hardened delivery kits, and go-live coaching to keep momentum high.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ServiceDetail

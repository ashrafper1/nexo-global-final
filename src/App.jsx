import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500)
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo && !isLoading) {
      const element = document.querySelector(location.state.scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      navigate('.', { replace: true, state: null })
    }
  }, [location, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <About />
      <Services />
     
      <Contact />
      <Footer />
    </div>
  )
}

export default App

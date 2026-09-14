import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import DimenServe from './pages/DimenServe'
import Training from './pages/Training'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/dimenserve-grc" element={<DimenServe />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
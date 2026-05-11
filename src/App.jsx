import { Routes, Route } from 'react-router-dom'
import MOTARCaseStudy from './projects/motar-case-study'
import Portfolio from './portfolio'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation()

    useEffect(() => {
      if (location.hash) {
        const el = document.getElementById(location.hash.replace('#', ''))
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }, [location])

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/motar" element={<MOTARCaseStudy />} />
    </Routes>
  )
}

export default App
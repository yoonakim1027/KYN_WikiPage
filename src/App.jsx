import React, { useEffect } from 'react'
import { WikiProvider } from './context/WikiContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import WikiPage from './pages/Wiki'
import Header from './components/Home/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <WikiProvider>
      <ToastContainer />

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wiki/:title" element={<WikiPage />} />
        </Routes>
      </Router>
    </WikiProvider>
  )
}

export default App

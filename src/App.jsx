import React from 'react'
import { WikiProvider } from './context/WikiContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import WikiPage from './pages/Wiki'
import Header from './components/Home/Header'
import './App.css'
function App() {
  return (
    <WikiProvider>
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

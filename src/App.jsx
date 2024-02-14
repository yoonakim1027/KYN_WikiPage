import React from 'react'
import { WikiProvider } from './context/WikiContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import WikiPage from './pages/Wiki'

function App() {
  return (
    <WikiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wiki/:title" element={<WikiPage />} />
        </Routes>
      </Router>
    </WikiProvider>
  )
}

export default App

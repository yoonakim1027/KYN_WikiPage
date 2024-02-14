import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import WikiPage from './pages/Wiki'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/wiki/:title" element={<WikiPage />} />
      </Routes>
    </Router>
  )
}

export default App

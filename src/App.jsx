import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/index.jsx'
import About from '../about/index.jsx'
import Contact from '../contact/index.jsx'
import Faq from '../faq/index.jsx'
import HowItWorks from '../how-it-works/index.jsx'
import Legal from '../legal/index.jsx'
import Account from '../account/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
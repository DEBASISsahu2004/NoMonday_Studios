import './App.css'
import Home from './pages/home/Home'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Background from './components/background/Background'

function App() {

  return (
    <>
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

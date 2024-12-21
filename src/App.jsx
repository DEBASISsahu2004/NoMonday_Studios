import './App.css'
import Home from './pages/home/Home'
import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Background from './components/background/Background'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

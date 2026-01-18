import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Plans from './pages/Plans';
import PlanDetail from './pages/PlanDetail';
import Channels from './pages/Channels';
import Devices from './pages/Devices';
import FreeTrial from './pages/FreeTrial';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/plan/:planId" element={<PlanDetail />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

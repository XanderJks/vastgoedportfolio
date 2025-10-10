import { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <AdminDashboard />
    </div>
  );
}

export default App;

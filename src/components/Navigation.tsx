import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'WORK' },
    { id: 'about', label: 'INFO' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <div className="flex items-center justify-between h-28">
          <button
            onClick={() => scrollToSection('home')}
            className="text-3xl font-black tracking-tighter text-white hover:text-amber-500 transition-colors font-mono"
          >
            L/B
          </button>

          <div className="flex items-center gap-6 lg:gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors relative group font-mono"
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-px bg-amber-500 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <a
              href="#contact"
              className="px-4 lg:px-8 py-2 lg:py-3 bg-white text-black text-[10px] lg:text-xs tracking-[0.3em] uppercase font-bold hover:bg-amber-500 transition-colors font-mono"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

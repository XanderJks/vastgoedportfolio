import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
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

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors relative group font-mono"
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-px bg-amber-500 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.3em] uppercase font-bold hover:bg-amber-500 transition-colors font-mono"
            >
              CONTACT
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex items-center justify-center">
          <div className="space-y-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-5xl font-black text-white hover:text-amber-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-5xl font-black text-amber-500"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

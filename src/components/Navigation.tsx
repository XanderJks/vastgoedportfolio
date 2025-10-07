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
    { id: 'services', label: 'Werk' },
    { id: 'portfolio', label: 'Cases' },
    { id: 'about', label: 'Info' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-28">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-tighter text-white hover:text-amber-500 transition-colors"
          >
            S—V
          </button>

          <div className="hidden md:flex items-center gap-16">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-px bg-white transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
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
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-4xl font-bold text-white hover:text-amber-500 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

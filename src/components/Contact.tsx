import { Minus } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-zinc-900 py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-white"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-zinc-500">Neem Contact Op</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-12">
              Laten we<br />praten
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-500 mb-3">Email</h3>
                <a href="mailto:contact@aerostudio.nl" className="text-2xl text-white hover:text-zinc-400 transition-colors">
                  contact@aerostudio.nl
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-500 mb-3">Telefoon</h3>
                <a href="tel:+31201234567" className="text-2xl text-white hover:text-zinc-400 transition-colors">
                  +31 20 123 4567
                </a>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-500 mb-3">Bereikbaarheid</h3>
                <p className="text-zinc-400">Ma-Vr 09:00-18:00</p>
                <p className="text-zinc-400">Weekend op afspraak</p>
              </div>

              <div className="pt-8 border-t border-zinc-800">
                <h3 className="text-sm tracking-widest uppercase text-zinc-500 mb-3">Locatie</h3>
                <p className="text-zinc-400">Amsterdam</p>
                <p className="text-zinc-400 text-sm mt-2">Werkzaam in heel Nederland</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-3">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-3">
                  Project Type
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors"
                  placeholder="Bijv. Vastgoed fotografie, Development, etc."
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-3">
                  Bericht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-600 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Vertel over uw project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-900 overflow-hidden mt-8"
              >
                <span className="relative z-10 text-xs tracking-widest uppercase">Verstuur</span>
                <Minus className="relative z-10 w-4 h-4 rotate-90 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-2xl font-light text-white mb-2">AERO<span className="font-serif italic">Studio</span></p>
              <p className="text-sm text-zinc-500">Aerial Photography & Videography</p>
            </div>
            <div className="text-zinc-500 text-sm">
              <p>© 2024 AeroStudio</p>
              <p className="mt-1">ROC-light Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

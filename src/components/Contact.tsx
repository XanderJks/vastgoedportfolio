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
    <section id="contact" className="relative bg-[#0a0a0a] py-40">
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="mb-32">
          <h2 className="text-7xl lg:text-[12rem] font-bold text-white leading-none mb-8">
            Let's talk
          </h2>
          <div className="h-1 w-32 bg-amber-500"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group">
                <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">
                  Naam
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 text-3xl text-white placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Uw naam"
                />
              </div>

              <div className="group">
                <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 text-3xl text-white placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="uw@email.nl"
                />
              </div>

              <div className="group">
                <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">
                  Project
                </label>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 text-3xl text-white placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Type project"
                />
              </div>

              <div className="group">
                <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">
                  Vertel meer
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-white/10 py-6 text-3xl text-white placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Wat wil je maken?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative px-16 py-8 bg-white text-black text-sm tracking-[0.3em] uppercase font-medium overflow-hidden"
              >
                <span className="relative z-10">Verstuur</span>
                <div className="absolute inset-0 bg-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-16">
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-6">Direct Contact</h3>
                <div className="space-y-8">
                  <div>
                    <a href="mailto:info@luchtbeeld.nl" className="text-3xl text-white hover:text-amber-500 transition-colors block mb-2">
                      info@luchtbeeld.nl
                    </a>
                    <p className="text-zinc-600 text-sm">Voor alle vragen</p>
                  </div>

                  <div>
                    <a href="tel:+31201234567" className="text-3xl text-white hover:text-amber-500 transition-colors block mb-2">
                      +31 20 123 4567
                    </a>
                    <p className="text-zinc-600 text-sm">Ma-Vr 09:00-18:00</p>
                  </div>
                </div>
              </div>

              <div className="pt-16 border-t border-white/10">
                <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-6">Locatie</h3>
                <div className="text-xl text-white mb-2">Amsterdam</div>
                <p className="text-zinc-600">Werkzaam door heel Nederland</p>
              </div>

              <div className="pt-16 border-t border-white/10">
                <h3 className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-6">Social</h3>
                <div className="space-y-4">
                  {['Instagram', 'Vimeo', 'LinkedIn'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="block text-xl text-white hover:text-amber-500 transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-16 border-t border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <div className="text-white text-lg mb-2">Beschikbaar voor nieuwe projecten</div>
                    <p className="text-zinc-600 text-sm">Response tijd: binnen 4 uur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">L—B</div>
              <p className="text-zinc-600 text-sm">Luchtbeeld • Aerial Photography & Videography</p>
            </div>

            <div className="flex items-center gap-8 text-zinc-600 text-sm">
              <span>© 2024</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
              <span>ROC Certified</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
              <span>Amsterdam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

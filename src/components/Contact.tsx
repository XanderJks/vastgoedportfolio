import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-20 relative">
        <div className="mb-32">
          <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">005/005 — GET IN TOUCH</div>
          <h2 className="text-8xl lg:text-[14rem] font-black leading-none tracking-tighter mb-8">
            <span className="text-white">CON</span>
            <span style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>TACT</span>
          </h2>
          <div className="flex items-center gap-8">
            <div className="h-px w-32 bg-gradient-to-r from-amber-500 to-transparent"></div>
            <span className="text-xs font-mono text-zinc-600 tracking-widest">RESPONSE BINNEN 4 UUR</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-16">
              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative">
                  <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4 font-mono">
                    01 — NAAM
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full bg-transparent border-b-2 border-zinc-900 py-6 text-2xl text-white placeholder-zinc-800 focus:border-amber-500 focus:outline-none transition-all duration-300 font-mono"
                    placeholder="Uw naam"
                  />
                  {focused === 'name' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4 font-mono">
                    02 — EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full bg-transparent border-b-2 border-zinc-900 py-6 text-2xl text-white placeholder-zinc-800 focus:border-amber-500 focus:outline-none transition-all duration-300 font-mono"
                    placeholder="uw@email.nl"
                  />
                  {focused === 'email' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative">
                  <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4 font-mono">
                    03 — PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    onFocus={() => setFocused('project')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-zinc-900 py-6 text-2xl text-white placeholder-zinc-800 focus:border-amber-500 focus:outline-none transition-all duration-300 font-mono"
                    placeholder="Commercial / Residential"
                  />
                  {focused === 'project' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4 font-mono">
                    04 — BUDGET RANGE
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocused('budget')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-zinc-900 py-6 text-2xl text-white focus:border-amber-500 focus:outline-none transition-all duration-300 font-mono appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Selecteer budget</option>
                    <option value="1k-2k" className="bg-black">€1.000 - €2.500</option>
                    <option value="2k-5k" className="bg-black">€2.500 - €5.000</option>
                    <option value="5k+" className="bg-black">€5.000+</option>
                    <option value="custom" className="bg-black">Custom project</option>
                  </select>
                  {focused === 'budget' && (
                    <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4 font-mono">
                  05 — PROJECT DETAILS
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={6}
                  className="w-full bg-transparent border-2 border-zinc-900 p-6 text-xl text-white placeholder-zinc-800 focus:border-amber-500 focus:outline-none transition-all duration-300 resize-none font-mono"
                  placeholder="Vertel ons over je project, locatie, gewenste datum, specifieke wensen..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative px-20 py-8 bg-white text-black text-sm tracking-[0.4em] uppercase font-black overflow-hidden font-mono"
              >
                <span className="relative z-10">VERSTUUR BRIEF</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="border-2 border-zinc-900 p-12">
              <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-8">DIRECT CONTACT</div>
              <div className="space-y-8">
                <div>
                  <div className="text-xs font-mono text-zinc-600 mb-2">EMAIL</div>
                  <a href="mailto:info@luchtbeeld.nl" className="text-2xl text-white hover:text-amber-500 transition-colors block font-mono">
                    info@luchtbeeld.nl
                  </a>
                </div>

                <div className="h-px bg-zinc-900"></div>

                <div>
                  <div className="text-xs font-mono text-zinc-600 mb-2">TELEFOON</div>
                  <a href="tel:+31201234567" className="text-2xl text-white hover:text-amber-500 transition-colors block font-mono">
                    +31 20 123 4567
                  </a>
                  <p className="text-zinc-600 text-xs font-mono mt-2">MA—VR 09:00—18:00</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-zinc-900 p-12">
              <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-8">LOCATIE</div>
              <div className="text-xl text-white mb-4 font-mono">AMSTERDAM</div>
              <div className="text-sm text-zinc-500 font-mono space-y-1">
                <div>52.3676° N</div>
                <div>4.9041° E</div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-900">
                <p className="text-zinc-600 text-sm">Werkzaam door heel Nederland</p>
              </div>
            </div>

            <div className="border-2 border-zinc-900 p-12">
              <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-8">SOCIAL</div>
              <div className="space-y-4">
                {[
                  { name: 'Instagram', handle: '@luchtbeeld' },
                  { name: 'Vimeo', handle: 'luchtbeeld' },
                  { name: 'LinkedIn', handle: 'luchtbeeld-bv' }
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href="#"
                    className="group flex items-center justify-between text-white hover:text-amber-500 transition-colors"
                  >
                    <span className="text-lg font-mono">{platform.name}</span>
                    <span className="text-xs text-zinc-600 group-hover:text-zinc-400 font-mono">{platform.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border-2 border-green-500/20 p-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-xs font-mono tracking-[0.5em] text-green-400">BESCHIKBAAR</div>
              </div>
              <div className="text-white text-lg mb-2 font-mono">Nieuwe projecten welkom</div>
              <p className="text-zinc-400 text-sm font-mono">Response: &lt; 4 uur</p>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-20 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-black text-white mb-4 font-mono">L/B</div>
              <p className="text-zinc-600 text-sm font-mono leading-relaxed">
                LUCHTBEELD<br/>
                Aerial Photography<br/>
                & Videography
              </p>
            </div>

            <div className="text-sm font-mono text-zinc-600 space-y-2">
              <div>KVK: 87654321</div>
              <div>BTW: NL123456789B01</div>
              <div>ROC Certified</div>
              <div>EASA A1/A3</div>
            </div>

            <div className="text-right text-sm font-mono text-zinc-600 space-y-2">
              <div>© 2024 Luchtbeeld BV</div>
              <div>Amsterdam, Nederland</div>
              <div className="flex items-center justify-end gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>START PROJECT →</span>
          <span>&lt; 4H RESPONSE</span>
        </div>
      </div>
    </section>
  );
}

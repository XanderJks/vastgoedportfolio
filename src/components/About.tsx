import { useState, useEffect } from 'react';

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative bg-black py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent"
          style={{
            transform: `translateY(${scrollProgress * 100}px)`,
            opacity: scrollProgress
          }}
        ></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-20 relative">
        <div className="mb-32">
          <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">004/005 — PHILOSOPHY</div>
          <div className="relative">
            <h2 className="text-8xl lg:text-[14rem] font-black leading-none tracking-tighter">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-700"
                  style={{ transform: `translateX(${scrollProgress * 100}px)` }}
                >
                  <span className="text-white">OBS</span>
                  <span style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>ESS</span>
                  <span className="text-white">ION</span>
                </div>
              </div>
            </h2>

            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7 space-y-24">
            <div className="relative pl-32">
              <div className="absolute left-0 top-0 text-8xl font-black text-zinc-900 font-mono leading-none select-none">01</div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Technische perfectie</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Elke shot is het resultaat van precisie-planning. We berekenen lichthoeken,
                  windsnelheden, schaduwen. Niks aan toeval overlaten. Onze DJI Inspire 3
                  setup geeft ons millimeter-nauwkeurige controle over elke frame.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900"></div>

            <div className="relative pl-32">
              <div className="absolute left-0 top-0 text-8xl font-black text-zinc-900 font-mono leading-none select-none">02</div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Geen compromissen</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  We vliegen niet bij "redelijke" condities. We wachten op de perfecte
                  condities. Golden hour, helder weer, geen wind. Als het niet ideaal is,
                  vliegen we niet. Simpel.
                </p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900"></div>

            <div className="relative pl-32">
              <div className="absolute left-0 top-0 text-8xl font-black text-zinc-900 font-mono leading-none select-none">03</div>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white">Data-driven aanpak</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  Voor elke shoot creëren we flight plans met GPS waypoints, preset camera
                  angles, exposure settings. Niks improviseren. Alles getest, gemeten, gedocumenteerd.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="border-2 border-zinc-900 p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000"></div>
              <div className="relative">
                <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-8">EQUIPMENT</div>
                <div className="space-y-6 text-sm font-mono text-zinc-400">
                  <div className="flex justify-between items-start">
                    <span>DJI Inspire 3</span>
                    <span className="text-white">x2</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>Zenmuse X9-8K</span>
                    <span className="text-white">8K/75fps</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>DJI RC Plus</span>
                    <span className="text-white">Dual control</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>TB51 Batteries</span>
                    <span className="text-white">x12</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>ND Filters</span>
                    <span className="text-white">Complete set</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-zinc-900 p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-1000"></div>
              <div className="relative">
                <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-8">CERTIFICERINGEN</div>
                <div className="space-y-6 text-sm font-mono text-zinc-400">
                  <div className="flex justify-between items-start">
                    <span>ROC Pilot License</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>Insurance Coverage</span>
                    <span className="text-green-400">€5M</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>EASA A1/A3 Certified</span>
                    <span className="text-green-400">✓</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span>Urban Flight Permits</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-30"></div>
              <div className="relative">
                <div className="text-xs font-mono tracking-[0.5em] text-black/60 mb-6">BESCHIKBAAR</div>
                <div className="text-3xl font-black mb-4 text-black">Start je project</div>
                <p className="text-black/80 mb-8 leading-relaxed">
                  Response binnen 4 uur. Offerte binnen 24 uur. Shoot binnen 2 weken.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs font-mono tracking-widest hover:bg-zinc-900 transition-colors"
                >
                  PLAN INTAKE CALL
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>ONZE AANPAK →</span>
          <span>NO COMPROMISE</span>
        </div>
      </div>
    </section>
  );
}

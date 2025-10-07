import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const timer = setInterval(() => setTime(new Date()), 1000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-[#0a0a0a] overflow-hidden">
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out'
        }}
      ></div>

      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 lg:px-20 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
            <div className="flex items-start justify-between mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs tracking-[0.5em] uppercase text-zinc-600 font-mono">ACTIEF</span>
                </div>
                <div className="text-sm text-zinc-600 font-mono">
                  {time.toLocaleTimeString('nl-NL')} — Amsterdam
                </div>
              </div>

              <div className="text-right text-sm text-zinc-600 font-mono space-y-2">
                <div>52.3676° N</div>
                <div>4.9041° E</div>
              </div>
            </div>

            <div className="relative mb-32">
              <h1 className="text-[clamp(3rem,18vw,20rem)] font-black leading-[0.85] tracking-tighter">
                <div className="overflow-hidden">
                  <div className="inline-block" style={{
                    transform: `translateX(${(mousePos.x - window.innerWidth / 2) * 0.05}px)`
                  }}>
                    <span className="text-white">LUCHT</span>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="inline-block" style={{
                    transform: `translateX(${(mousePos.x - window.innerWidth / 2) * -0.03}px)`,
                    WebkitTextStroke: '2px white',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    <span>BEELD</span>
                  </div>
                </div>
              </h1>

              <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="w-40 h-40 relative">
                  <svg className="w-full h-full animate-rotate-slow" viewBox="0 0 100 100">
                    <path
                      id="curve"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8px] fill-zinc-600 uppercase tracking-widest font-mono">
                      <textPath href="#curve">
                        • DRONE FOTOGRAFIE • VIDEO • 3D MAPPING •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
              <div className="lg:col-span-2">
                <p className="text-2xl lg:text-3xl text-zinc-400 leading-relaxed mb-12 font-light">
                  Wij fotograferen geen gebouwen—<br/>
                  we documenteren ruimtelijke verhoudingen,<br/>
                  lichtval en architectonische intenties.
                </p>

                <div className="flex items-center gap-6">
                  <a
                    href="#contact"
                    className="group relative px-12 py-6 bg-white text-black font-bold overflow-hidden"
                  >
                    <span className="relative z-10 text-sm tracking-widest font-mono">BOEK NU</span>
                    <div className="absolute inset-0 bg-amber-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  </a>

                  <a href="#portfolio" className="text-sm tracking-widest text-zinc-600 hover:text-white transition-colors font-mono flex items-center gap-3">
                    <span className="w-16 h-px bg-zinc-700"></span>
                    SCROLL
                  </a>
                </div>
              </div>

              <div className="space-y-8 text-sm font-mono">
                <div className="border-l-2 border-zinc-800 pl-6">
                  <div className="text-zinc-600 mb-2 tracking-wider">STATS</div>
                  <div className="text-4xl font-bold text-white mb-1">847</div>
                  <div className="text-zinc-500">Voltooide shoots</div>
                </div>

                <div className="border-l-2 border-amber-500 pl-6">
                  <div className="text-zinc-600 mb-2 tracking-wider">RESOLUTIE</div>
                  <div className="text-4xl font-bold text-white mb-1">8K</div>
                  <div className="text-zinc-500">DJI Inspire 3 Pro</div>
                </div>

                <div className="border-l-2 border-zinc-800 pl-6">
                  <div className="text-zinc-600 mb-2 tracking-wider">LEVERING</div>
                  <div className="text-4xl font-bold text-white mb-1">24u</div>
                  <div className="text-zinc-500">Rush beschikbaar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>SCROLL ↓</span>
          <span>001/005</span>
        </div>
      </div>
    </section>
  );
}

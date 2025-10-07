export default function Services() {
  const services = [
    { id: '01', title: 'AERIAL', desc: 'Drone cinematografie voor vastgoed', tag: 'CORE' },
    { id: '02', title: 'MOTION', desc: 'Video & tijdlapse productie', tag: 'CORE' },
    { id: '03', title: 'STILLS', desc: 'Architectuur fotografie', tag: 'CORE' },
    { id: '04', title: '3D MAPPING', desc: 'Ruimtelijke reconstructie', tag: 'ADVANCED' },
    { id: '05', title: 'VR TOURS', desc: 'Immersieve experiences', tag: 'ADVANCED' },
  ];

  return (
    <section id="services" className="relative bg-black py-40 border-y border-white/10">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-20">
        <div className="mb-32">
          <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">003/005 — CAPABILITIES</div>
          <div className="flex items-end justify-between">
            <h2 className="text-8xl lg:text-[12rem] font-black leading-none tracking-tighter text-white">
              SERVICES
            </h2>
            <div className="text-right text-sm font-mono text-zinc-600 space-y-2 mb-4">
              <div>05 DIENSTEN</div>
              <div>MODULAIR SYSTEEM</div>
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative border-t border-zinc-900 last:border-b hover:bg-white/[0.02] transition-colors"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center py-12 lg:py-16">
                <div className="lg:col-span-1">
                  <div className="text-xs font-mono text-zinc-700">{service.id}</div>
                </div>

                <div className="lg:col-span-4">
                  <div className="text-5xl lg:text-7xl font-black group-hover:translate-x-4 transition-transform duration-300">
                    {service.title}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="text-lg text-zinc-400 font-light">
                    {service.desc}
                  </div>
                </div>

                <div className="lg:col-span-2 text-right">
                  <span className="inline-block px-4 py-2 border border-zinc-800 text-xs font-mono tracking-wider text-zinc-500">
                    {service.tag}
                  </span>
                </div>
              </div>

              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-12 h-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 grid lg:grid-cols-3 gap-1 border-2 border-zinc-900">
          <div className="bg-[#0a0a0a] p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-8xl font-black mb-8 tabular-nums">
                <span className="text-white">24</span>
                <span className="text-zinc-700">h</span>
              </div>
              <div className="h-px w-16 bg-zinc-800 mb-6"></div>
              <div className="text-sm font-mono text-zinc-500 leading-relaxed">
                RUSH DELIVERY<br/>
                First cuts binnen 24u<br/>
                Finaal binnen 48u
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-8xl font-black mb-8 tabular-nums">
                <span className="text-white">8</span>
                <span className="text-zinc-700">K</span>
              </div>
              <div className="h-px w-16 bg-zinc-800 mb-6"></div>
              <div className="text-sm font-mono text-zinc-500 leading-relaxed">
                RESOLUTION<br/>
                DJI Inspire 3<br/>
                Zenmuse X9-8K sensor
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-8xl font-black mb-8">
                <span className="text-white">NL</span>
              </div>
              <div className="h-px w-16 bg-zinc-800 mb-6"></div>
              <div className="text-sm font-mono text-zinc-500 leading-relaxed">
                COVERAGE<br/>
                Landelijk werkzaam<br/>
                ROC gecertificeerd
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 p-16 border-2 border-zinc-900 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">CUSTOM SOLUTIONS</div>
              <div className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Specifieke wens?<br/>
                We bouwen op maat.
              </div>
              <div className="text-zinc-400 leading-relaxed mb-8">
                Van live-streaming tot custom gimbal rigs—als het met drones en camera's kan, maken we het mogelijk.
              </div>
            </div>
            <div className="flex items-center justify-end">
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-mono text-sm tracking-widest overflow-hidden relative"
              >
                <span className="relative z-10">BESPREEK PROJECT</span>
                <svg className="relative z-10 w-6 h-6 transition-transform group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-amber-500 transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>ALLE SERVICES →</span>
          <span>MODULAIRE PRICING</span>
        </div>
      </div>
    </section>
  );
}

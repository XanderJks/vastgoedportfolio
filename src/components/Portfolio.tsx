import { useState } from 'react';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'VERTEX',
      subtitle: 'Commercial Tower',
      location: 'Rotterdam',
      year: '2024',
      size: '47.000m²',
      height: '156m',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'DUNE',
      subtitle: 'Private Residence',
      location: 'Wassenaar',
      year: '2024',
      size: '2.400m²',
      height: '—',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'CANAL',
      subtitle: 'Penthouse Development',
      location: 'Amsterdam',
      year: '2023',
      size: '850m²',
      height: '42m',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'ESTATE',
      subtitle: 'Heritage Property',
      location: 'Utrecht',
      year: '2024',
      size: '5.2ha',
      height: '—',
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200',
    }
  ];

  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1800px] mx-auto px-20">
        <div className="flex items-end justify-between mb-32">
          <div>
            <div className="text-xs font-mono tracking-[0.5em] text-zinc-600 mb-6">002/005 — SELECTED WORKS</div>
            <h2 className="text-[12rem] font-black leading-none tracking-tighter">
              <span className="text-white">PORT</span>
              <span style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}>FOLIO</span>
            </h2>
          </div>

          <div className="text-right text-sm font-mono text-zinc-600 space-y-2">
            <div>{projects.length} PROJECTEN</div>
            <div>2023—2024</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <div className="space-y-4 sticky top-32">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`p-8 border-2 cursor-pointer transition-all duration-300 ${
                    activeProject === index
                      ? 'border-amber-500 bg-amber-500/5'
                      : 'border-zinc-900 hover:border-zinc-700'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-5xl font-black mb-2">{project.title}</div>
                      <div className="text-sm text-zinc-500 font-mono">{project.subtitle}</div>
                    </div>
                    <div className="text-7xl font-black text-zinc-900">0{index + 1}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-xs font-mono pt-6 border-t border-zinc-800">
                    <div>
                      <div className="text-zinc-600 mb-1">LOCATIE</div>
                      <div className="text-white">{project.location}</div>
                    </div>
                    <div>
                      <div className="text-zinc-600 mb-1">JAAR</div>
                      <div className="text-white">{project.year}</div>
                    </div>
                    <div>
                      <div className="text-zinc-600 mb-1">GROOTTE</div>
                      <div className="text-white">{project.size}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7">
            <div className="relative aspect-[4/5] mb-12">
              <div className="absolute inset-0 border-2 border-zinc-900"></div>
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-all duration-700"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />

              <div className="absolute top-0 left-0 right-0 p-8 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">HOOFDBEELD</span>
                  <span className="text-zinc-600">8K / RAW</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-6">
                  <div>
                    <div className="text-zinc-600 mb-1">CAMERA</div>
                    <div className="text-white">DJI Inspire 3</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1">LENS</div>
                    <div className="text-white">Zenmuse X9-8K</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1">HOOGTE</div>
                    <div className="text-white">{projects[activeProject].height !== '—' ? projects[activeProject].height : 'Grondniveau'}</div>
                  </div>
                  <div>
                    <div className="text-zinc-600 mb-1">LICHT</div>
                    <div className="text-white">Golden Hour</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] border-2 border-zinc-900 relative overflow-hidden group cursor-pointer">
                  <img
                    src={projects[activeProject].image}
                    alt={`Detail ${i}`}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono tracking-widest">DETAIL 0{i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-8 lg:px-20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs font-mono text-zinc-700">
          <span>MEER PROJECTEN →</span>
          <span>004 CASES GETOOND</span>
        </div>
      </div>
    </section>
  );
}

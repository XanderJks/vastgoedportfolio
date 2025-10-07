import { useState } from 'react';

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'VERTEX TOWER',
      location: 'Rotterdam',
      year: '2024',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Commercial'
    },
    {
      title: 'DUNE RESIDENCE',
      location: 'Wassenaar',
      year: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Residential'
    },
    {
      title: 'CANAL LOFT',
      location: 'Amsterdam',
      year: '2023',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Interior'
    },
    {
      title: 'HERITAGE ESTATE',
      location: 'Utrecht',
      year: '2024',
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Heritage'
    }
  ];

  return (
    <section id="portfolio" className="relative bg-[#0a0a0a] py-40">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="mb-32">
          <h2 className="text-7xl lg:text-9xl font-bold text-white mb-4 leading-none">
            Selected
          </h2>
          <h2 className="text-7xl lg:text-9xl font-bold text-outline leading-none">
            Works
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-12 gap-16 items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>

                  <div
                    className={`absolute top-8 right-8 w-24 h-24 border border-white/30 rounded-full flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                  >
                    <span className="text-xs tracking-widest text-white">VIEW</span>
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-zinc-800">0{index + 1}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                  </div>

                  <div>
                    <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-8 text-zinc-500">
                      <span className="text-sm tracking-widest uppercase">{project.location}</span>
                      <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                      <span className="text-sm tracking-widest uppercase">{project.year}</span>
                    </div>
                  </div>

                  <div className="inline-block px-6 py-2 border border-white/10 text-xs tracking-widest uppercase text-zinc-400">
                    {project.category}
                  </div>

                  <button className="group flex items-center gap-4 text-white hover:text-amber-500 transition-colors">
                    <span className="text-sm tracking-wider uppercase">Bekijk Project</span>
                    <svg className="w-12 h-12 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 px-16 py-8 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="text-sm tracking-[0.3em] uppercase font-medium">Meer Projecten</span>
            <div className="w-12 h-12 border border-current rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
              <span className="text-2xl">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

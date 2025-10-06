export default function Portfolio() {
  const projects = [
    {
      title: 'Penthouse',
      location: 'Amsterdam Zuid',
      year: '2024',
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Residentieel'
    },
    {
      title: 'Villa Moderne',
      location: 'Wassenaar',
      year: '2024',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Architectuur'
    },
    {
      title: 'Office Tower',
      location: 'Rotterdam CS',
      year: '2023',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Commercieel'
    },
    {
      title: 'Historic Estate',
      location: 'Utrecht',
      year: '2024',
      image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200',
      type: 'Landgoed'
    }
  ];

  return (
    <section id="portfolio" className="relative bg-zinc-100 py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-zinc-900"></div>
            <span className="text-sm tracking-[0.3em] uppercase text-zinc-600">Recent Work</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-light text-zinc-900">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8 border-t border-zinc-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-zinc-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{project.location}</p>
                  </div>
                  <span className="text-sm text-zinc-400">{project.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase text-zinc-400">{project.type}</span>
                  <button className="text-xs tracking-widest uppercase text-zinc-900 border-b border-zinc-900 pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Bekijk Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

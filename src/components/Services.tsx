export default function Services() {
  const marqueeText = "• DRONE FOTOGRAFIE • VIDEOGRAFIE • ARCHITECTUUR • VASTGOED • 3D MAPPING • TIJDLAPSES ";

  return (
    <section id="services" className="relative bg-black py-40 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="relative mb-32 overflow-hidden border-y border-white/10">
        <div className="flex animate-scroll">
          <div className="flex items-center whitespace-nowrap py-8">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-6xl md:text-8xl font-bold text-outline tracking-tight px-8">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-32 mb-32">
          <div>
            <h2 className="text-7xl lg:text-9xl font-bold text-white mb-8 leading-none">
              Wat we<br/>
              <span className="text-outline">maken</span>
            </h2>
          </div>

          <div className="space-y-16">
            <div className="group">
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">Aerial</h3>
                  <p className="text-zinc-500 text-sm tracking-wider uppercase">Drone Cinematografie</p>
                </div>
                <div className="text-8xl font-bold text-zinc-900 group-hover:text-amber-500 transition-colors">01</div>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Dynamische luchtbeelden die architectuur in context plaatsen. Van sweeping establishing
                shots tot intieme detail werk - alles met een cinematografische aanpak.
              </p>
            </div>

            <div className="group">
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">Motion</h3>
                  <p className="text-zinc-500 text-sm tracking-wider uppercase">Video & Tijdlapses</p>
                </div>
                <div className="text-8xl font-bold text-zinc-900 group-hover:text-amber-500 transition-colors">02</div>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Bewegende beelden die verhalen vertellen. Van bouwproces documentatie tot showreels
                die de essentie van een locatie vangen.
              </p>
            </div>

            <div className="group">
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">Stills</h3>
                  <p className="text-zinc-500 text-sm tracking-wider uppercase">Fotografie</p>
                </div>
                <div className="text-8xl font-bold text-zinc-900 group-hover:text-amber-500 transition-colors">03</div>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Statische beelden waar elke lijn, textuur en lichtval meetelt. Architectuurfotografie
                die verder gaat dan documentatie.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-1 bg-white/5">
          <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group cursor-pointer">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">24h</div>
            <p className="text-zinc-400 leading-relaxed">
              Rush levering beschikbaar. First cuts binnen 24 uur, finaal binnen 48 uur.
            </p>
          </div>

          <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group cursor-pointer">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">8K</div>
            <p className="text-zinc-400 leading-relaxed">
              Nieuwste DJI Inspire 3 met 8K sensor. Toekomstbestendig materiaal.
            </p>
          </div>

          <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group cursor-pointer">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">NL</div>
            <p className="text-zinc-400 leading-relaxed">
              Landelijk werkzaam. Alle vergunningen en certificeringen op orde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-black py-40">
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7">
            <h2 className="text-7xl lg:text-9xl font-bold text-white mb-16 leading-none">
              We zijn<br/>
              <span className="text-outline">obsessief</span>
            </h2>

            <div className="space-y-12 text-xl text-zinc-400 leading-relaxed">
              <p>
                Elke shot is een studie in compositie, licht, en timing. Wij geloven dat
                vastgoedfotografie een kunstdiscipline is die technische perfectie vereist
                én een artistieke visie.
              </p>

              <p>
                We werken met dezelfde filosofie: geen compromissen op kwaliteit,
                geen excuses voor middelmatigheid. Elke klus behandelen we alsof het de
                belangrijkste is.
              </p>

              <p>
                Ons team bestaat uit gecertificeerde piloten en fotografen die hun vak serieus
                nemen. We investeren constant in nieuwe apparatuur, technieken en kennis.
                Want stilstand is achteruitgang.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Voor wie we werken</h3>
              <div className="grid grid-cols-2 gap-8">
                {['Architecten', 'Ontwikkelaars', 'Makelaars', 'Hoteliers', 'Investeerders', 'Overheden'].map((client) => (
                  <div key={client} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500"></div>
                    <span className="text-zinc-400">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="aspect-[3/4] mb-8 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Studio"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-12">
                <div className="border-l-2 border-amber-500 pl-8">
                  <div className="text-5xl font-bold text-white mb-3">4K Resolutie</div>
                  <p className="text-zinc-500">
                    Crystal clear 4K beeldkwaliteit voor professionele resultaten
                  </p>
                </div>

                <div className="border-l-2 border-white/10 pl-8">
                  <div className="text-5xl font-bold text-white mb-3">Verzekerd</div>
                  <p className="text-zinc-500">
                    Volledig verzekerd voor commerciële vluchten met uitgebreide dekking
                  </p>
                </div>

                <div className="border-l-2 border-white/10 pl-8">
                  <div className="text-5xl font-bold text-white mb-3">48h Delivery</div>
                  <p className="text-zinc-500">
                    Standaard levering binnen 2 werkdagen, rush mogelijk binnen 24 uur
                  </p>
                </div>
              </div>

              <div className="mt-16 p-12 bg-gradient-to-br from-amber-500 to-orange-600 text-black">
                <div className="text-lg font-medium mb-4">Klaar voor je project?</div>
                <p className="text-black/70 mb-8">
                  Laten we kijken wat mogelijk is. Geen verplichtingen, gewoon een goed gesprek.
                </p>
                <a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-black text-white hover:bg-white hover:text-black transition-colors"
                >
                  <span className="text-sm tracking-wider uppercase">Plan een call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

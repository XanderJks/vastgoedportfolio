export default function About() {
  return (
    <section id="about" className="relative bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-zinc-900"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-zinc-600">Over Ons</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-light text-zinc-900 mb-12">
              Studio
            </h2>

            <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                Wij zijn een klein team dat focust op architecturale fotografie vanuit de lucht.
                Geen grootschalige productie, maar persoonlijke aandacht voor elk project.
              </p>

              <p>
                Onze aanpak is simpel: vooraf goed sparren over wat je wilt communiceren,
                de juiste dag en tijd kiezen voor het licht, en dan schieten. Geen overdaad
                aan filters of effecten in post-productie.
              </p>

              <p>
                We werken hoofdzakelijk voor architectenbureaus, ontwikkelaars en
                vastgoedmakelaars die waarde hechten aan een serieuze visuele identiteit.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Drone equipment"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-12">
                <img
                  src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Architectural detail"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-zinc-200">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-400 mb-4">Werkwijze</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Intake gesprek, locatie verkenning, shoot op afspraak,
                  levering binnen 48 uur. Eén revisieronde inbegrepen.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-400 mb-4">Apparatuur</h3>
                <p className="text-zinc-600 leading-relaxed">
                  DJI Inspire 3 met Zenmuse X9-8K. Voor interieur: Sony A7R V.
                  Backup systemen altijd aanwezig.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-400 mb-4">Certificering</h3>
                <p className="text-zinc-600 leading-relaxed">
                  ROC-light certificaat, verzekerd tot 5M, ervaring sinds 2016.
                  Vergunningen regelen we zelf.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest uppercase text-zinc-400 mb-4">Locatie</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Gevestigd in Amsterdam. Actief in Randstad, op aanvraag
                  ook landelijk of internationaal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

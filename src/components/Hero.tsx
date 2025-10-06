import { ArrowRight, Minus } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-zinc-50 grain">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/40"></div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-zinc-900 draw-line"></div>
            <span className="text-sm tracking-[0.3em] uppercase text-zinc-600">Aerial Excellence</span>
          </div>

          <div className="reveal-line mb-4">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.95] text-zinc-900 slide-up">
              Vastgoed
            </h1>
          </div>

          <div className="reveal-line mb-4">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.95] text-zinc-900 slide-up" style={{ animationDelay: '0.1s' }}>
              door een
            </h1>
          </div>

          <div className="reveal-line mb-12">
            <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-zinc-900 slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="italic font-serif">andere</span> <span className="font-light">lens</span>
            </h1>
          </div>

          <p className="text-lg text-zinc-600 mb-12 max-w-lg leading-relaxed scale-in" style={{ animationDelay: '0.4s' }}>
            Wij creëren visuele verhalen voor vastgoed. Geen standaard luchtfoto's,
            maar doordachte beelden die emotie en context geven aan elke locatie.
          </p>

          <div className="flex items-center gap-8 scale-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-wider uppercase">Start Project</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-amber-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>

            <button className="text-sm tracking-wider uppercase text-zinc-600 hover:text-zinc-900 transition-colors border-b border-zinc-300 hover:border-zinc-900 pb-1">
              Bekijk Werk
            </button>
          </div>
        </div>

        <div className="relative lg:block hidden scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Luxury property aerial view"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center gap-4 text-white">
                <Minus className="w-8 h-8" />
                <div>
                  <p className="text-xs tracking-widest uppercase opacity-70">Featured</p>
                  <p className="text-sm">Penthouse Amsterdam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-12 top-24 bg-white p-8 shadow-2xl scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <p className="text-5xl font-light text-zinc-900 mb-1">500+</p>
              <p className="text-xs tracking-widest uppercase text-zinc-500">Projecten</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-8 lg:left-12 flex items-center gap-8 scale-in" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs tracking-wider uppercase text-zinc-500">Nu beschikbaar</span>
        </div>
        <div className="h-6 w-[1px] bg-zinc-300"></div>
        <span className="text-xs text-zinc-400">Nederland</span>
      </div>
    </section>
  );
}

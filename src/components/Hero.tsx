import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxX = (mousePos.x - window.innerWidth / 2) * 0.02;
  const parallaxY = (mousePos.y - window.innerHeight / 2) * 0.02;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20"></div>

      <div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-br from-amber-500/20 to-orange-500/20"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px) translateY(${scrollY * 0.5}px)`
        }}
      ></div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="mb-8 overflow-hidden">
              <div className="inline-flex items-center gap-2 fade-in-up">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-xs tracking-[0.4em] uppercase text-zinc-500 font-light">Beschikbaar voor nieuwe projecten</span>
              </div>
            </div>

            <h1 className="mb-12 leading-[0.9]">
              <div className="overflow-hidden mb-6">
                <div className="text-[clamp(4rem,12vw,11rem)] font-bold tracking-tighter text-white fade-in-up" style={{ animationDelay: '0.1s' }}>
                  LUCHT
                </div>
              </div>
              <div className="overflow-hidden mb-6">
                <div className="text-[clamp(4rem,12vw,11rem)] font-bold tracking-tighter text-outline fade-in-up" style={{ animationDelay: '0.2s' }}>
                  BEELD
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="text-[clamp(2rem,5vw,4rem)] font-light tracking-wide text-zinc-400 fade-in-up" style={{ fontFamily: 'Playfair Display, serif', animationDelay: '0.3s' }}>
                  voor vastgoed
                </div>
              </div>
            </h1>

            <div className="max-w-xl fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Wij maken geen foto's. Wij ontwerpen visuele verhalen die emotie
                activeren en waarde creëren. Elk frame is een strategische beslissing.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#contact"
                  className="group relative px-10 py-5 bg-white text-black font-medium overflow-hidden"
                >
                  <span className="relative z-10 text-sm tracking-wider">START EEN PROJECT</span>
                  <div className="absolute inset-0 bg-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>

                <button className="text-sm tracking-wider text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-12 h-[1px] bg-zinc-700"></span>
                  Scroll om te ontdekken
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative perspective-1000">
              <div
                className="relative aspect-[3/4] overflow-hidden fade-in-up"
                style={{
                  animationDelay: '0.5s',
                  transform: `translateX(${parallaxX * 2}px) translateY(${parallaxY * 2}px)`
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Featured work"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                />
                <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>

              <div
                className="absolute -bottom-12 -left-12 bg-white text-black p-8 rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <div className="text-6xl font-bold mb-2">500+</div>
                <div className="text-sm tracking-widest uppercase opacity-60">Projecten</div>
              </div>

              <div
                className="absolute top-0 -right-16 w-32 h-32 border border-white/10 rounded-full flex items-center justify-center animate-rotate-slow"
              >
                <div className="text-[10px] tracking-widest uppercase text-center text-zinc-500">
                  • DRONE<br/>• FOTOGRAFIE<br/>• VIDEO
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-8 lg:left-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase text-zinc-600">
            <span>Amsterdam</span>
            <span className="w-px h-6 bg-zinc-800"></span>
            <span>2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}

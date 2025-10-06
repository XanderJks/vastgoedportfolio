import { Minus } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'Luchtfotografie',
      subtitle: 'Architectuur & Context',
      description: 'Groothoek composities die de relatie tussen gebouw en omgeving tonen. Focus op lijnenspel, symmetrie en natuurlijk licht.',
    },
    {
      number: '02',
      title: 'Videografie',
      subtitle: 'Bewegende Verhalen',
      description: 'Cinematografische bewegingen die ruimte en sfeer communiceren. Geen flashy effecten, wel doordachte shots.',
    },
    {
      number: '03',
      title: 'Interieur',
      subtitle: 'Ruimte & Licht',
      description: 'Statische composities die architecturale details en materialen benadrukken. Minimale styling, maximum impact.',
    },
    {
      number: '04',
      title: 'Development',
      subtitle: 'Bouwproces',
      description: 'Periodieke documentatie van bouwfases. Consistente hoeken en tijdstippen voor vergelijkbare beelden.',
    }
  ];

  return (
    <section id="services" className="relative bg-white py-32">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-zinc-900"></div>
            <span className="text-sm tracking-[0.3em] uppercase text-zinc-600">Wat We Doen</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-light text-zinc-900 mb-6">
            Diensten
          </h2>
        </div>

        <div className="space-y-0 border-t border-zinc-200">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b border-zinc-200 transition-colors hover:bg-zinc-50"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-1">
                  <span className="text-sm text-zinc-400 tracking-wider">{service.number}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-3xl lg:text-4xl font-light text-zinc-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm tracking-wider uppercase text-zinc-500">{service.subtitle}</p>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="lg:col-span-1 flex justify-end">
                  <div className={`transform transition-transform duration-300 ${hoveredIndex === index ? 'rotate-45' : ''}`}>
                    <Minus className="w-6 h-6 text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="text-5xl font-light text-zinc-900 mb-3">48u</div>
            <p className="text-zinc-600">Standaard levertijd na opname. Rush mogelijk op aanvraag.</p>
          </div>
          <div>
            <div className="text-5xl font-light text-zinc-900 mb-3">RAW</div>
            <p className="text-zinc-600">Volledige retouche in Adobe Suite. Subtiel en naturel.</p>
          </div>
          <div>
            <div className="text-5xl font-light text-zinc-900 mb-3">NL</div>
            <p className="text-zinc-600">Landelijk werkzaam. Amsterdam, Rotterdam, Utrecht, Den Haag.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

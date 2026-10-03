import React, { useState } from 'react';
import { Coffee, Armchair, Croissant } from 'lucide-react';
import { ROAST_PROFILES } from '../data/menuData';

export const ExperienceSection: React.FC = () => {
  const [selectedBlendId, setSelectedBlendId] = useState<string>('nocturne');
  const activeProfile = ROAST_PROFILES.find((p) => p.id === selectedBlendId) || ROAST_PROFILES[0];

  // Radar chart mathematical coordinates centered at (50, 50), max radius 40
  // Top: Body (y decreases from 50)
  // Right: Sweet (x increases from 50)
  // Bottom: Crema (y increases from 50)
  // Left: Acidity (x decreases from 50)
  const topY = 50 - (activeProfile.body / 100) * 40;
  const rightX = 50 + (activeProfile.sweetness / 100) * 40;
  const bottomY = 50 + (activeProfile.crema / 100) * 40;
  const leftX = 50 - (activeProfile.acidity / 100) * 40;

  const pointsString = `50,${topY.toFixed(1)} ${rightX.toFixed(1)},50 50,${bottomY.toFixed(1)} ${leftX.toFixed(1)},50`;

  return (
    <section id="experience" className="w-full py-20 bg-[#100e0b]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
                THE NOIR EXPERIENCE
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] text-[#e7e1dc] tracking-tight leading-tight">
                Not just coffee. A ritual.
              </h2>
              <p className="text-[16px] text-[#d1c5b8] font-light mt-3 leading-relaxed">
                We conceived NOIR as a refuge from the accelerated tempo of London life. A place where extraction time is respected, lighting is calibrated for conversation, and every single vessel is hand-thrown by British ceramists.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
                <Coffee className="w-7 h-7 text-[#c5a880] mb-3" />
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Precision Extraction
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Sourced exclusively from single-origin micro-lots above 1,800m elevation.
                </p>
              </div>

              <div className="p-5 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
                <Armchair className="w-7 h-7 text-[#c5a880] mb-3" />
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Atmospheric Sanctuary
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Designed with dark English walnut, aged brass, and low acoustic hum.
                </p>
              </div>

              <div className="p-5 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
                <Croissant className="w-7 h-7 text-[#c5a880] mb-3" />
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Morning Bake
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Handcrafted Viennoiserie baked fresh daily in Mayfair at precisely 5:00 AM.
                </p>
              </div>
            </div>

            {/* Sensory Radar Profile Interactive Component */}
            <div className="p-6 bg-[#1d1b18] border border-[#2c2a26] rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-[#c5a880] uppercase tracking-[0.2em] font-semibold">
                  Our Roast Curve Profile
                </span>
                
                {/* Blend Selector tabs */}
                <div className="flex items-center gap-2 mt-1">
                  {ROAST_PROFILES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedBlendId(p.id)}
                      className={`px-2.5 py-1 rounded text-[11px] tracking-wider uppercase font-medium transition-colors cursor-pointer ${
                        selectedBlendId === p.id
                          ? 'bg-[#c5a880] text-[#100e0b]'
                          : 'bg-[#211f1c] text-[#d1c5b8] hover:text-[#e7e1dc]'
                      }`}
                    >
                      {p.id === 'nocturne' ? 'Nocturne 2026' : p.id === 'geisha' ? 'Panama Geisha' : 'Huila'}
                    </button>
                  ))}
                </div>

                <div className="mt-2">
                  <span className="font-serif text-[19px] text-[#e7e1dc] font-medium block">
                    {activeProfile.name}
                  </span>
                  <span className="text-[13px] text-[#c5a880] font-light">
                    {activeProfile.notes}
                  </span>
                </div>
                <div className="text-[11px] text-[#998f83] flex items-center gap-3 mt-1">
                  <span>Elevation: {activeProfile.elevation}</span>
                  <span>•</span>
                  <span>{activeProfile.process}</span>
                </div>
              </div>

              {/* Sensory Radar SVG Visual */}
              <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
                  {/* Concentric guides */}
                  <circle cx="50" cy="50" r="40" stroke="#373431" strokeWidth="0.8" />
                  <circle cx="50" cy="50" r="26" stroke="#373431" strokeWidth="0.8" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="13" stroke="#373431" strokeWidth="0.8" />

                  {/* Cross axes */}
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#373431" strokeWidth="0.8" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="#373431" strokeWidth="0.8" />

                  {/* Dynamic Flavor profile polygon */}
                  <polygon
                    points={pointsString}
                    fill="rgba(197, 168, 128, 0.28)"
                    stroke="#c5a880"
                    strokeWidth="1.5"
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Active Anchor Points */}
                  <circle cx="50" cy={topY} r="2.2" fill="#c5a880" />
                  <circle cx={rightX} cy="50" r="2.2" fill="#c5a880" />
                  <circle cx="50" cy={bottomY} r="2.2" fill="#c5a880" />
                  <circle cx={leftX} cy="50" r="2.2" fill="#c5a880" />

                  {/* Axis labels */}
                  <text x="50" y="8" fill="#e2c399" fontSize="6.5" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontWeight="600">
                    BODY
                  </text>
                  <text x="94" y="52" fill="#e2c399" fontSize="6.5" textAnchor="start" fontFamily="Plus Jakarta Sans" fontWeight="600">
                    SWEET
                  </text>
                  <text x="50" y="99" fill="#e2c399" fontSize="6.5" textAnchor="middle" fontFamily="Plus Jakarta Sans" fontWeight="600">
                    CREMA
                  </text>
                  <text x="4" y="52" fill="#e2c399" fontSize="6.5" textAnchor="start" fontFamily="Plus Jakarta Sans" fontWeight="600">
                    ACIDITY
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="w-full h-[520px] rounded-lg overflow-hidden relative shadow-2xl border border-[#2c2a26]">
              <img
                alt="NOIR London Coffee Bar Mayfair Lounge Interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjC87qWuxMvm9vx5F3Qn1S67tv0-osS2jPb-nBuK_f5FSC-PSf02Q6ckjJVxpl1_Bp39VImO-ck6fWSsoJ860OZE4az0iXC6H-JeJqq7KPZLQu--Ex26JklriKkDCdCR2DlgX0Pbt50un_2jCiP-TW2wMvtS4ZEIbnMp_BDd5e93nWPGw7zAv5wVokQ6mqwJrRqO75rS8bkzTXJo-tWpys1QZrmQtmcfmQY69Mh59rEGBif0Ko3nT6jQ"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#100e0b]/85 border border-[#2c2a26] backdrop-blur-md rounded-lg shadow-xl">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] block mb-1 font-semibold">
                  Atmosphere
                </span>
                <p className="text-[14px] text-[#e7e1dc] italic font-light leading-relaxed">
                  "The corner table under the brass lamp on Berkeley Square feels like another world entirely."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

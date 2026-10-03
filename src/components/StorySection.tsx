import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="w-full py-20 bg-[#151310] border-t border-[#211f1c]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Headline and Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
                Our Heritage
              </span>
              <h2 className="font-serif text-[34px] sm:text-[44px] text-[#e7e1dc] leading-[1.15] tracking-tight">
                Dark roast.<br />Clear purpose.
              </h2>
            </div>

            <div className="mt-8 lg:mt-12 p-6 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
              <p className="text-[15px] text-[#d8c2b8] italic mb-5 leading-relaxed font-light">
                "Coffee is not merely fuel to accelerate productivity; when respected, it has the unique power to suspend time entirely."
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#c5a880] text-[#100e0b] font-serif flex items-center justify-center font-bold text-lg shadow-sm">
                  J
                </div>
                <div>
                  <span className="text-[12px] uppercase tracking-wider text-[#e7e1dc] font-semibold block">
                    Julian Vance
                  </span>
                  <span className="text-[11px] text-[#998f83]">
                    Master Roaster &amp; Co-Founder
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and 4 Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[16px] text-[#d1c5b8] font-light leading-relaxed">
            <p>
              NOIR began with a quiet conviction in early 2024: London did not lack coffee bars, but it lacked spaces with absolute focus. Fast-paced grab-and-go culture had stripped the tactile joy from one of humanity's oldest social ceremonies.
            </p>
            <p>
              We set our anchor in Mayfair, pairing stripped stone surfaces with warm walnut millwork and focused acoustic attenuation. Every bean is procured through direct partnerships with multi-generational estates in Guji, Huila, and Boquete—paying far beyond fair-trade premiums to guarantee unmatched lot stewardship.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mt-2">
              <div className="p-5 bg-[#1d1b18] border border-[#2c2a26] rounded-lg shadow-sm hover:border-[#373431] transition-colors">
                <span className="text-[10px] tracking-widest text-[#c5a880] uppercase block mb-1 font-semibold">
                  Pillar 01
                </span>
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Direct Elevation Lots
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Strictly shade-grown, hand-harvested cherries grown above 1,800m sea level.
                </p>
              </div>

              <div className="p-5 bg-[#1d1b18] border border-[#2c2a26] rounded-lg shadow-sm hover:border-[#373431] transition-colors">
                <span className="text-[10px] tracking-widest text-[#c5a880] uppercase block mb-1 font-semibold">
                  Pillar 02
                </span>
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Thermal Uniformity
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Custom multi-boiler Italian machinery calibrated to half-degree water precision.
                </p>
              </div>

              <div className="p-5 bg-[#1d1b18] border border-[#2c2a26] rounded-lg shadow-sm hover:border-[#373431] transition-colors">
                <span className="text-[10px] tracking-widest text-[#c5a880] uppercase block mb-1 font-semibold">
                  Pillar 03
                </span>
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Slow Hospitality
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  No shouted names. Discreet service brought directly to your designated table.
                </p>
              </div>

              <div className="p-5 bg-[#1d1b18] border border-[#2c2a26] rounded-lg shadow-sm hover:border-[#373431] transition-colors">
                <span className="text-[10px] tracking-widest text-[#c5a880] uppercase block mb-1 font-semibold">
                  Pillar 04
                </span>
                <h4 className="font-serif text-[18px] text-[#e7e1dc] mb-1 font-semibold">
                  Parisian Viennoiserie
                </h4>
                <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                  Laminated dough rolled with French cultured butter and hand-shaped every morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const EditorialMarquee: React.FC = () => {
  const marqueeItems = [
    'SINGLE ORIGIN ETHIOPIA YIRGACHEFFE',
    '100% ARABICA REFINED LOTS',
    'HAND-POURED COLD EXTRACTION',
    'CELLAR-AGED COLD BREW',
    'ARTISAN PARISIAN PATISSERIE',
    'MAYFAIR NOCTURNE BLEND',
    'MICRO-LOT DIRECT TRADE'
  ];

  return (
    <div className="w-full bg-[#100e0b] border-y border-[#211f1c] py-3.5 overflow-hidden select-none">
      <div className="animate-marquee flex items-center">
        {/* Sequence 1 */}
        <div className="flex items-center gap-6 whitespace-nowrap text-[11px] tracking-[0.25em] text-[#c5a880] uppercase font-medium">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <span className="text-[7px] text-[#ebc44b]/80">◆</span>
            </React.Fragment>
          ))}
        </div>
        {/* Sequence 2 for seamless loop */}
        <div aria-hidden="true" className="flex items-center gap-6 whitespace-nowrap text-[11px] tracking-[0.25em] text-[#c5a880] uppercase font-medium pl-6">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <span className="text-[7px] text-[#ebc44b]/80">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

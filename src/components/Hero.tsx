import React from 'react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#100e0b] pt-24 pb-16"
    >
      {/* Background Image with Scrims */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxWftOxTp0ByVYRVm5r4PR2u_4WtFU3I1xxw6sL3Zz2Cg6dBOPc_c3fnp1mg0Nq6shjbGmATVThqs0AemxlhYJkqzGEyCVaz-PDOjl1X1DMlNg3Z2C3fms2eHNKuy9WbC78VefsRuWigD5MW_3dVXlKI8mMB0Y3ri9179YZQtJ3Ld8cSeq2F2ZIfP_SifjjA5LCQHEzAg4ENBU3FCvKqTDfOK_OmfbGlMlwqhHhxC2P9WY0SXCtUjRtg')`
        }}
      />
      {/* Dark gradient scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b] via-[#100e0b]/75 to-[#100e0b]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(16,14,11,0.88)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center text-center">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2c2a26]/85 border border-[#373431] backdrop-blur-md shadow-md mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#d1c5b8] font-medium">
            Open today until 9:00 PM • London, United Kingdom
          </span>
        </div>

        {/* Overline Subtitle */}
        <span className="text-[12px] tracking-[0.3em] uppercase text-[#c5a880] mb-3 font-semibold">
          LONDON • EST. 2024
        </span>

        {/* Primary Headline */}
        <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[60px] lg:text-[64px] text-[#e7e1dc] max-w-4xl tracking-tight leading-[1.12] mb-5">
          Crafted for the moments that matter.
        </h1>

        {/* Refined Body Description */}
        <p className="text-[16px] sm:text-[18px] text-[#d8c2b8] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          In the heart of London, NOIR is an intimate sanctuary dedicated to single-origin roasts, slow artisanal extraction, and Parisian patisserie excellence.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto px-9 py-3.5 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#e2c399] shadow-[0_0_24px_rgba(197,168,128,0.25)] transition-all duration-300 text-center"
          >
            View Menu
          </a>
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-9 py-3.5 bg-[#2c2a26]/80 border border-[#373431] backdrop-blur-md text-[#e7e1dc] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#373431] hover:text-[#c5a880] transition-all duration-300 text-center shadow-sm cursor-pointer"
          >
            Reserve a Table
          </button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#menu"
          className="mt-14 flex flex-col items-center gap-2 text-[#998f83] hover:text-[#c5a880] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll to discover</span>
          <div className="w-[1px] h-9 bg-gradient-to-b from-[#c5a880] to-transparent animate-pulse group-hover:h-12 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
};

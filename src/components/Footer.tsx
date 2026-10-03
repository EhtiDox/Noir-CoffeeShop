import React from 'react';
import { Camera, Globe, Music2, MapPin } from 'lucide-react';

interface FooterProps {
  onReserveClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReserveClick }) => {
  return (
    <footer className="w-full bg-[#100e0b] border-t border-[#211f1c] py-16">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-serif text-[28px] text-[#e7e1dc] tracking-[0.18em] uppercase font-semibold">
              NOIR
            </span>
            <p className="text-[15px] text-[#c5a880] italic mt-1 font-light">
              More than coffee. It’s an experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#211f1c] border border-[#2c2a26] flex items-center justify-center text-[#d1c5b8] hover:text-[#c5a880] hover:bg-[#2c2a26] transition-all duration-200"
            >
              <Camera className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Worldwide Web"
              className="w-10 h-10 rounded-full bg-[#211f1c] border border-[#2c2a26] flex items-center justify-center text-[#d1c5b8] hover:text-[#c5a880] hover:bg-[#2c2a26] transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Acoustic Playlist"
              className="w-10 h-10 rounded-full bg-[#211f1c] border border-[#2c2a26] flex items-center justify-center text-[#d1c5b8] hover:text-[#c5a880] hover:bg-[#2c2a26] transition-all duration-200"
            >
              <Music2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[#998f83] pt-6 border-t border-[#1d1b18] text-[13px]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c5a880]" />
            <span className="text-[#d1c5b8] tracking-wide font-light">London, United Kingdom</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#menu"
              className="text-[11px] uppercase tracking-wider text-[#d1c5b8] hover:text-[#c5a880] transition-colors"
            >
              Bespoke Menu
            </a>
            <button
              onClick={onReserveClick}
              className="text-[11px] uppercase tracking-wider text-[#d1c5b8] hover:text-[#c5a880] transition-colors cursor-pointer"
            >
              Private Reservations
            </button>
            <a
              href="#story"
              className="text-[11px] uppercase tracking-wider text-[#d1c5b8] hover:text-[#c5a880] transition-colors"
            >
              Our Story
            </a>
          </div>

          <div className="text-[12px] text-[#998f83]/80">
            © 2026 NOIR Coffee Shop. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

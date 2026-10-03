import React, { useState } from 'react';
import { X, Shield, Award, Calendar, Coffee, Sparkles } from 'lucide-react';

interface PatronModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveClick: () => void;
}

export const PatronModal: React.FC<PatronModalProps> = ({
  isOpen,
  onClose,
  onReserveClick
}) => {
  const [memberCode, setMemberCode] = useState('NOIR-PATRON-MAYFAIR');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#100e0b]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#211f1c] border border-[#2c2a26] max-w-md w-full rounded-lg p-6 sm:p-8 flex flex-col gap-6 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#998f83] hover:text-[#e7e1dc] p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#100e0b] flex items-center justify-center shadow-lg mb-1">
            <Shield className="w-7 h-7" />
          </div>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a880] font-semibold">
            The NOIR Society
          </span>
          <h3 className="font-serif text-[24px] text-[#e7e1dc]">
            Patron Access
          </h3>
          <p className="text-[13px] text-[#d1c5b8] font-light">
            Exclusive privileges for frequent guests, collectors of rare microlots, and table patrons.
          </p>
        </div>

        {/* Member Privileges Card */}
        <div className="p-4 bg-[#100e0b] border border-[#2c2a26] rounded-lg flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[13px] text-[#e7e1dc] font-semibold">
                Priority Alcove Reservation
              </span>
              <span className="text-[11px] text-[#998f83]">
                Guaranteed table seating with priority reservation access.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#211f1c] pt-2.5">
            <Coffee className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[13px] text-[#e7e1dc] font-semibold">
                Cellar Tasting Allocations
              </span>
              <span className="text-[11px] text-[#998f83]">
                First access to Panama Geisha and Ethiopian anaerobic experimental lots.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#211f1c] pt-2.5">
            <Sparkles className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[13px] text-[#e7e1dc] font-semibold">
                Direct Master Roaster Consultations
              </span>
              <span className="text-[11px] text-[#998f83]">
                Curated cupping sessions with Julian Vance every Thursday afternoon.
              </span>
            </div>
          </div>
        </div>

        {/* Member Card Simulation */}
        <div className="p-4 bg-gradient-to-br from-[#2c2a26] to-[#151310] border border-[#3d372e] rounded-lg flex flex-col gap-3 shadow-md">
          <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-[#c5a880]">
            <span>NOIR PATRON PASS</span>
            <span>TIER: FOUNDING 2024</span>
          </div>
          <div className="font-serif text-[18px] text-[#e7e1dc] tracking-wider">
            ALISTAIR STERLING
          </div>
          <div className="flex justify-between items-center text-[11px] text-[#998f83]">
            <span>ID: 884-MAYFAIR</span>
            <span className="text-[#c5a880] font-mono">STATUS: ACTIVE</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <button
            onClick={() => {
              onClose();
              onReserveClick();
            }}
            className="w-full py-3 bg-[#c5a880] text-[#100e0b] rounded text-[12px] font-semibold uppercase tracking-wider hover:bg-[#e2c399] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" /> Book Patron Table
          </button>
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-transparent text-[#998f83] hover:text-[#e7e1dc] rounded text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

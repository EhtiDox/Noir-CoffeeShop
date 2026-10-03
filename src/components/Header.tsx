import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenPatronModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onOpenPatronModal,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Reservation', href: '#reservation', id: 'reservation' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#100e0b]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3'
          : 'bg-[#100e0b]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <img
            alt="NOIR London Brand Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VGhvouqD3AckyPSBmv-Wy2-XeMlndMV_4pFRFwTIuj_Wn-KHrvOeV3FL_4i3alxzcI57KqrfehN80p-zqR9P9oEOW9Tle8pKdualMr_D8CChDc6JjMJnwb-7ikdJEeK6lq0cPR5S9CCTaLUCkTIK2Ir4Sk8Y5OkfD4pR_jVP_hnpg6g8MJPCtlSofL3yC6S5WEat_WDUxqVJ0szD4zRcpp2InCVPHjqa2fPrCRNTJvUhAccqP6juGoAIxw"
            onError={(e) => {
              // Graceful fallback if external URL fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-[22px] tracking-[0.25em] text-[#e7e1dc] uppercase leading-none font-semibold">
              NOIR
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase mt-1 font-medium">
              LONDON • EST. 2024
            </span>
          </div>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-[12px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive
                    ? 'text-[#c5a880] font-semibold'
                    : 'text-[#d1c5b8] hover:text-[#e7e1dc]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Primary Actions Zone */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#c5a880] text-[#100e0b] text-[11px] font-semibold tracking-[0.16em] uppercase rounded hover:bg-[#e2c399] transition-all duration-300 shadow-[0_0_16px_rgba(197,168,128,0.2)] cursor-pointer"
          >
            Reserve a Table
          </button>

          {/* Cart Icon Button with dynamic badge */}
          <button
            onClick={onOpenCart}
            aria-label="Open Tasting Order Cart"
            className="relative p-2.5 rounded bg-[#2c2a26] text-[#e7e1dc] hover:bg-[#373431] hover:text-[#c5a880] transition-colors duration-200 flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#c5a880] text-[#100e0b] text-[10px] font-bold flex items-center justify-center leading-none shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* VIP Patron Profile Button */}
          <button
            onClick={onOpenPatronModal}
            aria-label="Patron Sanctuary Access"
            title="Patron Concierge"
            className="w-8 h-8 rounded-full bg-[#c5a880] hover:bg-[#e2c399] flex items-center justify-center text-[#100e0b] transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 lg:hidden rounded bg-[#211f1c] text-[#e7e1dc] hover:text-[#c5a880] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151310] border-t border-[#2c2a26] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[13px] uppercase tracking-[0.16em] text-[#d1c5b8] hover:text-[#c5a880] py-1 border-b border-[#211f1c]"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="mt-2 w-full py-2.5 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#e2c399] transition-colors text-center"
          >
            Reserve a Table
          </button>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 bg-[#100e0b]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Details and Hours (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
                Location &amp; Times
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] text-[#e7e1dc] mb-3 tracking-tight">
                VISIT THE SANCTUARY
              </h2>
              <p className="text-[16px] text-[#d1c5b8] font-light leading-relaxed">
                An intimate sanctuary dedicated to single-origin roasts and slow artisanal extraction in London.
              </p>
            </div>

            {/* Location & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
                <MapPin className="w-5 h-5 text-[#c5a880] mb-2" />
                <span className="text-[10px] text-[#c5a880] uppercase tracking-wider block font-semibold">
                  Location
                </span>
                <p className="text-[15px] text-[#e7e1dc] mt-2 font-medium">
                  London, United Kingdom
                </p>
                <span className="text-[12px] text-[#998f83] font-light block mt-1">
                  Central London Sanctuary
                </span>
              </div>

              <div className="p-5 bg-[#211f1c] border border-[#2c2a26] rounded-lg shadow-sm">
                <Clock className="w-5 h-5 text-[#c5a880] mb-2" />
                <span className="text-[10px] text-[#c5a880] uppercase tracking-wider block font-semibold">
                  Opening Hours
                </span>
                <div className="text-[14px] text-[#e7e1dc] mt-2 font-light leading-relaxed">
                  <div className="flex justify-between">
                    <span className="text-[#998f83]">Mon – Fri:</span>
                    <span>7:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[#998f83]">Sat – Sun:</span>
                    <span>8:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div className="p-4 bg-[#151310] border border-[#211f1c] rounded-lg text-[13px] text-[#998f83] font-light">
              Table reservations and walk-ins welcome during open hours. Experience slow handcrafted extraction and Parisian pastry perfection.
            </div>
          </div>

          {/* Right: Location Interactive Map Container (6 cols) */}
          <div className="lg:col-span-6 min-h-[340px] rounded-lg overflow-hidden relative shadow-2xl border border-[#2c2a26]">
            <div
              className="w-full h-full bg-cover bg-center min-h-[340px] relative"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl7l62mY13QCat4HNXyBAcOdTqrJb346WLK8HH6xyOP1TfUmBokYLeLW10L8l1Y8TFHh_iCnRtDF3V0_VEiBenkR6kd-SZ8_YFxjN0hT2zJLE2qlwdf6aR65NFR9uyh4-nqstSOQGfR8s94AKFxPGKh2JTGA-OPKUZjrRIZvRXx1C2XLpQ4ZrtcJ3x-MwpaxvAxgzOrN22VAxjFnf85DmShZ7O6wW87oufwVqpQQAH2_ps0nDBQYFJdg')`
              }}
            >
              {/* Atmospheric Dark Scrim for Map */}
              <div className="w-full h-full bg-[#100e0b]/55 backdrop-blur-[2px] p-6 flex flex-col justify-end">
                <div className="bg-[#100e0b]/92 border border-[#2c2a26] backdrop-blur-md p-5 rounded-lg max-w-sm shadow-2xl">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880] block mb-1 font-semibold">
                    NOIR Sanctuary
                  </span>
                  <span className="font-serif text-[18px] text-[#e7e1dc] block font-medium">
                    London, United Kingdom
                  </span>
                  <p className="text-[12px] text-[#d1c5b8] mt-1.5 font-light leading-relaxed">
                    Designed as a serene refuge dedicated to the art of coffee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

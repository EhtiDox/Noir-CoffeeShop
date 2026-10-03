import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      quote:
        'The most atmospheric coffee sanctuary in London. The cold drip in crystal tumblers is quite simply peerless.',
      author: 'The Telegraph Luxury',
      accolade: 'Editorial Food & Drink Award 2025'
    },
    {
      quote:
        'NOIR treats slow extraction like fine Swiss watchmaking. An indispensable sensory revelation in Mayfair.',
      author: 'British GQ',
      accolade: 'Best Nocturnal Café Guide'
    },
    {
      quote:
        'Intimate, moody, and uncompromisingly delicious. It is the only place in Central London where I can think clearly.',
      author: 'Elena Rostova',
      accolade: 'Architect & Daily Patron'
    }
  ];

  return (
    <section className="w-full py-20 bg-[#151310] border-t border-[#211f1c]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
            Critical Acclaim
          </span>
          <h2 className="font-serif text-[34px] sm:text-[40px] text-[#e7e1dc] tracking-tight">
            Words from the Discerning
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="p-7 bg-[#211f1c] border border-[#2c2a26] rounded-lg flex flex-col justify-between shadow-md hover:border-[#373431] transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-[#ebc44b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#ebc44b]" />
                  ))}
                </div>
                <p className="text-[15px] text-[#e7e1dc] italic font-light leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#2c2a26]/60">
                <span className="text-[12px] uppercase tracking-wider text-[#e7e1dc] font-semibold block">
                  {rev.author}
                </span>
                <span className="text-[11px] text-[#998f83] font-light">
                  {rev.accolade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

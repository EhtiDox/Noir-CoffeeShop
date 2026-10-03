import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface FloatingCartPillProps {
  items: CartItem[];
  onOpenCart: () => void;
}

export const FloatingCartPill: React.FC<FloatingCartPillProps> = ({
  items,
  onOpenCart
}) => {
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (count === 0) return null;

  return (
    <div
      onClick={onOpenCart}
      aria-label="Open Tasting Order"
      className="fixed bottom-6 right-6 z-40 cursor-pointer group animate-in slide-in-from-bottom-3 duration-300"
    >
      <div className="flex items-center gap-3 bg-[#100e0b]/92 border border-[#2c2a26] backdrop-blur-md px-4 py-2.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:border-[#c5a880]/50 transition-all duration-200">
        <div className="relative flex items-center justify-center">
          <ShoppingBag className="w-4 h-4 text-[#c5a880]" />
          <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#c5a880] text-[#100e0b] text-[9px] font-bold flex items-center justify-center leading-none">
            {count}
          </span>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-[#e7e1dc] font-semibold">
          Order
        </span>
        <span className="text-[#c5a880] font-serif text-[15px] font-semibold pl-1 border-l border-[#2c2a26]">
          £{subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

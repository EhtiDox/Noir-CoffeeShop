import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';

interface QuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, options: { milk: string; temperature: string; qty: number; notes: string }) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  if (!item) return null;

  const [milk, setMilk] = useState<string>('Standard Organic Whole');
  const [temperature, setTemperature] = useState<string>('Default');
  const [qty, setQty] = useState<number>(1);
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isDrink = item.category === 'hot' || item.category === 'cold';

  const milkOptions = [
    { label: 'Somerset Organic Whole Milk', value: 'Somerset Organic Whole' },
    { label: 'Minor Figures Organic Oat (+£0.50)', value: 'Minor Figures Oat (+£0.50)' },
    { label: 'Sprouted Almond Milk (+£0.50)', value: 'Sprouted Almond (+£0.50)' },
    { label: 'None (Black / Pure Extraction)', value: 'Black' }
  ];

  const tempOptions = [
    { label: 'Standard Master Recipe', value: 'Standard Master Recipe' },
    { label: 'Extra Warm (68°C Silky Texture)', value: 'Extra Warm (68°C)' },
    { label: 'Over Hand-Cut Crystal Ice', value: 'Chilled Over Crystal Ice' },
    { label: 'Subtle Raw Demerara Drop', value: 'Subtle Cane Drop' }
  ];

  const handleAdd = () => {
    onAddToCart(item, {
      milk: isDrink ? milk : 'Standard',
      temperature: isDrink ? temperature : 'Fresh Baked',
      qty,
      notes: specialNotes
    });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#100e0b]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#211f1c] border border-[#2c2a26] max-w-xl w-full rounded-lg shadow-2xl overflow-hidden relative flex flex-col my-8"
      >
        {/* Prominent High-Contrast Close / Cross Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          title="Close details (ESC)"
          className="absolute top-4 right-4 z-30 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#100e0b]/95 border border-[#c5a880]/50 text-[#e7e1dc] hover:bg-[#c5a880] hover:text-[#100e0b] hover:border-[#c5a880] transition-all shadow-lg cursor-pointer"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">Close</span>
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 w-full bg-[#100e0b] overflow-hidden">
          <img
            alt={item.name}
            src={item.image}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211f1c] via-transparent to-black/30" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-semibold block mb-1">
                {item.tag} • {item.category.toUpperCase()} SELECTION
              </span>
              <h3 className="font-serif text-[26px] text-[#e7e1dc] leading-tight">
                {item.name}
              </h3>
            </div>
            <span className="font-serif text-[24px] text-[#c5a880] font-semibold whitespace-nowrap">
              £{item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-[14px] text-[#d1c5b8] font-light leading-relaxed">
            {item.description}
          </p>

          {/* Provenance and Tasting Notes */}
          {item.notes && item.notes.length > 0 && (
            <div className="p-3.5 bg-[#1d1b18] border border-[#2c2a26] rounded flex flex-col gap-1.5 text-[12px]">
              <div className="flex items-center gap-1.5 text-[#c5a880] font-semibold uppercase tracking-wider text-[10px]">
                <Sparkles className="w-3.5 h-3.5" /> Tasting Notes &amp; Provenance
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {item.notes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#2c2a26] text-[#e7e1dc] text-[11px]"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Drink Customization Options */}
          {isDrink && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#2c2a26]/60">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-wider text-[#998f83] font-medium">
                  Milk Option
                </label>
                <select
                  value={milk}
                  onChange={(e) => setMilk(e.target.value)}
                  className="bg-[#100e0b] border border-[#2c2a26] px-3 py-2 rounded text-[#e7e1dc] text-[13px] focus:outline-none focus:border-[#c5a880] cursor-pointer"
                >
                  {milkOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#100e0b] text-[#e7e1dc]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-wider text-[#998f83] font-medium">
                  Temperature &amp; Sweetness
                </label>
                <select
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="bg-[#100e0b] border border-[#2c2a26] px-3 py-2 rounded text-[#e7e1dc] text-[13px] focus:outline-none focus:border-[#c5a880] cursor-pointer"
                >
                  {tempOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#100e0b] text-[#e7e1dc]">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Quantity & Actions Bar */}
          <div className="pt-4 border-t border-[#2c2a26]/60 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
            {/* Quantity Stepper */}
            <div className="flex items-center bg-[#100e0b] border border-[#2c2a26] rounded p-1">
              <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 flex items-center justify-center text-[#e7e1dc] hover:text-[#c5a880] transition-colors cursor-pointer"
                title="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-[14px] px-3 font-semibold text-[#e7e1dc] min-w-[2rem] text-center">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 flex items-center justify-center text-[#e7e1dc] hover:text-[#c5a880] transition-colors cursor-pointer"
                title="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Order Button */}
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 py-3 px-6 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold uppercase tracking-wider rounded hover:bg-[#e2c399] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Order (£{(item.price * qty).toFixed(2)})
            </button>

            {/* Secondary Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 bg-[#1d1b18] border border-[#2c2a26] text-[#d1c5b8] hover:text-[#e7e1dc] hover:border-[#373431] text-[12px] font-medium uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#100e0b]/80 backdrop-blur-sm transition-opacity duration-300"
        />
      )}

      {/* Drawer Panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#151310] border-l border-[#211f1c] shadow-[-16px_0_40px_rgba(0,0,0,0.85)] flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="h-20 px-6 flex items-center justify-between bg-[#100e0b] border-b border-[#211f1c]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#c5a880]" />
            <span className="font-serif text-[20px] text-[#e7e1dc] font-semibold">
              Tasting Order
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Tasting Order Drawer"
            className="p-2 text-[#998f83] hover:text-[#e7e1dc] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#998f83]">
              <div className="w-16 h-16 rounded-full bg-[#1d1b18] border border-[#2c2a26] flex items-center justify-center mb-4 text-[#c5a880]">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="font-serif text-[18px] text-[#e7e1dc]">Your cup is currently empty.</p>
              <p className="text-[13px] text-[#998f83] mt-1.5 max-w-xs font-light">
                Explore our single-origin menu to curate your tasting ritual.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartItemId}
                className="p-4 bg-[#211f1c] border border-[#2c2a26] rounded-lg flex flex-col gap-3 shadow-sm hover:border-[#373431] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-[17px] text-[#e7e1dc] font-medium">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-[#c5a880] uppercase tracking-wider font-light mt-0.5">
                      {item.subtitle || `${item.milk || 'Standard Recipe'}`}
                    </span>
                    {item.temperature && (
                      <span className="text-[10px] text-[#998f83] mt-0.5">
                        {item.temperature}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-[17px] text-[#c5a880] font-semibold">
                    £{(item.price * item.qty).toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2c2a26]/60">
                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 bg-[#100e0b] border border-[#2c2a26] rounded px-1.5 py-1">
                    <button
                      onClick={() => onUpdateQty(item.cartItemId, -1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-[#d1c5b8] hover:text-[#c5a880] transition-colors cursor-pointer"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-[12px] font-semibold text-[#e7e1dc] px-2 min-w-[1.2rem] text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.cartItemId, 1)}
                      className="w-5 h-5 rounded flex items-center justify-center text-[#d1c5b8] hover:text-[#c5a880] transition-colors cursor-pointer"
                      title="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.cartItemId)}
                    className="text-[#998f83] hover:text-rose-400 p-1 transition-colors cursor-pointer"
                    title="Remove item from order"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Subtotal & Checkout */}
        {items.length > 0 && (
          <div className="p-6 bg-[#100e0b] border-t border-[#211f1c] flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase tracking-widest text-[#998f83] font-semibold">
                Subtotal
              </span>
              <span className="font-serif text-[24px] text-[#c5a880] font-semibold">
                £{subtotal.toFixed(2)}
              </span>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3.5 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#e2c399] shadow-[0_0_20px_rgba(197,168,128,0.25)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

import React, { useState } from 'react';
import { Coffee, CheckCircle2, Clock, MapPin, X } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  const [deliveryType, setDeliveryType] = useState<'counter' | 'table'>('counter');
  const [tableNumber, setTableNumber] = useState<string>('Table 4 (Alcove)');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const orderRef = '#NR-8842';

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
  };

  const handleFinalClose = () => {
    onOrderCompleted();
    onClose();
    setOrderPlaced(false);
  };

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

        {!orderPlaced ? (
          <>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#100e0b] flex items-center justify-center shadow-lg mb-1">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-[24px] text-[#e7e1dc]">
                Complete Tasting Order
              </h3>
              <p className="text-[13px] text-[#d1c5b8] font-light">
                Confirm your order for artisanal extraction at our Mayfair bar.
              </p>
            </div>

            {/* Delivery / Service Choice */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-wider text-[#998f83] font-semibold">
                Service Method
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('counter')}
                  className={`p-3 rounded text-[12px] uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                    deliveryType === 'counter'
                      ? 'bg-[#c5a880] text-[#100e0b] border-[#c5a880]'
                      : 'bg-[#1d1b18] text-[#d1c5b8] border-[#2c2a26] hover:border-[#373431]'
                  }`}
                >
                  Counter Pickup
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('table')}
                  className={`p-3 rounded text-[12px] uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                    deliveryType === 'table'
                      ? 'bg-[#c5a880] text-[#100e0b] border-[#c5a880]'
                      : 'bg-[#1d1b18] text-[#d1c5b8] border-[#2c2a26] hover:border-[#373431]'
                  }`}
                >
                  Table Delivery
                </button>
              </div>

              {deliveryType === 'table' && (
                <div className="mt-1">
                  <label className="text-[11px] text-[#998f83] uppercase tracking-wider block mb-1">
                    Your Table Designation
                  </label>
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="e.g. Table 4, Corner Alcove"
                    className="w-full bg-[#100e0b] border border-[#2c2a26] px-3.5 py-2 text-[#e7e1dc] text-[13px] rounded focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              )}
            </div>

            {/* Items Overview */}
            <div className="p-3.5 bg-[#100e0b] border border-[#2c2a26] rounded-lg max-h-40 overflow-y-auto flex flex-col gap-2">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex justify-between text-[13px]">
                  <span className="text-[#e7e1dc]">
                    {item.qty}× {item.name}
                  </span>
                  <span className="text-[#c5a880] font-medium">
                    £{(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#211f1c] pt-2 mt-1 flex justify-between font-semibold text-[14px]">
                <span className="text-[#998f83] uppercase text-[11px] tracking-wider">
                  Total Due
                </span>
                <span className="text-[#c5a880]">£{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleConfirmOrder}
              className="w-full py-3.5 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#e2c399] transition-all shadow-md cursor-pointer"
            >
              Place Tasting Order • £{total.toFixed(2)}
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center text-center gap-4 py-2 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#100e0b] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-[24px] text-[#e7e1dc]">
              Order Sent to Barista
            </h3>

            <p className="text-[14px] text-[#d1c5b8] font-light leading-relaxed">
              Your tasting order has been placed for{' '}
              {deliveryType === 'counter' ? 'counter pickup' : `service to ${tableNumber}`}{' '}
              at our Mayfair bar.
            </p>

            {/* Order Progress Visual */}
            <div className="w-full bg-[#100e0b] border border-[#2c2a26] p-4 rounded-lg flex flex-col gap-3 my-1">
              <div className="flex items-center justify-between text-[12px] text-[#d1c5b8]">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Clock className="w-3.5 h-3.5" /> Est. Preparation:
                </span>
                <span className="text-[#e7e1dc] font-semibold">6–8 minutes</span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#998f83] border-t border-[#211f1c] pt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#c5a880]" /> Mayfair Barista Station
                </span>
                <span className="text-emerald-400">● Live Extraction</span>
              </div>
            </div>

            <div className="w-full p-3 bg-[#100e0b] border border-[#2c2a26] rounded font-mono text-[12px] text-[#c5a880] tracking-widest text-center shadow-inner">
              ORDER REFERENCE: {orderRef}
            </div>

            <button
              onClick={handleFinalClose}
              className="w-full py-3 bg-[#c5a880] text-[#100e0b] rounded text-[12px] font-semibold uppercase tracking-widest hover:bg-[#e2c399] transition-all shadow-sm cursor-pointer mt-1"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

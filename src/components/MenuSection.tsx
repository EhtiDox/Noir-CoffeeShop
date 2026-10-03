import React, { useState } from 'react';
import { Eye, Plus, Check } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  onQuickView: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onQuickView,
  onAddToCartDirect
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [addedIds, setAddedIds] = useState<{ [id: string]: boolean }>({});

  const categories: { label: string; value: MenuCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Hot Coffee', value: 'hot' },
    { label: 'Cold Coffee', value: 'cold' },
    { label: 'Pastries', value: 'pastries' },
    { label: 'Desserts', value: 'desserts' }
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleAddClick = (item: MenuItem) => {
    onAddToCartDirect(item);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="w-full py-20 bg-[#151310]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
              Curation &amp; Provenance
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#e7e1dc] tracking-tight">
              THE NOIR MENU
            </h2>
            <p className="text-[15px] text-[#d1c5b8] mt-1 font-light">
              Simple ingredients. Carefully crafted with surgical discipline.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#1d1b18] p-1.5 rounded-lg border border-[#2c2a26]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a880] text-[#100e0b] shadow-sm'
                      : 'text-[#d1c5b8] hover:text-[#e7e1dc] hover:bg-[#262420]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = !!addedIds[item.id];

            return (
              <div
                key={item.id}
                className="group bg-[#211f1c] border border-[#2c2a26] rounded-lg overflow-hidden flex flex-col justify-between hover:bg-[#262320] hover:border-[#3d372e] transition-all duration-300 shadow-lg"
              >
                {/* Photo on Top for All Items */}
                <div className="h-48 w-full overflow-hidden relative bg-[#151310]">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to elegant gradient if image load fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211f1c] via-transparent to-black/20" />
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#100e0b]/90 border border-[#2c2a26] backdrop-blur-sm text-[10px] text-[#c5a880] tracking-wider uppercase font-semibold">
                    {item.tag}
                  </span>
                  <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-[#100e0b]/90 border border-[#2c2a26] backdrop-blur-sm font-serif text-[15px] text-[#c5a880] font-semibold">
                    £{item.price.toFixed(2)}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-[20px] text-[#e7e1dc] group-hover:text-[#c5a880] transition-colors mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-[13px] text-[#d1c5b8] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2c2a26]/60 flex items-center justify-between">
                    <button
                      onClick={() => onQuickView(item)}
                      className="text-[11px] uppercase tracking-wider text-[#d8c2b8] hover:text-[#c5a880] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> Details
                    </button>
                    <button
                      onClick={() => handleAddClick(item)}
                      className={`px-4 py-2 rounded text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c5a880] text-[#100e0b] hover:bg-[#e2c399]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

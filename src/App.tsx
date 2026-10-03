/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EditorialMarquee } from './components/EditorialMarquee';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { StorySection } from './components/StorySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { PatronModal } from './components/PatronModal';
import { FloatingCartPill } from './components/FloatingCartPill';

import { MenuItem, CartItem } from './types';
import { INITIAL_CART_ITEMS } from './data/menuData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isPatronModalOpen, setIsPatronModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'menu', 'story', 'experience', 'reservation', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick Add Directly from Card
  const handleAddToCartDirect = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (ci) => ci.id === item.id && ci.milk === 'Standard Recipe'
      );
      if (existing) {
        return prev.map((ci) =>
          ci.cartItemId === existing.cartItemId
            ? { ...ci, qty: ci.qty + 1 }
            : ci
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          cartItemId: `cart-${item.id}-${Date.now()}`,
          name: item.name,
          subtitle: `${item.tag} • London Batch`,
          price: item.price,
          qty: 1,
          milk: 'Standard Recipe',
          temperature: 'Master Brew',
          image: item.image
        }
      ];
    });
  };

  // Add from Customization Quick View Modal
  const handleAddToCartCustom = (
    item: MenuItem,
    options: { milk: string; temperature: string; qty: number; notes: string }
  ) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (ci) =>
          ci.id === item.id &&
          ci.milk === options.milk &&
          ci.temperature === options.temperature
      );

      if (existing) {
        return prev.map((ci) =>
          ci.cartItemId === existing.cartItemId
            ? { ...ci, qty: ci.qty + options.qty }
            : ci
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          cartItemId: `cart-${item.id}-${Date.now()}`,
          name: item.name,
          subtitle: `${options.milk} • ${options.temperature}`,
          price: item.price,
          qty: options.qty,
          milk: options.milk,
          temperature: options.temperature,
          notes: options.notes,
          image: item.image
        }
      ];
    });
  };

  // Quantity updates
  const handleUpdateQty = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Remove Item
  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleOpenReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#100e0b] text-[#e7e1dc] flex flex-col font-sans selection:bg-[#c5a880] selection:text-[#100e0b]">
      {/* Fixed Luxury Navigation Bar */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={handleOpenReservation}
        onOpenPatronModal={() => setIsPatronModalOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero onReserveClick={handleOpenReservation} />

        {/* 2. Editorial Ticker Marquee */}
        <EditorialMarquee />

        {/* 3. The Noir Menu Section */}
        <MenuSection
          onQuickView={(item) => setQuickViewItem(item)}
          onAddToCartDirect={handleAddToCartDirect}
        />

        {/* 4. The Noir Experience Section */}
        <ExperienceSection />

        {/* 5. Our Story Section */}
        <StorySection />

        {/* 6. Reservation Section */}
        <ReservationSection />

        {/* 7. Critical Acclaim / Reviews */}
        <ReviewsSection />

        {/* 8. Visit the Sanctuary / Contact & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onReserveClick={handleOpenReservation} />

      {/* Slide-out Tasting Order Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Quick View Item Customization Modal */}
      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCartCustom}
      />

      {/* Barista Checkout Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={() => setCartItems([])}
      />

      {/* Patron Society Concierge Modal */}
      <PatronModal
        isOpen={isPatronModalOpen}
        onClose={() => setIsPatronModalOpen(false)}
        onReserveClick={handleOpenReservation}
      />

      {/* Floating Cart Order Pill (Bottom-Right) */}
      <FloatingCartPill
        items={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}

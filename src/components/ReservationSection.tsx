import React, { useState } from 'react';
import { Check, Calendar, Clock, Users, MapPin, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: todayStr,
    time: '10:00',
    guests: '2',
    area: 'window',
    notes: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [confirmedReservation, setConfirmedReservation] = useState<ReservationData | null>(null);

  const timeSlots = [
    { value: '08:30', label: '08:30 AM (Breakfast & Slow Brew)' },
    { value: '10:00', label: '10:00 AM (Morning Tasting)' },
    { value: '11:45', label: '11:45 AM (Midday Refinement)' },
    { value: '14:00', label: '02:00 PM (Afternoon Parlour)' },
    { value: '16:30', label: '04:30 PM (Nocturne Espresso)' },
    { value: '18:00', label: '06:00 PM (Evening Cold Drip)' }
  ];

  const guestOptions = [
    { value: '1', label: '1 Guest (Single Alcove)' },
    { value: '2', label: '2 Guests (Intimate Table)' },
    { value: '3', label: '3 Guests (Leather Booth)' },
    { value: '4', label: '4 Guests (Center Lounge)' },
    { value: '5', label: '5 Guests (Mayfair Suite)' },
    { value: '6', label: '6 Guests (Private Salon Table)' }
  ];

  const seatingAreas = [
    { value: 'window', label: 'Window Table' },
    { value: 'counter', label: 'Barista Extraction Counter' },
    { value: 'library', label: 'The Acoustic Library Booth' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a time slot.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomRef = 'NOIR-RES-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedReservation({
      name: formData.name,
      phone: formData.phone || 'Provided',
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      area: formData.area,
      notes: formData.notes,
      referenceNumber: randomRef
    });
  };

  const handleReset = () => {
    setConfirmedReservation(null);
    setFormData({
      name: '',
      phone: '',
      date: todayStr,
      time: '10:00',
      guests: '2',
      area: 'window',
      notes: ''
    });
  };

  return (
    <section id="reservation" className="w-full py-20 bg-[#100e0b]">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#c5a880] block mb-2 font-semibold">
              Private Table Bookings
            </span>
            <h2 className="font-serif text-[34px] sm:text-[42px] text-[#e7e1dc] tracking-tight">
              RESERVE YOUR TABLE
            </h2>
            <p className="text-[15px] text-[#d1c5b8] mt-2 font-light">
              Your table is waiting. Reserve an intimate alcove for morning meetings or slow afternoons.
            </p>
          </div>

          <div className="bg-[#211f1c] border border-[#2c2a26] p-6 sm:p-10 rounded-lg shadow-2xl relative overflow-hidden">
            {!confirmedReservation ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-name">
                      Full Name *
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder="e.g. Alistair Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px] placeholder:text-[#998f83]"
                    />
                    {errors.name && <span className="text-rose-400 text-xs mt-0.5">{errors.name}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-phone">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      placeholder="e.g. +44 7911 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px] placeholder:text-[#998f83]"
                    />
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-date">
                      Reservation Date *
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px]"
                    />
                    {errors.date && <span className="text-rose-400 text-xs mt-0.5">{errors.date}</span>}
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-time">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="res-time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px] cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value} className="bg-[#100e0b] text-[#e7e1dc]">
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-guests">
                      Number of Guests *
                    </label>
                    <select
                      id="res-guests"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px] cursor-pointer"
                    >
                      {guestOptions.map((g) => (
                        <option key={g.value} value={g.value} className="bg-[#100e0b] text-[#e7e1dc]">
                          {g.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Seating Area */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-area">
                      Seating Area
                    </label>
                    <select
                      id="res-area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] text-[14px] cursor-pointer"
                    >
                      {seatingAreas.map((area) => (
                        <option key={area.value} value={area.value} className="bg-[#100e0b] text-[#e7e1dc]">
                          {area.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-[#d1c5b8] font-medium" htmlFor="res-notes">
                    Special Requests / Dietary Notes
                  </label>
                  <textarea
                    id="res-notes"
                    rows={3}
                    placeholder="Allergies, high-priority business confidentiality, oat milk preference..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#100e0b] border border-[#2c2a26] px-4 py-2.5 text-[#e7e1dc] rounded focus:outline-none focus:border-[#c5a880] placeholder:text-[#998f83] text-[14px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-9 py-3.5 bg-[#c5a880] text-[#100e0b] text-[12px] font-semibold tracking-widest uppercase rounded hover:bg-[#e2c399] shadow-[0_0_20px_rgba(197,168,128,0.25)] transition-all duration-300 cursor-pointer"
                  >
                    Confirm Table Reservation
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-8 gap-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#c5a880] text-[#100e0b] flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-[28px] text-[#e7e1dc]">
                  Reservation Confirmed
                </h3>
                <p className="text-[15px] text-[#d1c5b8] max-w-md font-light leading-relaxed">
                  Your table reservation has been recorded. We look forward to welcoming you to the sanctuary.
                </p>

                {/* Summary Box */}
                <div className="p-5 bg-[#100e0b] border border-[#2c2a26] rounded-lg text-left w-full max-w-md text-[13px] shadow-sm flex flex-col gap-2.5">
                  <div className="flex justify-between pb-2 border-b border-[#211f1c]">
                    <span className="text-[#998f83] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" /> Reference:
                    </span>
                    <span className="text-[#c5a880] font-mono font-semibold">
                      #{confirmedReservation.referenceNumber}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#211f1c]">
                    <span className="text-[#998f83]">Guest:</span>
                    <span className="text-[#e7e1dc] font-medium">{confirmedReservation.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#211f1c]">
                    <span className="text-[#998f83] flex items-center gap-1">
                      <Users className="w-3 h-3" /> Party Size:
                    </span>
                    <span className="text-[#e7e1dc] font-medium">{confirmedReservation.guests} Guests</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#211f1c]">
                    <span className="text-[#998f83] flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Date &amp; Time:
                    </span>
                    <span className="text-[#e7e1dc] font-medium">
                      {confirmedReservation.date} at {confirmedReservation.time}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#998f83] flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Seating:
                    </span>
                    <span className="text-[#e7e1dc] font-medium capitalize">
                      {confirmedReservation.area} Table
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#2c2a26] text-[#e7e1dc] text-[12px] uppercase tracking-wider rounded hover:bg-[#373431] hover:text-[#c5a880] transition-colors shadow-sm cursor-pointer"
                >
                  Make Another Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

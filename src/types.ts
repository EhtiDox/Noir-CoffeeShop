export type MenuCategory = 'all' | 'hot' | 'cold' | 'pastries' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: 'hot' | 'cold' | 'pastries' | 'desserts';
  tag: string;
  price: number;
  description: string;
  image?: string;
  origin?: string;
  notes?: string[];
  featured?: boolean;
}

export interface CartItem {
  id: string;
  cartItemId: string;
  name: string;
  subtitle?: string;
  price: number;
  qty: number;
  milk?: string;
  temperature?: string;
  notes?: string;
  image?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  area: string;
  notes: string;
  referenceNumber: string;
}

export interface RoastProfile {
  id: string;
  name: string;
  year: string;
  notes: string;
  body: number;     // 0 - 100
  sweetness: number;// 0 - 100
  crema: number;    // 0 - 100
  acidity: number;  // 0 - 100
  description: string;
  elevation: string;
  process: string;
}

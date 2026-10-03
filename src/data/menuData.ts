import { MenuItem, RoastProfile } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Hot Coffees
  {
    id: 'h1',
    name: 'Espresso',
    category: 'hot',
    tag: 'Signature Origin',
    price: 2.50,
    description: 'Intense single origin double shot, hazelnut crema with dark cocoa finish.',
    image: '/src/assets/images/espresso_crema_1791024298667.jpg',
    origin: 'Guji Highlands, Ethiopia (2,100m)',
    notes: ['Dark Cocoa', 'Roasted Hazelnut', 'Bergamot Crema']
  },
  {
    id: 'h2',
    name: 'Americano',
    category: 'hot',
    tag: 'Classic',
    price: 3.00,
    description: 'Espresso diluted with soft London filtered hot water for crystalline clarity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxWftOxTp0ByVYRVm5r4PR2u_4WtFU3I1xxw6sL3Zz2Cg6dBOPc_c3fnp1mg0Nq6shjbGmATVThqs0AemxlhYJkqzGEyCVaz-PDOjl1X1DMlNg3Z2C3fms2eHNKuy9WbC78VefsRuWigD5MW_3dVXlKI8mMB0Y3ri9179YZQtJ3Ld8cSeq2F2ZIfP_SifjjA5LCQHEzAg4ENBU3FCvKqTDfOK_OmfbGlMlwqhHhxC2P9WY0SXCtUjRtg',
    origin: 'Huila Micro-Lot, Colombia',
    notes: ['Red Apple', 'Brown Sugar', 'Crisp Clean Finish']
  },
  {
    id: 'h3',
    name: 'Cappuccino',
    category: 'hot',
    tag: 'House Favourite',
    price: 3.50,
    description: 'Silky microfoam with dust of raw Ecuadorian 100% cacao.',
    image: '/src/assets/images/latte_art_cup_1791024311187.jpg',
    origin: 'Mayfair Nocturne Blend',
    notes: ['Velvety Foam', 'Cacao Dust', 'Malted Toffee']
  },
  {
    id: 'h4',
    name: 'Flat White',
    category: 'hot',
    tag: 'Barista Choice',
    price: 3.50,
    description: 'Velvety textured steamed milk poured gently over double ristretto.',
    image: '/src/assets/images/latte_art_cup_1791024311187.jpg',
    origin: 'Boquete Volcanic Lot, Panama',
    notes: ['Double Ristretto', 'Organic Whole Milk', 'Caramel Sweetness']
  },
  {
    id: 'h5',
    name: 'Café Latte',
    category: 'hot',
    tag: 'Balanced',
    price: 3.75,
    description: 'Smooth espresso blended seamlessly with steamed organic Somerset whole milk.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxWftOxTp0ByVYRVm5r4PR2u_4WtFU3I1xxw6sL3Zz2Cg6dBOPc_c3fnp1mg0Nq6shjbGmATVThqs0AemxlhYJkqzGEyCVaz-PDOjl1X1DMlNg3Z2C3fms2eHNKuy9WbC78VefsRuWigD5MW_3dVXlKI8mMB0Y3ri9179YZQtJ3Ld8cSeq2F2ZIfP_SifjjA5LCQHEzAg4ENBU3FCvKqTDfOK_OmfbGlMlwqhHhxC2P9WY0SXCtUjRtg',
    origin: 'Cerrado Reserve, Brazil',
    notes: ['Roasted Walnut', 'Creamy Milk', 'Sweet Cedar']
  },
  {
    id: 'h6',
    name: 'Mocha',
    category: 'hot',
    tag: 'Indulgent',
    price: 4.00,
    description: '70% Valrhona dark chocolate slowly melted with rich espresso and milk.',
    image: '/src/assets/images/dark_chocolate_cake_1791024258787.jpg',
    origin: 'Valrhona Guanaja & Ethiopian Mocha',
    notes: ['Bittersweet Ganache', 'Espresso Punch', 'Whipped Silk']
  },

  // Cold Coffees
  {
    id: 'c1',
    name: 'NOIR Cold Brew',
    category: 'cold',
    tag: 'Cellar Aged',
    price: 4.00,
    description: '18-hour slow cold extraction, notes of bourbon and dark wild berry.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAovcXn2SvBCXYPPcJx4WUeE3zVdZy-jEmaO9gqZLFAdp7bigcxlbmZ1ovD86LJrY00WaM72FEDsH9Vqro4q2AFyl-ip8K32wMUHXJtGfE0qTBHvLFV3R_H2hRzBdX4i6E_B1aaZFxNgogSMhdLafYEkpoGzsNkbyhogIArZ0KLmH8Kk0INvH-WV4A1dhFhnxTTkXPxTjG3g7SkpqQ_aDne0o6MIWl99r8j08_wXJUA1PqbAZCaarWkw',
    origin: 'Sidama Micro-Washing Station',
    notes: ['Kentucky Bourbon Oak', 'Wild Blueberry', 'Blackcurrant Nectar']
  },
  {
    id: 'c2',
    name: 'Iced Americano',
    category: 'cold',
    tag: 'Crisp',
    price: 3.50,
    description: 'Double shot pulled directly over hand-cut crystal clear ice cubes.',
    image: '/src/assets/images/iced_americano_glass_1791024322010.jpg',
    origin: 'Tarrazú, Costa Rica',
    notes: ['Citrus Zest', 'Crisp Minerality', 'Golden Honey']
  },
  {
    id: 'c3',
    name: 'Vanilla Iced Latte',
    category: 'cold',
    tag: 'Sweet & Subtle',
    price: 4.50,
    description: 'Madagascar bourbon vanilla bean syrup, espresso, and silky cold foam layer.',
    image: '/src/assets/images/vanilla_iced_latte_1791024333050.jpg',
    origin: 'Madagascan Pod Infusion & Antigua Espresso',
    notes: ['Bourbon Vanilla', 'Velvety Cold Foam', 'Butterscotch']
  },

  // Pastries
  {
    id: 'p1',
    name: 'Butter Croissant',
    category: 'pastries',
    tag: 'Baked Fresh 5 AM',
    price: 3.00,
    description: 'AOP Charentes-Poitou French butter, 27 flaky laminations baked warm at dawn.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0S64vN4d5NAQj8mBPIXYxKZvDztgRcTK6hbbajVAADV2z1FlX1EW0ttEM03XJMMH9CKcoRml31gp0R-qHJIg9Hn8CIOJag1HY_r6KUl7eAd0BFe1VvZcN_GiV_DgO6zmnWcduAc1mOVhL4Pk0PSehtUfhV5lGJwpqSYNdCZ1Rv2tLHSUHZRY9jk0l736KqeJakpucitIn-xSLpWnsOIa6KxFW1sI0UsTuAdPRIC09xhzfJ2IUHxdBjg',
    origin: 'Parisian Master Boulanger Recipe',
    notes: ['Normandy Cultured Butter', 'Honeycomb Aeration', 'Golden Crust']
  },
  {
    id: 'p2',
    name: 'Chocolate Croissant',
    category: 'pastries',
    tag: 'Valrhona 70%',
    price: 3.50,
    description: 'Pain au chocolat folded with dual Valrhona dark chocolate batons.',
    image: '/src/assets/images/chocolate_croissant_1791024233965.jpg',
    origin: 'Valrhona Dark Chocolate Baton Double Fold',
    notes: ['Deep Cacao', 'Buttery Flakes', 'Melting Warm Center']
  },
  {
    id: 'p3',
    name: 'Almond Croissant',
    category: 'pastries',
    tag: 'Parisian',
    price: 3.75,
    description: 'Twice-baked and filled with rich almond frangipane, toasted sliced almonds.',
    image: '/src/assets/images/almond_croissant_1791024247595.jpg',
    origin: 'Provence Sweet Almond Frangipane',
    notes: ['Roasted Almond Slices', 'Rum Frangipane Essence', 'Icing Sugar Frosting']
  },

  // Desserts
  {
    id: 'd1',
    name: 'Chocolate Cake',
    category: 'desserts',
    tag: 'Noir Special',
    price: 4.50,
    description: 'Multi-layered dark ganache sponge, Maldon sea salt flakes and roasted nibs.',
    image: '/src/assets/images/dark_chocolate_cake_1791024258787.jpg',
    origin: 'Belgian 72% Dark Couverture',
    notes: ['Maldon Sea Salt', 'Crunchy Roasted Nibs', 'Molten Ganache']
  },
  {
    id: 'd2',
    name: 'Burnt Basque Cheesecake',
    category: 'desserts',
    tag: 'Chef Recommendation',
    price: 4.75,
    description: 'Caramelized crust with Tahitian vanilla bean molten center.',
    image: '/src/assets/images/burnt_basque_cheesecake_1791024269370.jpg',
    origin: 'San Sebastián Inspired Artisan Dairy',
    notes: ['Caramelized Brulee Edge', 'Molten Cream Center', 'Tahitian Vanilla']
  },
  {
    id: 'd3',
    name: 'Espresso Walnut Brownie',
    category: 'desserts',
    tag: 'Gluten Conscious',
    price: 3.75,
    description: 'Warm fudgy espresso walnut brownie with molten dark chocolate center.',
    image: '/src/assets/images/espresso_walnut_brownie_1791024280634.jpg',
    origin: 'House Roast Ristretto & Grenoble Walnuts',
    notes: ['Toasted Walnuts', 'Fudgy Molten Texture', 'Espresso Liqueur Finish']
  }
];

export const INITIAL_CART_ITEMS = [
  {
    id: 'spec-1',
    cartItemId: 'init-1',
    name: 'Panama Geisha Natural',
    subtitle: 'Single Origin • Filter',
    price: 18.00,
    qty: 1,
    milk: 'Pour Over',
    temperature: '92°C Extraction'
  },
  {
    id: 'spec-2',
    cartItemId: 'init-2',
    name: 'Mayfair Nocturne Blend',
    subtitle: 'Signature Roast • Espresso',
    price: 12.50,
    qty: 1,
    milk: 'Whole Milk',
    temperature: 'Standard'
  }
];

export const ROAST_PROFILES: RoastProfile[] = [
  {
    id: 'nocturne',
    name: 'Mayfair Nocturne Blend 2026',
    year: '2026 Vintage',
    notes: 'Dark Chocolate • Dried Fig • Smoked Bergamot',
    body: 88,
    sweetness: 80,
    crema: 76,
    acidity: 48,
    description: 'Our flagship espresso profile roasted weekly in small batches on vintage cast iron drums.',
    elevation: '1,850m - 2,100m',
    process: 'Washed & Natural Dual Ferment'
  },
  {
    id: 'geisha',
    name: 'Panama Boquete Geisha Lot 12',
    year: 'Rare Harvest',
    notes: 'Jasmine Bloom • White Peach • Mandarin Blossom',
    body: 62,
    sweetness: 94,
    crema: 58,
    acidity: 86,
    description: 'Ultra-rare micro-lot offering dazzling floral clarity and champagne-like acidity.',
    elevation: '1,950m',
    process: 'Slow Aerobic Natural'
  },
  {
    id: 'huila',
    name: 'Colombia Huila Reserve',
    year: 'Private Reserve',
    notes: 'Panela Sugar • Black Cherry • Toasted Macadamia',
    body: 82,
    sweetness: 88,
    crema: 82,
    acidity: 65,
    description: 'Balanced, deeply rounded sweetness with a sustained velvety caramel mouthfeel.',
    elevation: '1,900m',
    process: 'Extended Washed 48h'
  }
];

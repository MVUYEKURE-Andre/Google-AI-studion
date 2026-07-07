import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ocean Wave Ripple Mug',
    description: 'A handcrafted ceramic mug featuring organic ripple textures and a rich, multi-toned ocean blue glaze. Fits perfectly in your hands for a warm morning brew.',
    price: 32,
    category: 'mugs',
    image: '/src/assets/images/ceramic_mug_1783444516395.jpg',
    rating: 4.9,
    stock: 12,
    dimensions: '3.5" Diameter x 4" Height',
    weight: '14 oz',
    details: [
      'Hand-thrown on the potter\'s wheel with local stoneware clay.',
      'Dipped in our signature dual-glaze recipe for a fluid gradient effect.',
      'Dishwasher, microwave, and food safe.',
      'Each piece exhibits minor organic variations in texture and glaze pattern.'
    ],
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Cobalt Blossom Vase',
    description: 'A slender, elegant ceramic vase featuring a striking cobalt blue and white crystalline glaze. Perfect for showcasing field flowers or as a standalone art piece.',
    price: 68,
    category: 'vases',
    image: '/src/assets/images/ceramic_vase_1783444506356.jpg',
    rating: 4.8,
    stock: 5,
    dimensions: '4" Width x 8.5" Height',
    weight: '1.8 lbs',
    details: [
      'Hand-sculpted neck with a weighted base for stable flower arrangements.',
      'Glazed with high-fire cobalt crystal glaze that reflects light beautifully.',
      'Waterproof interior sealing to hold fresh water indefinitely.',
      'Signed by the lead artisan on the foot of the vase.'
    ],
    isFeatured: true
  },
  {
    id: 'p3',
    name: 'Deep Aegean Serving Bowl',
    description: 'A wide, dramatic serving bowl with a deep cobalt blue swirl running through its white glossy interior. Perfect for family-style meals or kitchen displays.',
    price: 85,
    category: 'bowls',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    stock: 4,
    dimensions: '11" Diameter x 3.5" Height',
    weight: '2.5 lbs',
    details: [
      'Thick stoneware construction built for durability and heat retention.',
      'Swirled glaze technique means every single bowl is absolutely unique.',
      'Oven-safe up to 400°F (gradual pre-heating recommended).',
      'Lead-free, cadmium-free, and food-safe.'
    ],
    isFeatured: true
  },
  {
    id: 'p4',
    name: 'Mist Blue Dinner Plate Set',
    description: 'Minimalist dinner plates in a calming matte mist-blue finish. Features a slightly raised organic rim to prevent spillages and a beautiful speckled clay body.',
    price: 45,
    category: 'plates',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    stock: 24,
    dimensions: '10.5" Diameter x 0.75" Height',
    weight: '1.6 lbs per plate',
    details: [
      'Pressed from durable iron-rich gray clay.',
      'Finished with a durable, scratch-resistant matte glaze.',
      'Stackable design for easy, compact cupboard storage.',
      'Dishwasher and microwave safe.'
    ],
    isFeatured: false
  },
  {
    id: 'p5',
    name: 'Tidal Wave Espresso Set',
    description: 'A gorgeous set of two mini espresso cups with a matching rectangular wood-fired serving tray. Features deep indigo glaze drippings over natural raw clay.',
    price: 54,
    category: 'sets',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    stock: 8,
    dimensions: 'Cups: 2" x 2" (3 oz); Tray: 8" x 4"',
    weight: '1.2 lbs total',
    details: [
      'Includes two double-shot espresso cups and one ceramic tray.',
      'Tactile raw-clay exterior contrasted with a smooth glazed rim and interior.',
      'Retains heat exceptionally well for long-lasting warm coffee.',
      'Packed in a rustic kraft gift box with recycled hemp padding.'
    ],
    isFeatured: true
  },
  {
    id: 'p6',
    name: 'Seafoam Speckled Cereal Bowl',
    description: 'An everyday essential bowl glazed in a soft seafoam green-blue shade with beautiful dark iron speckles throughout. Comforting, tactile, and heavy-duty.',
    price: 28,
    category: 'bowls',
    image: 'https://images.unsplash.com/photo-1535401991746-da3d9055713e?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    stock: 18,
    dimensions: '6" Diameter x 2.75" Height',
    weight: '1.1 lbs',
    details: [
      'Wheel-thrown with a flared rim for comfortable eating.',
      'Formulated with a natural speckled glaze that reacts during kiln firing.',
      'Durable rim resists chipping.',
      'Excellent for oatmeal, soup, salads, or cereals.'
    ],
    isFeatured: false
  },
  {
    id: 'p7',
    name: 'Nordic Indigo Pitcher',
    description: 'A striking minimalist pitcher featuring a sharp modern spout and a bold dark indigo matte exterior. Holds beverages cold or displays large floral bouquets.',
    price: 75,
    category: 'vases',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    stock: 3,
    dimensions: '5" Diameter x 9" Height (60 oz)',
    weight: '2.1 lbs',
    details: [
      'Ergonomic handle designed for perfect balance when pouring.',
      'Drip-free spout design.',
      'Holds up to 1.8 liters of liquid.',
      'Dishwasher and food safe.'
    ],
    isFeatured: false
  },
  {
    id: 'p8',
    name: 'Cerulean Cappuccino Cup Set',
    description: 'A matching set of two high-comfort cappuccino cups with perfectly sized circular saucers. Glazed in a rich, vibrant cerulean blue gradient.',
    price: 58,
    category: 'sets',
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    stock: 10,
    dimensions: 'Cup: 4" x 2.5" (8 oz); Saucer: 6" Diameter',
    weight: '1.8 lbs set',
    details: [
      'Two mugs and two matching saucers.',
      'Perfect sizing for rich latte art and frothy cappuccinos.',
      'Vibrant blue interior contrasts beautifully with dark roasted coffee colors.',
      'Fired to vitrification at 2200°F for maximum strength.'
    ],
    isFeatured: false
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'Absolutely in love with my Ocean Wave Ripple Mug! The glaze gradient is stunning, and it has this incredibly comforting, weighted feel in my hand. It has become my absolute favorite morning companion.',
    date: 'June 18, 2026'
  },
  {
    id: 'r2',
    author: 'David Thorne',
    rating: 5,
    text: 'I ordered the Cobalt Blossom Vase as a wedding gift, and the couple was mesmerized. The crystals in the glaze are mesmerizing in direct sunlight. Outstanding quality and carefully packaged.',
    date: 'May 24, 2026'
  },
  {
    id: 'r3',
    author: 'Elena Rostova',
    rating: 5,
    text: 'The craftsmanship is exceptional. I bought a set of the Mist Blue Dinner Plates, and they look beautiful on my dining table. Easy to wash, sturdy, and elegant. Local art at its absolute finest!',
    date: 'April 09, 2026'
  }
];

export const TIMELINE = [
  {
    year: '2019',
    title: 'The Backyard Shed',
    description: 'Founded by artist Elena Vance with a single kick-wheel, a tiny electric kiln, and a passion for local riverbed clay.'
  },
  {
    year: '2021',
    title: 'Coastal Inspiration',
    description: 'Moved our workshop to a seaside cabin in Cannon Beach. Developed our signature ocean fluid-glaze formula inspired by tidal currents.'
  },
  {
    year: '2023',
    title: 'Opening the Studio',
    description: 'Expanded our workshop and opened our first retail gallery to host community pottery workshops and showcase guest ceramic artists.'
  },
  {
    year: '2026',
    title: 'Sustainable Art',
    description: 'Transitioned our kiln firing to 100% solar power offsets and pledged to source all stoneware clay within a 100-mile radius.'
  }
];

export const FAQS = [
  {
    question: 'Are your ceramics microwave and dishwasher safe?',
    answer: 'Yes! All of our functional dinnerware, mugs, and bowls are fired to extreme temperatures (2200°F / Cone 6 vitrification), making them highly durable and completely safe for dishwasher and microwave use. We recommend hand-washing larger serving dishes or fragile vases to prolong their shine.'
  },
  {
    question: 'How do you handle shipping for fragile ceramics?',
    answer: 'We take packaging very seriously! All items are wrapped in thick, custom-cut biodegradable cardboard cushioning and starch-based packing peanuts that dissolve in water. In the rare event that an item arrives damaged, we offer a 100% replacement or refund—just send us a photo of the package within 48 hours.'
  },
  {
    question: 'Do you take custom commissions or wedding registries?',
    answer: 'Absolutely! We love creating bespoke dinnerware sets, custom-engraved wedding gifts, or setting up dedicated bridal registries. Please fill out our contact form or email us directly at custom@bluewaveceramics.com with your ideas.'
  },
  {
    question: 'Where can I see your pottery in person?',
    answer: 'Our main workshop and retail store are located at 412 Sea Glass Lane, Cannon Beach, Oregon. We are open Wednesday through Sunday, 10:00 AM to 5:00 PM. Visitors can often view live throwing sessions at our wheels through the gallery window!'
  }
];

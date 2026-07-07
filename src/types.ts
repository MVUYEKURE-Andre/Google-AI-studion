export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'mugs' | 'bowls' | 'vases' | 'plates' | 'sets';
  image: string;
  rating: number;
  stock: number;
  dimensions?: string;
  weight?: string;
  details: string[];
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ViewType = 'home' | 'products' | 'about' | 'contact';

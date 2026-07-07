/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ViewType, Product, CartItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProductsView from './components/ProductsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import CartDrawer from './components/CartDrawer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  // Cart Management Functions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        // Enforce stock limits
        const newQty = Math.min(product.stock, existingItem.quantity + quantity);
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: newQty } : item
        );
      }
      return [...prevItems, { product, quantity: Math.min(product.stock, quantity) }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Navigates to products page and pre-selects a product for detailed view
  const handleFeaturedProductClick = (product: Product) => {
    setSelectedProductForModal(product);
    setCurrentView('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Helper to render active view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            setCurrentView={setCurrentView}
            onProductClick={handleFeaturedProductClick}
            onAddToCart={handleAddToCart}
          />
        );
      case 'products':
        return (
          <ProductsView
            onProductClick={() => {}}
            onAddToCart={handleAddToCart}
            selectedProductFromExternal={selectedProductForModal}
            clearExternalProduct={() => setSelectedProductForModal(null)}
          />
        );
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setCurrentView={setCurrentView}
            onProductClick={handleFeaturedProductClick}
            onAddToCart={handleAddToCart}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased" id="app-root-layout">
      
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemCount={cartItemCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Main View Container with sliding-fade route transitions */}
      <main className="flex-1" id="main-content-viewport">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            id={`view-wrapper-${currentView}`}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shopping Cart Slider Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer block */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
}

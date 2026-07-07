import { useState } from 'react';
import { ShoppingBag, Menu, X, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({
  currentView,
  setCurrentView,
  cartItemCount,
  onCartClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; id: ViewType }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Our Products', id: 'products' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (viewId: ViewType) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-50 shadow-sm" id="shop-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
            id="header-logo-container"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200 transition-transform group-hover:scale-105">
              <Waves className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-blue-900 block leading-tight">
                Blue Wave
              </span>
              <span className="text-xs font-medium tracking-widest text-blue-500 uppercase block -mt-0.5">
                Ceramics
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Buttons */}
          <div className="flex items-center space-x-4" id="header-utilities">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors cursor-pointer"
              aria-label="Shopping Cart"
              id="cart-button"
            >
              <ShoppingBag className="w-6 h-6" />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-0.5 text-xxs font-bold leading-none text-white bg-blue-600 rounded-full min-w-[18px]"
                    id="cart-badge"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl md:hidden transition-colors cursor-pointer"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-blue-50 bg-white"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 font-semibold' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-500'
                    }`}
                    id={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

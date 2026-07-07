import React, { useState } from 'react';
import { Waves, Phone, Mail, MapPin, Send } from 'lucide-react';
import { ViewType } from '../types';

interface FooterProps {
  setCurrentView: (view: ViewType) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" id="shop-footer">
      {/* Top Banner section */}
      <div className="bg-blue-600 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Visit Our Seaside Gallery & Workshop</h3>
            <p className="text-blue-100 mt-1 max-w-xl text-sm">
              Come see the potters wheel in action and browse our newest, exclusive wood-fired collections in Cannon Beach, Oregon.
            </p>
          </div>
          <button 
            onClick={() => handleLinkClick('contact')}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer text-sm whitespace-nowrap"
            id="footer-cta-contact"
          >
            Get Directions
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4" id="footer-brand-col">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Waves className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Blue Wave Ceramics</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Handcrafting timeless pottery that brings the calming spirit and organic textures of the ocean into your home. Made with local clay and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" id="footer-links-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  id="footer-link-home"
                >
                  Home Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('products')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  id="footer-link-products"
                >
                  Ceramics Shop
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  id="footer-link-about"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                  id="footer-link-contact"
                >
                  Contact & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm" id="footer-contact-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  412 Sea Glass Lane<br />
                  Cannon Beach, OR 97110
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>(503) 555-0143</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>hello@bluewaveceramics.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4" id="footer-newsletter-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe to get notified about fresh kiln firings and exclusive studio updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-lg overflow-hidden border border-slate-700 focus-within:border-blue-500 bg-slate-800 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-transparent text-white text-sm outline-none placeholder-slate-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Subscribe"
                  id="newsletter-submit"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 font-medium animate-pulse" id="subscribe-success">
                  Thank you! You are now subscribed.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Blue Wave Ceramics. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

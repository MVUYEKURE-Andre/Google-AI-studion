import { ShoppingBag, X, Trash2, ArrowRight, CheckCircle, Waves } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import React, { useState } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [orderName, setOrderName] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName || !orderEmail) return;

    setCheckoutStep('success');
  };

  const handleCompleteOrder = () => {
    onClearCart();
    setCheckoutStep('cart');
    setOrderName('');
    setOrderEmail('');
    setOrderNotes('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-root">
          {/* Dark Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/55 backdrop-blur-xs cursor-pointer"
            id="cart-drawer-backdrop"
          />

          {/* Slider Panel Container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-white shadow-2xl border-l border-blue-50 flex flex-col justify-between"
              id="cart-drawer-panel"
            >
              
              {/* HEADER */}
              <div className="px-6 py-5 border-b border-blue-50 flex items-center justify-between" id="cart-drawer-header">
                <div className="flex items-center space-x-2.5 text-blue-900">
                  <ShoppingBag className="w-5.5 h-5.5 text-blue-600" />
                  <span className="text-lg font-bold tracking-tight">Your Order List</span>
                  {cartItems.length > 0 && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-extrabold px-2 py-0.5 rounded-full">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                  id="close-cart-drawer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* BODY - SCROLLABLE AREA */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6" id="cart-drawer-body">
                
                {/* STEP 1: CART OVERVIEW */}
                {checkoutStep === 'cart' && (
                  <>
                    {cartItems.length > 0 ? (
                      <div className="space-y-4" id="cart-items-list">
                        {cartItems.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center space-x-4 p-3 rounded-xl border border-blue-50/50 bg-blue-50/10 hover:border-blue-100/70 transition-all"
                            id={`cart-item-row-${item.product.id}`}
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 rounded-lg object-cover bg-slate-50"
                              referrerPolicy="no-referrer"
                            />
                            <div className="flex-1 space-y-1">
                              <h4 className="text-xs font-bold text-slate-900 leading-tight line-clamp-1">
                                {item.product.name}
                              </h4>
                              <p className="text-xs text-blue-700 font-extrabold">${item.product.price} each</p>
                              
                              <div className="flex items-center justify-between pt-1">
                                {/* Quantities */}
                                <div className="flex items-center border border-slate-150 rounded-md overflow-hidden bg-white text-xs">
                                  <button
                                    onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                    className="px-2 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="px-2.5 font-semibold text-slate-800">{item.quantity}</span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.product.id, Math.min(item.product.stock, item.quantity + 1))}
                                    className="px-2 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                                
                                {/* Trash button */}
                                <button
                                  onClick={() => onRemoveItem(item.product.id)}
                                  className="text-slate-400 hover:text-red-500 p-1 rounded-md transition-colors cursor-pointer"
                                  title="Remove item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center py-24 space-y-4" id="cart-empty-state">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                          <ShoppingBag className="w-8 h-8" />
                        </div>
                        <p className="text-slate-500 font-medium text-sm">Your order list is empty.</p>
                        <button
                          onClick={onClose}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          Keep Browsing Ceramics
                        </button>
                      </div>
                    )}
                  </>
                )}

                {/* STEP 2: CHECKOUT CONTACT FORM */}
                {checkoutStep === 'checkout' && (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-5" id="checkout-form">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-base">Inquiry & Order Confirmation</h3>
                      <p className="text-xxs text-slate-400 leading-relaxed">
                        We don't process direct online payments due to the unique characteristics and fragile nature of our custom pottery. Complete your order form, and Elena Vance will personally check inventory, compile custom shipping packaging logs, and email you a direct secure invoice.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label htmlFor="checkout-name" className="text-xxs font-bold text-slate-600 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          id="checkout-name"
                          type="text"
                          required
                          value={orderName}
                          onChange={(e) => setOrderName(e.target.value)}
                          placeholder="Elena Vance"
                          className="w-full px-3.5 py-2 bg-white border border-blue-150 rounded-lg text-xs outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="checkout-email" className="text-xxs font-bold text-slate-600 uppercase tracking-wide">
                          Email Address
                        </label>
                        <input
                          id="checkout-email"
                          type="email"
                          required
                          value={orderEmail}
                          onChange={(e) => setOrderEmail(e.target.value)}
                          placeholder="elena@example.com"
                          className="w-full px-3.5 py-2 bg-white border border-blue-150 rounded-lg text-xs outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="checkout-notes" className="text-xxs font-bold text-slate-600 uppercase tracking-wide">
                          Custom Inscription / Shipping Notes (Optional)
                        </label>
                        <textarea
                          id="checkout-notes"
                          rows={3}
                          value={orderNotes}
                          onChange={(e) => setOrderNotes(e.target.value)}
                          placeholder="Please add a personalized birthday note inside the packaging..."
                          className="w-full px-3.5 py-2 bg-white border border-blue-150 rounded-lg text-xs outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-500 space-y-1.5" id="checkout-summary-mini">
                      <p className="font-bold text-slate-700">Order Summary:</p>
                      <ul className="list-disc list-inside space-y-1 text-xxs">
                        {cartItems.map((item) => (
                          <li key={item.product.id}>
                            {item.quantity} x {item.product.name}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-md shadow-blue-100"
                      id="checkout-submit-form"
                    >
                      <span>Submit Order Proposal</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="w-full py-2 bg-white hover:bg-slate-50 text-slate-500 text-xs font-bold rounded-xl transition-all cursor-pointer border border-slate-200"
                    >
                      Back to Order List
                    </button>
                  </form>
                )}

                {/* STEP 3: SUCCESS BLOCK */}
                {checkoutStep === 'success' && (
                  <div className="py-12 text-center space-y-6" id="checkout-success-panel">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-100">
                      <CheckCircle className="w-9 h-9" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">Order Proposal Logged!</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Thank you, <span className="font-bold text-blue-900">{orderName}</span>. We have saved your custom order selection.
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        A personalized email with custom-packed shipping quotes, fragile-cargo protection details, and credit card checkout details is heading to:
                      </p>
                      <p className="text-xs font-bold text-slate-800">{orderEmail}</p>
                    </div>

                    <button
                      onClick={handleCompleteOrder}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer transition-colors"
                      id="complete-checkout-acknowledgement"
                    >
                      Return to Ceramics Catalog
                    </button>
                  </div>
                )}

              </div>

              {/* FOOTER TOTAL PRICE & CTA (ONLY SHOWN IN CART STATE WITH ITEMS) */}
              {cartItems.length > 0 && checkoutStep === 'cart' && (
                <div className="p-6 bg-slate-50 border-t border-blue-50 space-y-4" id="cart-drawer-footer">
                  <div className="space-y-1.5 text-slate-600 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal Items</span>
                      <span className="font-bold text-slate-800">
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Packaging & Fragile-Insurances</span>
                      <span className="text-emerald-600 font-bold">Complimentary</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-200 text-base font-extrabold text-blue-950">
                      <span>Estimated Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10 cursor-pointer group"
                    id="checkout-cta-button"
                  >
                    <span>Request Shipping Invoice</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, ShoppingCart, Check, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductsViewProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  selectedProductFromExternal: Product | null;
  clearExternalProduct: () => void;
}

export default function ProductsView({
  onProductClick,
  onAddToCart,
  selectedProductFromExternal,
  clearExternalProduct,
}: ProductsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  
  // State for detail modal (if triggered internally or passed down)
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotification, setAddedNotification] = useState<boolean>(false);

  // Synchronize external product clicks (e.g., from home page)
  useMemo(() => {
    if (selectedProductFromExternal) {
      setActiveModalProduct(selectedProductFromExternal);
      setQuantity(1);
      clearExternalProduct();
    }
  }, [selectedProductFromExternal]);

  const handleOpenModal = (product: Product) => {
    setActiveModalProduct(product);
    setQuantity(1);
    setAddedNotification(false);
  };

  const handleCloseModal = () => {
    setActiveModalProduct(null);
  };

  const handleAddToCartFromModal = () => {
    if (activeModalProduct) {
      onAddToCart(activeModalProduct, quantity);
      setAddedNotification(true);
      setTimeout(() => setAddedNotification(false), 3000);
    }
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.isFeatured ? 1 : -1; // Default featured sort
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const categories = [
    { label: 'All Collection', id: 'all' },
    { label: 'Mugs', id: 'mugs' },
    { label: 'Bowls', id: 'bowls' },
    { label: 'Vases & Pitchers', id: 'vases' },
    { label: 'Dinner Plates', id: 'plates' },
    { label: 'Ceramic Sets', id: 'sets' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10" id="products-view-container">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto" id="products-header">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">The Clay Gallery</span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Browse Our Handmade Collection</h1>
        <p className="text-slate-500 text-base">
          Explore our seasonal stoneware items, hand-thrown in Cannon Beach and glazed in oceanic coastal hues. Enjoy food-safe daily-use art.
        </p>
      </div>

      {/* Controls Grid (Search, Category Filters, Sort) */}
      <div className="space-y-6" id="products-control-panel">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Search bar */}
          <div className="relative w-full lg:max-w-md" id="search-input-container">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search mug, bowl, crystalline vase..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-blue-100 focus:border-blue-500 rounded-xl text-sm text-slate-800 outline-none transition-all placeholder-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort selection */}
          <div className="flex items-center space-x-2.5 w-full lg:w-auto justify-end" id="sort-select-container">
            <SlidersHorizontal className="w-4.5 h-4.5 text-slate-500" />
            <span className="text-xs text-slate-500 font-semibold uppercase">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-blue-100 text-slate-700 text-sm py-2 px-3 rounded-xl outline-none focus:border-blue-500 transition-colors cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Collector Rating</option>
            </select>
          </div>

        </div>

        {/* Category horizontal track */}
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2.5 no-scrollbar" id="category-track">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                    : 'bg-white text-slate-600 border border-blue-50 hover:bg-blue-50/50 hover:border-blue-100 hover:text-blue-600'
                }`}
                id={`cat-button-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProducts.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            id="products-grid"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-xs hover:shadow-lg hover:border-blue-100 hover:scale-[1.01] transition-all flex flex-col cursor-pointer"
                onClick={() => handleOpenModal(product)}
                id={`product-card-${product.id}`}
              >
                {/* Image Wrap */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {product.isFeatured && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xxs font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                      Best Seller
                    </div>
                  )}
                  {product.stock <= 5 && (
                    <div className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-xs text-white text-xxs font-bold px-2 py-0.5 rounded-md">
                      Only {product.stock} Left!
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <span className="text-xxs font-bold text-blue-500 tracking-wider uppercase">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1 text-amber-500 text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 text-sm sm:text-base">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                    <span className="text-lg font-extrabold text-blue-900">${product.price}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="px-3.5 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all cursor-pointer flex items-center space-x-1"
                      id={`add-to-cart-quick-${product.id}`}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-blue-100 space-y-3"
            id="products-empty-state"
          >
            <p className="text-slate-400 text-base font-medium">No unique pottery found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSortBy('featured');
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-500 underline cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Specification & Detail Modal */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4" id="detail-modal-root">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
              id="detail-modal-overlay"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-50 z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
              id="detail-modal-body"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2 bg-white/90 backdrop-blur-xs hover:bg-white rounded-full text-slate-700 shadow-md cursor-pointer transition-colors"
                id="close-modal-button"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Photo - Left Column */}
              <div className="md:col-span-5 relative bg-slate-50 h-64 md:h-full min-h-[250px]">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {activeModalProduct.isFeatured && (
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xxs font-extrabold px-3 py-1 rounded-md uppercase">
                    Signature Art
                  </span>
                )}
              </div>

              {/* Product Specifications & Details - Right Column */}
              <div className="md:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between overflow-y-auto" id="detail-modal-details-col">
                <div className="space-y-4">
                  <div>
                    <span className="text-xxs font-bold text-blue-500 uppercase tracking-widest block mb-1">
                      Handcrafted {activeModalProduct.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {activeModalProduct.name}
                    </h2>
                    <div className="flex items-center space-x-3 mt-1.5">
                      <div className="flex items-center space-x-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-bold text-slate-800">{activeModalProduct.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs text-emerald-600 font-semibold">
                        {activeModalProduct.stock > 0 ? `In Stock (${activeModalProduct.stock} available)` : 'Out of Stock'}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {activeModalProduct.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-50/50 space-y-2 text-xs" id="specs-card">
                    <h4 className="font-bold text-blue-900 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5" />
                      <span>Specifications</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600 pt-1">
                      {activeModalProduct.dimensions && (
                        <div><span className="font-semibold text-slate-800">Size:</span> {activeModalProduct.dimensions}</div>
                      )}
                      {activeModalProduct.weight && (
                        <div><span className="font-semibold text-slate-800">Weight:</span> {activeModalProduct.weight}</div>
                      )}
                      <div><span className="font-semibold text-slate-800">Materials:</span> Oregon Riverbed Stoneware</div>
                      <div><span className="font-semibold text-slate-800">Glaze:</span> Food-safe Cobalt/Mineral</div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 text-xs text-slate-600" id="bullet-highlights">
                    <p className="font-semibold text-slate-800">Artisan Notes:</p>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {activeModalProduct.details.map((detail, index) => (
                        <li key={index} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Purchase Panel */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-xxs font-bold text-slate-400 block uppercase tracking-wider">Collector Price</span>
                    <span className="text-2xl font-extrabold text-blue-950">${activeModalProduct.price}</span>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto" id="purchase-controls-wrapper">
                    {/* Qty Picker */}
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-1.5 hover:bg-slate-50 text-slate-500 font-bold cursor-pointer transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-sm font-semibold text-slate-800">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(activeModalProduct.stock, quantity + 1))}
                        className="px-3 py-1.5 hover:bg-slate-50 text-slate-500 font-bold cursor-pointer transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Add Button */}
                    <button
                      onClick={handleAddToCartFromModal}
                      className="flex-1 sm:flex-initial px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-blue-100"
                      id="modal-add-button"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to List</span>
                    </button>
                  </div>
                </div>

                {/* Toast Notification inside dialog */}
                <AnimatePresence>
                  {addedNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-2.5 rounded-lg flex items-center justify-center space-x-2"
                      id="modal-toast-notif"
                    >
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Added {quantity} x {activeModalProduct.name} to your custom orders list.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

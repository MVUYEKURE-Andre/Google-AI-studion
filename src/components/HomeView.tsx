import { ArrowRight, Star, Heart, Sparkles, Flame, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, ViewType } from '../types';
import { PRODUCTS, REVIEWS } from '../data';

interface HomeViewProps {
  setCurrentView: (view: ViewType) => void;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function HomeView({
  setCurrentView,
  onProductClick,
  onAddToCart,
}: HomeViewProps) {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <div className="space-y-24 pb-16" id="home-view-container">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-950" id="hero-section">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero_ceramics_1783444491314.jpg"
            alt="Handcrafted ceramics on a table"
            className="w-full h-full object-cover object-center opacity-45 transform scale-102 filter blur-xs"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 flex items-center">
          <div className="max-w-2xl text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider"
              id="hero-label-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Authentic Handcrafted Stoneware</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
              id="hero-title"
            >
              Shaped by the Ocean,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Fired by the Sun.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
              id="hero-tagline"
            >
              Exquisite, functional local pottery crafted on the Oregon Coast. Inspired by ocean tides, seafoam speckles, and deep cobalt currents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
              id="hero-actions"
            >
              <button
                onClick={() => {
                  setCurrentView('products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center justify-center space-x-2 group cursor-pointer"
                id="hero-cta-shop"
              >
                <span>Shop the Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center cursor-pointer"
                id="hero-cta-about"
              >
                <span>Our Philosophy</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="values-section">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">The Blue Wave Standard</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Why Handcrafted Pottery Matters
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            In a world of mass production, we slow down. Each piece we create is individually touched, thrown, glazed, and wood-fired to stand the test of time.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-blue-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4" id="value-card-clay">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Locally Sourced Clay</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We harvest gray and red clay deposits from nearby riverbeds, filtering it in our studio to produce an exceptionally sturdy, heat-retaining stoneware.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4" id="value-card-fire">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Solar-Powered Kilns</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our high-firing is supported by 100% solar offset initiatives, baking our glazes to vitrification temperatures (2200°F) in harmony with the environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4" id="value-card-glaze">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Ocean-Inspired Glazes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our fluid glaze recipes combine local ash, sand, and cobalt mineral composites, producing unique gradients mimicking ocean tides and foam.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Featured Products Grid */}
      <section className="bg-blue-50/50 py-20 px-4 sm:px-6 lg:px-8" id="featured-products-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Artisan Picks</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Signature Favorites</h2>
              <p className="text-slate-500 max-w-xl text-sm">
                A selection of our most loved hand-thrown items, embodying our commitment to coastal style and utility.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentView('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group text-blue-600 font-semibold text-sm flex items-center space-x-1.5 hover:text-blue-500 cursor-pointer pb-1 border-b border-transparent hover:border-blue-500 transition-all"
              id="view-all-button"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-xs hover:shadow-lg hover:border-blue-200 transition-all flex flex-col cursor-pointer"
                onClick={() => onProductClick(product)}
                id={`featured-product-card-${product.id}`}
              >
                {/* Image panel */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-blue-600 font-bold px-2.5 py-1 rounded-lg text-xxs shadow-sm">
                    {product.category.toUpperCase()}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="absolute bottom-3 right-3 w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                    title="Add to order list"
                    id={`add-to-cart-featured-${product.id}`}
                  >
                    +
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-amber-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-semibold text-slate-700">{product.rating.toFixed(1)}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 text-sm">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                    <span className="font-extrabold text-blue-900 text-base">${product.price}</span>
                    <span className="text-xxs font-medium text-slate-400">Handcrafted</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mini Story Highlights Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-artisan-highlight">
        <div className="bg-slate-50 rounded-3xl overflow-hidden border border-blue-50 shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Visual column */}
          <div className="lg:col-span-5 h-64 lg:h-auto min-h-[320px] relative bg-slate-200">
            <img
              src="/src/assets/images/artisan_potter_1783444525623.jpg"
              alt="Elena throwing clay on potter wheel"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Text column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Meet the Artisan</span>
            <blockquote className="text-xl sm:text-2xl font-serif text-slate-800 leading-relaxed italic">
              "The spinning wheel is a form of meditation. Clay has memory. It remembers the wind, the water, and the exact touch of the hands that formed it."
            </blockquote>
            <div>
              <p className="font-bold text-slate-900">Elena Vance</p>
              <p className="text-xs text-slate-500 font-medium">Founder & Master Potter, Blue Wave Ceramics</p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-sm"
                id="artisan-cta-story"
              >
                Read Our Whole Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials-section">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Customer Love</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Our Collector Family Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-blue-50 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              id={`review-card-${review.id}`}
            >
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <span className="font-semibold text-slate-800 text-sm">{review.author}</span>
                <span className="text-xs text-slate-400 font-medium">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

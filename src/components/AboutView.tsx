import { useState } from 'react';
import { HelpCircle, ChevronDown, Award, Compass, Heart, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE, FAQS } from '../data';

export default function AboutView() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const steps = [
    {
      title: '1. Sourcing & Wedging',
      desc: 'We select the finest stoneware clay from local riverbed deposits. The clay is meticulously kneaded (wedged) to eliminate air bubbles and ensure structural uniformity.',
    },
    {
      title: '2. Throwing & Shaping',
      desc: 'Our pottery is thrown on kick and electric wheels. Using centering, opening, and pulling techniques, the clay is guided upward to form walls of uniform density and organic contours.',
    },
    {
      title: '3. Trimming & Footing',
      desc: 'After drying to a leather-hard state, the piece is turned upside down. Trimming tools refine the foot ring, carve clean profiles, and stamp Elena\'s signature brand logo.',
    },
    {
      title: '4. Bisque Firing',
      desc: 'The piece is loaded into the kiln for its first slow bake (Bisque firing) up to 1800°F over 14 hours. This transforms the clay into a durable, porous state ready for glaze uptake.',
    },
    {
      title: '5. The Cobalt Glaze',
      desc: 'Using custom glaze recipes rich in cobalt ores and volcanic ash, each mug or plate is carefully dipped, swirled, or dripped to create fluid sea-foam and tidal patterns.',
    },
    {
      title: '6. Vitrification Firing',
      desc: 'The glazed pottery returns to our solar-offset high-fire kilns for a second firing to 2200°F (Cone 6). The glaze melts into a glass-like finish, vitrifying the clay for maximum food-safe strength.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24" id="about-view-container">
      
      {/* 1. Header & Vision Statement */}
      <div className="text-center max-w-3xl mx-auto space-y-4" id="about-intro">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Our Story</span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
          Crafting Art for Your Daily Rhythms
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          At Blue Wave Ceramics, we believe that objects of utility can also be objects of intense beauty. We mold coastal air, water, and earth to elevate your everyday domestic moments.
        </p>
      </div>

      {/* 2. Meet Elena Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-elena-section">
        {/* Left Column: Image with artistic outline */}
        <div className="lg:col-span-5 relative" id="about-elena-image-container">
          <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-10" />
          <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
            <img
              src="/src/assets/images/artisan_potter_1783444525623.jpg"
              alt="Elena Vance working on her wheel"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="lg:col-span-7 space-y-6" id="about-elena-bio">
          <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block">The Hands Behind the Clay</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Elena Vance</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              Growing up on the windswept beaches of coastal Oregon, Elena was always fascinated by the patterns carved in the sand by crashing tides. After graduating with a degree in Fine Arts and spending years apprenticing under masters in Kyoto, she returned home to establish her own studio in 2019.
            </p>
            <p>
              "Clay is extremely humble, but it records every fleeting thought or hesitation of the maker," Elena explains. "My goal is to capture the powerful fluidity of the Pacific Ocean and crystallize it into a functional piece of art that you can hold while sipping tea or sharing dinner with family."
            </p>
          </div>

          {/* Icon Credentials Row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100" id="elena-credentials">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-700">Kyoto-Trained</span>
            </div>
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-700">100% Local Clay</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-xs font-bold text-slate-700">Lead-Free Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Creation Cycle Step Display */}
      <section className="bg-blue-50/40 rounded-3xl p-8 sm:p-12 border border-blue-50/50" id="crafting-steps-section">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">From Mud to Masterpiece</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">The 6-Step Crafting Journey</h2>
          <p className="text-slate-500 text-sm">
            Discover the patient timeline of how our raw coastal clay is transformed into fine stoneware.
          </p>
        </div>

        {/* Step buttons */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-8" id="step-selector-buttons">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-600 border-blue-100 hover:bg-blue-50/50 hover:text-blue-600'
                }`}
                id={`step-tab-${index}`}
              >
                Step {index + 1}
              </button>
            );
          })}
        </div>

        {/* Active step display card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-xs" id="active-step-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-blue-900">{steps[activeStep].title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{steps[activeStep].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Company Timeline */}
      <section className="space-y-12" id="timeline-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Our Journey</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Timeline of Milestones</h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-blue-100 max-w-2xl mx-auto pl-6 sm:pl-8 space-y-10 py-4" id="timeline-path">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative group" id={`timeline-item-${index}`}>
              {/* Dot marker */}
              <div className="absolute -left-10 sm:-left-12 top-1.5 w-4 h-4 bg-blue-600 rounded-full border-4 border-white group-hover:scale-115 transition-transform" />
              
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 pt-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs section */}
      <section className="space-y-12" id="faqs-section">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4" id="faqs-accordion">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-blue-50 rounded-2xl overflow-hidden shadow-xxs"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-4.5 text-left font-bold text-slate-800 hover:text-blue-600 hover:bg-blue-50/20 transition-all cursor-pointer"
                  id={`faq-toggle-button-${index}`}
                >
                  <span className="text-sm sm:text-base flex items-center space-x-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      id={`faq-answer-panel-${index}`}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

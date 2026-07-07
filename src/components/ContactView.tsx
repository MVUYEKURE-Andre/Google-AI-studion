import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmittedName(formData.name);
    setSubmittedEmail(formData.email);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="contact-view-container">
      
      {/* 1. Header block */}
      <div className="text-center max-w-2xl mx-auto space-y-3" id="contact-header">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Connect With Us</span>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Let\'s Shape Something Beautiful</h1>
        <p className="text-slate-500 text-base">
          Have questions about a customized dinner set, wedding registry, shipping coordinates, or wanting to book a private throwing workshop? Send us a line!
        </p>
      </div>

      {/* 2. Main Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
        
        {/* Info Column (Left) */}
        <div className="lg:col-span-5 space-y-8" id="contact-info-col">
          
          {/* Quick contact card */}
          <div className="bg-white p-8 rounded-3xl border border-blue-50 shadow-xs space-y-6" id="contact-details-card">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3">Studio Information</h3>
            
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex items-start space-x-3.5">
                <MapPin className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Physical Address</p>
                  <p className="text-xs mt-0.5">
                    412 Sea Glass Lane<br />
                    Cannon Beach, Oregon 97110
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <Phone className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Call Our Gallery</p>
                  <p className="text-xs mt-0.5">(503) 555-0143</p>
                </div>
              </li>

              <li className="flex items-start space-x-3.5">
                <Mail className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Direct Email</p>
                  <p className="text-xs mt-0.5">hello@bluewaveceramics.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Shop hours card */}
          <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-50 space-y-4" id="contact-hours-card">
            <div className="flex items-center space-x-2.5 text-blue-900">
              <Clock className="w-5.5 h-5.5 text-blue-600" />
              <h3 className="text-base font-bold">Gallery & Workshop Hours</h3>
            </div>
            
            <div className="space-y-2.5 text-sm text-slate-700">
              <div className="flex justify-between items-center border-b border-blue-100/40 pb-2">
                <span>Wednesday – Sunday</span>
                <span className="font-bold">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-blue-100/40 pb-2">
                <span>Studio Throwing Demos</span>
                <span className="font-bold">Thurs/Sat: 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Monday & Tuesday</span>
                <span className="font-medium text-xs uppercase tracking-wide">Closed for Firing</span>
              </div>
            </div>
          </div>

          {/* Stylized Visual Mock Map locator card */}
          <div className="rounded-3xl border border-blue-50 overflow-hidden relative shadow-xs h-48 bg-slate-100" id="contact-mock-map">
            <div className="absolute inset-0 bg-sky-50 opacity-85" />
            
            {/* Custom styled elements to draw a scenic minimalist seaside locator map */}
            <div className="absolute left-0 right-0 top-0 h-4 bg-blue-100" /> {/* Beach shoreline */}
            <div className="absolute left-6 w-3 h-full bg-slate-200 rotate-12" /> {/* Beach Hwy */}
            <div className="absolute left-20 w-3 h-full bg-slate-200 rotate-12" /> {/* Sea Glass Lane */}
            
            {/* Decorative Ocean elements */}
            <div className="absolute right-8 top-12 text-slate-300 font-bold uppercase tracking-widest text-xxs select-none">PACIFIC OCEAN</div>
            <div className="absolute right-12 bottom-12 text-slate-300 text-xxs font-semibold">CANNON BEACH</div>

            {/* Blue locator beacon */}
            <div className="absolute left-24 top-20 flex items-center justify-center">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-blue-600 opacity-20 animate-ping" />
              <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-blue-600 border-2 border-white shadow-md" />
              <div className="absolute -top-10 bg-slate-900 text-white text-xxs font-extrabold py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md">
                Blue Wave Gallery
              </div>
            </div>
          </div>

        </div>

        {/* Form Column (Right) */}
        <div className="lg:col-span-7" id="contact-form-col">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-50 shadow-xs" id="contact-form-card">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Inquiry Intake Form</h3>
                    <p className="text-xs text-slate-400">All fields are monitored daily. Average response window: 1 business day.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name-input" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Your Full Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Elena Vance"
                        className="w-full px-4 py-2.5 bg-white border border-blue-100 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-500 transition-all placeholder-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email-input" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@example.com"
                        className="w-full px-4 py-2.5 bg-white border border-blue-100 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-500 transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="subject-input" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Inquiry Subject
                    </label>
                    <select
                      id="subject-input"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-blue-100 rounded-xl text-sm text-slate-700 outline-none focus:border-blue-500 transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Questions</option>
                      <option value="Custom Dinnerware Commission">Custom Pottery Commissions</option>
                      <option value="Wedding Registry Inquiry">Bridal & Wedding Registry</option>
                      <option value="Studio Class Booking">Clay Workshop Classes</option>
                      <option value="Shipping Help">Shipping & Packing Support</option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Write Your Message
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Elena, I am in love with your Ocean Wave Ripple Mug. I would love to commission a matching set of 6 salad bowls for a housewarming gift. Could you share details regarding lead times..."
                      className="w-full px-4 py-3.5 bg-white border border-blue-100 rounded-xl text-sm text-slate-800 outline-none focus:border-blue-500 transition-all placeholder-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    id="submit-contact-button"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                  id="contact-success-state"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border-2 border-emerald-100 shadow-sm">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Message Sent Safely!</h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-blue-900">{submittedName}</span>. Your inquiry has been logged into our studio system.
                    </p>
                    <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                      Elena Vance and the design team will get back to you at <span className="font-semibold text-slate-800">{submittedEmail}</span> within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
                    id="reset-form-button"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </div>
  );
}

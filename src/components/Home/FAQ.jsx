"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    { id: "general", name: "General Questions" },
    { id: "support", name: "Support & Booking" },
    { id: "pricing", name: "Pricing & Payments" },
    { id: "documents", name: "Required Documents" },
    { id: "cancellation", name: "Cancellation Policy" },
  ];

  const faqs = [
    {
      question: "How do I book a car on DriveFleet?",
      answer: "You can easily browse our available cars from the explore section, choose your preferred rental plan, complete the security verification, and confirm your reservation directly through our platform in just a few clicks."
    },
    {
      question: "What documents are required for renting?",
      answer: "To rent a car, you need a valid national ID or passport, a valid driver's license (with at least 1 year of driving experience), and a verified payment method for the security deposit."
    },
    {
      question: "Is a security deposit fully refundable?",
      answer: "Yes, absolutely. A standard fully-refundable security deposit is required during booking confirmation. This amount is automatically released back to your card within 3-5 business days after returning the car."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your booking completely free of charge up to 24 hours before your scheduled pickup time. Late cancellations may incur a nominal fee."
    }
  ];

  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_26%),linear-gradient(180deg,#f2f7ff_0%,#edf4ff_38%,#f6fbfe_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.1),transparent_26%),linear-gradient(180deg,#050d18_0%,#0a1424_38%,#07101d_100%)] px-4 py-24 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-slate-200/60 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-300 mb-3 shadow-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-indigo-500 dark:from-white dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals.
          </p>
        </div>

        {/* Main Box Container */}
        <div className="bg-gradient-to-b from-white/80 to-white/40 dark:from-white/[0.06] dark:to-white/[0.01] border border-white/80 dark:border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Category Navigation List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-5 py-4 rounded-2xl font-medium text-sm transition-all flex items-center justify-between border ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border-transparent scale-[1.02]"
                    : "bg-white/70 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 border-slate-200/70 dark:border-white/5 hover:bg-white/90 dark:hover:bg-white/[0.07] hover:border-slate-300 dark:hover:border-white/10"
                }`}
              >
                <span className={activeCategory === cat.id ? "font-semibold" : ""}>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${activeCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-white/5 text-slate-400"}`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right Side: Eye-Catching Accordion Cards */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl px-6 py-4 backdrop-blur-xl transition-all duration-300 ${
                    isOpen 
                      ? "bg-white dark:bg-slate-900/80 border-blue-400/50 dark:border-blue-500/40 shadow-xl scale-[1.01]" 
                      : "bg-white/70 dark:bg-white/[0.04] border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.06] shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`text-base font-semibold transition-colors ${isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white rotate-180 shadow-md shadow-blue-500/30' : 'bg-slate-200/80 dark:bg-white/10 text-slate-600 dark:text-slate-300'}`}>
                      <FiChevronDown className="text-base" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
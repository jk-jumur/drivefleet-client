"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSlider = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

  const currentSlide = sliderData[currentIndex];
  const theme = currentSlide.themeColor;

  return (
    <section className="relative h-[68vh] w-full overflow-hidden bg-[#07111d] sm:h-[74vh] md:h-[80vh]">
      <div className="network-grid absolute inset-0 z-0 opacity-30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 h-full w-full"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.badge}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-65"
          />
          {/* Lightened gradient overlay for better visibility */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.12),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.75)_0%,rgba(2,6,23,0.55)_40%,rgba(2,6,23,0.2)_70%,rgba(2,6,23,0.1)_100%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentSlide.id}-content`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] backdrop-blur-md sm:text-[10px] ${theme.bgBadge}`}>
                  <span className={`h-2 w-2 rounded-full ${theme.dot} animate-pulse`} />
                  {currentSlide.badge}
                </div>

                <h1 className="text-3xl font-black leading-[0.96] tracking-[-0.06em] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.38)] sm:text-5xl lg:text-6xl">
                  {currentSlide.titleLine1}{" "}
                  <span className={`mt-2 block bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
                    {currentSlide.titleLine2}
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100 sm:text-base drop-shadow-md">
                  {currentSlide.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="inline-flex rounded-2xl border border-white/15 bg-slate-950/50 px-3 py-2 backdrop-blur-md sm:px-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-300 sm:text-[10px]">Rental Rate</span>
                    <span className={`ml-2 text-sm font-bold text-white sm:text-base ${theme.text}`}>{currentSlide.price}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/explore-cars"
                    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] px-4 py-2.5 text-xs font-bold text-white shadow-[0_14px_35px_rgba(94,141,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    Explore Cars
                    <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/add-car"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/60 px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_28px_rgba(2,6,23,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-slate-900/80 sm:px-5 sm:py-3 sm:text-sm"
                  >
                    List Your Car
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="glass-panel w-full max-w-sm rounded-[26px] border border-white/10 bg-slate-950/50 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.6)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Featured</p>
                  <p className="mt-1 text-lg font-bold text-white">Luxury Fleet</p>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Live
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Premium cars", value: "120+" },
                  { label: "Avg. rating", value: "4.9/5" },
                  { label: "Supports", value: "24/7" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                    <span className="text-lg font-black text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Current Show</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    {currentIndex + 1}/{sliderData.length}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {sliderData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                  aria-label="Previous Slide"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                  aria-label="Next Slide"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
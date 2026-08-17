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
    <section className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden bg-zinc-950 flex items-center">
      
      {/* Background Image with Smooth Sliding/Fading Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.badge}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
         
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950/70 via-zinc-950/30 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container (Full Width Banner Content) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8">
          
          {/* Left Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-start text-left"
              >
                {/* Badge */}
                <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg ${theme.bgBadge} text-white`}>
                  <span className={`flex h-2 w-2 rounded-full animate-pulse ${theme.dot}`}></span>
                  {currentSlide.badge}
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-[1.15]">
                  {currentSlide.titleLine1}{" "}
                  <span className={`bg-linear-to-r ${theme.accent} bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0`}>
                    {currentSlide.titleLine2}
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-zinc-200 max-w-xl drop-shadow-sm leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Price Tag */}
                <div className="mt-4 inline-block rounded-xl border border-white/15 bg-zinc-950/60 px-4 py-2 backdrop-blur-md shadow-md">
                  <span className="text-xs text-zinc-300">Rental Rate: </span>
                  <span className={`text-sm sm:text-base font-bold ${theme.text}`}>{currentSlide.price}</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href="/explore-cars"
                    className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm sm:text-base font-bold shadow-xl transition-all hover:scale-105 ${theme.button}`}
                  >
                    Explore Cars
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="/add-car"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-zinc-900/50 px-6 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-800"
                  >
                    List Your Car
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Controls Area (Navigation Buttons) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end h-full mt-4 lg:mt-0">
            <div className="flex flex-col gap-3 bg-zinc-950/75 p-4 sm:p-5 rounded-2xl border border-white/15 backdrop-blur-md w-full sm:w-auto shadow-2xl">
              <div className="flex items-center justify-between gap-6 sm:gap-8">
                <span className="text-xs sm:text-sm font-bold text-zinc-200 tracking-wider uppercase">
                  Hypercar {currentIndex + 1} / {sliderData.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/20 bg-zinc-900 text-white transition-all hover:border-white/50 shadow-md"
                    aria-label="Previous Slide"
                  >
                    <FiChevronLeft className="text-base sm:text-lg" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/20 bg-zinc-900 text-white transition-all hover:border-white/50 shadow-md"
                    aria-label="Next Slide"
                  >
                    <FiChevronRight className="text-base sm:text-lg" />
                  </button>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
                {sliderData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                      currentIndex === index ? `w-6 sm:w-8 ${theme.dot}` : "w-2 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
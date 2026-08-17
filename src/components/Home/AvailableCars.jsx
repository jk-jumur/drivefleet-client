// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// // স্লাইডার ডেটা (প্রত্যেক স্লাইডের জন্য আলাদা তথ্য ও ব্যাকগ্রাউন্ড ইমেজ)
// const sliderData = [
//   {
//     id: 1,
//     badge: "🔥 Premium Car Rental Experience",
//     titleLine1: "Luxury & Comfort",
//     titleLine2: "For Your Journey",
//     description: "Explore the finest collection of cars ready for your next adventure. Enjoy smooth rides, unbeatable prices, and 24/7 dedicated support.",
//     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
//     price: "৳2,500 / Day",
//   },
//   {
//     id: 2,
//     badge: "⚡ Fast & Secure Booking",
//     titleLine1: "Drive Your Dream",
//     titleLine2: "Supercars Today",
//     description: "Experience ultimate speed and performance. Choose from our exclusive fleet of sports and luxury vehicles with instant approval.",
//     image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
//     price: "৳5,000 / Day",
//   },
//   {
//     id: 3,
//     badge: "🛡️ 100% Verified Fleet",
//     titleLine1: "Family Trips &",
//     titleLine2: "Long Adventures",
//     description: "Spacious SUVs and comfortable sedans for your family getaways. Safe, reliable, and well-maintained cars at your doorstep.",
//     image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
//     price: "৳3,000 / Day",
//   },
// ];

// const Banner = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // অটো-প্লে স্লাইডার (প্রতি ৫ সেকেন্ড পর পর স্লাইড পরিবর্তন হবে)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
//   };

//   const currentSlide = sliderData[currentIndex];

//   return (
//     <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
//       {/* Background Glow Effects */}
//       <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
//       <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
//           {/* Left Animated Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide.id}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="flex flex-col items-start text-left"
//             >
//               {/* Badge */}
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-md">
//                 <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
//                 {currentSlide.badge}
//               </div>

//               {/* Title */}
//               <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//                 {currentSlide.titleLine1} <br />
//                 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                   {currentSlide.titleLine2}
//                 </span>
//               </h1>

//               {/* Description */}
//               <p className="mt-6 text-lg text-slate-300 sm:max-w-xl">
//                 {currentSlide.description}
//               </p>

//               {/* Action Buttons */}
//               <div className="mt-8 flex flex-wrap items-center gap-4">
//                 <Link
//                   href="/explore-cars"
//                   className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/35 transition-all hover:bg-blue-700 hover:shadow-blue-600/50"
//                 >
//                   Explore Cars
//                   <FiArrowRight className="transition-transform group-hover:translate-x-1" />
//                 </Link>
                
//                 <Link
//                   href="/add-car"
//                   className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-bold text-slate-200 backdrop-blur-md transition-all hover:bg-slate-800 hover:text-white"
//                 >
//                   List Your Car
//                 </Link>
//               </div>

//               {/* Stats / Highlights */}
//               <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800/80 pt-8 w-full">
//                 <div>
//                   <p className="text-2xl font-extrabold text-white">500+</p>
//                   <p className="text-xs text-slate-400 mt-1">Available Cars</p>
//                 </div>
//                 <div>
//                   <p className="text-2xl font-extrabold text-white">100%</p>
//                   <p className="text-xs text-slate-400 mt-1">Verified Owners</p>
//                 </div>
//                 <div>
//                   <p className="text-2xl font-extrabold text-white">24/7</p>
//                   <p className="text-xs text-slate-400 mt-1">Customer Support</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Right Animated Image Card & Controls */}
//           <div className="relative">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1.05 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-3 shadow-2xl"
//               >
//                 <div className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-slate-800">
//                   <Image
//                     src={currentSlide.image}
//                     alt="Car Slider"
//                     fill
//                     priority
//                     sizes="(max-width: 768px) 100vw, 500px"
//                     className="object-cover transition-transform duration-700 hover:scale-105"
//                   />
                  
//                   {/* Floating Price Badge */}
//                   <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
//                     <p className="text-xs text-slate-400">Starting from</p>
//                     <p className="text-lg font-bold text-blue-400">{currentSlide.price}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Slider Navigation Buttons (Arrows & Dots) */}
//             <div className="mt-6 flex items-center justify-between px-2">
//               {/* Dots Indicator */}
//               <div className="flex items-center gap-2">
//                 {sliderData.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`h-2.5 rounded-full transition-all ${
//                       currentIndex === index ? "w-8 bg-blue-600" : "w-2.5 bg-slate-700 hover:bg-slate-600"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Prev / Next Buttons */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={handlePrev}
//                   className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
//                   aria-label="Previous Slide"
//                 >
//                   <FiChevronLeft className="text-xl" />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
//                   aria-label="Next Slide"
//                 >
//                   <FiChevronRight className="text-xl" />
//                 </button>
//               </div>
//             </div>

//             <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-2xl pointer-events-none"></div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
















//1number


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const HeroSlider = ({ sliderData }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [sliderData.length]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
//   };

//   const currentSlide = sliderData[currentIndex];
//   const theme = currentSlide.themeColor;

//   return (
//     <section className="relative min-h-[85vh] sm:min-h-[90vh] w-full overflow-hidden bg-zinc-950 flex items-center">
      
//       {/* Background Image & Overlay */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide.id}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="absolute inset-0 z-0"
//         >
//           <Image
//             src={currentSlide.image}
//             alt={currentSlide.badge}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-center"
//           />
//           {/* ওভারলে আরও হালকা করে দেওয়া হয়েছে যাতে ইমেজ একদম পরিষ্কার ও উজ্জ্বল দেখায় */}
//           <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-950/25 to-transparent"></div>
//           <div className="absolute inset-0 bg-black/10"></div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Container */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12">
//         <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8">
          
//           {/* Left Content Area */}
//           <div className="lg:col-span-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentSlide.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="flex flex-col items-start text-left"
//               >
//                 {/* Badge */}
//                 <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg ${theme.bgBadge}`}>
//                   <span className={`flex h-2 w-2 rounded-full animate-pulse ${theme.dot}`}></span>
//                   {currentSlide.badge}
//                 </div>

//                 {/* Main Heading */}
//                 <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-[1.15]">
//                   {currentSlide.titleLine1}{" "}
//                   <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0`}>
//                     {currentSlide.titleLine2}
//                   </span>
//                 </h1>

//                 {/* Description with proper spacing and leading */}
//                 <p className="mt-4 text-sm sm:text-base text-zinc-200 max-w-xl drop-shadow-sm leading-relaxed">
//                   {currentSlide.description}
//                 </p>

//                 {/* Price Tag */}
//                 <div className="mt-4 inline-block rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-2 backdrop-blur-md shadow-md">
//                   <span className="text-xs text-zinc-300">Rental Rate: </span>
//                   <span className={`text-sm sm:text-base font-bold ${theme.text}`}>{currentSlide.price}</span>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="mt-5 flex flex-wrap items-center gap-3">
//                   <Link
//                     href="/explore-cars"
//                     className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm sm:text-base font-bold shadow-xl transition-all hover:scale-105 ${theme.button}`}
//                   >
//                     Explore Cars
//                     <FiArrowRight className="transition-transform group-hover:translate-x-1" />
//                   </Link>
                  
//                   <Link
//                     href="/add-car"
//                     className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-zinc-900/50 px-6 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-zinc-800"
//                   >
//                     List Your Car
//                   </Link>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Controls Area */}
//           <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end h-full mt-4 lg:mt-0">
//             <div className="flex flex-col gap-3 bg-zinc-950/85 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md w-full sm:w-auto shadow-2xl">
//               <div className="flex items-center justify-between gap-6 sm:gap-8">
//                 <span className="text-xs sm:text-sm font-bold text-zinc-200 tracking-wider uppercase">
//                   Hypercar {currentIndex + 1} / {sliderData.length}
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={handlePrev}
//                     className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900 text-white transition-all hover:border-white/40 shadow-md"
//                     aria-label="Previous Slide"
//                   >
//                     <FiChevronLeft className="text-base sm:text-lg" />
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-zinc-900 text-white transition-all hover:border-white/40 shadow-md"
//                     aria-label="Next Slide"
//                   >
//                     <FiChevronRight className="text-base sm:text-lg" />
//                   </button>
//                 </div>
//               </div>

//               {/* Progress Indicators */}
//               <div className="flex items-center gap-1.5 sm:gap-2 mt-1">
//                 {sliderData.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`h-1.5 sm:h-2 rounded-full transition-all ${
//                       currentIndex === index ? `w-6 sm:w-8 ${theme.dot}` : "w-2 bg-zinc-700 hover:bg-zinc-500"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;










//2number


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HeroSlider = ({ sliderData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // অটো স্লাইড হবে প্রতি ৫ সেকেন্ড পর পর
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
          {/* লাইট এবং ক্লিন লুক রাখার জন্য হালকা গ্রেডিয়েন্ট ওভারলে */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-zinc-950/30 to-transparent"></div>
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
                  <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0`}>
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
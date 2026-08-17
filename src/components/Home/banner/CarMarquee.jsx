"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CarMarquee = ({ sliderData }) => {
  return (
    <div className="flex overflow-hidden w-full py-16 bg-white cursor-pointer">
      <motion.div
        className="flex gap-8"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        // মাউস নিলে অ্যানিমেশন থামবে
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...sliderData, ...sliderData].map((car, index) => (
          <motion.div
            key={index}
            className="relative w-[320px] sm:w-[500px] h-[300px] sm:h-[400px] shrink-0 rounded-3xl overflow-hidden shadow-lg border border-zinc-200 transition-all duration-500"
            // হোভার করলে থিম কালার অনুযায়ী এফেক্ট
            whileHover={{ scale: 1.05, borderColor: "transparent" }}
          >
            <Image
              src={car.image}
              alt={car.badge}
              fill
              className="object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-all duration-500 group">
              {/* এই অংশটুকু হোভার করলে থিম কালার অনুযায়ী পরিবর্তন হবে */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm">
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase self-start mb-3 text-white ${car.themeColor.bgBadge}`}>
                  {car.badge}
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">{car.titleLine1} {car.titleLine2}</h3>
                <p className="text-white/90 text-lg font-semibold">{car.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarMarquee;
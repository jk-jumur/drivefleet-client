import React from "react";
import Image from "next/image";

const CarBusinessShowcase = () => {
  const myImage = "/images/scene.gif"; 

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-sky-100 via-sky-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10">
          
          {/* Stylish Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Drive Smarter, <span className="text-blue-600 dark:text-blue-400">Rent Faster.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium">
            Experience the ultimate freedom on the road with seamless booking and a premier fleet designed for your comfort.
          </p>
        </div>

        {/* Clean Full View Image Container */}
        <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] overflow-hidden">
          <Image
            src={myImage}
            alt="DriveFleet Car Showcase"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default CarBusinessShowcase;







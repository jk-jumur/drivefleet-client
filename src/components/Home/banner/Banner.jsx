import Image from "next/image";
import { sliderData } from "@/data/sliderData";

import HeroSlider from "./HeroSlider";


const Banner = () => {
  const firstSlide = sliderData[0];

  return (
    <section className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Image Base - Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={firstSlide.image}
          alt={firstSlide.badge}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950/70 via-zinc-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div> 
      </div>

      {/* Slider Component */}
      <div className="relative z-10 w-full">
        {/* <CarMarquee sliderData={sliderData} /> */}
        <HeroSlider sliderData={sliderData}/>
      </div>
    </section>
  );
};

export default Banner;
import Image from "next/image";
import ActionButtons from "./ActionButtons";

export default function CarCard({ car }) {
  return (
    <div className="group relative w-full max-w-sm rounded-3xl bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 dark:from-slate-900 dark:via-slate-900/90 dark:to-cyan-950/30 backdrop-blur-xl p-5 shadow-xl border border-white/60 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between">
      
      {/* Top Section: Image & Status */}
      <div>
        <div className="relative overflow-hidden rounded-2xl h-48 w-full shadow-md">
          <Image 
            src={car.image} 
            alt={car.carName || "Car Image"} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest shadow-lg">
            {car.availabilityStatus}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-4">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">{car.carType}</span>
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-white mt-0.5 line-clamp-1">{car.carName}</h3>
            </div>
            <div className="text-right">
              <span className="text-lg font-black text-slate-900 dark:text-white">৳{car.dailyRentPrice}</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">/ day</span>
            </div>
          </div>

          {/* Specs Details */}
          <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl shadow-sm">
              <span>💺</span> {car.seats || 2} Seats
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl shadow-sm truncate">
              <span>📍</span> {car.pickupLocation}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5">
        
      </div>
         <ActionButtons/>
    </div>
  );
}
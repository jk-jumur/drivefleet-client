import Image from "next/image";
import Link from "next/link";

const CarCard = ({ car }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/50">

      {/* Top Image Container */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
        <Image
          src={car.image}
          alt={car.carName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Modern Dark Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

        {/* Car Type Category Badge */}
        <div className="absolute left-3 top-3 z-20">
          <span className="rounded-lg bg-slate-900/80 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-md backdrop-blur-md border border-white/15">
            {car.carType}
          </span>
        </div>

        {/* Live Availability Status Badge */}
        <div className="absolute right-3 top-3 z-20">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md backdrop-blur-md ${
              car.availabilityStatus === "Available"
                ? "bg-emerald-500 text-white shadow-emerald-500/30 border border-emerald-300/40"
                : "bg-rose-500 text-white shadow-rose-500/30 border border-rose-300/40"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-white animate-ping" />
            {car.availabilityStatus}
          </span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex flex-1 flex-col pt-4">

        {/* Title & Pricing Header */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
              {car.carName}
            </h3>
            <p className="line-clamp-1 text-xs text-slate-500 leading-normal dark:text-slate-400">
              {car.description || "High-performance luxury vehicle designed for ultimate comfort."}
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-base font-black text-blue-600 dark:text-blue-400">
              ৳{car.dailyRentPrice?.toLocaleString()}
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Per Day
            </p>
          </div>
        </div>

        {/* Specifications Grid */}
        <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-3 border border-slate-100 dark:bg-slate-950/40 dark:border-slate-800/80">

          {/* Seats Info */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Capacity</p>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{car.seatCapacity} Persons</p>
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Pickup</p>
              <p className="truncate text-xs font-bold text-slate-700 dark:text-slate-300">{car.pickupLocation}</p>
            </div>
          </div>

        </div>

        {/* Action CTA Button */}
        <div className="mt-auto">
          <Link
            href={`/cars/${car._id}`}
            className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/40 active:scale-[0.98]"
          >
            <span>View Details</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </article>
  );
};

export default CarCard;
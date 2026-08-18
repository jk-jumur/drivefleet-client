import Image from "next/image";
import Link from "next/link";

const CarCard = ({ car }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,244,255,0.95),rgba(226,242,255,0.95))] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_26px_60px_rgba(91,124,255,0.18)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(14,25,38,0.96),rgba(12,20,35,0.98))] dark:shadow-slate-950/50">

      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950">
        <Image
          src={car.image}
          alt={car.carName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-90" />

        <div className="absolute left-3 top-3 z-20">
          <span className="rounded-lg border border-white/15 bg-slate-900/80 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-md backdrop-blur-md">
            {car.carType}
          </span>
        </div>

        <div className="absolute right-3 top-3 z-20">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-md backdrop-blur-md ${
              car.availabilityStatus === "Available"
                ? "border border-emerald-300/40 bg-emerald-500 text-white shadow-emerald-500/30"
                : "border border-rose-300/40 bg-rose-500 text-white shadow-rose-500/30"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-white animate-ping" />
            {car.availabilityStatus}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-cyan-300">
              {car.carName}
            </h3>
            <p className="line-clamp-1 text-xs leading-normal text-slate-500 dark:text-slate-400">
              {car.description || "High-performance luxury vehicle designed for ultimate comfort."}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-base font-black text-blue-600 dark:text-cyan-300">
              ৳{car.dailyRentPrice?.toLocaleString()}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Per Day
            </p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2 rounded-2xl border border-slate-100 bg-slate-50/90 p-3 dark:border-slate-800/80 dark:bg-slate-950/40">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-600 dark:from-blue-500/20 dark:to-cyan-500/20 dark:text-cyan-300">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Capacity</p>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{car.seatCapacity} Persons</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-blue-500/15 text-indigo-600 dark:from-indigo-500/20 dark:to-blue-500/20 dark:text-cyan-300">
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

        <div className="mt-auto">
          <Link
            href={`/cars/${car._id}`}
            className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] py-3 text-xs font-bold text-white shadow-[0_18px_30px_rgba(94,141,255,0.28)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_22px_40px_rgba(94,141,255,0.35)] active:scale-[0.98]"
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
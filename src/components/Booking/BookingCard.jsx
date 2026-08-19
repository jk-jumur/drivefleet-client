import Image from "next/image";
import { FaMoneyBillWave, FaCalendarAlt, FaUserTie, FaStickyNote } from "react-icons/fa";

export default function BookingCard({ booking }) {
  // Date formatting
  const formattedDate = booking.bookingDate 
    ? new Date(booking.bookingDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : new Date().toLocaleDateString();

  return (
    <div className="group flex flex-col sm:flex-row items-center gap-6 rounded-3xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.01]">
      
      {/* 1. Left Side: Car Image */}
      {booking.image && (
        <div className="relative h-36 w-full sm:w-56 shrink-0 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
          <Image
            src={booking.image}
            alt={booking.carName || "Car Image"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* 2. Right Side: Title on top, other info below */}
      <div className="flex-1 w-full space-y-4">
        
        {/* Car Name / Title */}
        <div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            {booking.carName || "Car Rental"}
          </h3>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mt-0.5">
            Confirmed Booking
          </p>
        </div>

        {/* Other Information Grid (Below Title) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-white/10 text-sm">
          
          {/* Total Price */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FaMoneyBillWave />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Price</span>
              <span className="font-extrabold text-slate-900 dark:text-white">৳{booking.totalPrice}</span>
            </div>
          </div>

          {/* Booking Date */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <FaCalendarAlt />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Booking Date</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{formattedDate}</span>
            </div>
          </div>

          {/* Driver Needed */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <FaUserTie />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Driver Needed</span>
              <span className="font-bold uppercase tracking-wider text-xs text-indigo-600 dark:text-indigo-400">
                {booking.driverNeeded || "No"}
              </span>
            </div>
          </div>

        </div>

        {/* Special Note (If available) */}
        {booking.specialNote && (
          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-white/5 flex items-center gap-2">
            <FaStickyNote className="text-amber-500 shrink-0" />
            <span className="italic">"{booking.specialNote}"</span>
          </div>
        )}

      </div>
    </div>
  );
}
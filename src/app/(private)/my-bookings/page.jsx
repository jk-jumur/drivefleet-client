import { getBookingsByUserFromAPI } from "@/services/bookingService";
import BookingCard from "@/components/Booking/BookingCard";
import Link from "next/link";
import { FaCarSide, FaArrowRight, FaBookmark } from "react-icons/fa";

export default async function MyBookingsPage() {
  const userEmail = "demo@drivefleet.com";
  const bookings = await getBookingsByUserFromAPI(userEmail);

  return (
    <div className="container mx-auto px-6 md:px-12 py-10 min-h-[70vh]">
      
      {/* Stylish Header Section */}
      <div className="mb-10 text-left border-l-4 border-cyan-500 pl-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-wider mb-2">
          <FaBookmark className="text-[10px]" /> Reservation Dashboard
        </div>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
          My Booked Cars
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
          Track and manage your active vehicle reservations, scheduled dates, and special requests all in one place.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 px-4 rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/40 dark:to-slate-950 text-center shadow-sm">
          <div className="relative mb-6 flex items-center justify-center">
            <div className="absolute h-24 w-24 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 animate-ping" />
            <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-cyan-500/30">
              <FaCarSide className="text-3xl animate-bounce" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
            No Active Bookings Found
          </h3>
          <p className="max-w-md text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            You havent reserved any vehicles yet. Explore our exclusive fleet and book your dream ride today.
          </p>
          <Link
            href="/cars"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Explore Fleet & Cars</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      ) : (
        /* Left-aligned cards with proper space in between */
        <div className="space-y-6 max-w-5xl">
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import BookingModal from "./BookingModal"; 
import { createBookingInAPI } from "@/services/bookingService";
import { authClient } from "@/lib/auth-client";


export default function BookingForm({ car }) {
  // 2. Fetch the active user session using Better Auth client hook
  const { data: session } = authClient.useSession();

  const [booking, setBooking] = useState({ driverNeeded: "Yes", specialNote: "" });
  const [isBooked, setIsBooked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (!car) return;

    if (isBooked) {
      toast.error("You have already booked this car.");
      return;
    }

    setIsModalOpen(true);
  };

  // 3. Handle modal confirmation and direct backend API call with dynamic user email
  const handleConfirmBooking = async () => {
    setLoading(true);
    
    try {
      const bookingPayload = {
        carId: car._id,
        // Dynamically use the logged-in user's email, falling back to a demo email if unavailable
        userEmail: session?.user?.email || "demo@drivefleet.com",
        carName: car.carName,
        image: car.image,
        totalPrice: car.dailyRentPrice,
        driverNeeded: booking.driverNeeded,
        specialNote: booking.specialNote || "No special requests",
      };

      // Send the booking payload to the backend API
      const result = await createBookingInAPI(bookingPayload);

      if (result.success) {
        toast.success("Car booked successfully!");
        setIsBooked(true);
        setIsModalOpen(false);
      } else {
        toast.error(result.message || "Failed to book the car.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book the car. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <aside className="lg:sticky lg:top-24 h-fit rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 dark:border-cyan-500/20 dark:bg-gradient-to-br dark:from-[#0b0f19] dark:to-[#040812] dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300">
        
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100 dark:border-white/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400">
              Instant Reservation
            </span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight mt-0.5 text-slate-900 dark:text-white">
              Book This Car
            </h3>
          </div>
          <div className="h-11 w-11 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30">
            <FaShieldAlt className="text-lg" />
          </div>
        </div>

        {isBooked && (
          <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm font-semibold text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-300 flex items-center gap-3">
            <FaCheckCircle className="text-lg text-emerald-600 shrink-0" />
            <span>Successfully reserved! Check My Bookings.</span>
          </div>
        )}

        <form onSubmit={handleOpenModal} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Driver Needed (Yes/No)
            </label>
            <select
              value={booking.driverNeeded}
              onChange={(e) => setBooking({ ...booking, driverNeeded: e.target.value })}
              disabled={isBooked}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-cyan-400"
            >
              <option value="Yes" className="dark:bg-slate-900">Yes (+Professional Chauffeur)</option>
              <option value="No" className="dark:bg-slate-900">No (Self Drive)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Special Note / Instructions
            </label>
            <textarea
              rows={3}
              value={booking.specialNote}
              onChange={(e) => setBooking({ ...booking, specialNote: e.target.value })}
              placeholder="Any custom drop-off point or extra requirements..."
              disabled={isBooked}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm font-semibold text-slate-900 outline-none transition-all focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:border-cyan-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isBooked}
            className={`w-full rounded-2xl px-6 py-4 text-sm md:text-base font-black uppercase tracking-wider text-white transition-all duration-300 shadow-lg ${
              isBooked
                ? "bg-slate-200 text-slate-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500 shadow-none"
                : "bg-linear-to-r from-[#50abf1] via-[#5b87f4] to-[#7f57e8] hover:opacity-95 shadow-blue-500/25 dark:shadow-[0_0_20px_rgba(91,135,244,0.4)] hover:scale-[1.02] active:scale-95"
            }`}
          >
            {isBooked ? "Confirmed & Reserved" : "Confirm Booking Now"}
          </button>

          <p className="text-center text-xs font-medium text-slate-400 pt-1">
            🔒 Secure booking verification with instant confirmation.
          </p>
        </form>
      </aside>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
        bookingData={booking}
        onConfirm={handleConfirmBooking}
        loading={loading}
      />
    </>
  );
}
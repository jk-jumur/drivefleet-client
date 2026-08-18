
"use client";

import { useEffect, useState } from "react";

const getStoredBookings = () => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("drivefleet-bookings");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const MyBookingPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(getStoredBookings());
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-black tracking-tight text-slate-900 dark:text-white">My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No bookings found yet.
          </div>
        ) : (
          <div className="grid gap-5">
            {bookings.map((booking) => (
              <div key={booking._id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Booking</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{booking.carName}</h2>
                  </div>
                  <div className="rounded-xl bg-blue-50 px-4 py-2 text-right dark:bg-blue-950/30">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Total Price</p>
                    <p className="text-xl font-black text-blue-600 dark:text-blue-400">৳{booking.totalPrice}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Booking Date</p>
                    <p className="mt-2 font-bold text-slate-900 dark:text-white">{booking.bookingDate}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Driver Needed</p>
                    <p className="mt-2 font-bold text-slate-900 dark:text-white">{booking.driverNeeded}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Note</p>
                    <p className="mt-2 font-bold text-slate-900 dark:text-white">{booking.specialNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyBookingPage;
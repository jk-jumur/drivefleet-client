"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCarByIdFromAPI } from "@/services/carService";

const getStoredBookings = () => {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("drivefleet-bookings");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveStoredBookings = (bookings) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("drivefleet-bookings", JSON.stringify(bookings));
};

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [booking, setBooking] = useState({ driverNeeded: "Yes", specialNote: "" });

  useEffect(() => {
    const loadCar = async () => {
      try {
        const selectedCar = await getCarByIdFromAPI(id);
        setCar(selectedCar || null);
      } catch (error) {
        console.error("Failed to fetch car from API:", error);
        setCar(null);
      }
    };

    if (id) loadCar();
  }, [id]);

  const handleBooking = () => {
    if (!car) return;

    const currentBookings = getStoredBookings();
    const newBooking = {
      _id: `booking-${Date.now()}`,
      userEmail: "demo@drivefleet.com",
      carName: car.carName,
      totalPrice: car.dailyRentPrice,
      driverNeeded: booking.driverNeeded,
      specialNote: booking.specialNote || "No additional note",
      bookingDate: new Date().toISOString().slice(0, 10),
    };

    saveStoredBookings([newBooking, ...currentBookings]);
    alert("Booking created successfully!");
  };

  if (!car) {
    return <div className="min-h-screen flex items-center justify-center">Loading car details...</div>;
  }

  return (
    <main className="bg-slate-50 px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/explore-cars" className="mb-6 inline-flex text-sm font-bold text-blue-600">
          ← Back to cars
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="relative h-[420px] w-full overflow-hidden">
              <Image
                src={car.image}
                alt={car.carName}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                    {car.carType}
                  </p>
                  <h1 className="text-3xl font-black md:text-4xl">{car.carName}</h1>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-blue-600 dark:text-blue-400">৳{car.dailyRentPrice}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Per day</p>
                </div>
              </div>

              <p className="mb-6 text-slate-600 dark:text-slate-300">{car.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><strong>Seats:</strong> {car.seatCapacity}</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><strong>Pickup:</strong> {car.pickupLocation}</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><strong>Owner:</strong> {car.ownerName}</div>
                <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><strong>Status:</strong> {car.availabilityStatus}</div>
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-5 text-2xl font-black">Book this car</h2>

            <div className="space-y-4">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Driver Needed
                <select
                  value={booking.driverNeeded}
                  onChange={(e) => setBooking({ ...booking, driverNeeded: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>

              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Special Note
                <textarea
                  rows={4}
                  value={booking.specialNote}
                  onChange={(e) => setBooking({ ...booking, specialNote: e.target.value })}
                  placeholder="Add any preferences or extra notes"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-800"
                />
              </label>

              <button
                onClick={handleBooking}
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CarDetailsPage;
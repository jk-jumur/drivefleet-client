"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CarCard from "../Cars/ CarCard";


const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/cars");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch cars");
        }

        const availableCars = data.cars
          .filter((car) => car.availabilityStatus === "Available")
          .slice(0, 6);

        setCars(availableCars);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
        setError("Unable to load available cars.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (error) {
    return (
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-4 py-16 md:py-24 bg-linear-to-b from-slate-50 via-slate-100/50 to-slate-50 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950">
      <div className="mx-auto max-w-7xl">

        {/* Section Header with Top Explore Button */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/60 pb-8 dark:border-slate-800">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              Find Your Ride
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Available Cars
            </h2>

            <p className="max-w-xl text-sm text-slate-500 md:text-base dark:text-slate-400 leading-relaxed">
              Explore our selection of reliable vehicles and find the right car for your next journey.
            </p>
          </div>

          {/* Top Explore All Cars Button */}
          <div className="flex justify-center shrink-0">
            <Link
              href="/cars"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-xs font-bold text-white shadow-md shadow-slate-900/20 transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 dark:bg-slate-800 dark:hover:bg-blue-600 active:scale-[0.98]"
            >
              <span>Explore All Cars</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Loading Spinner State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
              <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 animate-pulse">
              Loading Available Cars...
            </p>
          </div>
        ) : cars.length > 0 ? (
          /* Cars Grid */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400 text-sm font-medium">
            No available cars found at the moment.
          </div>
        )}

      </div>
    </section>
  );
};

export default AvailableCars;
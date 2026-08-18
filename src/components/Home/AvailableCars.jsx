"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CarCard from "../Cars/ CarCard";
import { getCarsFromAPI } from "@/services/carService";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const apiCars = await getCarsFromAPI();
        setCars(apiCars);
      } catch (error) {
        console.error("Failed to fetch cars from API:", error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, []);

  const visibleCars = cars.filter((car) => car.availabilityStatus === "Available").slice(0, 6);

  return (
    <section className="relative px-4 py-20 md:py-24 bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.2),transparent_28%),linear-gradient(180deg,#eef6ff_0%,#eaf3ff_38%,#f5f9ff_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.15),transparent_28%),linear-gradient(180deg,#06131f_0%,#0a1828_34%,#0a1d2d_100%)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 border-b border-slate-200/80 pb-8 md:flex-row md:items-end md:justify-between dark:border-slate-800/80">
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-block rounded-full bg-linear-to-r from-[#eaf4ff] via-[#ecf9f8] to-[#edf0ff] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-700 shadow-[0_8px_18px_rgba(94,141,255,0.12)] dark:from-[#13273d] dark:via-[#102133] dark:to-[#132b3d] dark:text-cyan-100">
              Find your ride
            </span>
                <br/>
            <h2 className="section-title text-3xl font-black tracking-tight md:text-4xl">
              Available Cars
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base dark:text-slate-300">
              Explore our curated fleet of premium vehicles and book the right car for your next memorable drive.
            </p>
          </div>

          <Link
            href="/explore-cars"
            className="group inline-flex items-center justify-center gap-2 self-center rounded-xl bg-linear-to-r from-slate-900 via-slate-800 to-indigo-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(91,124,255,0.25)] dark:from-slate-800 dark:via-slate-800 dark:to-sky-700 md:self-auto"
          >
            Explore All Cars
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-[5px] border-blue-500/15" />
              <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-blue-600 border-r-sky-400 animate-spin" />
              <div className="absolute inset-3 rounded-full border-[4px] border-transparent border-b-blue-500 border-l-cyan-300 animate-[spin_1.8s_linear_infinite_reverse]" />
            </div>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
              Loading fleet
            </p>
          </div>
        ) : visibleCars.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No cars available right now.
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableCars;
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getCarsFromAPI } from "@/services/carService";

const ExploreCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Explore Cars | DriveFleet";

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

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch = car.carName.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" || car.carType === filter;
      return matchesSearch && matchesFilter;
    });
  }, [cars, search, filter]);

  const carTypes = ["All", ...new Set(cars.map((car) => car.carType))];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_24%),linear-gradient(180deg,#f7fbff_0%,#eef5ff_40%,#f7faff_100%)] px-4 py-12 dark:bg-[radial-gradient(circle_at_top,_rgba(103,217,214,0.12),transparent_24%),linear-gradient(180deg,#07111d_0%,#0b1729_34%,#081521_100%)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Explore fleet
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Rent your perfect car
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by car name"
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            >
              {carTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex min-h-[40vh] items-center justify-center">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-[5px] border-blue-500/15" />
              <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-blue-600 border-r-sky-400 animate-spin" />
              <div className="absolute inset-3 rounded-full border-[4px] border-transparent border-b-blue-500 border-l-cyan-300 animate-[spin_1.8s_linear_infinite_reverse]" />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car) => (
              <article
                key={car._id}
                className="group relative flex flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(237,244,255,0.95),rgba(226,242,255,0.95))] p-2.5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_20px_45px_rgba(91,124,255,0.15)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(14,25,38,0.96),rgba(12,20,35,0.98))] dark:shadow-slate-950/50"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-[18px] bg-slate-100 dark:bg-slate-950">
                  <Image
                    src={car.image}
                    alt={car.carName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-90" />

                  <div className="absolute left-2.5 top-2.5 z-20">
                    <span className="rounded-md border border-white/15 bg-slate-900/80 px-2 py-1 text-[9px] font-bold tracking-wide text-white shadow-md backdrop-blur-md">
                      {car.carType}
                    </span>
                  </div>

                  <div className="absolute right-2.5 top-2.5 z-20">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-bold tracking-wider uppercase shadow-md backdrop-blur-md ${
                        car.availabilityStatus === "Available"
                          ? "border border-emerald-300/40 bg-emerald-500 text-white shadow-emerald-500/30"
                          : "border border-rose-300/40 bg-rose-500 text-white shadow-rose-500/30"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                      {car.availabilityStatus}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col pt-3">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h2 className="text-[0.98rem] font-black tracking-[-0.03em] text-slate-900 transition-all duration-300 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-cyan-300">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
                          {car.carName}
                        </span>
                      </h2>
                      <p className="line-clamp-1 text-[10px] leading-normal text-slate-500 dark:text-slate-400">
                        {car.pickupLocation}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <p className="text-sm font-black text-blue-600 dark:text-cyan-300">৳{Number(car.dailyRentPrice).toLocaleString()}</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Per Day</p>
                    </div>
                  </div>

                  <p className="mb-3 line-clamp-3 text-[11px] leading-5 text-slate-600 dark:text-slate-300">
                    {car.description || "High-performance luxury vehicle designed for ultimate comfort."}
                  </p>

                  <div className="mb-3 grid grid-cols-2 gap-2 rounded-xl border border-slate-100 bg-slate-50/90 p-2 dark:border-slate-800/80 dark:bg-slate-950/40">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-600 dark:from-blue-500/20 dark:to-cyan-500/20 dark:text-cyan-300">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400">Seats</p>
                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{car.seatCapacity}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/15 to-blue-500/15 text-indigo-600 dark:from-indigo-500/20 dark:to-blue-500/20 dark:text-cyan-300">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[7px] font-bold uppercase tracking-wider text-slate-400">Booked</p>
                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{car.bookingCount}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/cars/${car._id}`}
                    className="group/btn relative mt-auto flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] py-2 text-[11px] font-bold text-white shadow-[0_12px_25px_rgba(94,141,255,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_30px_rgba(94,141,255,0.35)] active:scale-[0.98]"
                  >
                    <span>View Details</span>
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && filteredCars.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No cars match your search or filter.
          </div>
        )}
      </div>
    </main>
  );
};

export default ExploreCarsPage;
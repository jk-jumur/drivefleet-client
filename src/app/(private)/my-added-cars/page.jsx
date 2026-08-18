"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const readSavedCars = () => {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem("drivefleet-cars") || "[]");
  } catch {
    return [];
  }
};

const saveSavedCars = (cars) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("drivefleet-cars", JSON.stringify(cars));
};

const MyAddedCarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(readSavedCars());
  }, []);

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car._id !== id);
    setCars(updatedCars);
    saveSavedCars(updatedCars);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              My listings
            </p>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">My Added Cars</h1>
          </div>
          <Link href="/add-car" className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
            Add New Car
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => (
            <article key={car._id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.carName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="text-xl font-black text-slate-900 dark:text-white">{car.carName}</h2>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {car.availabilityStatus}
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{car.description}</p>
                <div className="mb-5 flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-200">
                  <span>{car.carType}</span>
                  <span className="text-blue-600 dark:text-blue-400">৳{car.dailyRentPrice}</span>
                </div>
                <div className="flex gap-3">
                  <Link href={`/update-car/${car._id}`} className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white dark:bg-slate-700">
                    Update
                  </Link>
                  <button onClick={() => handleDelete(car._id)} className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white">
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyAddedCarsPage;
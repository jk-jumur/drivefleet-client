"use client";

import { useEffect, useState } from "react";
import { getMyAddedCarsFromAPI } from "@/services/carService";
import AddCarCard from "@/components/MyAddedCars/AddedCarCard";

export default function MyAddedCarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCars = async () => {
      const data = await getMyAddedCarsFromAPI();
      setCars(data);
      setLoading(false);
    };

    loadCars();
  }, []);

  // Delete করার পর state থেকে car remove করবে
  const handleCarDeleted = (carId) => {
    setCars((previousCars) =>
      previousCars.filter(
        (car) => String(car._id) !== String(carId)
      )
    );
  };

const handleCarUpdated = (updatedCar) => {
  setCars((previousCars) =>
    previousCars.map((car) =>
      String(car._id) === String(updatedCar._id)
        ? updatedCar
        : car
    )
  );
};

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-slate-500">
          Loading your cars...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
          My Added Cars ({cars.length})
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your listings and keep track of your fleet.
        </p>
      </div>

      {cars.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-3xl dark:border-slate-800">
          <p className="text-slate-400 font-medium">
            You haven't added any cars yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <AddCarCard
              key={car._id}
              car={car}
               onDeleted={handleCarDeleted}
                onUpdated={handleCarUpdated}
            />
          ))}
        </div>
      )}
    </div>
  );
}
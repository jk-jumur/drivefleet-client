
// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";

// const readSavedCars = () => {
//   if (typeof window === "undefined") return [];

//   try {
//     return JSON.parse(localStorage.getItem("drivefleet-cars") || "[]");
//   } catch {
//     return [];
//   }
// };

// const saveSavedCars = (cars) => {
//   if (typeof window === "undefined") return;
//   localStorage.setItem("drivefleet-cars", JSON.stringify(cars));
// };

const UpdateCarPage = () => {
  // const router = useRouter();
  // const { id } = useParams();
  // const [form, setForm] = useState({
  //   dailyRentPrice: "",
  //   description: "",
  //   availabilityStatus: "Available",
  //   image: "",
  //   carType: "SUV",
  //   pickupLocation: "",
  // });

  // useEffect(() => {
  //   const cars = readSavedCars();
  //   const selected = cars.find((car) => car._id === id);
  //   if (selected) {
  //     setForm({
  //       dailyRentPrice: selected.dailyRentPrice,
  //       description: selected.description,
  //       availabilityStatus: selected.availabilityStatus,
  //       image: selected.image,
  //       carType: selected.carType,
  //       pickupLocation: selected.pickupLocation,
  //     });
  //   }
  // }, [id]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const cars = readSavedCars();
  //   const updatedCars = cars.map((car) =>
  //     car._id === id ? { ...car, ...form, dailyRentPrice: Number(form.dailyRentPrice) } : car
  //   );

  //   saveSavedCars(updatedCars);
  //   router.push("/my-added-cars");
  // };

  return (
      <div>
          <h2>update page</h2>
      </div>
    // <main className="min-h-screen bg-slate-50 px-4 py-12 dark:bg-slate-950">
    //   <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    //     <h1 className="mb-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white">Update Car</h1>

    //     <form onSubmit={handleSubmit} className="space-y-5">
    //       <div className="grid gap-5 md:grid-cols-2">
    //         <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //           Daily Rent Price
    //           <input
    //             type="number"
    //             value={form.dailyRentPrice}
    //             onChange={(e) => setForm({ ...form, dailyRentPrice: e.target.value })}
    //             className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //           />
    //         </label>

    //         <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //           Car Type
    //           <select
    //             value={form.carType}
    //             onChange={(e) => setForm({ ...form, carType: e.target.value })}
    //             className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //           >
    //             <option value="SUV">SUV</option>
    //             <option value="Sedan">Sedan</option>
    //             <option value="Hatchback">Hatchback</option>
    //             <option value="Luxury">Luxury</option>
    //             <option value="Electric">Electric</option>
    //           </select>
    //         </label>
    //       </div>

    //       <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //         Pickup Location
    //         <input
    //           value={form.pickupLocation}
    //           onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
    //           className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //         />
    //       </label>

    //       <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //         Image URL
    //         <input
    //           value={form.image}
    //           onChange={(e) => setForm({ ...form, image: e.target.value })}
    //           className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //         />
    //       </label>

    //       <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //         Availability
    //         <select
    //           value={form.availabilityStatus}
    //           onChange={(e) => setForm({ ...form, availabilityStatus: e.target.value })}
    //           className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //         >
    //           <option value="Available">Available</option>
    //           <option value="Unavailable">Unavailable</option>
    //         </select>
    //       </label>

    //       <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
    //         Description
    //         <textarea
    //           rows={5}
    //           value={form.description}
    //           onChange={(e) => setForm({ ...form, description: e.target.value })}
    //           className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
    //         />
    //       </label>

    //       <button type="submit" className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
    //         Save Changes
    //       </button>
    //     </form>
    //   </div>
    // </main>
  );
};

export default UpdateCarPage;
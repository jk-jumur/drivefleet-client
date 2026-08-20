import { auth } from "@/lib/auth"; // আপনার বেটার-অথ কনফিগারেশন
import { headers } from "next/headers";
import { getMyAddedCarsFromAPI } from "@/services/carService";
import AddCarCard from "@/components/MyAddedCars/AddedCarCard";


export default async function MyAddedCarsPage() {
  // সার্ভার সাইডে রিকোয়েস্ট হেডার্সসহ সেশন ফেচ করা
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;

  // ইউজার ইমেইল না পেলে ফাঁকা অ্যারে দেখাবে
  const cars = userEmail ? await getMyAddedCarsFromAPI(userEmail) : [];

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
          <p className="text-slate-400 font-medium">You haven't added any cars yet or please log in.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <AddCarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
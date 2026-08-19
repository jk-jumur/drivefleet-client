import Link from "next/link";
import { getCarByIdFromAPI } from "@/services/carService";
import CarDetails from "@/components/Cars/CarDetails";

const CarDetailsPage = async ({ params }) => {
  // Next.js এর লেটেস্ট ভার্সনে params একটি Promise, তাই এটি await করতে হবে
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  let car = null;

  try {
    car = await getCarByIdFromAPI(id);
  } catch (error) {
    console.error("Failed to fetch car from API:", error);
  }

  if (!car) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400 font-medium">Car details not found or failed to load.</p>
            <Link href="/explore-cars" className="mt-4 inline-block text-blue-600 font-bold">← Back to all cars</Link>
        </div>
      </main>
    );
  }

  return <CarDetails car={car} />;
};

export default CarDetailsPage;
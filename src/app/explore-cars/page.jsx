import ExploreAllCarsCard from "@/components/ExploreAllCars/ExploreAllCarsCard";
import { getCarsFromAPI } from "@/services/carService";



export default async function ExploreCarsPage() {
  const cars = await getCarsFromAPI();

  return <ExploreAllCarsCard initialCars={cars} />;
};
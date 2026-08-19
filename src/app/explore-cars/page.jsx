import { getCarsFromAPI } from "@/services/carService";
import ExploreAllCars from "@/components/Home/ExploreAllCars";

export default async function ExploreCarsPage() {
  const cars = await getCarsFromAPI();

  return <ExploreAllCars initialCars={cars} />;
};
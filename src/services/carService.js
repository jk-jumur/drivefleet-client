const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const getCarsFromAPI = async () => {
  const response = await fetch(`${API_BASE_URL}/cars`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cars from backend");
  }

  const data = await response.json();
  return Array.isArray(data?.cars) ? data.cars : [];
};

export const getCarByIdFromAPI = async (id) => {
  const cars = await getCarsFromAPI();
  return cars.find((car) => String(car._id) === String(id)) || null;
};

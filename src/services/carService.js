const API_BASE_URL = "http://localhost:5000/api";

export const getCarsFromAPI = async () => {
  try {
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
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export const getCarByIdFromAPI = async (id) => {
  try {
  
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();
      if (data?.car) return data.car;
    }

   
    const cars = await getCarsFromAPI();
    return cars.find((car) => String(car._id) === String(id)) || null;
  } catch (error) {
    console.warn("Using safe fallback find for car details:", error.message);
    const cars = await getCarsFromAPI();
    return cars.find((car) => String(car._id) === String(id)) || null;
  }
};
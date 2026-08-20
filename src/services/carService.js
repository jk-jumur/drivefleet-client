const API_BASE_URL = "http://localhost:5000/api";

// 1. Fetch all cars from the backend
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

// 2. Fetch a single car by its unique ID
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

// 3. Fetch added cars specifically for the user by email
export const getMyAddedCarsFromAPI = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/my-added-cars?email=${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user added cars");
    }

    const data = await response.json();
    return Array.isArray(data?.cars) ? data.cars : [];
  } catch (error) {
    console.error("Error fetching my added cars:", error);
    return [];
  }
};

// 4. Delete a specific car listing by ID
export const deleteCarFromAPI = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to delete car");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting car:", error);
    return { success: false, message: error.message };
  }
};

// 5. Update a specific car listing by ID (নতুন অ্যাড করা হলো)
export const updateCarInAPI = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Failed to update car");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating car:", error);
    return { success: false, message: error.message };
  }
};
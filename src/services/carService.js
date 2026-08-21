import { authClient } from "@/lib/auth-client";

const API_BASE_URL = "https://drivefleet-server-alpha.vercel.app/api";

// ======================================================
// 1. Fetch all cars (PUBLIC)
// ======================================================
export const getCarsFromAPI = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

// ======================================================
// 2. Fetch single car by ID (PUBLIC)
// ======================================================
export const getCarByIdFromAPI = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const data = await response.json();

      if (data?.car) {
        return data.car;
      }
    }

    // Safe fallback
    const cars = await getCarsFromAPI();

    return (
      cars.find(
        (car) => String(car._id) === String(id)
      ) || null
    );
  } catch (error) {
    console.warn(
      "Using safe fallback for car details:",
      error.message
    );

    const cars = await getCarsFromAPI();

    return (
      cars.find(
        (car) => String(car._id) === String(id)
      ) || null
    );
  }
};

// ======================================================
// 3. Fetch logged-in user's added cars (PRIVATE)
// ======================================================
export const getMyAddedCarsFromAPI = async () => {
  try {
    const { data, error } = await authClient.token();

    

    if (error || !data?.token) {
      throw new Error("Authentication token not found");
    }

    const response = await fetch(
      `${API_BASE_URL}/cars/my-added-cars`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to fetch user added cars"
      );
    }

    return Array.isArray(result?.cars)
      ? result.cars
      : [];
  } catch (error) {
    console.error(
      "Error fetching my added cars:",
      error
    );

    return [];
  }
};

// ======================================================
// 4. Delete car listing (PRIVATE)
// ======================================================
export const deleteCarFromAPI = async (id) => {
  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      throw new Error("Authentication token not found");
    }

    const response = await fetch(
      `${API_BASE_URL}/cars/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to delete car"
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Error deleting car:",
      error
    );

    return {
      success: false,
      message: error.message,
    };
  }
};

// ======================================================
// 5. Update car listing (PRIVATE)
// ======================================================
export const updateCarInAPI = async (
  id,
  updatedData
) => {
  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      throw new Error("Authentication token not found");
    }

    const response = await fetch(
      `${API_BASE_URL}/cars/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify(updatedData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to update car"
      );
    }

    return result;
  } catch (error) {
    console.error(
      "Error updating car:",
      error
    );

    return {
      success: false,
      message: error.message,
    };
  }
};
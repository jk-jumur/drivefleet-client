import { authClient } from "@/lib/auth-client";

const API_BASE_URL = "https://drivefleet-server-alpha.vercel.app/api";

// 1. Create new booking (POST)
export const createBookingInAPI = async (bookingData) => {
  try {
    const { data, error } = await authClient.token();


    if (error || !data?.token) {
      throw new Error("Authentication token not found");
    }

    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to create booking"
      );
    }

    return result;
  } catch (error) {
    console.error("Error creating booking:", error);

    return {
      success: false,
      message: error.message,
    };
  }
};

// 2. Get logged-in user's bookings (GET)
export const getBookingsByUserFromAPI = async () => {
  try {
    const { data, error } = await authClient.token();

    if (error || !data?.token) {
      throw new Error("Authentication token not found");
    }

    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.message || "Failed to fetch user bookings"
      );
    }

    if (Array.isArray(result)) return result;

    return Array.isArray(result?.bookings)
      ? result.bookings
      : [];
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
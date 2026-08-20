const API_BASE_URL = "http://localhost:5000/api";

// ১. new booking create and submition function(POST)
export const createBookingInAPI = async (bookingData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, message: error.message };
  }
};

// 2 new user booking function (GET)
export const getBookingsByUserFromAPI = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings?email=${email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user bookings");
    }

    const data = await response.json();
    
    // ব্যাকএন্ড থেকে রেসপন্স অ্যারে আকারে আসলে বা অবজেক্টের ভেতর প্রপার্টি হিসেবে আসলে তা হ্যান্ডেল করা
    if (Array.isArray(data)) return data;
    return Array.isArray(data?.bookings) ? data.bookings : [];
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
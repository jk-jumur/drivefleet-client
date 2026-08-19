"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  Input,
  Button,
} from "@heroui/react";

const carTypes = [
  { key: "SUV", label: "SUV" },
  { key: "Sedan", label: "Sedan" },
  { key: "Hatchback", label: "Hatchback" },
  { key: "Luxury", label: "Luxury" },
  { key: "Electric", label: "Electric" },
  { key: "MPV", label: "MPV" },
 { key: "Hybrid", label: "Hybrid" },
  { key: "Crossover", label: "Crossover" },
  { key: "Sports", label: "Sports" },
  { key: "Coupe", label: "Coupe" },
  { key: "Convertible", label: "Convertible" },
  { key: "Van", label: "Van" },
];

const availabilityOptions = [
  { key: "Available", label: "Available" },
  { key: "Unavailable", label: "Unavailable" },
];

const initialFormData = {
  carName: "",
  dailyRentPrice: "",
  carType: "",
  image: "",
  seatCapacity: "",
  pickupLocation: "",
  description: "",
  availabilityStatus: "Available",
  ownerName: "DriveFleet",
  ownerEmail: "admin@drivefleet.com",
  bookingCount: 0,
};

const API_BASE_URL = "http://localhost:5000/api";

const CarForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add car");
      }

      toast.success("Car added successfully.");
      setStatus({ type: "success", message: "Car added successfully." });
      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to add car:", error);
      toast.error(error.message || "Failed to add car.");
      setStatus({ type: "error", message: error.message || "Failed to add car." });
    } finally {
      setLoading(false);
    }
  };


  const handleSeedAllCars = async () => {
    if (!window.confirm("Do you want to add all 12 cars from JSON to the database at once?")) return;
    setSeeding(true);
    setStatus({ type: "", message: "" });

    try {
      for (const car of allCarsData) {
        await fetch(`${API_BASE_URL}/cars`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(car),
        });
      }
      toast.success("All 12 cars were added successfully.");
      setStatus({ type: "success", message: "All 12 cars were added successfully." });
    } catch (error) {
      console.error("Error seeding cars:", error);
      toast.error("Failed to seed cars.");
      setStatus({ type: "error", message: "Failed to seed cars." });
    } finally {
      setSeeding(false);
    }
  };

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            List Your Vehicle
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
            Add Your Car
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
            Provide accurate information about your vehicle so renters
            can easily find and book your car.
          </p>
        </div>

        {status.message && (
          <div
            className={`mb-6 rounded-xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300"
                : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl backdrop-blur-md md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Car Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Car Name <span className="text-red-500">*</span>
              </label>
              <Input
                isRequired
                name="carName"
                placeholder="e.g. Toyota Camry"
                value={formData.carName}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Daily Rent */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Daily Rent Price <span className="text-red-500">*</span>
              </label>
              <Input
                isRequired
                type="number"
                name="dailyRentPrice"
                placeholder="e.g. 4500"
                value={formData.dailyRentPrice}
                onChange={handleChange}
                min="1"
                startContent={
                  <span className="text-small text-slate-400">৳</span>
                }
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Car Type Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Car Type <span className="text-red-500">*</span>
              </label>
              <select
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                required
                className="w-full h-12 rounded-xl border border-slate-700 bg-slate-950/50 px-3 text-sm outline-none focus:border-blue-500 transition-colors text-white"
              >
                <option value="" disabled className="bg-slate-900 text-slate-400">
                  Select car type
                </option>
                {carTypes.map((type) => (
                  <option key={type.key} value={type.key} className="bg-slate-900 text-white">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Seat Capacity */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Seat Capacity <span className="text-red-500">*</span>
              </label>
              <Input
                isRequired
                type="number"
                name="seatCapacity"
                placeholder="e.g. 5"
                value={formData.seatCapacity}
                onChange={handleChange}
                min="1"
                max="50"
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Car Image URL <span className="text-red-500">*</span>
              </label>
              <Input
                isRequired
                type="url"
                name="image"
                placeholder="https://example.com/car-image.jpg"
                value={formData.image}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Pickup Location */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <Input
                isRequired
                name="pickupLocation"
                placeholder="e.g. Gulshan, Dhaka"
                value={formData.pickupLocation}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Availability Status Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Availability Status <span className="text-red-500">*</span>
              </label>
              <select
                name="availabilityStatus"
                value={formData.availabilityStatus}
                onChange={handleChange}
                required
                className="w-full h-12 rounded-xl border border-slate-700 bg-slate-950/50 px-3 text-sm outline-none focus:border-blue-500 transition-colors text-white"
              >
                {availabilityOptions.map((option) => (
                  <option key={option.key} value={option.key} className="bg-slate-900 text-white">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Booking Count */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Booking Count
              </label>
              <Input
                type="number"
                name="bookingCount"
                value={formData.bookingCount}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Owner Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Owner Name
              </label>
              <Input
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Owner Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Owner Email
              </label>
              <Input
                type="email"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                variant="bordered"
                classNames={{
                  inputWrapper: "border-slate-700 bg-slate-950/50 text-white hover:border-blue-500 focus-within:border-blue-500",
                  input: "text-white placeholder:text-slate-500",
                }}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the vehicle, condition, features and rental information..."
                required
                rows={5}
                className="w-full rounded-xl border border-slate-700 bg-slate-950/50 p-3 text-sm outline-none focus:border-blue-500 transition-colors text-white resize-none placeholder:text-slate-500"
              />
            </div>

          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={loading}
              className="w-full font-semibold md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
            >
              {loading ? "Adding Car..." : "Add Car"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CarForm;
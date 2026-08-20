"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { updateCarInAPI } from "@/services/carService";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

export default function UpdateModal({
  isOpen,
  onClose,
  car,
  onUpdated,
}) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    carName: "",
    dailyRentPrice: "",
    carType: "",
    image: "",
    pickupLocation: "",
    availabilityStatus: "Available",
    description: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (car && isOpen) {
      setForm({
        carName: car.carName || "",
        dailyRentPrice: car.dailyRentPrice || "",
        carType: car.carType || "",
        image: car.image || "",
        pickupLocation: car.pickupLocation || "",
        availabilityStatus:
          car.availabilityStatus || "Available",
        description: car.description || "",
      });
    }
  }, [car, isOpen]);

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await updateCarInAPI(car._id, form);

      if (!result.success) {
        throw new Error(result.message || "Failed to update car.");
      }

      toast.success("Car updated successfully!");
      onUpdated?.({
        ...car,
        ...form,
      });

      onClose();
    } catch (error) {
      console.error("Update car error:", error);
      toast.error(error.message || "Failed to update car.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

  
 return createPortal(
    <div className="fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto">
      
    
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-black text-slate-800 dark:text-white">
            Update Car Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all text-slate-500 dark:text-slate-400"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Car Name */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase">
              Car Name
            </label>
            <input
              name="carName"
              required
              className={inputClass}
              value={form.carName}
              onChange={handleChange}
            />
          </div>

          {/* Price & Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">
                Price (৳)
              </label>
              <input
                name="dailyRentPrice"
                type="number"
                min="1"
                required
                className={inputClass}
                value={form.dailyRentPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">
                Car Type
              </label>
              <input
                name="carType"
                required
                className={inputClass}
                value={form.carType}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase">
              Image URL
            </label>
            <input
              name="image"
              type="url"
              required
              className={inputClass}
              value={form.image}
              onChange={handleChange}
            />
          </div>

          {/* Location & Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">
                Location
              </label>
              <input
                name="pickupLocation"
                required
                className={inputClass}
                value={form.pickupLocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">
                Status
              </label>
              <select
                name="availabilityStatus"
                className={inputClass}
                value={form.availabilityStatus}
                onChange={handleChange}
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase">
              Description
            </label>
            <textarea
              name="description"
              required
              className={`${inputClass} resize-none`}
              rows="2"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 text-white text-sm font-bold shadow-md shadow-cyan-500/20 hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
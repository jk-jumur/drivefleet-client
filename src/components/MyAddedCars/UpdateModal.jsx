"use client";

import { useState } from "react";
import { updateCarInAPI } from "@/services/carService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function UpdateModal({ isOpen, onClose, car }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    carName: car?.carName || "",
    dailyRentPrice: car?.dailyRentPrice || "",
    carType: car?.carType || "",
    image: car?.image || "",
    pickupLocation: car?.pickupLocation || "",
    availabilityStatus: car?.availabilityStatus || "Available",
    description: car?.description || "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await updateCarInAPI(car._id, form);
    if (res.success) {
      toast.success("Updated successfully!");
      onClose();
      router.refresh();
    } else {
      toast.error("Failed to update.");
    }
    setLoading(false);
  };

  const inputClass = "w-full mt-1 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500 transition-all";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-100 dark:border-slate-800 animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black text-slate-800 dark:text-white">Update Car Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Car Name */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase">Car Name</label>
            <input className={inputClass} value={form.carName} onChange={e => setForm({...form, carName: e.target.value})} />
          </div>

          {/* Price & Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Daily Rent Price (৳)</label>
              <input className={inputClass} value={form.dailyRentPrice} onChange={e => setForm({...form, dailyRentPrice: e.target.value})} />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Car Type</label>
              <input className={inputClass} value={form.carType} onChange={e => setForm({...form, carType: e.target.value})} />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase">Image URL</label>
            <input className={inputClass} value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
          </div>

          {/* Location & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Pickup Location</label>
              <input className={inputClass} value={form.pickupLocation} onChange={e => setForm({...form, pickupLocation: e.target.value})} />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase">Availability</label>
              <select className={inputClass} value={form.availabilityStatus} onChange={e => setForm({...form, availabilityStatus: e.target.value})}>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase">Description</label>
            <textarea className={`${inputClass} resize-none`} rows="3" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 font-bold hover:bg-slate-200 transition-all">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="flex-1 py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/30 hover:opacity-90 transition-all">
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
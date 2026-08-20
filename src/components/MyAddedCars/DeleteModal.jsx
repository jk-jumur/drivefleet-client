"use client";

import { deleteCarFromAPI } from "@/services/carService";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function DeleteModal({
  isOpen,
  onClose,
  carId,
  onDeleted,
}) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDelete = async () => {
    setLoading(true);

    try {
      const result = await deleteCarFromAPI(carId);

      if (result.success) {
        toast.success("Car deleted successfully!");

        // Close modal
        onClose();

        // Tell CarCard that deletion was successful
        onDeleted?.();
      } else {
        toast.error(
          result.message || "Failed to delete car"
        );
      }
    } catch (error) {
      console.error("Delete car error:", error);

      toast.error(
        error.message || "Failed to delete car"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 scale-100 animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 shrink-0">
            <FaExclamationTriangle className="text-xl animate-pulse" />
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              Delete Car Listing
            </h3>

            <p className="text-xs text-slate-400 font-medium">
              This action is permanent and cannot be undone.
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="py-6">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Are you sure you want to remove this vehicle from
            your active listings? It will no longer be visible to
            renters.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">

          {/* Cancel */}
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all cursor-pointer disabled:opacity-50"
          >
            Cancel
          </button>

          {/* Confirm Delete */}
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-linear-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700 shadow-lg shadow-rose-500/25 disabled:opacity-50 transition-all cursor-pointer flex items-center gap-2"
          >
            {loading ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                <span>Deleting...</span>
              </>
            ) : (
              "Yes, Delete"
            )}
          </button>

        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

export default function ActionButtons({ car, onDeleted, onUpdated }) {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="flex gap-3 mt-4">
      
      {/* UPDATE */}
      <button
        type="button"
        onClick={() => setIsUpdateOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:shadow-cyan-500/40"
      >
        <FaEdit />
        UPDATE
      </button>

      {/* DELETE */}
      <button
        type="button"
        onClick={() => setIsDeleteOpen(true)}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 transition-all hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20"
      >
        <FaTrash />
        DELETE
      </button>

      {/* UPDATE MODAL */}
      <UpdateModal
     isOpen={isUpdateOpen}
    onClose={() => setIsUpdateOpen(false)}
     car={car}
     onUpdated={onUpdated}
   />

      {/* DELETE MODAL */}
     <DeleteModal
    isOpen={isDeleteOpen}
    onClose={() => setIsDeleteOpen(false)}
    carId={car._id}
    onDeleted={onDeleted}
/>
    </div>
  );
}
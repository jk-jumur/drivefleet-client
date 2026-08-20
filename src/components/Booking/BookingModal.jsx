"use client";

import React from "react";
import { Modal, Button } from "@heroui/react";
import {
  FaCar,
  FaUserTie,
  FaCalendarAlt,
  FaStickyNote,
  FaShieldAlt,
} from "react-icons/fa";

export default function BookingModal({
  isOpen,
  onClose,
  car,
  bookingData,
  onConfirm,
  loading,
}) {
  if (!car) return null;

  // =========================
  // Booking Date
  // =========================
  const bookingDate = bookingData?.bookingDate
    ? new Date(bookingData.bookingDate).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      )
    : new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

  // =========================
  // Driver Text
  // =========================
  const driverText =
    bookingData?.driverNeeded === "Yes"
      ? "Yes (With Driver)"
      : "No (Self Drive)";

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        // Booking চলাকালীন modal বন্ধ হতে দিচ্ছি না
        if (!open && !loading) {
          onClose();
        }
      }}
    >
      <Modal.Backdrop
        variant="blur"
        className="bg-black/70 backdrop-blur-md"
      >
        <Modal.Container
          placement="center"
          className="max-w-md w-full p-4"
        >
          <Modal.Dialog
            className="
              rounded-3xl
              border border-cyan-500/30
              bg-white
              dark:bg-[#0b0f19]
              p-6
              shadow-2xl
              shadow-cyan-500/10
              text-slate-900
              dark:text-white
              transition-all
            "
          >
            {/* ========================= */}
            {/* Header */}
            {/* ========================= */}
            <Modal.Header
              className="
                flex flex-col gap-1
                pb-4
                border-b
                border-slate-200
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-2 text-cyan-500">
                <FaCar className="text-xl" />

                <h3 className="text-xl font-black">
                  Confirm Your Booking
                </h3>
              </div>

              <p className="text-xs text-slate-400 font-normal">
                Please review your booking details before
                final confirmation.
              </p>
            </Modal.Header>

            {/* ========================= */}
            {/* Body */}
            {/* ========================= */}
            <Modal.Body className="py-5 space-y-4">
              {/* ========================= */}
              {/* Car Summary */}
              {/* ========================= */}
              <div
                className="
                  bg-slate-50
                  dark:bg-[#060913]
                  p-4
                  rounded-2xl
                  border
                  border-slate-200
                  dark:border-cyan-500/20
                "
              >
                <div className="flex items-center justify-between">
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-slate-400
                    "
                  >
                    Selected Vehicle
                  </p>

                  <FaShieldAlt className="text-cyan-500 text-sm" />
                </div>

                <h4
                  className="
                    text-lg
                    font-black
                    mt-1
                    text-slate-900
                    dark:text-white
                  "
                >
                  {car.carName || "Selected Car"}
                </h4>

                {/* Daily Rent */}
                <div
                  className="
                    flex
                    justify-between
                    items-center
                    mt-3
                    pt-3
                    border-t
                    border-slate-200
                    dark:border-white/5
                  "
                >
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Daily Rent Rate
                  </span>

                  <span className="text-base font-black text-cyan-500">
                    ৳{Number(car.dailyRentPrice || 0).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* ========================= */}
              {/* Booking Details */}
              {/* ========================= */}
              <div className="space-y-3 text-sm">
                {/* Driver */}
                <div className="flex justify-between items-center px-1">
                  <span
                    className="
                      text-slate-500
                      dark:text-slate-400
                      font-medium
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <FaUserTie className="text-cyan-500" />

                    Driver Needed:
                  </span>

                  <span
                    className="
                      font-bold
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-50
                      dark:bg-cyan-500/10
                      border
                      border-cyan-200
                      dark:border-cyan-500/20
                      text-xs
                      text-cyan-600
                      dark:text-cyan-300
                    "
                  >
                    {driverText}
                  </span>
                </div>

                {/* Booking Date */}
                <div className="flex justify-between items-center px-1">
                  <span
                    className="
                      text-slate-500
                      dark:text-slate-400
                      font-medium
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <FaCalendarAlt className="text-cyan-500" />

                    Booking Date:
                  </span>

                  <span
                    className="
                      font-bold
                      text-xs
                      text-slate-800
                      dark:text-slate-200
                    "
                  >
                    {bookingDate}
                  </span>
                </div>

                {/* ========================= */}
                {/* Special Note */}
                {/* ========================= */}
                {bookingData?.specialNote && (
                  <div
                    className="
                      bg-slate-50
                      dark:bg-white/[0.03]
                      p-3
                      rounded-xl
                      border
                      border-slate-200
                      dark:border-white/5
                    "
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <FaStickyNote className="text-amber-500" />

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-400
                        "
                      >
                        Special Note
                      </span>
                    </div>

                    <p
                      className="
                        text-xs
                        text-slate-600
                        dark:text-slate-300
                        italic
                      "
                    >
                      "{bookingData.specialNote}"
                    </p>
                  </div>
                )}
              </div>

              {/* ========================= */}
              {/* Security Notice */}
              {/* ========================= */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-emerald-50
                  dark:bg-emerald-500/10
                  border
                  border-emerald-200
                  dark:border-emerald-500/20
                  px-3
                  py-2.5
                  text-xs
                  text-emerald-700
                  dark:text-emerald-300
                "
              >
                <FaShieldAlt className="shrink-0" />

                <span>
                  Your booking will be securely verified using
                  your authenticated account.
                </span>
              </div>
            </Modal.Body>

            {/* ========================= */}
            {/* Footer */}
            {/* ========================= */}
            <Modal.Footer
              className="
                flex
                gap-3
                pt-4
                border-t
                border-slate-200
                dark:border-white/10
              "
            >
              {/* Cancel */}
              <Button
                variant="light"
                onPress={onClose}
                isDisabled={loading}
                className="
                  w-full
                  py-3
                  rounded-2xl
                  border
                  border-slate-300
                  dark:border-white/15
                  font-bold
                  text-slate-600
                  dark:text-slate-300
                  hover:bg-slate-100
                  dark:hover:bg-white/5
                  transition-colors
                  text-sm
                "
              >
                Cancel
              </Button>

              {/* Confirm */}
              <Button
                color="primary"
                onPress={onConfirm}
                isLoading={loading}
                isDisabled={loading}
                className="
                  w-full
                  py-3
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  font-bold
                  shadow-lg
                  shadow-cyan-500/25
                  hover:opacity-95
                  transition-all
                  text-sm
                "
              >
                {loading
                  ? "Booking..."
                  : "Confirm & Book Now"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
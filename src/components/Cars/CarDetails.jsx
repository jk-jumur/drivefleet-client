import Image from "next/image";
import Link from "next/link";
import { Card } from "@heroui/react";
import { FaMapMarkerAlt, FaUsers, FaUserTie, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import BookingForm from "@/components/Booking/BookingForm";

export default function CarDetails({ car }) {
  return (
    <main className="bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 min-h-screen py-10 px-4 md:px-6 lg:px-8 selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative">
      
      {/* Home Page Matching Background Gradient & Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-[#070b14] via-[#05080e] to-[#030508] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn">
        
        {/* Back Link */}
        <div className="transform transition-all duration-300 hover:-translate-x-1">
          <Link 
            href="/explore-cars" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:scale-105 w-fit"
          >
            <span>←</span> Back to All Cars
          </Link>
        </div>

        {/* 1. Top Section: Car Image and Main Title Card */}
        <Card className="border border-slate-200/80 dark:border-cyan-500/30 bg-white dark:bg-[#0b0f19] backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] p-5 md:p-6 rounded-3xl transition-all duration-500 hover:border-cyan-500/60">
          <Card.Content className="space-y-5 p-0">
            <div className="relative h-[280px] md:h-[400px] w-full overflow-hidden rounded-2xl bg-slate-950 shadow-inner border border-white/5">
              <Image
                src={car.image}
                alt={car.carName}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-500/30 shadow-sm">
                    {car.carType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300 text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/10 shadow-sm">
                    {car.availabilityStatus}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                  {car.carName}
                </h1>
              </div>

              {/* Price Tag */}
              <div className="bg-slate-50 dark:bg-[#060913] backdrop-blur-md border border-slate-200 dark:border-cyan-500/30 px-5 py-3 rounded-2xl text-left md:text-right shrink-0 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Daily Rent</p>
                <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 drop-shadow-[0_2px_10px_rgba(56,189,248,0.3)]">
                  ৳{car.dailyRentPrice}
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 2. Bottom Section: Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Overview & Specs Card */}
          <Card className="lg:col-span-7 border border-slate-200/80 dark:border-cyan-500/30 bg-white dark:bg-[#0b0f19] backdrop-blur-2xl shadow-xl shadow-slate-200/50 dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 md:p-8 rounded-3xl transition-all duration-500 hover:border-cyan-500/60">
            <Card.Content className="space-y-6 p-0">
              
              {/* Overview Section */}
              <div>
                <h2 className="text-xl font-black tracking-tight mb-2 text-slate-900 dark:text-white">Vehicle Overview</h2>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {car.description}
                </p>
              </div>

              <div className="border-t border-slate-200/60 dark:border-white/10"></div>

              {/* Key Specifications Section */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-indigo-600 dark:from-cyan-400 dark:to-indigo-400 mb-4">
                  Key Specifications
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <SpecItem icon={FaUsers} label="Seat Capacity" value={`${car.seatCapacity} Persons`} />
                  <SpecItem icon={FaMapMarkerAlt} label="Pickup Location" value={car.pickupLocation} />
                  <SpecItem icon={FaUserTie} label="Listed Owner" value={car.ownerName || "DriveFleet Official"} />
                  <SpecItem 
                    icon={car.availabilityStatus === 'Available' ? FaCheckCircle : FaTimesCircle} 
                    label="Availability" 
                    value={car.availabilityStatus} 
                    iconColor={car.availabilityStatus === 'Available' ? 'text-cyan-600 bg-cyan-50 border-cyan-200 dark:text-cyan-300 dark:bg-cyan-500/15 dark:border-cyan-500/30' : 'text-rose-600 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-500/20 dark:border-rose-500/30'} 
                  />
                </div>
              </div>

            </Card.Content>
          </Card>

          {/* Right Side: Booking Card (Sidebar) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden shadow-xl dark:shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-slate-200/80 dark:border-cyan-500/30 bg-white dark:bg-[#0b0f19]">
              <BookingForm car={car} />
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

const SpecItem = ({ icon: Icon, label, value, iconColor = "text-cyan-600 bg-cyan-50 border-cyan-200 dark:text-cyan-300 dark:bg-cyan-500/15 dark:border-cyan-500/30" }) => (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50/70 dark:bg-white/[0.03] backdrop-blur-md p-3.5 transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:hover:bg-white/[0.06] hover:border-cyan-500/50 shadow-sm">
        <div className={`flex items-center justify-center rounded-xl h-10 w-10 shrink-0 shadow-sm border ${iconColor}`}>
            <Icon className="text-base" />
        </div>
        <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5">{value}</p>
        </div>
    </div>
);
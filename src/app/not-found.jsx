import Link from "next/link";
import { FaMapSigns } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center bg-[#e4f2f7] dark:bg-[#070d14] px-6 md:px-16 py-12 overflow-hidden transition-colors duration-300">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/50 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Text Content */}
        <div className="lg:col-span-5 space-y-6 text-left animate-fadeIn z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#1e293b] dark:text-white drop-shadow-sm">
            Oops!
          </h1>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#008bc3] dark:text-cyan-400">
              Where are we?
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-sm">
              The page you are looking for was moved, removed, renamed or might never existed.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#008bc3] hover:bg-[#0073a3] text-white px-8 py-3.5 text-sm font-bold shadow-[0_4px_15px_rgba(0,139,195,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Go Home
            </Link>
          </div>
        </div>

        {/* Right Side: Enhanced Detailed Vector/Cartoon Car Illustration */}
        <div className="lg:col-span-7 flex items-center justify-center relative">
          <div className="relative w-full max-w-lg h-[380px] flex flex-col items-center justify-center">
            
            {/* Main Car Body Container */}
            <div className="relative w-80 h-48 bg-linear-to-r from-[#008bc3] to-[#0284c7] rounded-[60px_60px_25px_25px] shadow-[0_25px_50px_rgba(0,139,195,0.3)] border-t-4 border-sky-300 flex items-center justify-center animate-bounce">
              
              {/* Car Roof & Windows */}
              <div className="absolute top-3 w-48 h-20 bg-[#e4f2f7] dark:bg-slate-900 rounded-[50px_50px_15px_15px] border-2 border-sky-200 dark:border-cyan-500/30 flex items-center justify-between px-4 overflow-hidden shadow-inner">
                {/* Front Windshield */}
                <div className="w-16 h-14 bg-sky-100/60 dark:bg-slate-800 rounded-l-2xl border-r-2 border-sky-200"></div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#008bc3] dark:text-cyan-400">DriveFleet</span>
                {/* Rear Window */}
                <div className="w-16 h-14 bg-sky-100/60 dark:bg-slate-800 rounded-r-2xl border-l-2 border-sky-200"></div>
              </div>

              {/* Headlights */}
              <div className="absolute right-2 top-20 w-3 h-6 bg-amber-300 rounded-full shadow-[0_0_10px_rgba(252,211,77,0.8)] animate-pulse"></div>
              <div className="absolute left-2 top-20 w-3 h-6 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>

              {/* Wheels */}
              <div className="absolute -bottom-6 left-12 w-14 h-14 bg-slate-900 border-4 border-slate-300 rounded-full flex items-center justify-center shadow-lg animate-spin">
                <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 right-12 w-14 h-14 bg-slate-900 border-4 border-slate-300 rounded-full flex items-center justify-center shadow-lg animate-spin">
                <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
              </div>
            </div>

            {/* Floating Signpost */}
            <div className="absolute top-4 right-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-cyan-500/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-pulse">
              <FaMapSigns className="text-[#008bc3] dark:text-cyan-400 text-lg" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Wrong Route</span>
            </div>

            {/* Road Track Line */}
            <div className="absolute bottom-6 w-4/5 h-2.5 bg-slate-300 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[#008bc3] dark:bg-cyan-400 w-1/2 animate-[ping_2s_infinite]"></div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
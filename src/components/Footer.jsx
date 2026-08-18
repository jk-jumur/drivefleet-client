import Link from "next/link";
import Image from "next/image";
import { FaCarSide, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300 border-t border-slate-800/60 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Info Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
                <FaCarSide className="text-xl" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-black tracking-tight text-white leading-none">
                  Drive<span className="text-blue-500">Fleet</span>
                </h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">
                  Smart Car Rental
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Experience the ultimate journey with our premium fleet of hypercars and luxury vehicles. Fast, secure, and reliable car rental service for every adventure.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:border-blue-500 hover:scale-105 shadow-sm"
              >
                <Image src="/icon/facebookIcons.gif" alt="Facebook" width={20} height={20} className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-105 shadow-sm"
              >
                <Image src="/icon/icons8-x-50.png" alt="X (Twitter)" width={20} height={20} className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-pink-600 hover:border-pink-500 hover:scale-105 shadow-sm"
              >
                <Image src="/icon/instagram.gif" alt="Instagram" width={20} height={20} className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md transition-all duration-300 hover:bg-blue-700 hover:border-blue-600 hover:scale-105 shadow-sm"
              >
                <Image src="/icon/Linkedin.gif" alt="LinkedIn" width={20} height={20} className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Useful Links Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 relative inline-block">
              Useful Links
              <span className="absolute left-0 -bottom-2 w-10 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 transition-all duration-200 hover:text-blue-400 hover:translate-x-1 flex items-center gap-2.5">
                  <FiArrowRight className="text-xs text-blue-500" /> Home
                </Link>
              </li>
              <li>
                <Link href="/explore-cars" className="text-slate-400 transition-all duration-200 hover:text-blue-400 hover:translate-x-1 flex items-center gap-2.5">
                  <FiArrowRight className="text-xs text-blue-500" /> Explore Cars
                </Link>
              </li>
              <li>
                <Link href="/add-car" className="text-slate-400 transition-all duration-200 hover:text-blue-400 hover:translate-x-1 flex items-center gap-2.5">
                  <FiArrowRight className="text-xs text-blue-500" /> Add New Car
                </Link>
              </li>
              <li>
                <Link href="/my-bookings" className="text-slate-400 transition-all duration-200 hover:text-blue-400 hover:translate-x-1 flex items-center gap-2.5">
                  <FiArrowRight className="text-xs text-blue-500" /> My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 relative inline-block">
              Contact Information
              <span className="absolute left-0 -bottom-2 w-10 h-0.5 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3.5 group">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <span className="leading-relaxed">123 Speedway Avenue, Luxury Boulevard, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                  <FaEnvelope className="text-xs" />
                </div>
                <span>support@drivefleet.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DriveFleet. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
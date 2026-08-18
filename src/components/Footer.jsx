import Link from "next/link";
import Image from "next/image";
import { FaCarSide, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-slate-800/80 bg-[linear-gradient(180deg,#07111d_0%,#0a1423_100%)] pt-20 pb-12 text-slate-300">
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(94,141,255,0.2),transparent_65%)] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-slate-800/80 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-4">
            <Link href="/" className="group mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] text-white shadow-[0_12px_28px_rgba(94,141,255,0.28)] transition-transform duration-300 group-hover:scale-105">
                <FaCarSide className="text-xl" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-black leading-none tracking-tight text-white">
                  Drive<span className="bg-gradient-to-r from-[#7fd7ef] via-[#67d9d6] to-[#9b8dff] bg-clip-text text-transparent">Fleet</span>
                </h1>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Smart Car Rental
                </p>
              </div>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-400">
              Experience the ultimate journey with our premium fleet of hypercars and luxury vehicles. Fast, secure, and reliable car rental service for every adventure.
            </p>

            <div className="flex items-center gap-3">
              {[
                { href: "https://facebook.com", icon: "/icon/facebookIcons.gif", hover: "hover:bg-blue-600 hover:border-blue-500" },
                { href: "https://twitter.com", icon: "/icon/icons8-x-50.png", hover: "hover:bg-zinc-800 hover:border-zinc-700" },
                { href: "https://instagram.com", icon: "/icon/instagram.gif", hover: "hover:bg-pink-600 hover:border-pink-500" },
                { href: "https://linkedin.com", icon: "/icon/Linkedin.gif", hover: "hover:bg-blue-700 hover:border-blue-600" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.href}
                  className={`group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 ${item.hover}`}
                >
                  <Image src={item.icon} alt="Social" width={20} height={20} className="object-contain transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:col-span-3">
            <h3 className="relative mb-6 inline-block text-sm font-bold uppercase tracking-[0.2em] text-white">
              Useful Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2]" />
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {[
                ["/", "Home"],
                ["/explore-cars", "Explore Cars"],
                ["/add-car", "Add New Car"],
                ["/my-bookings", "My Bookings"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2.5 text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-[#7fd7ef]">
                    <FiArrowRight className="text-xs text-[#67d9d6]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <h3 className="relative mb-6 inline-block text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contact Information
              <span className="absolute -bottom-2 left-0 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2]" />
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="group flex items-start gap-3.5">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#5e8dff]/20 bg-[#5e8dff]/10 text-[#7fd7ef] transition-colors group-hover:bg-[#5e8dff] group-hover:text-white">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <span className="leading-relaxed">123 Speedway Avenue, Luxury Boulevard, Dhaka, Bangladesh</span>
              </li>
              <li className="group flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#5e8dff]/20 bg-[#5e8dff]/10 text-[#7fd7ef] transition-colors group-hover:bg-[#5e8dff] group-hover:text-white">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <span>+880 1234-567890</span>
              </li>
              <li className="group flex items-center gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#5e8dff]/20 bg-[#5e8dff]/10 text-[#7fd7ef] transition-colors group-hover:bg-[#5e8dff] group-hover:text-white">
                  <FaEnvelope className="text-xs" />
                </div>
                <span>support@drivefleet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
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
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import NavbarClient from "./NavbarClient";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Cars", href: "/explore-cars" },
  { name: "Add Car", href: "/add-car" },
  { name: "My Bookings", href: "/my-bookings" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-4 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5e8dff] via-[#6dcde5] to-[#7b6df2] text-white shadow-[0_12px_24px_rgba(94,141,255,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <FaCarSide className="text-lg sm:text-xl" />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <h1 className="text-base font-extrabold leading-none tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              Drive<span className="bg-gradient-to-r from-[#5e8dff] via-[#67d9d6] to-[#7b6df2] bg-clip-text text-transparent">Fleet</span>
            </h1>
            <p className="mt-0.5 hidden text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:block">
              Smart Car Rental
            </p>
          </div>
        </Link>

        <NavbarClient navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;
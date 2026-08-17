import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import ThemeToggle from "./Shared/ThemeToggle";
import UserMenu from "./Shared/UserMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Cars", href: "/explore-cars" },
  { name: "Add Car", href: "/add-car" },
  { name: "My Bookings", href: "/my-bookings" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 transition-colors duration-300">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition group-hover:bg-blue-700">
            <FaCarSide className="text-lg sm:text-xl" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl leading-none">
              Drive<span className="text-blue-600">Fleet</span>
            </h1>
            <p className="hidden text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:block mt-0.5">
              Smart Car Rental
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links (Hidden on Mobile/Tablet < 1024px) */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions (Theme Toggle & User Menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <UserMenu navLinks={navLinks} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiLogOut,
  FiUser,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import { useTheme } from "next-themes";

import { authClient } from "@/lib/auth-client";

// রিকোয়ারমেন্ট অনুযায়ী পাবলিক ন্যাভবার লিংকসমূহ
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore Cars",
    href: "/explore-cars",
  },
  {
    name: "Add Car",
    href: "/add-car",
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
  },
];

// রিকোয়ারমেন্ট অনুযায়ী প্রোফাইল ড্রপডাউন লিংকসমূহ
const profileLinks = [
  {
    name: "Add Car",
    href: "/add-car",
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
  },
  {
    name: "My Added Cars",
    href: "/my-added-cars",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = async () => {
    await authClient.signOut();
    setProfileOpen(false);
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition group-hover:bg-blue-700">
            <FaCarSide className="text-xl" />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              Drive<span className="text-blue-600">Fleet</span>
            </h1>
            <p className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">
              Smart Car Rental
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                isActive(link.href)
                  ? "text-blue-600"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-3 lg:flex">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-yellow-400"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Conditional Auth: Login Button / User Profile Dropdown */}
          {isPending ? (
            <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
          ) : !user ? (
            <Link
              href="/login"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="h-9 w-9 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950">
                    <FiUser />
                  </div>
                )}

                <div className="hidden text-left xl:block">
                  <p className="max-w-[120px] truncate text-sm font-bold text-slate-800 dark:text-white">
                    {user.name || "User"}
                  </p>
                  <p className="text-[11px] text-slate-400">Account</p>
                </div>

                <FiChevronDown
                  className={`text-slate-500 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 top-14 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                  <div className="mb-1 border-b border-slate-100 px-3 py-3 dark:border-slate-800">
                    <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                      {user.name || "User"}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {user.email}
                    </p>
                  </div>

                  {profileLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setProfileOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        isActive(link.href)
                          ? "bg-blue-50 text-blue-600 dark:bg-blue-950"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="mt-1 border-t border-slate-100 pt-1 dark:border-slate-800">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-lg text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {!isPending && !user && (
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white"
            >
              Login
            </Link>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-xl text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <>
                <div className="my-2 border-t border-slate-100 dark:border-slate-800" />
                <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  My Account
                </p>

                {profileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`rounded-xl px-4 py-3.5 text-sm font-semibold ${
                      isActive(link.href)
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={handleLogout}
                  className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3.5 text-left text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                  <FiLogOut />
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
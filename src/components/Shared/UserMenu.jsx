"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client"; 
import toast from "react-hot-toast";

const profileLinks = [
  { name: "Add Car", href: "/add-car" },
  { name: "My Bookings", href: "/my-bookings" },
  { name: "My Added Cars", href: "/my-added-cars" },
];

const UserMenu = ({ navLinks }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

 const handleLogout = async () => {
    try {
      const { error } = await authClient.signOut();
      
      if (error) {
        toast.error(error.message || "Logout failed. Please try again.");
        return;
      }

      toast.success("Successfully logged out!");
      setProfileOpen(false);
      setMobileMenuOpen(false);
      
      
      window.location.href = "/"; 
    } catch (err) {
      toast.error("An unexpected error occurred during logout.");
    }
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ---------------- Desktop Profile / Login (lg and above) ---------------- */}
      <div className="hidden items-center gap-3 lg:flex">
        {isPending ? (
          <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
        ) : !user ? (
          <Link
            href="/login"
            className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:scale-105"
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
                <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-lg">
                  <Image src={user.image} alt={user.name || "User"} fill sizes="36px" className="object-cover" />
                </div>
              ) : (
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <FiUser className="text-lg" />
                </div>
              )}
              <div className="hidden text-left xl:block pr-2">
                <p className="max-w-[120px] truncate text-sm font-bold text-slate-800 dark:text-white">
                  {user.name || "User"}
                </p>
                <p className="text-[11px] font-medium text-slate-500">Account</p>
              </div>
              <FiChevronDown className={`text-slate-500 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Dropdown */}
            {profileOpen && (
              <>
                {/* Backdrop for closing click */}
                <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)}></div>
                <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900 animate-in fade-in slide-in-from-top-2">
                  <div className="mb-1 border-b border-slate-100 px-3 py-3 dark:border-slate-800">
                    <p className="truncate text-sm font-bold text-slate-900 dark:text-white">{user.name || "User"}</p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                  </div>
                  {profileLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setProfileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-slate-100 pt-1 dark:border-slate-800">
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ---------------- Mobile & Tablet Menu Controls (< lg) ---------------- */}
      <div className="flex items-center gap-2 lg:hidden">
        {!isPending && !user && (
          <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm">
            Login
          </Link>
        )}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ---------------- Mobile & Tablet Full Width Menu Dropdown ---------------- */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-16 sm:top-20 z-40 w-full border-b border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-5 sm:px-6 gap-1 sm:gap-2">
            
            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Authenticated User Menu inside Mobile Nav */}
            {user && (
              <div className="mt-2">
                <div className="mb-2 border-t border-slate-100 dark:border-slate-800" />
                
                {/* User Info Mobile */}
                <div className="flex items-center gap-3 px-4 py-3">
                   {user.image ? (
                     <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
                       <Image src={user.image} alt="User" fill className="object-cover" />
                     </div>
                   ) : (
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900">
                       <FiUser className="text-xl" />
                     </div>
                   )}
                   <div>
                     <p className="text-sm font-bold text-slate-900 dark:text-white">{user.name || "User"}</p>
                     <p className="text-xs text-slate-500">{user.email}</p>
                   </div>
                </div>

                {/* Profile Links */}
                {profileLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <button
                  onClick={handleLogout}
                  className="mt-1 flex w-full items-center gap-2 rounded-xl px-4 py-3 sm:py-3.5 text-left text-sm sm:text-base font-bold text-red-600 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <FiLogOut className="text-lg" /> Logout
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default UserMenu;
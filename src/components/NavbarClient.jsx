"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./Shared/ThemeToggle";
import UserMenu from "./Shared/UserMenu";

const NavbarClient = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-slate-900 before:absolute before:-bottom-1 before:left-2 before:right-2 before:h-[2px] before:rounded-full before:bg-gradient-to-r before:from-[#5e8dff] before:via-[#67d9d6] before:to-[#7b6df2] dark:text-white"
                  : "text-slate-600 hover:text-[#4d7bfd] dark:text-slate-300 dark:hover:text-[#7fd7ef]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <ThemeToggle />
        <UserMenu navLinks={navLinks} />
      </div>
    </>
  );
};

export default NavbarClient;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close sidebar when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#020008] z-50 shadow-lg">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-white cursor-pointer flex gap-2 items-center"
          >
            <img src="/icons/casino-logo.jpg" alt="logo" className="w-15 lg:w-35" />
          </Link>

          {/* Desktop Nav */}
          <ul className=" hidden lg:flex space-x-8 font-bold text-white">
            <li><Link href="/top-casinos" className="hover:text-[#6600FF]">Top Casinos</Link></li>
            <li><Link href="/about-us" className="hover:text-[#6600FF]">About Us</Link></li>
            <li><Link href="/terms" className="hover:text-[#6600FF]">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#6600FF]">Privacy Policy</Link></li>
            <li><Link href="/responsible-gaming" className="hover:text-[#6600FF]">Responsible Gaming</Link></li>
          </ul>

          {/* Burger / X button for mobile */}
          <button
            className="lg:hidden z-50 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <img src="/icons/close.png" alt="close" className="w-4 h-4" />
            ) : (
              <img src="/icons/burger-menu.svg" alt="burger-menu" />
            )}
          </button>
        </nav>
      </header>

      {/* SIDE MENU */}
      <div
        className={`fixed z-40 top-0 right-0 h-full w-64 bg-[#020008] text-white p-6 transform transition-transform duration-300 shadow-lg ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-12 space-y-4 font-bold">
          <li><Link href="/top-casinos">Top Casinos</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/terms">Terms & Conditions</Link></li>
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/responsible-gaming">Responsible Gaming</Link></li>
        </ul>
      </div>
    </>
  );
}
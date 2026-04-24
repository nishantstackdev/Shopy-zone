'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Stickynav({ isMenuOpen }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Orders", path: "/orders" },
    { name: "Best Selling", path: "/best-selling" },
    { name: "Trending", path: "/trending" },
    { name: "About Us", path: "/about" }
  ];

  return (
    <nav
      className={`bg-white shadow sticky top-0 z-50 ${
        isMenuOpen ? "block" : "hidden md:block"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* LEFT NAV */}
        <ul className="hidden md:flex gap-6 uppercase text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition ${
                    isActive ? "text-black font-semibold" : "hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CENTER LOGO */}
        <div className="flex justify-center flex-1 md:flex-none">
          <img
            src="/logo.png" // 🔁 Replace with your actual logo later
            alt="Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="hidden md:flex items-center border rounded-full px-3 py-1 text-sm">
            <Search size={16} className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="outline-none w-40"
            />
          </div>

          {/* ICONS */}
          <User className="cursor-pointer" size={20} />
          <div className="relative cursor-pointer">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              0
            </span>
          </div>

          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
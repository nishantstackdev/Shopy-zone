'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { lstocart } from "@/redux/features/cartSlice";

export default function Stickynav({ isMenuOpen }) {
  const cart = useSelector((store) => store.cart);
  const dispatcher = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatcher(lstocart());
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Orders", path: "/orders" },
    { name: "Best Selling", path: "/best-selling" },
    { name: "Trending", path: "/trending" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

        {/* CENTER LOGO */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-xl shadow-md group-hover:scale-110 transition duration-300">
            N
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            <span className="text-gray-900 group-hover:text-indigo-600 transition">
              Nova
            </span>
            <span className="text-pink-500 group-hover:text-pink-600 transition">
              Cart
            </span>
          </h1>
        </Link>

        {/* LEFT NAV */}
        <ul className="hidden md:flex gap-6 uppercase text-sm font-medium text-gray-600">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition duration-200 ${isActive
                      ? "text-black font-semibold border-b-2 border-pink-500 pb-1"
                      : "hover:text-black"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>



        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="hidden md:flex items-center border rounded-full px-4 py-1.5 text-sm bg-gray-50">
            <Search size={16} className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="I'm looking for..."
              className="outline-none w-36 bg-transparent"
            />
          </div>

          {/* USER */}
          <User className="cursor-pointer hover:text-pink-500 transition" size={20} />

          {/* WISHLIST */}
          <div className="relative cursor-pointer">
            <Heart size={20} className="hover:text-pink-500 transition" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white rounded-full px-1.5">
              0
            </span>
          </div>

          {/* CART */}
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              <ShoppingCart size={20} className="hover:text-pink-500 transition" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white rounded-full px-1.5">
                {cart?.items?.length || 0}
              </span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}
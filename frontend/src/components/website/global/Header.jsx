'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { lstocart } from "@/redux/features/cartSlice";

export default function Stickynav({ isMenuOpen }) {
  const cart = useSelector((store)=>store.cart);
  // console.log(cart)
  const dispatcher = useDispatch()
  const pathname = usePathname();

  useEffect(
    ()=>{
      dispatcher(lstocart())
    },
    []
  )

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Orders", path: "/orders" },
    { name: "Best Selling", path: "/best-selling" },
    { name: "Trending", path: "/trending" },
    { name: "About Us", path: "/about" },
    { name: "Cart", path: "/cart" }
  ];

  return (
    <nav
      className={`bg-white shadow sticky top-0 z-50 ${isMenuOpen ? "block" : "hidden md:block"
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
                  className={`transition ${isActive ? "text-black font-semibold" : "hover:text-black"
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
            src="/images/logo.jpg"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain"
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
          <Link href={"/cart"}>
            <div className="relative cursor-pointer">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                {cart?.items?.length || 0}
              </span>
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
}
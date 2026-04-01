'use client';

import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import { usePathname } from "next/navigation";
import Stickynav from "./Stickynav";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  return (
    <>
      <header className="w-full border-b bg-white border-slate-200  font-sans">

        {/* Top Bar */}
        <div className=" py-2 px-4 md:px-8  border-slate-200 border-b flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
          <div className="text-black ">
            Order by phone:
            <span className=" ml-1">(84) 943 446 000</span> |
            <span className="ml-1 ">
              Shop our Spring Bounty Sale
            </span>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-1 hover:text-red-500">
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English"
                className="w-4 h-3"
              />
              English <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-1 hover:text-red-500">
              $ USD <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Main Header */}
        <div className=" py-5 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

            <h1 className="text-3xl font-black">
              ENTRY<span className="text-red-500">▲</span>
            </h1>

            <div className="hidden md:flex flex-grow max-w-2xl bg-white rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 py-2 border rounded text-gray-800 outline-none"
              />
              <button className="bg-[#ff3b5c] px-4">
                <Search size={20} />
              </button>
            </div>

            <div className="flex items-center gap-5">

              <div className="hidden lg:flex items-center gap-2 hover:text-red-500">
                <User size={22} />
                <span className="text-sm">Account</span>
              </div>

              <div className="relative">
                <Heart size={22} />
              </div>

              <div className="relative">
                <ShoppingCart size={22} />
              </div>

              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>

            </div>
          </div>
        </div>
        </header>
      <Stickynav isMenuOpen={isMenuOpen} />
    </>

  );
};

export default Header;
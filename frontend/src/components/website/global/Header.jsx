'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { lstocart } from "@/redux/features/cartSlice";

export default function Stickynav() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((store) => store.cart);
  const dispatcher = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatcher(lstocart());
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Orders", path: "/orders" },
    { name: "Best Selling", path: "/best-selling" },
    { name: "Trending", path: "/trending" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          
          {/* LEFT: MOBILE MENU ICON (Visible on xs, sm, md, lg | Hidden on xl) */}
          <div className="xl:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>

          {/* CENTER: LOGO (Always Visible) */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-lg md:text-xl shadow-md group-hover:scale-105 transition duration-300">
              N
            </div>
            <h1 className="text-xl md:text-2xl xl:text-3xl font-extrabold tracking-wide">
              <span className="text-gray-900 group-hover:text-indigo-600 transition">Nova</span>
              <span className="text-pink-500 group-hover:text-pink-600 transition">Cart</span>
            </h1>
          </Link>

          {/* CENTER: DESKTOP NAV (Visible ONLY on xl) */}
          <ul className="hidden xl:flex gap-8 uppercase text-[13px] font-semibold text-gray-600">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`transition duration-200 ${
                      isActive ? "text-black border-b-2 border-pink-500 pb-1" : "hover:text-pink-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SECTION: ICONS & SEARCH */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* SEARCH: Hidden on small mobiles, visible from md up */}
            <div className="hidden md:flex items-center border rounded-full px-4 py-1.5 text-sm bg-gray-50 focus-within:ring-1 ring-pink-200 transition">
              <Search size={16} className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none w-24 lg:w-40 bg-transparent"
              />
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <User className="hidden sm:block cursor-pointer hover:text-pink-500 transition" size={22} />
              
              <div className="relative cursor-pointer group">
                <Heart size={22} className="group-hover:text-pink-500 transition" />
                <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-pink-500 text-white rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  0
                </span>
              </div>

              <Link href={"/cart"}>
                <div className="relative cursor-pointer group">
                  <ShoppingCart size={22} className="group-hover:text-pink-500 transition" />
                  <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-indigo-600 text-white rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {cart?.items?.length || 0}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY & SIDEBAR */}
      <div 
        className={`fixed inset-0 z-[60] transition-visibility duration-300 ${isOpen ? "visible" : "invisible"}`}
      >
        {/* Dark Background Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Sidebar */}
        <div 
          className={`absolute top-0 left-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500 text-white font-bold">N</div>
                  <span className="font-bold text-lg">NovaCart</span>
               </div>
               <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-200 rounded-full">
                 <X size={22} />
               </button>
            </div>

            {/* Sidebar Search (Mobile Only) */}
            <div className="p-4 md:hidden">
               <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <Search size={18} className="text-gray-500 mr-2" />
                  <input type="text" placeholder="Search products..." className="bg-transparent outline-none w-full text-sm" />
               </div>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-4">
              <p className="px-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Menu</p>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center justify-between px-6 py-3 text-sm font-medium transition ${
                    pathname === item.path ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  <ChevronRight size={14} className={pathname === item.path ? "opacity-100" : "opacity-0"} />
                </Link>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t bg-gray-50 flex flex-col gap-4">
               <button className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <User size={18} /> My Account
               </button>
               <p className="text-[10px] text-gray-400">© 2024 NovaCart Premium Store</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
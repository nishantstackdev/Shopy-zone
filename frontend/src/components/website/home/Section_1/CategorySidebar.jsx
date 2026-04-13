import { GetCategories } from '@/api/Category';
import React from 'react';
import {
  LuSmartphone,
  LuMonitor,
  LuShirt,
  LuArmchair,
  LuGem,
  LuBrush,
  LuBaby,
  LuGamepad2,
  LuCar,
  LuDribbble,
  LuChevronRight
} from "react-icons/lu";



export default async function CategorySidebar() {

  const categories = await GetCategories({ limit: 6, status: true, is_top: true })
  const displayCategories = categories.allcategories

  return (
    <aside className="w-full max-w-[300px] hidden md:block bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">
          Categories
        </h2>
      </div>

      {/* List */}
      <ul className="flex flex-col">
        {displayCategories.map((cat, index) => (
          <li
            key={index}
            className="group flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">

              {/* Icon / Image */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 overflow-hidden">
                
                  <img
                    src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE + cat.image}
                    alt={cat.name}
                    className="w-6 h-6 object-contain"
                  />
                
              </div>

              {/* Name */}
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-500 transition">
                {cat.name}
              </span>
            </div>

            {/* Chevron */}
            {cat.hasSub && (
              <LuChevronRight
                size={18}
                className="text-gray-400 group-hover:text-red-500 transition-transform duration-200 group-hover:translate-x-1"
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
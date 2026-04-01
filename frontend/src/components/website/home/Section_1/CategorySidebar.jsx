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

const categoryIcons = {
  'Smartphone & Tablet': <LuSmartphone size={20} />,
  'Electronics': <LuMonitor size={20} />,
  'Fashion': <LuShirt size={20} />,
  'Furniture & Decor': <LuArmchair size={20} />,
  'Jewelry & Accessories': <LuGem size={20} />,
  'Health & Beauty': <LuBrush size={20} />,
  'Mom & Baby': <LuBaby size={20} />,
  'Game & Console': <LuGamepad2 size={20} />,
  'Cars & Motorbikes': <LuCar size={20} />,
  'Sport & Outdoor': <LuDribbble size={20} />
};

export default function CategorySidebar({ categories }) {
  // If categories aren't passed, here is the list based on your image
  const displayCategories = categories || [
    { name: 'Smartphone & Tablet', hasSub: true },
    { name: 'Electronics', hasSub: true },
    { name: 'Fashion', hasSub: true },
    { name: 'Furniture & Decor', hasSub: false },
    { name: 'Jewelry & Accessories', hasSub: false },
    { name: 'Health & Beauty', hasSub: true },
    { name: 'Mom & Baby', hasSub: false },
    { name: 'Game & Console', hasSub: false },
    { name: 'Cars & Motorbikes', hasSub: false },
    { name: 'Sport & Outdoor', hasSub: false },
  ];

  return (
    <aside className="w-full max-w-[300px] bg-white shadow-sm border border-gray-100 py-2">
      <ul className="flex flex-col">
        {displayCategories.map((cat, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 group-hover:text-red-500 transition-colors">
                {categoryIcons[cat.name] || <LuMonitor size={20} />}
              </span>
              <span className="text-[15px] font-medium text-gray-800">
                {cat.name}
              </span>
            </div>

            {/* Only show chevron if it has subcategories (matching your image) */}
            {cat.hasSub && (
              <LuChevronRight size={18} className="text-gray-400 group-hover:text-red-500" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
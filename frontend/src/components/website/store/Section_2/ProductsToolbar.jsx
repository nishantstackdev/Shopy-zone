'use client'

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Filters from "./Filters"; // 🔍 Filters import kiya yahan container link karne ke liye

const ProductsToolbar = () => {
    const [isOpen, setIsOpen] = useState(false); // 🔍 Mobile filter open state

    return (
        <div className="flex flex-wrap px-2 justify-between items-center my-3 text-sm text-gray-600">
            
            {/* 🔍 CLICKABLE FILTER TRIGGER FOR MOBILE VIEWPORTS */}
            <div className="flex items-center gap-2 lg:hidden">
                <button 
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg border text-gray-800 font-medium transition"
                >
                    <FaFilter size={12} className="text-pink-500" />
                    Filters
                </button>
            </div>

            <p className="hidden sm:block">1–40 of 120 results</p>

            <div className="flex gap-4 ml-auto sm:ml-0">
                <select className="border rounded px-2 py-1">
                    <option>24</option>
                    <option>48</option>
                    <option>72</option>
                </select>

                <select className="border rounded px-2 py-1 w-30 lg:w-full">
                    <option>Default</option>
                    <option>Price Low → High</option>
                    <option>Price High → Low</option>
                </select>
            </div>

            {/* 🔍 MOBILE SIDEBAR TARGET LAYOUT SLIDER CONTAINER */}
            <div className="lg:hidden">
                <Filters isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </div>
    );
};

export default ProductsToolbar;
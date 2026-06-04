'use client'

import { useEffect, useState } from "react";
import { GetBrands } from "@/api/Brand";
import { GetCategories } from "@/api/Category";
import { GetColor } from "@/api/Color";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react"; // 🔍 Close Icon

// 🔍 Added isOpen and onClose props
function Filters({ isOpen, onClose }) {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);
    const MIN_LIMIT = 0
    const MAX_LIMIT = 5000
    const minquery = Number(searchParams.get("min_price")) || MIN_LIMIT
    const maxquery = Number(searchParams.get("max_price")) || MAX_LIMIT
    const [min, setmin] = useState(minquery)
    const [max, setmax] = useState(maxquery)

    const selectedCategory = searchParams.get("category_slug")
    const selectedBrand = searchParams.get("brand_slug")

    useEffect(() => {
        const fetchData = async () => {
            const [cateRes, brandRes, colorRes] = await Promise.all([
                GetCategories(),
                GetBrands(),
                GetColor()
            ]);

            setCategories(cateRes?.allcategories || []);
            setBrands(brandRes?.allBrand || []);
            setColors(colorRes?.allColor || []);
        };

        fetchData();
    }, []);

    function handlerminchange(e) {
        let value = Number(e.target.value)
        if (value < MIN_LIMIT) value = MIN_LIMIT
        if (value > max) value = max
        setmin(e.target.value)
    }

    function handlermaxchange(e) {
        let value = Number(e.target.value)
        if (value > MAX_LIMIT) value = MAX_LIMIT
        if (value < min) value = min
        setmax(e.target.value)
    }

    const applyfilter = () => {
        let query = new URLSearchParams(searchParams.toString())
        if (min === MIN_LIMIT && max === MAX_LIMIT) {
            query.delete('min_price')
            query.delete('max_price')
        }
        else {
            query.set('min_price', min)
            query.set('max_price', max)
        }
        router.push(`?${query.toString()}`)
        if (onClose) onClose(); // 🔍 Close sidebar on mobile after applying price
    }

    function updateQuery(key, value) {
        const query = new URLSearchParams(searchParams.toString())
        if (query.get(key) === value) {
            query.delete(key)
        } else {
            query.set(key, value)
        }
        router.push(`/products?${query.toString()}`)
    }

    function removeFilter(key) {
        const query = new URLSearchParams(searchParams.toString())
        query.delete(key)
        router.push(`/products?${query.toString()}`)
    }

    function clearAll() {
        router.push(`/products`)
    }

    return (
        <>
            {/* 🔍 MOBILE ONLY OVERLAY: Background dark shadowing */}
            <div 
                className={`fixed inset-0 bg-black/40 z-[60] lg:hidden transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={onClose}
            />

            {/* 🔍 RESPONSIBLE FILTER SHELF WRAPPER */}
            <div className={`
                bg-[#f3f4f8] rounded-xl p-5 text-sm space-y-6
                /* Mobile Screen Configuration */
                fixed top-0 left-0 h-full w-[300px] z-[70] overflow-y-auto transition-transform duration-300 ease-in-out
                /* Desktop Screen Reset Layout Styles */
                lg:static lg:h-auto lg:w-full lg:z-0 lg:translate-x-0 lg:overflow-visible
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}>

                {/* 🔍 MOBILE ONLY FILTER HEADER */}
                <div className="flex lg:hidden justify-between items-center pb-2 border-b border-gray-200">
                    <h3 className="font-bold text-base text-gray-800">Filters</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                {/* 🔴 CLEAR ALL */}
                <button
                    onClick={() => { clearAll(); if (onClose) onClose(); }}
                    className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                >
                    Clear All Filters
                </button>

                {/* ================= CATEGORIES ================= */}
                <div>
                    <h4 className="font-semibold mb-3">CATEGORIES</h4>
                    <button
                        onClick={() => removeFilter("category_slug")}
                        className="w-full bg-white border rounded-md py-2 mb-3"
                    >
                        Remove Category
                    </button>
                    <div className="space-y-1 text-gray-600">
                        {categories.map((item) => (
                            <p
                                key={item._id || item.slug}
                                onClick={() => { updateQuery("category_slug", item.slug); }}
                                className={`ml-3 cursor-pointer hover:text-black 
                                ${selectedCategory === item.slug ? "text-black font-bold" : ""}`}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>

                <hr />

                {/* ================= BRANDS ================= */}
                <div>
                    <h4 className="font-semibold mb-3">BRANDS</h4>
                    <button
                        onClick={() => removeFilter("brand_slug")}
                        className="w-full bg-white border rounded-md py-2 mb-3"
                    >
                        Remove Brand
                    </button>
                    <div className="space-y-1 text-gray-600">
                        {brands.map((item) => (
                            <p
                                key={item._id || item.slug}
                                onClick={() => { updateQuery("brand_slug", item.slug); }}
                                className={`ml-3 cursor-pointer hover:text-black 
                                ${selectedBrand === item.slug ? "text-black font-bold" : ""}`}
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>

                <hr />

                {/* ================= COLORS ================= */}
                <div>
                    <h4 className="font-semibold mb-3">COLORS</h4>
                    <div className="flex flex-wrap gap-2">
                        {colors.map((color) => (
                            <div
                                key={color._id || color.hex_code}
                                className="w-8 h-8 rounded-full border cursor-pointer hover:scale-110 transition"
                                style={{ backgroundColor: color.hex_code }}
                            />
                        ))}
                    </div>
                </div>

                <hr />

                {/* ================= PRICE ================= */}
                <div>
                    <h4 className="font-semibold mb-3">PRICE</h4>
                    <button
                        onClick={() => removeFilter("min_price") || removeFilter("max_price")}
                        className="w-full bg-white border rounded-md py-2 mb-3"
                    >
                        Remove Price
                    </button>
                    <div className="flex items-center gap-2 mb-3">
                        <input
                            type="number"
                            placeholder="Min"
                            value={min}
                            onChange={handlerminchange}
                            className="w-full border rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-black bg-white"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={max}
                            onChange={handlermaxchange}
                            className="w-full border rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-black bg-white"
                        />
                    </div>
                    <button
                        onClick={applyfilter}
                        className="w-full bg-black text-white rounded-md py-2 text-sm hover:bg-gray-800 transition"
                    >
                        Apply
                    </button>
                </div>

            </div>
        </>
    );
}

export default Filters;
'use client'

import { useEffect, useState } from "react";
import { GetBrands } from "@/api/Brand";
import { GetCategories } from "@/api/Category";
import { GetColor } from "@/api/Color";
import { useRouter, useSearchParams } from "next/navigation";

function Filters() {

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

    // ✅ current selected values
    const selectedCategory = searchParams.get("category_slug")
    const selectedBrand = searchParams.get("brand_slug")

    // 🔄 Fetch data
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
    }

    // 🧠 COMMON MERGE FUNCTION
    function updateQuery(key, value) {
        const query = new URLSearchParams(searchParams.toString())

        if (query.get(key) === value) {
            query.delete(key) // toggle off
        } else {
            query.set(key, value) // add/update
        }

        router.push(`/products?${query.toString()}`)
    }

    // ❌ Remove specific filter
    function removeFilter(key) {
        const query = new URLSearchParams(searchParams.toString())
        query.delete(key)
        router.push(`/products?${query.toString()}`)
    }

    // ❌ Remove all filters
    function clearAll() {
        router.push(`/products`)
    }

    return (
        <div className="bg-[#f3f4f8] rounded-xl p-5 text-sm space-y-6">

            {/* 🔴 CLEAR ALL */}
            <button
                onClick={clearAll}
                className="w-full bg-red-500 text-white py-2 rounded-md"
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
                            onClick={() => updateQuery("category_slug", item.slug)}
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
                            onClick={() => updateQuery("brand_slug", item.slug)}
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

            <div>
                <h4 className="font-semibold mb-3">PRICE</h4>

                {/* Remove Filter */}
                <button
                    className="w-full bg-white border rounded-md py-2 mb-3"
                >
                    Remove Price
                </button>

                {/* Inputs */}
                <div className="flex items-center gap-2 mb-3">

                    <input
                        type="number"
                        placeholder="Min"
                        value={min}
                        onChange={handlerminchange}
                        className="w-full border rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type="number"
                        placeholder="Max"
                        value={max}
                        onChange={handlermaxchange}
                        className="w-full border rounded-md px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-black"
                    />

                </div>


                {/* Apply Button */}
                <button
                    onClick={applyfilter}
                    className="w-full bg-black text-white rounded-md py-2 text-sm hover:bg-gray-800 transition"
                >
                    Apply
                </button>
            </div>

        </div>
    );
}

export default Filters;
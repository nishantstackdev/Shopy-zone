'use client'

import { useEffect, useState } from "react";
import { GetBrands } from "@/api/Brand";
import { GetCategories } from "@/api/Category";
import { GetColor } from "@/api/Color";

function Filters({ setOpenFilter }) {

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [cateRes, BrandRes, ColorRes] = await Promise.all([
                GetCategories(),
                GetBrands(),
                GetColor()
            ]);

            setCategories(cateRes?.allcategories || []);
            setBrands(BrandRes?.allBrand || []);
            setColors(ColorRes?.allColor || []);
        };

        fetchData();
    }, []);

    return (
        <div className="bg-[#f3f4f8] rounded-xl p-5 text-sm space-y-6">

            {/* Close button (mobile) */}
            <button
                className="lg:hidden mb-3 text-red-500 font-medium"
                onClick={() => setOpenFilter(false)}
            >
                Close ✕
            </button>

            {/* CATEGORIES */}
            <div>
                <button className="w-full bg-white border rounded-md py-2 mb-4 font-medium">
                    All Categories
                </button>

                <div className="space-y-1 text-gray-600">
                    {categories.map((item, index) => (
                        <p key={index} className="ml-3 hover:text-black cursor-pointer">
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>

            <hr />

            {/* BRANDS */}
            <div>
                <button className="w-full bg-white border rounded-md py-2 mb-4 font-medium">
                    All Brands
                </button>

                <div className="space-y-1 text-gray-600">
                    {brands.map((item, index) => (
                        <p key={index} className="ml-3 hover:text-black cursor-pointer">
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>

            <hr />

            {/* COLORS */}
            <div>
                <h4 className="font-semibold mb-3">BY COLOR</h4>

                <div className="flex flex-wrap gap-2">
                    {colors.map((color, i) => (
                        <div
                            key={i}
                            className="w-8 h-8 rounded-full border cursor-pointer hover:scale-110 transition"
                            style={{ backgroundColor: color.hex_code }}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Filters;
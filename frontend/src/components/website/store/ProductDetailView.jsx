// components/website/store/ProductDetailView.js
'use client';

import { useState } from "react";
import Addtocartbtn from "../global/Addtocartbtn";

export default function ProductDetailView({ product }) {
    

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            <div className="grid md:grid-cols-2 gap-10">
                {/* LEFT - IMAGE */}
                <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center shadow-sm">
                    <img
                        src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
                        alt={product.name}
                        className="object-contain hover:scale-105 transition duration-300"
                        width={450}
                        height={450}
                    />
                </div>

                {/* RIGHT - DETAILS */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
                    <p className="text-gray-500">{product.short_description}</p>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-pink-500">₹{product.final_price}</span>
                        <span className="line-through text-gray-400">₹{product.original_price}</span>
                        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                            {product.discount_price}% OFF
                        </span>
                    </div>

                    <p className={`text-sm font-medium ${product.stock ? "text-green-600" : "text-red-500"}`}>
                        {product.stock ? "In Stock ✅" : "Out of Stock ❌"}
                    </p>

                    <div className="flex gap-4">
                        <Addtocartbtn product={product} id={product._id} />
                        <button className="border border-gray-300 hover:border-black px-6 py-2 rounded-lg transition">
                            Buy Now
                        </button>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="pt-6 border-t">
                        <h2 className="text-lg font-semibold mb-2">Product Description</h2>
                        <div
                            className="text-gray-600 text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: product?.long_description || "<p>No description available</p>",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}   
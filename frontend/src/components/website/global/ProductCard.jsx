"use client";

import Link from 'next/link';
import React from 'react'
import Addtocartbtn from './Addtocartbtn';

export default function ProductCard({ product, id, variant = "vertical" }) {

  if (!product) return null

  // ================= HORIZONTAL =================
  if (variant === "horizontal") {
    return (
      <div className="group flex items-center cursor-pointer bg-white p-3 rounded-lg w-full gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">

        {/* Image */}
        <Link href={`/product-detail/${product._id}`}>
          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">

          <div className="text-[#FFB800] text-xs">
            ★★★★★
          </div>

          <h3 className="text-sm font-medium text-[#001F3F] line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm font-bold text-black">
            ₹{product.final_price}
          </p>

          <Addtocartbtn product={product} id={product._id} />

        </div>
      </div>
    )
  }

  // ================= VERTICAL =================
  return (
    <div className="group bg-white rounded-xl p-4 cursor-pointer w-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative">

      {/* Discount Badge */}
      {product.discount_price > 0 && (
        <span className="absolute top-4 left-4 bg-[#FF4D6D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
          {product.discount_price}% OFF
        </span>
      )}

      {/* Image */}
      <Link href={`/product-detail/${product._id}`}>
        <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
            alt={product.name}
            className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* Category */}
      <p className="text-gray-400 text-xs mb-1">
        {product.category_id?.name}
      </p>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
        {product.name}
      </h3>

      {/* Brand */}
      <p className="text-xs text-gray-500 mt-1">
        Brand: {product.brand_Id?.name}
      </p>

      {/* Price */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#FF4D6D] font-bold text-lg">
          ₹{product.final_price}
        </span>

        {product.original_price && (
          <span className="text-gray-400 line-through text-sm">
            ₹{product.original_price}
          </span>
        )}
      </div>

      {/* Stock */}
      <p className={`text-xs mt-2 ${product.stock ? "text-green-600" : "text-red-500"}`}>
        {product.stock ? "In Stock" : "Out of Stock"}
      </p>

      {/* Button wrapper (optional hover sync) */}
      <div className="mt-2 transition-all duration-300 group-hover:scale-[1.02]">
        <Addtocartbtn product={product} id={product._id} />
      </div>

    </div>
  )
}
"use client";

import Link from 'next/link';
import React from 'react'
import Addtocartbtn from './Addtocartbtn';

export default function ProductCard({ product, id, variant = "vertical" }) {
  if (!product) return null

  // ================= LIKE ICON UI =================
  const LikeIcon = (
    <div className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-500 hover:scale-110 transition-all duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    </div>
  );

  // ================= HORIZONTAL =================
  if (variant === "horizontal") {
    return (
      <div className="group flex items-center cursor-pointer bg-white p-3 rounded-lg w-full gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative">
        
        {LikeIcon}

        <Link href={`/product-detail/${product._id}`}>
          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        <div className="flex flex-col justify-between flex-1">
          <div className="text-[#FFB800] text-xs">★★★★★</div>
          <h3 className="text-sm font-medium text-[#001F3F] line-clamp-2">{product.name}</h3>
          <p className="text-sm font-bold text-black">₹{product.final_price}</p>

          <div className="flex items-center gap-1 mt-1">
            {product.color_ids?.slice(0, 4).map((color) => (
              <span
                key={color._id}
                style={{ backgroundColor: color.hex_code }}
                className="w-4 h-4 rounded-full border border-gray-300"
              />
            ))}
          </div>
          <Addtocartbtn product={product} id={product._id} />
        </div>
      </div>
    )
  }

  // ================= VERTICAL =================
  return (
    <div className="group bg-white rounded-xl p-4 cursor-pointer w-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative">
      
      {LikeIcon}

      <Link href={`/product-detail/${product._id}`}>
        <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
            alt={product.name}
            className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <p className="text-gray-400 text-xs mb-1">{product.category_id?.name}</p>
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
      <p className="text-xs text-gray-500 mt-1">Brand: {product.brand_Id?.name}</p>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#FF4D6D] font-bold text-lg">₹{product.final_price}</span>
        {product.original_price && (
          <span className="text-gray-400 line-through text-sm">₹{product.original_price}</span>
        )}
      </div>

      <p className={`text-xs mt-2 ${product.stock ? "text-green-600" : "text-red-500"}`}>
        {product.stock ? "In Stock" : "Out of Stock"}
      </p>

      <div className="flex items-center gap-1 mt-1">
        {product.color_ids?.slice(0, 4).map((color) => (
          <span
            key={color._id}
            style={{ backgroundColor: color.hex_code }}
            className="w-4 h-4 rounded-full border border-gray-300"
          />
        ))}
      </div>

      <div className="mt-2 transition-all duration-300 group-hover:scale-[1.02]">
        <Addtocartbtn product={product} id={product._id} />
      </div>
    </div>
  )
}
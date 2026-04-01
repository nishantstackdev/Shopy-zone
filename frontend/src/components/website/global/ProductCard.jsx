import React from 'react'

export default function ProductCard({
  category,
  title,
  price,
  oldPrice,
  image,
  variant = "vertical"
}) {

  // Horizontal Card (New Arrivals)
  if (variant === "horizontal") {
    return (
      <div className="flex my-2 items-center cursor-pointer bg-white p-2 rounded-lg w-full gap-2 shadow-sm">

        {/* Image */}
        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">

          <div className="text-[#FFB800] text-xs">
            ★★★★★
          </div>

          <h3 className="text-xs font-medium text-[#001F3F] line-clamp-2">
            {title}
          </h3>

          <p className="text-sm font-bold text-black">
            {price}
          </p>

        </div>
      </div>
    );
  }

  // Vertical Card
  return (
    <div className="bg-white rounded-xl p-4 cursor-pointer min-w-[240px] flex-1 shadow-sm relative">

      <span className="absolute top-4 left-4 bg-[#FF4D6D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
        Sale
      </span>

      <div className="h-48 w-full flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain"
        />
      </div>

      <p className="text-gray-400 text-xs mb-1">
        {category}
      </p>

      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[#FF4D6D] font-bold">
          ${price}
        </span>

        {oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            ${oldPrice}
          </span>
        )}
      </div>
    </div>
  );
}
import React from "react";

const NewSellcard = ({ title, price, image }) => {
  return (
    <div className="flex my-2 items-center bg-white p-2 rounded-lg w-full gap-2 shadow-sm">
      
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
        
        {/* Stars */}
        <div className="text-[#FFB800] text-xs leading-none">
          ★★★★★
        </div>

        {/* Title */}
        <h3 className="text-xs font-medium text-[#001F3F] leading-tight line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <p className="text-sm font-bold text-black">
          {price}
        </p>

      </div>
    </div>
  );
};

export default NewSellcard;
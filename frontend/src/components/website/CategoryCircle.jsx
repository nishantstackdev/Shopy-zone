import React from 'react'

export default function CategoryCircle({ name, images }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer">

      {/* Circle */}
      <div className="
        relative
        w-24 h-24 
        sm:w-28 sm:h-28 
        md:w-32 md:h-32 
        lg:w-36 lg:h-36 
        xl:w-40 xl:h-40
        rounded-full
        bg-gradient-to-br from-gray-100 to-gray-50
        p-[2px]
        transition-all duration-300
        group-hover:scale-105
        group-hover:shadow-xl
      ">

        {/* Inner circle */}
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src={process.env.NEXT_PUBLIC_CATEGORY_IMAGE + images}
            alt={name}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 ring-2 ring-red-400"></div>
      </div>

      {/* Name */}
      <h2 className="
        text-center mt-3 font-medium
        text-xs sm:text-sm md:text-base
        text-gray-700
        group-hover:text-red-500
        transition-colors duration-200
      ">
        {name}
      </h2>

    </div>
  )
}
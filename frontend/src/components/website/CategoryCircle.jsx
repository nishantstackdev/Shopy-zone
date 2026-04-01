import React from 'react'

export default function CategoryCircle({ name, images }) {
  return (
    <div className="flex flex-col items-center">

      <div className="
        w-24 h-24 
        sm:w-28 sm:h-28 
        md:w-32 md:h-32 
        lg:w-36 lg:h-36 
        xl:w-40 xl:h-40
        rounded-full border p-1 overflow-hidden 
        flex items-center justify-center 
        hover:shadow-lg transition duration-300 cursor-pointer
      ">
        <img
          src={images}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <h2 className="
        text-center mt-2 font-semibold
        text-sm sm:text-base md:text-lg
      ">
        {name}
      </h2>

    </div>
  )
}
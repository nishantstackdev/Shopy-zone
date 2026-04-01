'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Brandsrow() {
  const brands = [
    { id: 1, name: "Apple", category: "Smartphones & Laptops", image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 2, name: "Samsung", category: "Electronics & Appliances", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { id: 3, name: "Sony", category: "Audio & Entertainment", image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
    { id: 4, name: "LG", category: "Home Appliances", image: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg" },
    { id: 5, name: "Dell", category: "Laptops & PCs", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { id: 6, name: "HP", category: "Computers & Printers", image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { id: 7, name: "Lenovo", category: "Laptops & Accessories", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Lenovo_logo.svg" },
    { id: 8, name: "Asus", category: "Gaming & Laptops", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  ];

  return (
    <div className="w-full bg-slate-50">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="font-bold text-2xl mb-6">Shop by Brands</h1>

        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="p-4 border rounded text-center cursor-pointer bg-white shadow-sm">
                <img src={brand.image} alt={brand.name} className="h-8 mx-auto" />
                <h2 className="mt-2 font-semibold">{brand.name}</h2>
                <p className="text-sm text-gray-500">{brand.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
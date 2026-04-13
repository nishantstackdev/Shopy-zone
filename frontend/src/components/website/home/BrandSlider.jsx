'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BrandSlider({brands}) {
    console.log(brands)
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
                                <img src={process.env.NEXT_PUBLIC_BRAND_IMAGE + brand.image} alt={brand.name} className=" h-10 mx-auto" />
                                <h2 className="mt-2 font-semibold">{brand.name}</h2>
                                <p className="text-sm text-gray-500">{brand.category}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

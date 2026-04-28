'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from 'next/link';

export default function BrandSlider({ brands }) {
    return (
        <div className="w-full bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto py-10 px-4">
                
                {/* Title with fade-right */}
                <h1 
                    className="font-bold text-2xl mb-6" 
                    data-aos="fade-right"
                >
                    Shop by Brands
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            {/* AOS Wrapper inside SwiperSlide */}
                            <div 
                                data-aos="fade-up" 
                                data-aos-delay={(index + 1) * 100}
                            >
                                <Link href={`/products?brand_slug=${brand.slug}`}>
                                    <div className="p-4 border rounded text-center cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <img 
                                            src={process.env.NEXT_PUBLIC_BRAND_IMAGE + brand.image} 
                                            alt={brand.name} 
                                            className="h-10 mx-auto object-contain transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110" 
                                        />
                                        <h2 className="mt-2 font-semibold">{brand.name}</h2>
                                        <p className="text-sm text-gray-500">{brand.category}</p>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
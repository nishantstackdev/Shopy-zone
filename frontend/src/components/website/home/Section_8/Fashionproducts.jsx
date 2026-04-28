'use client'
import React from 'react'
import ProductCard from '../../global/ProductCard'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Fashionproducts({ Fashionprod }) {
    const swiperRef = useRef(null)

    return (
        <>
            {/* Mobile Swiper */}
            <div className="md:hidden">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1.3}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {Fashionprod.map((pd, index) => (
                        <SwiperSlide key={index}>
                            {/* Wrapper div for AOS inside Swiper */}
                            <div
                                data-aos="fade-left"
                                data-aos-delay={(index + 1) * 100}
                            >
                                <ProductCard product={pd} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Tablet & Desktop Grid */}
            <div className="hidden md:grid mr-3 md:col-span-2 grid-cols-2 gap-4">
                {Fashionprod.map((pd, index) => (
                    // Desktop cards ke liye bhi AOS wrapper
                    <div 
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={(index + 1) * 100}
                    >
                        <ProductCard product={pd} />
                    </div>
                ))}
            </div>
        </>
    )
}
'use client'
import React from 'react'
import ProductCard from '../../global/ProductCard'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

export default function RecommendedProd({recommendedProducts}) {
    const swiperRef = useRef(null)

    return (
        <>
            <div className="my-6">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                >
                    {recommendedProducts.map((pd, index) => (
                        <SwiperSlide key={index}>
                            {/* Staggered animation logic */}
                            <div 
                                data-aos="fade-up" 
                                data-aos-delay={(index + 1) * 100}
                            >
                                <ProductCard product={pd} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation Buttons - Optional: Isme bhi animation daal sakte hain */}
            <div className="flex w-[90px] mx-auto justify-between" data-aos="fade-up" data-aos-delay="500">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    ←
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                    →
                </button>
            </div>
        </>
    )
}
'use client'
import React from 'react'
import ProductCard from '../../global/ProductCard'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

export default function LovedProd({LovedProducts}) {
    // console.log(LovedProducts)
    const swiperRef = useRef(null)
    return (
        <>
            {/* Swiper */}
            <div className="my-6">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {LovedProducts.map((pd,index) => (
                        <SwiperSlide data-aos="fade-up" data-aos-delay={(index+1) * 100} key={pd.id} className="!w-auto">
                            <ProductCard
                                    product={pd}
                                />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Custom Buttons */}
            <div className='hidden md:block md:flex w-[90px]  mx-auto justify-between'>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                    ←
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                    →
                </button>
            </div>
            <div className=' md:hidden block flex max-w-[90px] justify-between  mx-auto'>
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                    ←
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
                >
                    →
                </button>
            </div>
        </>


    )
}

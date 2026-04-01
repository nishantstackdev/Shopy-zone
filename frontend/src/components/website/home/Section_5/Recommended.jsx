'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Link from 'next/link'
import ProductCard from '../../global/ProductCard'

export default function Recommended() {

    const swiperRef = useRef(null)

    const recommendedProducts = [
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Wooden Cupboard",
            price: 180,
            oldPrice: 210,
            image: "/chair.png"
        }
    ]

    return (
        <div className="w-full bg-slate-50 py-10">

            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Header */}
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">
                        Recommended For You
                    </h1>

                    <Link href="/products">
                        <button className="underline cursor-pointer">
                            View All Products
                        </button>
                    </Link>
                </div>

                {/* Swiper */}
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

                                <ProductCard
                                    key={index} category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image}
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

                {/* Custom Buttons */}
                <div className="flex w-[90px] mx-auto justify-between">

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

            </div>
        </div>
    )
}
'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Link from 'next/link'
import ProductCard from '../../global/ProductCard'

export default function Lovedrow() {
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

    ];

    return (
        <div className="max-w-7xl my-3 mx-auto relative px-4">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Customer Loved Products</h1>

                <div className="flex items-center gap-4">
                    <Link href={"/products"}>
                        <button className="underline cursor-pointer">View All Products</button>
                    </Link>
                </div>
            </div>

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
                    {recommendedProducts.map((pd) => (
                        <SwiperSlide key={pd.id} className="!w-auto">
                            <ProductCard
                                    category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image}
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
        </div>
    )
}
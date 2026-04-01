'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import ProductCard from '../../global/ProductCard'

export default function Fashiongrid() {

    const swiperRef = useRef(null)

    const FashiondProducts = [
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
        <section className="max-w-7xl mx-auto py-10">

            {/* Header */}
            <div className="flex  justify-between px-3 md:px-0 items-center mb-6">

                <h2 className="text-2xl px-3 md:text-3xl font-bold">
                    Fashion
                </h2>

                <Link href="/products">
                    <button className="underline px-3 text-sm font-medium">
                        See All Products
                    </button>
                </Link>

            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1  md:grid-cols-4 gap-6 mx-2 lg:mx-0 md:px-0">

                {/* Left Image */}
                <div className="hidden md:block md:col-span-2">
                    <img
                        src="/images/home/fashion.jpg"
                        alt="fashion"
                        className="w-full h-[650px] lg:h-[650px] object-cover rounded-xl"
                    />
                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden">

                    <Swiper
                        spaceBetween={15}
                        slidesPerView={1.3}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {FashiondProducts.map((pd, index) => (

                            <SwiperSlide key={index}>

                                <ProductCard
                                    key={index} category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image}
                                />

                            </SwiperSlide>

                        ))}
                    </Swiper>

                </div>

                {/* Tablet & Desktop Grid */}
                <div className="hidden md:grid mr-3 md:col-span-2 grid-cols-2 gap-4">

                    {FashiondProducts.map((pd, index) => (

                        <ProductCard
                            key={index} category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image}
                        />

                    ))}

                </div>

            </div>

        </section>
    )
}
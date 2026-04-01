'use client'
import React, { useState } from 'react'
import Saletimer from '../../Saletimer'

export default function Posters() {
    const slides = [
        {
            id: 1,
            title: "Modern Wooden \nDining Chairs",
            subtitle: "Special Offer",
            desc: "Get discount code up to 20% here",
            image: "/images/home/slide1.jpg"
        },
        {
            id: 2,
            title: "Hooded Jackets \nFor Women",
            subtitle: "Black Friday Sale",
            desc: "10% discount for first customers",
            image: "/images/home/slide2.jpg"
        },
        {
            id: 3,
            title: "New Generation \nSmart Watch",
            subtitle: "New Arrivals",
            desc: "You can certainly buy and pay online",
            image: "/images/home/watch.jpg"
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const current = slides[activeIndex]

    return (
        <div className="max-w-7xl mx-auto my-4 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-4">

            {/* LEFT - HERO */}
            <div
                className="lg:col-span-2 h-[300px] sm:h-[400px] rounded-2xl border bg-cover bg-center relative flex items-center px-6 sm:px-10"
                style={{ backgroundImage: `url(${current.image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>

                {/* TEXT */}
                <div className="relative z-10 max-w-xl text-white">

                    <p className="text-red-400 text-sm sm:text-lg mb-2">
                        {current.subtitle}
                    </p>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
                        {current.title}
                    </h1>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
                        {current.desc}
                    </p>

                    <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition">
                        Shop Now
                    </button>

                    {/* DOTS */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-3 h-3 sm:w-4 sm:h-4 border border-white"
                                        : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT - SALE CARD */}
            <div className="h-[300px] sm:h-[400px]">
                <div className="relative rounded-2xl overflow-hidden h-full flex items-center justify-center group">

                    {/* Background */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: "url('/images/home/banner-deal.jpg')" }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 text-white">

                        <h2 className="text-lg sm:text-xl font-bold mb-2">
                            Cyber Sale
                        </h2>

                        <p className="text-xs sm:text-sm mb-4">
                            20% Off when buying online
                        </p>

                        <Saletimer />

                        <button className="mt-4 sm:mt-5 px-4 sm:px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
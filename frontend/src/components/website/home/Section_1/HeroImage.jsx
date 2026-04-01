'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroImage() {
  const slides = [
    {
      id: 1,
      title: "Women's \nClothing Sale",
      subtitle: "Sale Up To 60%",
      desc: "Biggest promotion at the end of the year",
      image: "/images/home/banner.jpg"
    },
    {
      id: 2,
      title: "Bluetooth \nSpeakers",
      subtitle: "Buy 2 Get 1 Free",
      desc: "Buy 2 wireless speakers, get 1 free sticker",
      image: "/images/home/banner2.jpg"
    },
    {
      id: 3,
      title: "Playstation \nController",
      subtitle: "Sale Up To 30%",
      desc: "Here’s a fresh take on an old favorite.",
      image: "/images/home/banner3.jpg"
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // 5 seconds interval
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden group">
        
        {/* Slides Logic */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Next.js Optimized Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0} // First image should load fast
              sizes="100vw"
              className="object-cover transition-transform duration-[5000ms] group-hover:scale-110"
            />
            
            {/* Modern Overlay (Darker on the left for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-20" />

            {/* Content Container */}
            <div className="absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className={`transition-all duration-700 delay-300 transform ${
                index === activeIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}>
                <p className="text-red-500 font-bold tracking-wider uppercase text-sm md:text-base">
                  {slide.subtitle}
                </p>

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white whitespace-pre-line mt-3 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="mt-4 text-gray-200 text-base md:text-lg max-w-md line-clamp-2">
                  {slide.desc}
                </p>

                <button className="mt-8 w-fit px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold shadow-lg transform transition active:scale-95">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dots Navigation - Always on top */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-10 h-3 bg-red-600"
                  : "w-3 h-3 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
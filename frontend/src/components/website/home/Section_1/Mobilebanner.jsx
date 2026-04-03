'use client'
import React from 'react'
import { useState,useEffect } from 'react'

export default function Mobilebanner() {
    const sellerSlides = [
        "/images/home/Seller.jpg",
        "/images/home/Seller2.jpg",
        "/images/home/Seller3.jpg"
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
    useEffect(() => {
        const check = () => {
            setIsMobileOrTablet(window.innerWidth < 1024)
        }

        check()
        window.addEventListener('resize', check)

        return () => window.removeEventListener('resize', check)
    }, [])

    useEffect(() => {
        if (!isMobileOrTablet) return

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sellerSlides.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [isMobileOrTablet])
    return (
        <div className="block mt-0 md:mt-0 lg:hidden relative h-[550px] overflow-hidden rounded-xl">

            <img
                src={sellerSlides[activeIndex]}
                alt="Seller"
                className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

        </div>

    )
}

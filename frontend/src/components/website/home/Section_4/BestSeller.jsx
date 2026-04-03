'use client'

import { useState } from "react";
import ProductCard from "../../global/ProductCard";

export default function BestSeller() {

    const products = [
        {
            category: "Furniture & Decor",
            title: "Boat Shaped Slab Base Table",
            price: 115,
            oldPrice: 130,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Modern Wooden Chair",
            price: 90,
            oldPrice: 110,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Office Sofa Set",
            price: 220,
            oldPrice: 250,
            image: "/chair.png"
        },
        {
            category: "Furniture & Decor",
            title: "Luxury Dining Table",
            price: 300,
            oldPrice: 350,
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
    ];

    const itemsPerView = 4;
    const totalSlides = Math.ceil(products.length / itemsPerView);

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

            {/* Header */}
            <div className="bg-black text-white flex justify-between px-4 py-3 items-center">
                <button onClick={prevSlide}>⬅️</button>
                <h2 className="font-semibold">New Arrivals</h2>
                <button onClick={nextSlide}>➡️</button>
            </div>

            {/* Slider */}
            <div className="overflow-hidden">

                <div className="overflow-hidden">
                
                                <div
                                    className="flex transition-transform duration-500"
                                    style={{
                                        transform: `translateX(-${index * 100}%)`
                                    }}
                                >
                
                                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                
                                        <div
                                            key={slideIndex}
                                            className="min-w-full p-4"
                                        >
                
                                            <div className="flex flex-col">
                
                                                {products
                                                    .slice(
                                                        slideIndex * itemsPerView,
                                                        slideIndex * itemsPerView + itemsPerView
                                                    )
                                                    .map((pd, i) => (
                
                                                        <ProductCard
                                                            key={slideIndex + i}
                                                             category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image}
                                                            variant="horizontal"
                                                        />
                
                                                    ))}
                
                                            </div>
                
                                        </div>
                
                                    ))}
                
                                </div>
                
                            </div>

            </div>

        </div>
    );
}
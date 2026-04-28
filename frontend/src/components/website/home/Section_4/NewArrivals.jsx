'use client'

import { useState, useEffect } from "react";
import ProductCard from "../../global/ProductCard";
import { getProduct } from "@/api/Product";

export default function BestSeller() {

    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);

    const itemsPerView = 4;
    const totalSlides = Math.ceil(products.length / itemsPerView);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getProduct({limit:8,status:true,is_home:true});
            setProducts(res.allProduct || []);
        };
        fetchData();
    }, []);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div data-aos="fade-right" className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

            {/* Header */}
            <div className="bg-black text-white flex justify-between px-4 py-3 items-center">
                <button onClick={prevSlide}>⬅️</button>
                <h2 className="font-semibold">Best Sellers</h2>
                <button onClick={nextSlide}>➡️</button>
            </div>

            {/* Slider */}
            <div className="overflow-hidden">

                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * 100}%)`
                    }}
                >

                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (

                        <div key={slideIndex} className="min-w-full p-4">

                            <div className="flex flex-col">

                                {products
                                    .slice(
                                        slideIndex * itemsPerView,
                                        slideIndex * itemsPerView + itemsPerView
                                    )
                                    .map((pd) => (

                                        <ProductCard
                                            key={pd._id}
                                            product={pd}
                                            variant="horizontal"
                                        />

                                    ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}
import React from 'react'
import Link from 'next/link'
import { getProduct } from '@/api/Product'
import "swiper/css"
import Fashionproducts from './Fashionproducts'
import axios from 'axios'


export default async function Fashiongrid() {
    const product = await axios.get("http://localhost:8000/product?category_slug=fashion")
    const Fashionprod = product.data.allProduct

    return (
        <section className="max-w-7xl mx-auto py-10">

            {/* Header */}
            <div data-aos="fade-right" className="flex  justify-between px-3 md:px-0 items-center mb-6">

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
            <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-6 mx-2 lg:mx-0 md:px-0">

                {/* Left Image */}
                <div data-aos="zoom-in" className="hidden md:block md:col-span-2">
                    <img
                        src="/images/home/fashion.jpg"
                        alt="fashion"
                        className="w-full h-[650px] lg:h-[650px] object-cover rounded-xl"
                    />
                </div>


            <Fashionproducts Fashionprod={Fashionprod} />
            </div>

        </section>
    )
}
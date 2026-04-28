import React from "react"
import "swiper/css"
import Link from 'next/link'
import LovedProd from './LovedProd'
import { getProduct  } from "@/api/Product"

export default async function Lovedrow() {
    const product = await getProduct({status:true,is_best:true,limit:5})
    const LovedProducts = product.allProduct


    return (
        <div className="max-w-7xl my-3 mx-auto relative px-4">

            {/* Header */}
            <div data-aos="fade-right" className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Customer Loved Products</h1>

                <div className="flex items-center gap-4">
                    <Link href={"/products"}>
                        <button className="underline cursor-pointer">View All Products</button>
                    </Link>
                </div>
            </div>

            <LovedProd LovedProducts={LovedProducts} />
        </div>
    )
}
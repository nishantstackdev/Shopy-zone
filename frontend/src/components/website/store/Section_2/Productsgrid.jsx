    import React from 'react'
    import ProductCard from '../../global/ProductCard'
    import { getProduct } from '@/api/Product'

    export default async function Productsgrid({ searchParams }) {
        // console.log(searchParams,"asdkfjhsa")

    const category_slug = searchParams?.category_slug || null
    const brand_slug = searchParams?.brand_slug || null

    const product_response = await getProduct({
        status: true,
        category_slug,
        brand_slug
    })

    const products = product_response?.allProduct || []

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((item) => (
                <ProductCard key={item._id} product={item} />
            ))}
        </div>
    )
}

import React from 'react'
import ProductCard from '../../global/ProductCard'

export default function Productsgrid() {
    const moreProducts = [
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
    return (
        <div className='grid grid-cols-1 mx-2 lg:mx-0 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                moreProducts.map((product,index) => {
                    return (
                        <ProductCard key={index} category={product.category} title={product.title} price={product.price} oldPrice={product.oldPrice} />
                    )
                })
            }
        </div>
    )
}

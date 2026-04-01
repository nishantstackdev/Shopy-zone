import React from 'react'
import ProductCard from '../../global/ProductCard'

export default function Productsgrid() {
    const moreProducts = [
        {
            id: 2,
            name: "Wireless Headphones",
            price: 1499,
            oldPrice: 1899,
            badge: "SAVE $40",
            status: "IN STOCK"
        },
        {
            id: 3,
            name: "Smart Watch",
            price: 1999,
            oldPrice: 2499,
            badge: "SAVE $60",
            status: "PRE-ORDER"
        },
        {
            id: 4,
            name: "Bluetooth Speaker",
            price: 899,
            oldPrice: 1199,
            badge: "SAVE $25",
            status: "IN STOCK"
        },
        {
            id: 5,
            name: "Gaming Mouse",
            price: 599,
            oldPrice: 799,
            badge: "SAVE $20",
            status: "OUT OF STOCK"
        },
        {
            id: 6,
            name: "Laptop Stand",
            price: 699,
            oldPrice: 999,
            badge: "SAVE $30",
            status: "IN STOCK"
        },
        {
            id: 7,
            name: "DSLR Camera",
            price: 4599,
            oldPrice: 4999,
            badge: "SAVE $80",
            status: "PRE-ORDER"
        },
        {
            id: 8,
            name: "Tablet Device",
            price: 2599,
            oldPrice: 2999,
            badge: "SAVE $55",
            status: "IN STOCK"      },
        {
            id: 9,
            name: "Keyboard",
            price: 499,
            oldPrice: 699,
            badge: "SAVE $15",
            status: "IN STOCK"
        },
        {
            id: 10,
            name: "Monitor Screen",
            price: 3299,
            oldPrice: 3799,
            badge: "SAVE $70",
            status: "PRE-ORDER"
        },
        {
            id: 11,
            name: "External Hard Drive",
            price: 1199,
            oldPrice: 1499,
            badge: "SAVE $35",
            status: "IN STOCK"
        },
        {
            id: 12,
            name: "VR Headset",
            price: 3499,
            oldPrice: 3999,
            badge: "SAVE $90",
            status: "PRE-ORDER"
        },
        {
            id: 13,
            name: "Smart TV",
            price: 8999,
            oldPrice: 9999,
            badge: "SAVE $120",
            status: "IN STOCK"
        },
    ];
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                moreProducts.map((product,index) => {
                    return (
                        <ProductCard key={product.id} category={product.category} title={product.title} price={product.price} oldPrice={product.oldPrice} />
                    )
                })
            }
        </div>
    )
}

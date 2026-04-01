import React from 'react'

export default function ShopPosters() {
    return (
        <div
            className='w-full h-40 bg-cover bg-center'
            style={{ backgroundImage: "url('/images/store/bg-image.jpg')" }}
        >
            <div className='flex flex-col justify-center items-center h-full'>
                <h1 className='text-white font-bold uppercase text-2xl'>
                    Categories Product
                </h1>
                <h2 className='text-center text-white'>
                    Home/Product/Categories
                </h2>
            </div>
        </div>
    )
}

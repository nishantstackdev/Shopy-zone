'use client'
import { addTocart, qtyChange } from '@/redux/features/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Addtocartbtn({ product }) {
    const cart = useSelector((store) => store.cart)
    const cartItem = cart?.items.find((item) => item.id == product._id)

    const dispacher = useDispatch()

    return (
        <>
            {
                cartItem && cartItem.qty > 0
                    ?
                    <div className='flex items-center justify-center gap-4 bg-gray-100 px-4 py-2 rounded-2xl w-fit mx-auto shadow-sm my-2'>

                        <button
                            onClick={() => dispacher(qtyChange({ id: product._id, flag: "dsc" }))}
                            className='bg-[#FF4D6D] hover:bg-[#e04360] transition px-4 py-1 rounded-xl text-white text-lg font-bold'>
                            -
                        </button>

                        <h2 className='text-lg font-semibold min-w-[20px] text-center'>
                            {cartItem.qty}
                        </h2>

                        <button
                            onClick={() => dispacher(qtyChange({ id: product._id, flag: "inc" }))}
                            className='bg-[#FF4D6D] hover:bg-[#e04360] transition px-4 py-1 rounded-xl text-white text-lg font-bold'>
                            +
                        </button>

                    </div>
                    :
                    <button
                        onClick={() => {
                            dispacher(addTocart({
                                name: product.name,
                                final_price: Number(product.final_price),
                                original_price: Number(product.original_price),
                                id: product._id,
                                thumbnail: process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail,
                                stock: product.stock,
                                qty: 1
                            }))
                        }}
                        className='w-full text-white font-semibold cursor-pointer rounded-2xl py-2 my-3 bg-[#FF4D6D] block mx-auto'
                    >
                        Add to Cart
                    </button>
            }

        </>

    )
}

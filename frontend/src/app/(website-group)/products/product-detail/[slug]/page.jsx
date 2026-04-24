'use client'

import { instance } from '@/helper/helper'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ProductDetail() {

    const { slug } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // console.log("ID:", slug)

        if (!slug) return

        setLoading(true)

        instance.get(`products/product-detail/${slug}`)
            .then((res) => {
                console.log("API RES:", res)
                setProduct(res.data) // adjust if needed
            })
            .catch((err) => {
                console.log("ERROR:", err)
                setProduct(null)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [slug])

    if (loading) return <p>Loading...</p>

    if (!product) return <p>No Product Found</p>

    return (
        <div>
            <h1>{product?.name}</h1>
        </div>
    )
}
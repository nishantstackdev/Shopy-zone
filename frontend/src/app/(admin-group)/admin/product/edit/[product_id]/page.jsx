import { GetProductById } from '@/api/Product'
import EditProductForm from '@/components/admin/EditProduct'
import React from 'react'

export default async function page({ params }) {
    const promise = await params
    // console.log(promise)
    const data = await GetProductById(promise.product_id)
    const allProduct = data != null ? data.allProduct : null
    return (
        <EditProductForm  product={allProduct}/>
    )
}

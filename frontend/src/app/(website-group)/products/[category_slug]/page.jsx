import React from 'react'
import { getProduct } from '@/api/Product'

export default async function page({searchParams}) {
    const category_promise = await searchParams
    const category_slug = category_promise.category_slug
    const brand_slug = category_promise.brand_slug
     const product_response = await getProduct({
        status: true,
        category_slug,
        brand_slug
    })

    const products = product_response?.allProduct || []

  return (
    <div>page</div>
  )
}

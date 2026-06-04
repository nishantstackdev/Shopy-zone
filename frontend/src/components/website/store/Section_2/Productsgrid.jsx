import React from 'react'
import ProductCard from '../../global/ProductCard'
import GridControls from './GridControls';
import { getProduct } from '@/api/Product';
import Pagination from './Pagination';

export default async function Productsgrid({ searchParams }) {
    // Await searchParams to support Next.js 15 Promise resolution
    const resolvedParams = await searchParams
    
    // Keep your exact dynamic filters parameters completely intact
    const category_slug = resolvedParams?.category_slug || null
    const brand_slug = resolvedParams?.brand_slug || null
    const min_price = resolvedParams?.min_price || null
    const max_price = resolvedParams?.max_price || null
    const currentPage = Number(resolvedParams?.page) || 1
    
    // 🔍 NEW: Intercept incoming global search keywords from URL string
    const search = resolvedParams?.search || null

    // Intercept active layout configuration key
    const viewLayout = resolvedParams?.view || '4'

    // 🔍 Pass the search term directly into your existing backend bridge
    const product_response = await getProduct({
        status: true,
        category_slug,
        brand_slug,
        min_price,
        max_price,
        search, // 🔍 Yeh seedhe tere Express backend wale endpoint par pass ho jayega!
        page: currentPage,
        limit: 12
    })

    const products = product_response?.allProduct || []
    const totalPages = product_response?.pages || 1

    // Map URL views seamlessly to responsive Tailwind layout matrix grids
    const gridLayoutMapping = { 
        '1': 'grid-cols-1 gap-4',
        '2': 'grid-cols-2 gap-4 sm:gap-6',
        '3': 'grid-cols-2 sm:grid-cols-3 gap-6',
        '4': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'
    }

    const activeGridClass = gridLayoutMapping[viewLayout] || gridLayoutMapping['4']

    return (
        <div className="w-full">
            {/* 🔍 Optional: Showing user contextual response query feedback */}
            {search && (
                <div className="mb-4">
                    <p className="text-sm text-gray-500">
                        Showing results for <span className="font-semibold text-pink-600">"{search}"</span>
                    </p>
                </div>
            )}

            {/* Render Toolbar layout choice toggler switches */}
            <GridControls />

            {/* Dynamic Products Shelf Frame layout matrix */}
            {products.length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        {search ? `No products found for "${search}"` : "No Products Found Matching Filters"}
                    </p>
                </div>
            ) : (
                <>
                    <div className={`grid transition-all duration-300 ${activeGridClass}`}>
                        {products.map((item) => (
                            <div 
                                key={item._id} 
                                className={`transition-all duration-300 ${
                                    viewLayout === '1' ? 'flex w-full' : ''
                                }`}
                            >
                                <ProductCard product={item} listView={viewLayout === '1'} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Dynamic Pagination Controls */}
                    <Pagination 
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        searchParams={resolvedParams} 
                    />
                </>
            )}
        </div>
    )
}
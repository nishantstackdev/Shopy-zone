import React from 'react'
import CategorySidebar from './CategorySidebar'
import HeroImage from './HeroImage'
import Mobilebanner from './Mobilebanner'

export default function FirstSection() {

    const categories = [
        { name: 'Smartphone & Tablet', hasSub: true },
        { name: 'Electronics', hasSub: true },
        { name: 'Fashion', hasSub: true },
        { name: 'Furniture & Decor', hasSub: false },
        { name: 'Jewelry & Accessories', hasSub: false },
        { name: 'Health & Beauty', hasSub: true },
        { name: 'Mom & Baby', hasSub: false },
        { name: 'Game & Console', hasSub: false },
        { name: 'Cars & Motorbikes', hasSub: false },
        { name: 'Sport & Outdoor', hasSub: false },
    ]

    return (
        <section className="w-full bg-slate-50 py-5">
            <div className='max-w-7xl mx-auto px-4 md:px-8 mt-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Sidebar */}
                    <CategorySidebar categories={categories} />

                    {/* Mobile banner */}
                    <div className="md:block lg:hidden col-span-1">
                        <Mobilebanner />
                    </div>

                    {/* Hero */}
                    <div className="hidden lg:block col-span-3">
                        <HeroImage />
                    </div>

                </div>
            </div>



        </section>
    )
}
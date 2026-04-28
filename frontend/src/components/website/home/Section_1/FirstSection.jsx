import React from 'react'
import CategorySidebar from './CategorySidebar'
import HeroImage from './HeroImage'
import Mobilebanner from './Mobilebanner'

export default function FirstSection() {

    

    return (
        <section className="w-full bg-slate-50">
            <div className='max-w-[1600px] mx-auto px-4 md:px-8 mt-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


                    {/* Mobile banner */}
                    <div className="block md:hidden col-span-1">
                        <Mobilebanner />
                    </div>

                    {/* Hero */}
                    <div className="hidden md:block col-span-12">
                        <HeroImage />
                    </div>

                </div>
            </div>



        </section>
    )
}
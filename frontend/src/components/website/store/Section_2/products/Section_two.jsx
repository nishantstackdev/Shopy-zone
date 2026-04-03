'use client'

import React, { useState } from 'react'
import Filters from '../Filters'
import BestSellerRow from '../BestSellerrow'
import ProductsToolbar from '../ProductsToolbar'
import Productsgrid from '../Productsgrid'

export default function Section_two() {

  const [openFilter, setOpenFilter] = useState(false)

  return (
    <section className='max-w-[1400px] my-3 mx-auto grid grid-cols-12 relative'>

      {/* Overlay */}
      {openFilter && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenFilter(false)}
        />
      )}

      {/* Filters */}
      <aside
        className={`
          col-span-12 lg:col-span-3
          fixed lg:static
          top-0 left-0
          h-full
          w-72 lg:w-auto
          bg-white lg:bg-transparent
          z-50
          overflow-y-auto
          transform transition-transform duration-300
          ${openFilter ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0`}
      >
        <Filters setOpenFilter={setOpenFilter} />
      </aside>

      {/* Main */}
      <main className='col-span-12 lg:col-span-9 lg:ml-3'>

        <BestSellerRow />

        <ProductsToolbar setOpenFilter={setOpenFilter} />

        <Productsgrid />

      </main>

    </section>
  )
}
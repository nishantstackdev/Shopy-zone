import React from 'react'
import Filters from '../Filters'
import BestSellerRow from '../BestSellerrow'
import ProductsToolbar from '../ProductsToolbar'
import Productsgrid from '../Productsgrid'

export default function Section_two() {
  return (
    <section className='max-w-[1400px]  my-3 mx-auto grid grid-cols-12'>
      <aside className='col-span-12 lg:col-span-3'>
        <Filters />
      </aside>
      <main className='col-span-12 lg:col-span-9 ml-3'>
        <BestSellerRow />
        <ProductsToolbar />
        <Productsgrid />
      </main>
    </section>
  )
}

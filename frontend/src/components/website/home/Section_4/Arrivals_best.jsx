import React from 'react'
import NewArrivals from './NewArrivals'
import BestSeller from './BestSeller'

export default function Arrivals_best() {
  return (
    <div className='max-w-7xl my-5 xs:flex-col md:flex mx-auto items-center justify-between'>
      <div className='md:w-[50%] lg:w-[30%] w-full p-3 '>
        <NewArrivals />
      </div>
      <div className='px-4 h-[30%]'>
        <img src="/images/home/SellerTablet.jpg" className='w-full object-cover hidden lg:block' alt="" />
      </div>
      <div className='md:w-[50%] lg:w-[30%] w-full p-3 '>
        <BestSeller />
      </div>
    </div>
  )
}

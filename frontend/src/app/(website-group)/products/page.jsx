
import ShopPosters from '@/components/website/store/Section_1/Pageinfo'
import Pagination from '@/components/website/store/Section_2/Pagination'
import Section_two from '@/components/website/store/Section_2/products/Section_two'
import React from 'react'

export default function page() {
  return (
    <div>
        <ShopPosters />
        <Section_two/>
        <Pagination />
    </div>
  )
}

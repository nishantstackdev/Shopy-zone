


import Productsgrid from '@/components/website/store/Section_2/Productsgrid'
import React from 'react'

export default function page({searchParams}) {
  // console.log(searchParams)
  return (
    <div>
        
        <Productsgrid searchParams={searchParams} />
        
    </div>
  )
}

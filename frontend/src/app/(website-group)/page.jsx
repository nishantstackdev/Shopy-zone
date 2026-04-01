import FirstSection from '@/components/website/home/Section_1/FirstSection'
import Categoriesslide from '@/components/website/home/Section_2/Categoriesslide'
import BestDeal from '@/components/website/home/Section_3/BestDeal'
import Arrivals_best from '@/components/website/home/Section_4/Arrivals_best'
import Recommended from '@/components/website/home/Section_5/Recommended'
import Posters from '@/components/website/home/Section_6/Posters'
import Brandsrow from '@/components/website/home/Brandsrow'
import React from 'react'
import SideBanners from '@/components/website/home/SideBanners'
import Lovedrow from '@/components/website/home/Section_7/Lovedrow'
import Fashiongrid from '@/components/website/home/Section_8/Fashiongrid'

export default function page() {
  return (
    <div>
      <FirstSection />
      <Categoriesslide />
      <BestDeal />
      <Arrivals_best />
      <Recommended />
      <Posters />
      <Brandsrow />
      <Lovedrow />
      <SideBanners />
      <Fashiongrid />
    </div>
  )
}

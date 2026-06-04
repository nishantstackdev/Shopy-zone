import FirstSection from '@/components/website/home/Section_1/FirstSection'
import Categoriesslide from '@/components/website/home/Section_2/Categoriesslide'
import BestDeal from '@/components/website/home/Section_3/BestDeal'
import Arrivals_best from '@/components/website/home/Section_4/Arrivals_best'
import Recommended from '@/components/website/home/Section_5/Recommended'
import Posters from '@/components/website/home/Section_6/Posters'
import Brandsrow from '@/components/website/home/Brandsrow'
import React, { Suspense } from 'react'
import SideBanners from '@/components/website/home/SideBanners'
import Lovedrow from '@/components/website/home/Section_7/Lovedrow'
import Fashiongrid from '@/components/website/home/Section_8/Fashiongrid'

// Custom Loading Skeletons for Home Components
const CategorySkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
    <div className="flex justify-between items-center mb-6">
      <div className="h-6 w-48 bg-slate-200 rounded"></div>
      <div className="h-4 w-16 bg-slate-200 rounded"></div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-6 gap-x-4 sm:gap-x-6 md:gap-x-8 justify-items-center">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2 w-full">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full"></div>
          <div className="h-4 w-16 bg-slate-200 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

const BestDealsSkeleton = () => (
  <div className="w-full bg-slate-50 py-12 px-6 animate-pulse">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-4">
        <div className="h-8 w-24 bg-slate-200 rounded"></div>
        <div className="h-8 w-36 bg-slate-200 rounded"></div>
        <div className="h-10 w-28 bg-slate-200 rounded mt-6"></div>
      </div>
      <div className="lg:w-3/4 flex gap-4 overflow-x-auto pb-4 w-full">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="min-w-[220px] h-[320px] bg-slate-200 rounded-xl flex-shrink-0"></div>
        ))}
      </div>
    </div>
  </div>
);

const ProductRowSkeleton = ({ title }) => (
  <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
    <div className="flex justify-between items-center mb-6">
      <div className="h-7 w-56 bg-slate-200 rounded"></div>
      <div className="h-4 w-24 bg-slate-200 rounded"></div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-[340px] bg-slate-200 rounded-xl"></div>
      ))}
    </div>
  </div>
);

const BrandsSkeleton = () => (
  <div className="max-w-7xl mx-auto py-8 px-4 animate-pulse">
    <div className="flex justify-between items-center gap-6 overflow-x-auto">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-28 h-14 bg-slate-200 rounded-lg flex-shrink-0"></div>
      ))}
    </div>
  </div>
);

const FashionGridSkeleton = () => (
  <div className="max-w-7xl mx-auto py-10 px-4 animate-pulse">
    <div className="h-8 w-32 bg-slate-200 rounded mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="hidden md:block md:col-span-2 h-[650px] bg-slate-200 rounded-xl"></div>
      <div className="md:col-span-2 grid grid-cols-2 gap-4 h-[650px]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[310px] bg-slate-200 rounded-xl"></div>
        ))}
      </div>
    </div>
  </div>
);

export default function page() {
  return (
    <div>
      <FirstSection />
      
      <Suspense fallback={<CategorySkeleton />}>
        <Categoriesslide />
      </Suspense>

      <Suspense fallback={<BestDealsSkeleton />}>
        <BestDeal />
      </Suspense>

      <Arrivals_best />

      <Suspense fallback={<ProductRowSkeleton title="Recommended For You" />}>
        <Recommended />
      </Suspense>

      <Posters />

      <Suspense fallback={<BrandsSkeleton />}>
        <Brandsrow />
      </Suspense>

      <Suspense fallback={<ProductRowSkeleton title="Customer Loved Products" />}>
        <Lovedrow />
      </Suspense>

      <SideBanners />

      <Suspense fallback={<FashionGridSkeleton />}>
        <Fashiongrid />
      </Suspense>
    </div>
  )
}

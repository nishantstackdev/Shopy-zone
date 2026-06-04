import ShopPosters from '@/components/website/store/Section_1/Pageinfo'
import Filters from '@/components/website/store/Section_2/Filters'
import ProductsToolbar from '@/components/website/store/Section_2/ProductsToolbar'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <ShopPosters />

      <section className="bg-white py-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6 px-4">

          {/* 🔍 DESKTOP SIDEBAR: Hidden completely on mobile/tablets, visible on Large screens (lg) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="lg:sticky top-24">
              {/* Desktop view runs static without toggle handlers seamlessly */}
              <Filters isOpen={false} onClose={null} />
            </div>
          </aside>

          {/* MAIN CONTENT FIELD BLOCK */}
          <main className="col-span-12 lg:col-span-9 space-y-6">
            <ProductsToolbar />

            {/* Products Grid */}
            {children}
          </main>

        </div>
      </section>
    </div>
  )
}
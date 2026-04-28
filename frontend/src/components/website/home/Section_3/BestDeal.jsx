
import React from 'react';

import ProductCard from '../../global/ProductCard';
import SaleTimer from '../../Saletimer';
import { getProduct } from '@/api/Product';

export default async function BestDeal() {
    const allProduct = await getProduct({limit:4,status:true,is_best:true})
    

    return (
        <div className="w-full bg-slate-50 py-12 px-6">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

   
    <div 
      className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center"
      data-aos="fade-right" 
    >
      <h2 className="text-4xl font-bold text-black leading-tight">Today's</h2>
      <h2 className="text-4xl font-bold text-black mb-8">Best Deals</h2>

      <div className="mb-10 scale-90 origin-left">
        <SaleTimer />
      </div>

      <button className="px-12 py-3 border border-black rounded-lg text-sm font-semibold hover:bg-black hover:text-white transition-all">
        See All
      </button>
    </div>

    {/* RIGHT SIDE: Product Grid */}
    <div className="lg:w-3/4 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      {
        allProduct.allProduct.map((pd, index) => {
          return (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100} // Card 1: 100, Card 2: 200, Card 3: 300...
            >
              <ProductCard product={pd} />
            </div>
          )
        })
      }
    </div>

  </div>
</div>
    );
}
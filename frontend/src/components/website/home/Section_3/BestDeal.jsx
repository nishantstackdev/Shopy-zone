
import React from 'react';

import ProductCard from '../../global/ProductCard';
import SaleTimer from '../../Saletimer';

export default function BestDeal() {
    const products = [
        { category: "Furniture & Decor", title: "Boat Shaped Slab Base Table Primy Drafting", price: 115, oldPrice: 130, image: "/path-to-chair.png" },
        { category: "Electronics", title: "iPhone 15 Natural Titanium M4 512GB", price: 60, oldPrice: 69, image: "/path-to-iphone.png" },
        { category: "Health & Beauty", title: "Laura Geller Powder Award Blading Lip", price: 77, oldPrice: 85, image: "/path-to-powder.png" },
        { category: "Health & Beauty", title: "Whipped Organic Beef Tallow for Skin", price: 67, oldPrice: 98, image: "/path-to-perfume.png" },
    ];

    return (
        <div className="w-full bg-slate-50 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

                {/* LEFT SIDEBAR: Header & Timer */}
                <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
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
                        products.map((pd, index) => {
                            return (
                                <ProductCard key={index} category={pd.category} title={pd.title} price={pd.price} oldPrice={pd.oldPrice} image={pd.image} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}
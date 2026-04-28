import React from 'react'
import CategoryCircle from '../../CategoryCircle'
import { GetCategories } from '@/api/Category'
import Link from 'next/link'

export default async function Categoriesslide() {

  const categories = await GetCategories({ limit: 7, status: true, is_popular: true })
  const displayCategories = categories.allcategories

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          Featured Categories
        </h1>

        <button className="text-sm text-red-500 font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-y-6 gap-x-4 sm:gap-x-6 md:gap-x-8 justify-items-center"
      >
        {displayCategories.map((cat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Har item 100ms ke gap ke baad aayega
          >
            <Link href={`/products?category_slug=${cat.slug}`}>
              <CategoryCircle
                name={cat.name}
                images={cat.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
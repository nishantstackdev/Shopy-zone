import React from 'react'
import CategoryCircle from '../../CategoryCircle'

export default function Categoriesslide() {

    const categories = [
        { name: "Smart Phone", image: "https://tse2.mm.bing.net/th/id/OIP.svvZjteXodgby1EwsjIIIgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "Headphone", image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-max-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1603996970000" },
        { name: "Furniture", image: "https://tse1.mm.bing.net/th/id/OIP.YsU2fXneyRW4DHcrv53C3wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
        { name: "Fashion", image: "https://img.freepik.com/premium-photo/beautiful-t-shirt-different-design_972324-20113.jpg" },
        { name: "Sneakers", image: "https://m.media-amazon.com/images/I/71T3dPmkuvL._AC_SR768,1024_.jpg" },
        { name: "Watch", image: "https://img.freepik.com/premium-photo/stylish-watch-white-background_893610-17514.jpg" },
        { name: "School Bag", image: "https://img.freepik.com/premium-photo/image-school-bag-white-background_1197524-2.jpg" },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className='font-bold text-center text-2xl my-3'>Featured Categories</h1>

            <div className="
               grid
               grid-cols-3
               sm:grid-cols-4
               md:grid-cols-5
               lg:grid-cols-7
               gap-4            {/* Default gap */}
               lg:gap-x-12      {/* Badi screen par horizontal gap badhane ke liye */}
               justify-items-center">

                {categories.map((cat, index) => (
                    <CategoryCircle
                        key={index}
                        name={cat.name}
                        images={cat.image}
                    />
                ))}

            </div>

        </div>
    )
}
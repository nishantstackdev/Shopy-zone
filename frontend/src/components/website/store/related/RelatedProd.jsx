import { getProduct } from "@/api/Product";
import Link from "next/link";


async function getRelatedProducts(category_id, currentId) {
    try {
        const res = await getProduct({ limit: 20 });
        const allProducts = res?.allProduct || res?.products || res || [];

        return allProducts
            .filter((p) => p.category_id?._id === category_id && p._id !== currentId)
            .slice(0, 4);
    } catch {
        return [];
    }
}

export const dynamic = 'force-dynamic';

export default async function RelatedProd({ category_id, currentId }) {
    const related = await getRelatedProducts(category_id, currentId);

    if (!related || related.length === 0) return null;

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            {/* Section Header */}
            <div className="flex items-end justify-between mb-10">
                <div>
                    <span className="text-pink-600 text-xs font-bold uppercase tracking-widest bg-pink-50 px-3 py-1 rounded-full">
                        You May Also Like
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
                        Related Products
                    </h2>
                </div>
                <Link
                    href="/store"
                    className="text-sm font-semibold text-pink-600 hover:text-pink-700 flex items-center gap-1 group"
                >
                    View All
                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {related.map((prod) => (
                    <RelatedProductCard key={prod._id} product={prod} />
                ))}
            </div>
        </section>
    );
}

function RelatedProductCard({ product }) {
    const discount = product.discount_price || 0;

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative bg-gray-50 aspect-square overflow-hidden">
                <img
                    src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                {discount > 0 && (
                    <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-[11px] font-bold px-2 py-1 rounded-lg">
                        {discount}% OFF
                    </span>
                )}
            </div>

            {/* Info */}
            <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-base font-black text-gray-900">
                        ₹{product.final_price}
                    </span>
                    {product.original_price > product.final_price && (
                        <span className="text-xs text-gray-400 line-through">
                            ₹{product.original_price}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
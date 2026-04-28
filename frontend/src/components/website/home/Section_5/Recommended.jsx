import { getProduct } from "@/api/Product"
import Link from "next/link"
import RecommendedProd from "./RecommendedProd"
export default async function Recommended() {
    const product = await getProduct({status:true,is_popular:true})
    const recommendedProducts = product.allProduct

    return (
        <div className="w-full bg-slate-50 py-10 overflow-hidden"> {/* overflow-hidden animation glitch rokne ke liye */}
            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Header - Added fade-right */}
                <div className="flex justify-between items-center" data-aos="fade-right">
                    <h1 className="font-bold text-2xl">
                        Recommended For You
                    </h1>

                    <Link href="/products">
                        <button className="underline cursor-pointer text-sm font-medium">
                            View All Products
                        </button>
                    </Link>
                </div>

                <RecommendedProd recommendedProducts={recommendedProducts} />
            </div>
        </div>
    )
}
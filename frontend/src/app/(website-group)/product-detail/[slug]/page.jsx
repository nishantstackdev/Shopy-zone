import { GetProductById } from "@/api/Product";
import Addtocartbtn from "@/components/website/global/Addtocartbtn";
import Link from "next/link";
import {
    ChevronRight,
    Truck,
    RotateCcw,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

export default async function ProductPage({ params }) {
    const slug = params.slug;
    const res = await GetProductById(slug);
    const product = res?.allProduct;

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <h1 className="text-xl font-semibold">Product not found ❌</h1>
            </div>
        );
    }

    // Mock images array for the gallery (using thumbnail as placeholder)
    // Replace this with product.images if your API provides an array
    const productGallery = [product.thumbnail, product.thumbnail, product.thumbnail, product.thumbnail];

    return (
        <div className="bg-white pb-20">
            {/* BREADCRUMB */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-black font-medium">{product.name}</span>
                </div>
            </div>

            {/* MAIN PRODUCT SECTION */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid lg:grid-cols-12 gap-12">
                
                {/* 📸 LEFT: PHOTO GALLERY */}
                <div className="lg:col-span-7">
                    <div className="sticky top-10 space-y-4">
                        {/* Main Large Image */}
                        <div className="bg-gray-50 rounded-3xl overflow-hidden aspect-square flex items-center justify-center border border-gray-100">
                            <img
                                src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + product.thumbnail}
                                alt={product.name}
                                className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            {productGallery.map((img, i) => (
                                <div 
                                    key={i} 
                                    className="aspect-square bg-gray-50 rounded-2xl border border-transparent hover:border-pink-500 cursor-pointer overflow-hidden transition-all"
                                >
                                    <img
                                        src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + img}
                                        alt={`view-${i}`}
                                        className="w-full h-full object-contain p-2 opacity-80 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 📝 RIGHT: PRODUCT DETAILS */}
                <div className="lg:col-span-5 flex flex-col">
                    <span className="text-pink-600 text-xs font-bold uppercase tracking-widest bg-pink-50 w-fit px-3 py-1 rounded-full">
                        Premium Quality
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                        {product.name}
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                        {product.short_description}
                    </p>

                    {/* PRICE AREA */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-black text-gray-900">₹{product.final_price}</span>
                            <span className="text-xl text-gray-400 line-through">₹{product.original_price}</span>
                            <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded-lg">
                                {product.discount_price}% OFF
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 font-medium underline cursor-help">
                            Tax included. Shipping calculated at checkout.
                        </p>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <Addtocartbtn product={product} id={product._id} />
                        </div>
                        <button className="flex-1 bg-gray-900 text-white rounded-2xl py-4 font-bold hover:bg-black transition-all active:scale-95 shadow-lg shadow-gray-200">
                            Buy Now
                        </button>
                    </div>

                    {/* TRUST CARDS */}
                    <div className="grid grid-cols-3 gap-3 mt-10">
                        <TrustItem icon={<Truck className="text-pink-600" size={20} />} label="Free Shipping" />
                        <TrustItem icon={<RotateCcw className="text-pink-600" size={20} />} label="Easy Returns" />
                        <TrustItem icon={<ShieldCheck className="text-pink-600" size={20} />} label="Secure Pay" />
                    </div>

                    {/* FULL DESCRIPTION */}
                    <div className="mt-10 pt-8 border-t border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Product Details</h3>
                        <div
                            className="text-gray-600 prose prose-pink leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: product.long_description }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TrustItem({ icon, label }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-2">{icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">{label}</span>
        </div>
    );
}
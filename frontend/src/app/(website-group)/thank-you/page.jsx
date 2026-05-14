'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';

const OrderSuccessPage = () => {
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId')
    // Static data for the order
    const orderData = {
        orderNumber: "NC-882941",
        customerName: "Alex",
        total: "₹18500",
        deliveryDate: "May 15, 2026",
        items: [
            { id: 1, name: "Macbook Air M2", price: "₹15000", qty: 1, img: "https://via.placeholder.com/60" },
            { id: 2, name: "boAt Airdopes 441", price: "₹3500", qty: 1, img: "https://via.placeholder.com/60" }
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-10 pb-20 px-4">
            <div className="max-w-3xl mx-auto">

                <div className="text-center mb-10">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-black text-gray-900">Order Placed Successfully!</h1>
                    {/* The Order ID Highlight */}
                    <p className="mt-2 text-gray-500">
                        Order ID: <span className="font-bold text-[#e91e63]">{orderId || "N/A"}</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Order Details Card */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 border-b pb-2">Order Summary</h3>
                            {orderData.items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 rounded-lg bg-gray-100 object-cover" />
                                        <div>
                                            <p className="font-bold text-sm text-gray-800">{item.name}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-[#e91e63]">{item.price}</p>
                                </div>
                            ))}
                            <div className="mt-4 flex justify-between items-center pt-2">
                                <span className="text-gray-600 font-medium">Total Amount</span>
                                <span className="text-xl font-black text-gray-900">{orderData.total}</span>
                            </div>
                        </div>

                        {/* Tracking Info */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex items-center space-x-4">
                            <div className="bg-pink-50 p-3 rounded-lg">
                                <svg className="w-6 h-6 text-[#e91e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Estimated Delivery</p>
                                <p className="font-bold text-gray-800">{orderData.deliveryDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Info */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Order Number</p>
                            <p className="font-bold text-gray-900 mb-4">{orderData.orderNumber}</p>

                            <button className="w-full bg-[#e91e63] text-white py-3 rounded-full font-bold shadow-lg shadow-pink-100 hover:bg-[#d81b60] transition-all mb-3">
                                Track Order
                            </button>
                            <button className="w-full bg-white text-gray-700 py-3 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition-all">
                                Download Invoice
                            </button>
                        </div>

                        <a href="/" className="flex items-center justify-center text-sm font-bold text-[#e91e63] hover:underline">
                            Continue Shopping →
                        </a>
                    </div>

                </div>

                {/* Similar to "Recommended For You" section in your image */}
                <div className="mt-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">You might also like</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-3 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center">
                                <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3"></div>
                                <div className="h-3 w-3/4 bg-gray-100 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-pink-50 rounded"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccessPage;
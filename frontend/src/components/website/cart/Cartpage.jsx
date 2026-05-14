'use client'

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { qtyChange } from "@/redux/features/cartSlice";
import { Minus, Plus, ShoppingBag, Truck } from "lucide-react";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#f5f7fb] px-4 py-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="xl:col-span-2 space-y-5">

          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Shopping Cart
              </h1>

              <p className="text-gray-500 mt-1 text-sm">
                {cart.items.length} Items in your cart
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border shadow-sm">
              <ShoppingBag size={18} className="text-pink-500" />

              <span className="text-sm font-medium text-gray-700">
                Secure Checkout
              </span>
            </div>
          </div>

          {/* CART ITEMS */}
          {cart.items.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-5 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row gap-5">

                  {/* IMAGE */}
                  <div className="relative">
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs px-3 py-1 rounded-full shadow">
                      SAVE ₹199
                    </span>

                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full sm:w-36 h-52 sm:h-36 object-cover rounded-2xl"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
                        {item.name}
                      </h3>

                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-2xl font-bold text-pink-500">
                          ₹{item.original_price}
                        </span>

                        <span className="text-sm text-gray-400 line-through">
                          ₹{item.original_price + 199}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-3 text-green-600">
                        <Truck size={16} />

                        <span className="text-sm font-medium">
                          Free Shipping Available
                        </span>
                      </div>

                      <p className="text-sm text-green-600 mt-2 font-medium">
                        ● In Stock
                      </p>
                    </div>

                    {/* QTY */}
                    <div className="flex items-center justify-between mt-5 flex-wrap gap-4">

                      {/* QTY BOX */}
                      <div className="flex items-center bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                        
                        <button
                          onClick={() =>
                            dispatch(
                              qtyChange({
                                id: item.id,
                                flag: "dsc",
                              })
                            )
                          }
                          className="w-11 h-11 flex items-center justify-center hover:bg-pink-100 transition"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-12 text-center font-semibold text-gray-800">
                          {item.qty}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              qtyChange({
                                id: item.id,
                                flag: "inc",
                              })
                            )
                          }
                          className="w-11 h-11 flex items-center justify-center hover:bg-pink-100 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* SUBTOTAL */}
                      <div className="text-right">
                        <p className="text-sm text-gray-500">
                          Total
                        </p>

                        <h3 className="text-xl font-bold text-gray-800">
                          ₹{item.original_price * item.qty}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="xl:sticky xl:top-6 h-fit">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

            {/* TOP */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-6 text-white">
              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <p className="text-sm text-pink-100 mt-1">
                Review your order details
              </p>
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>

                  <span className="font-semibold text-gray-800">
                    ₹{cart.original_total}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>

                  <span className="font-semibold text-green-600">
                    - ₹{cart.original_total - cart.final_total}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>

                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-pink-500">
                    ₹{cart.final_total}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <Link href="/checkout">
                <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white py-4 rounded-2xl font-semibold shadow-md transition">
                  Proceed To Checkout
                </button>
              </Link>

              {/* SAFE PAYMENT */}
              <div className="mt-5 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Safe & Secure Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
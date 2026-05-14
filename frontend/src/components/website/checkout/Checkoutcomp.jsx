'use client'

import Link from "next/link";
import {
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Plus,
  CheckCircle2,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { instance } from "@/helper/helper";
import { useRouter } from "next/navigation";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";


export default function Checkoutcomp({ user }) {
  const { error, isLoading, Razorpay } = useRazorpay();
  const router = useRouter()
  const cart = useSelector((store) => store.cart)
  const [selectedAddress, setselectedAddress] = useState(0)
  const [paymentMethod, setpaymentMethod] = useState('cod')
  const paymentMethods = [
    {
      id: 1,
      title: "Cash on Delivery",
      desc: "Pay when your order arrives",
      selected: false,
    },
    {
      id: 2,
      title: "Online Payment",
      desc: "UPI, Debit Card, Credit Card",
      selected: true,
    },
  ];

  const handleOrder = async () => {
    const orderData = {
      address: user?.addresses[selectedAddress],
      paymentMethod
    };
    try {
      const response = await instance.post("order/create", orderData)
      if (paymentMethod == "cod") {
        if (response.data.success) {
          console.log(response.data)
          router.push(`/thank-you?orderId=${(await response).data.orderId}`)
        }
      } else {
        console.log(response.data)
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          currency: "INR",
          name: "NovaCart Company",
          description: "Test Transaction",
          order_id: response.data.payment_order_Id, // Generate order_id on server
          handler: async (response) => {

            try {
              const VerifyResponse = await instance.post("order/verify", response)
              console.log(VerifyResponse)
            } catch (error) {

            }
          },
          prefill: {
            name: user.name ?? "John Doe",
            email: user.email,
            contact: "6376073082",
          },
          theme: {
            color: "#F37254",
          },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7f7] via-[#f9fbff] to-[#fff3ec] px-4 py-8 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-7">
        {/* LEFT SECTION */}
        <div className="xl:col-span-2 space-y-7">
          {/* ADDRESS SECTION */}
          <div className="bg-white/90 backdrop-blur rounded-[30px] border border-white shadow-xl p-6 md:p-8">
            {/* HEADER */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                    <MapPin className="text-pink-500" size={24} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Delivery Address
                    </h2>

                    <p className="text-sm text-gray-500">
                      Choose where you want your order delivered
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/profile">
                <button className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-2xl text-sm font-medium transition shadow-lg">
                  <Plus size={18} />
                  Add Address
                </button>
              </Link>
            </div>

            {/* ADDRESS LIST */}
            <div className="space-y-5">
              {user?.addresses?.map((item, index) => (
                <label key={index} onClick={() => setselectedAddress(index)} className="block cursor-pointer">
                  <div className="border-2 border-gray-100 hover:border-pink-300 bg-gradient-to-r from-white to-pink-50 rounded-3xl p-5 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="address"
                        className="mt-1 w-5 h-5 accent-pink-500"
                      />

                      <div className="flex-1">
                        {/* TOP */}
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div>
                            <h3 className="font-bold text-lg text-gray-800">
                              Address {index + 1}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              Saved Delivery Address
                            </p>
                          </div>

                          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                            <CheckCircle2 size={14} />
                            Available
                          </span>
                        </div>

                        {/* ADDRESS */}
                        <div className="mt-5 bg-white border border-gray-100 rounded-2xl p-4">
                          <p className="text-gray-700 leading-relaxed">
                            {item.addressLine}
                          </p>

                          <div className="flex flex-wrap gap-3 mt-4">
                            <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                              {item.city}
                            </span>

                            <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                              {item.state}
                            </span>

                            <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                              {item.pincode}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* PAYMENT SECTION */}
          <div className="bg-white/90 backdrop-blur rounded-[30px] border border-white shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                <CreditCard className="text-orange-500" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Payment Method
                </h2>

                <p className="text-sm text-gray-500">
                  Select your preferred payment option
                </p>
              </div>
            </div>

            <div className="space-y-4">

              {/* CASH ON DELIVERY */}
              <label className="block cursor-pointer">
                <div
                  className={`border-2 rounded-3xl p-5 transition-all duration-300 hover:shadow-md ${paymentMethod === "cod"
                    ? "border-pink-400 bg-pink-50"
                    : "border-gray-100 bg-white"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setpaymentMethod("cod")}
                      className="mt-1 w-5 h-5 accent-pink-500"
                    />

                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Cash on Delivery
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* ONLINE PAYMENT */}
              <label className="block cursor-pointer">
                <div
                  className={`border-2 rounded-3xl p-5 transition-all duration-300 hover:shadow-md ${paymentMethod === "online"
                    ? "border-pink-400 bg-pink-50"
                    : "border-gray-100 bg-white"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "online"}
                      onChange={() => setpaymentMethod("online")}
                      className="mt-1 w-5 h-5 accent-pink-500"
                    />

                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        Online Payment
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        UPI, Debit Card, Credit Card
                      </p>
                    </div>
                  </div>
                </div>
              </label>

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="xl:sticky xl:top-6 h-fit">
          <div className="bg-white rounded-[32px] overflow-hidden border border-white shadow-2xl">
            {/* TOP */}
            <div className="bg-black p-6 text-white">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <p className="text-gray-300 text-sm mt-1">
                Your selected products
              </p>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {/* PRODUCTS */}
              <div className="space-y-5">
                {cart?.items?.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-4"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-20 h-20 rounded-2xl object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Quantity : {product.qty}
                      </p>
                    </div>

                    <h4 className="font-bold text-lg text-gray-800">
                      ₹{product.final_price}
                    </h4>
                  </div>
                ))}
              </div>

              {/* PRICE */}
              <div className="border-t border-dashed mt-7 pt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Original total</span>
                  <span className="font-semibold text-gray-800">₹{cart.original_total}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>

                  <span className="text-green-600 font-semibold flex items-center gap-1">
                    <Truck size={15} />
                    Free
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Savings</span>

                  <span className="text-green-600 font-semibold">-₹
                    {(cart.original_total) - (cart.final_total)}
                  </span>
                </div>

                <div className="border-t pt-5 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total</span>

                  <span className="text-3xl font-extrabold text-pink-500">
                    ₹{cart.final_total}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button onClick={handleOrder} className="w-full mt-7 bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-[1.02] active:scale-100 transition-all text-white py-4 rounded-2xl font-bold shadow-xl">
                Place Order
              </button>

              {/* SECURITY */}
              <div className="mt-5 flex justify-center items-center gap-2 text-sm text-gray-500">
                <ShieldCheck size={17} className="text-green-500" />

                <span>Secure & Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  
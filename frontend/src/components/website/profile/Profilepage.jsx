'use client'
import React from 'react'
import { useState } from 'react'
import { instance, notify } from '@/helper/helper'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Profilepage({ user }) {
    console.log(user)
    const [addressesrr, setAddresses] = useState([])
    if (!user) {
        redirect("/login");
    }
    // console.log(addressesrr, "addresss")
    // console.log(user)
    const [form, setform] = useState({
        fullName: "",
        phone: "",
        pincode: "",
        addressLine: "",
        city: "",
        state: ""
    })
    useEffect(
        ()=>{
            if(user.addresses){
                setAddresses(user.addresses)
            }
        },
        [user]
    )
    
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handlesubmit = async (e) => {

        e.preventDefault()


        instance.post("user/add-address", form)

            .then((res) => {

                setAddresses(res.data.addresses)
                notify(res.data.message, true)
                // console.log(res)

                setform({
                    fullName: "",
                    phone: "",
                    pincode: "",
                    addressLine: "",
                    city: "",
                    state: ""
                })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="min-h-screen bg-[#f5f7fb] px-4 py-6 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="xl:col-span-1 space-y-6">

                    {/* PROFILE CARD */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                        {/* TOP BG */}
                        <div className="h-28 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400" />

                        <div className="px-6 pb-6 relative">

                            {/* PROFILE IMAGE */}
                            <div className="-mt-14 flex justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
                                    alt="profile"
                                    className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-lg"
                                />
                            </div>

                            {/* INFO */}
                            <div className="text-center mt-4">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {user.name}
                                </h2>

                                <p className="text-gray-500 mt-1 text-sm">
                                    {user.email}
                                </p>

                                <p className="text-gray-500 text-sm">
                                    +91 9810292929
                                </p>
                            </div>

                            {/* STATS */}
                            <div className="grid grid-cols-3 gap-3 mt-6">
                                <div className="bg-pink-50 rounded-2xl p-3 text-center">
                                    <h3 className="font-bold text-lg text-pink-600">
                                        12
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Orders
                                    </p>
                                </div>

                                <div className="bg-orange-50 rounded-2xl p-3 text-center">
                                    <h3 className="font-bold text-lg text-orange-500">
                                        4
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Wishlist
                                    </p>
                                </div>

                                <div className="bg-teal-50 rounded-2xl p-3 text-center">
                                    <h3 className="font-bold text-lg text-teal-500">
                                        {addressesrr.length}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Address
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ADD ADDRESS FORM */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 md:p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-5">
                            Add New Address
                        </h2>

                        <form onSubmit={handlesubmit} className="space-y-4">

                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                            />

                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                            />

                            <input
                                type="text"
                                name="pincode"
                                value={form.pincode}
                                onChange={handleChange}
                                placeholder="Pincode"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                            />

                            <textarea
                                rows={3}
                                name="addressLine"
                                value={form.addressLine}
                                onChange={handleChange}
                                placeholder="Address"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                                />

                                <input
                                    type="text"
                                    name="state"
                                    value={form.state}
                                    onChange={handleChange}
                                    placeholder="State"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white py-3 rounded-xl font-semibold shadow-md transition"
                            >
                                Save Address
                            </button>
                        </form>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="xl:col-span-2">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 md:p-6">

                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    My Addresses
                                </h2>

                                <p className="text-sm text-gray-500 mt-1">
                                    Manage your saved delivery addresses
                                </p>
                            </div>

                            <button className="hidden sm:block bg-pink-100 text-pink-600 px-4 py-2 rounded-xl font-medium">
                                {addressesrr.length} Saved
                            </button>
                        </div>

                        {/* ADDRESS LIST */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {addressesrr.map((address) => (
                                <div
                                    key={address.id}
                                    className="border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-pink-300 transition bg-gradient-to-br from-white to-pink-50"
                                >

                                    {/* TOP */}
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={address.image}
                                            alt={address.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                                        />

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-lg text-gray-800">
                                                    {address.name}
                                                </h3>

                                                <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                                                    {address.type}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 text-sm mt-1">
                                                {address.city}, {address.state}
                                            </p>

                                            <p className="text-gray-500 text-sm">
                                                {address.pincode}
                                            </p>

                                            <p className="text-gray-700 text-sm mt-1">
                                                +91 {address.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="flex gap-3 mt-5">
                                        <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl text-sm font-medium transition">
                                            Edit
                                        </button>

                                        <button className="flex-1 border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-xl text-sm font-medium transition">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

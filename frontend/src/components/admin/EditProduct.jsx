'use client'
import { instance, notify, slugCreate } from "@/helper/helper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function EditProductForm({product}) {
    // console.log(product)
    const nameRef = useRef(null)
    const slugRef = useRef(null)
    const router = useRouter()
    function clearForm() {
        nameRef.current.value = ""
        slugRef.current.value = ""
    }
    function generateslug() {
        const name = nameRef.current.value
        const slug = slugCreate(name)
        slugRef.current.value = slug
    }

    function submithandler(event) {
        event.preventDefault()
        const payload = new FormData()
        payload.append("name",nameRef.current.value)
        payload.append("slug",slugRef.current.value)
        payload.append("image",event.target.image.files[0])


        instance.put(`product/edit/${product._id}`, payload)
            .then((res) => {
                if (res.data.success) {
                    notify(res?.data?.message, true)
                    router.push("/admin/product")
                    router.refresh()
                    
                }
                // console.log(res)
            })
            .catch((err) => {
                // console.log(err)
                const message =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something Went Wrong"

                notify(message, false)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">

                <h2 className="text-xl font-semibold mb-4 text-center">
                    Add product
                </h2>

                <form onSubmit={submithandler} className="space-y-4">

                    {/* product Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            product Name
                        </label>
                        <input
                            defaultValue={product?.name}
                            onChange={generateslug}
                            ref={nameRef}
                            type="text"
                            placeholder="Enter product name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* product Slug */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            product Slug
                        </label>
                        <input
                            defaultValue={product?.slug}
                            ref={slugRef}
                            type="text"
                            placeholder="Enter product slug"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            product Image
                        </label>
                        <input
                            type="file"
                            accept="image/"
                            name="image"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            onClick={clearForm}
                            type="button"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Cancel product
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Add product
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
}
'use client'
import { instance, notify, slugCreate } from "@/helper/helper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function AddCategoryForm() {
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

        const data = {
            name: nameRef.current.value,
            slug: slugRef.current.value
        }

        instance.post("category/create", data)
            .then((res) => {
                if (res.data.success) {
                    notify(res?.data?.message, true)
                    router.push("/admin/category")
                    router.refresh()
                    
                }
                // console.log(res)
            })
            .catch((err) => {
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
                    Add Category
                </h2>

                <form onSubmit={submithandler} className="space-y-4">

                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category Name
                        </label>
                        <input
                            onChange={generateslug}
                            ref={nameRef}
                            type="text"
                            placeholder="Enter category name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Category Slug */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category Slug
                        </label>
                        <input
                            ref={slugRef}
                            type="text"
                            placeholder="Enter category slug"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Category Image
                        </label>
                        <input
                            type="file"
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
                            Cancel Category
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Add Category
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
}
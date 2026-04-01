import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { GetCategories } from "@/api/Category";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";

export default async function CategoryTable() {
  const categories = await GetCategories();
  const allcategories = await categories.allcategories;
  return (
    <div className="p-6 bg-[#eaeff8] min-h-screen">

  {/* Top Bar */}
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-semibold text-gray-800">
      Category Management
    </h1>

    <Link href="/admin/category/add">
      <button className="px-5 py-2.5 bg-[#ff7b00] text-white rounded-lg shadow hover:bg-[#e56f00] transition">
        + Add Category
      </button>
    </Link>
  </div>

  {/* Table Card */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

    <div className="overflow-x-auto">
      <table className="w-full text-sm">

        {/* Header */}
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="py-4 px-4 text-left">Image</th>
            <th className="py-4 px-4 text-left">Name</th>
            <th className="py-4 px-4 text-left">Slug</th>
            <th className="py-4 px-4 text-left">Status</th>
            <th className="py-4 px-4 text-center">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>

          {allcategories.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-10 text-center text-gray-500">
                No Categories Found 😕
              </td>
            </tr>
          ) : (
            allcategories.map((cat, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >

                {/* Image */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-10 h-10 rounded-lg object-cover border"
                    />
                  </div>
                </td>

                {/* Name */}
                <td className="py-4 px-4 font-medium text-gray-800">
                  {cat.name}
                </td>

                {/* Slug */}
                <td className="py-4 px-4 text-gray-500">
                  {cat.slug}
                </td>

                {/* Status */}
                <td className="py-4 px-4 space-x-2">
                  <StatusBtn value={cat.status} id={cat._id} field="status" />
                  <StatusBtn value={cat.is_top} id={cat._id} field="is_top" />
                  <StatusBtn value={cat.is_home} id={cat._id} field="is_home" />
                  <StatusBtn value={cat.is_popular} id={cat._id} field="is_popular" />
                </td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <div className="flex justify-center gap-2">

                    <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition">
                      <Pencil size={16} className="text-blue-600" />
                    </button>

                    <DeleteBtn id={cat._id} />

                  </div>
                </td>

              </tr>
            ))
          )}

        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}



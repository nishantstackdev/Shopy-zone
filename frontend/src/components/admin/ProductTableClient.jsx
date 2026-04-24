"use client";

import { useState } from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { FaImages } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import ViewModel from "./ViewModel";

export default function ProductTableClient({ product }) {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 bg-gray-100 ">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product Management
        </h1>

        <Link href="/admin/product/add">
          <button className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <div className="max-h-[500px] overflow-y-auto">

          <table className="w-full text-sm text-left">

            {/* Header */}
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr className="text-gray-600 uppercase text-xs tracking-wider">
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Slug</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {product.map((item) => (
                <tr
                  key={item._id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                        item.thumbnail
                      }
                      className="w-20 h-14 object-cover rounded-md border"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-4 font-medium text-gray-800">
                    {item.name}
                  </td>

                  {/* Slug */}
                  <td className="p-4 text-gray-500">
                    {item.slug}
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <StatusBtn
                      value={item.status}
                      id={item._id}
                      field="status"
                      endpoint="product"
                    />
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex justify-center gap-2">

                      {/* Edit */}
                      <Link href={`/admin/product/edit/${item._id}`}>
                        <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                          <FiEdit />
                        </button>
                      </Link>

                      {/* Delete */}
                      <DeleteBtn url={`http://localhost:8000/product/delete/${item._id}`} />

                      {/* Images */}
                      <Link href={`/admin/product/other-images/${item._id}`}>
                        <button className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
                          <FaImages />
                        </button>
                      </Link>

                      {/* View */}
                      <button
                        onClick={() => {
                          setSelected(item);
                          setOpen(true);
                        }}
                        className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                      >
                        <BsEye />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Modal */}
      {open && selected && (
        <ViewModel
          selected={selected}
          onclose={() => setOpen(false)}
        />
      )}

    </div>
  );
}
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import StatusBtn from "@/components/admin/StatusBtn";
import DeleteBtn from "@/components/admin/DeleteBtn";
import { getProduct } from "@/api/Product";
import { FaImages } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import ViewModel from "@/components/admin/ViewModel";

const CategoryTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProduct = await getProduct();
        setProduct(allProduct?.allProduct || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Management
          </h1>

          <Link href="/admin/product/add">
            <button className="px-5 py-2 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition">
              + Add Product
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">

              {/* Head */}
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="p-4 text-left">Image</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Slug</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {product.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center p-10 text-gray-500">
                      No Product Found
                    </td>
                  </tr>
                ) : (
                  product.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b hover:bg-gray-50 transition"
                    >

                      {/* Image */}
                      <td className="p-4">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_PRODUCT_IMAGE +
                            item.thumbnail
                          }
                          alt={item.name}
                          className="w-28 h-20 object-cover rounded-lg border"
                        />
                      </td>

                      {/* Name */}
                      <td className="p-4 font-semibold text-gray-800">
                        {item.name}
                      </td>

                      {/* Slug */}
                      <td className="p-4 text-gray-600">
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
                        <div className="flex gap-2">

                          <Link href={`/admin/product/edit/${item._id}`}>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                              Edit
                            </button>
                          </Link>

                          <DeleteBtn id={item._id} endpoint="product" />

                          <Link href={`/admin/product/add-images/${item._id}`}>
                            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                              <FaImages />
                            </button>
                          </Link>

                          {/* VIEW BUTTON */}
                          <button
                            onClick={() => {
                              setSelectedProduct(item);
                              setOpen(true);
                            }}
                            className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          >
                            <BsEye />
                          </button>

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

      {/* MODAL */}
      {open && selectedProduct && (
        <ViewModel
          selectedproduct={selectedProduct}
          onclose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default CategoryTable;
import React from "react";

const ProductView = ({ selectedproduct }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <div className="flex flex-col items-center">
          <img
            src={process.env.NEXT_PUBLIC_PRODUCT_IMAGE + selectedproduct.thumbnail}
            className="w-full max-w-md rounded-xl shadow-md"
            alt={selectedproduct.name}
          />

          {/* Colors */}
          <div className="flex gap-2 mt-4">
            {selectedproduct.color_ids?.map((color) => (
              <div
                key={color._id}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color.hex_code }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold">
            {selectedproduct.name}
          </h1>

          <p className="text-gray-500 mt-2">
            {selectedproduct.short_description}
          </p>

          <div className="mt-4">
            <p>Category: {selectedproduct.category_id?.name}</p>
            <p>Brand: {selectedproduct.brand_Id?.name}</p>
          </div>

          <div className="mt-4 text-xl font-bold text-green-600">
            ₹{selectedproduct.final_price}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductView;
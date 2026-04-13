import React from "react";
import ProductView from "./ProductView";

const ViewModel = ({ selectedproduct, onclose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onclose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-lg p-6">

        {/* Close Button */}
        <button
          onClick={onclose}
          className="absolute top-3 right-3 text-red-500 text-2xl"
        >
          ✕
        </button>

        {/* Product View */}
        <ProductView selectedproduct={selectedproduct} />
      </div>

    </div>
  );
};

export default ViewModel;
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12 text-center">
      {/* Container for content */}
      <div className="max-w-md w-full">
        
        {/* Large 404 Text - Using the Pink from your 'Add to Cart' buttons */}
        <h1 className="text-8xl md:text-9xl font-black text-[#e91e63] drop-shadow-sm mb-4">
          404
        </h1>

        {/* Heading - Matching the 'Today's Best Deals' style */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Oops! This shelf is empty.
        </h2>

        {/* Description - Low emphasis gray */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for might have been moved, deleted, or 
          perhaps it never existed in our inventory.
        </p>

        {/* Primary Action Button - Styled like image_e47303.jpg buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[#e91e63] text-white font-bold rounded-full shadow-lg shadow-pink-200 hover:bg-[#d81b60] transition-all transform hover:-translate-y-1"
          >
            Back to Shopping
          </Link>
          
        </div>

        {/* Decorative element inspired by category circles */}
        <div className="mt-16 flex justify-center space-x-2 opacity-20">
          <div className="w-3 h-3 bg-[#e91e63] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
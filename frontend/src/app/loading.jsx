import React from 'react';

const loading = () => {
  return (
    /* This outer div ensures the loader is dead-center of the user's screen */
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        
        {/* Animated Shopping Elements */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Pulsing background glow using NovaCart Pink */}
          <div className="absolute inset-0 bg-[#e91e63] opacity-10 rounded-full blur-xl animate-pulse"></div>
          
          {/* The Bouncing Dots */}
          <div className="flex space-x-2 relative">
            <div className="w-4 h-4 bg-[#e91e63] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-4 h-4 bg-[#e91e63] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-4 h-4 bg-[#e91e63] rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Branding & Status */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800 tracking-tight">NovaCart</h3>
          <p className="text-sm text-gray-500 font-medium animate-pulse">Preparing your deals...</p>
        </div>

        {/* Progress Bar Detail */}
        <div className="mt-4 w-40 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#e91e63] to-[#4a148c] animate-loading-bar w-full"></div>
        </div>
      </div>

      {/* Tailwind Custom Animation Config (Include in global CSS or tailwind config) */}
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default loading;
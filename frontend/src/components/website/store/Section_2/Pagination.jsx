import React from 'react';
import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, searchParams }) => {
    // If there is only 1 page or none, do not render pagination controls
    if (totalPages <= 1) return null;

    // Helper to generate the correct URL with existing query parameters
    const getPageLink = (page) => {
        // searchParams here is the resolved searchParams object from the page
        const params = new URLSearchParams();
        
        // Clone all existing search params
        if (searchParams) {
            Object.entries(searchParams).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    params.set(key, value);
                }
            });
        }
        
        // Update the page param
        params.set('page', page);
        return `/products?${params.toString()}`;
    };

    // Build the array of page numbers to render
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center gap-1.5 md:gap-2 my-8 text-sm">
            {/* Previous Page Link */}
            {currentPage > 1 ? (
                <Link
                    href={getPageLink(currentPage - 1)}
                    className="px-3.5 py-2 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 font-medium text-slate-700 transition duration-200"
                >
                    Prev
                </Link>
            ) : (
                <span className="px-3.5 py-2 border border-slate-100 rounded-lg text-slate-300 bg-slate-50 cursor-not-allowed font-medium select-none">
                    Prev
                </span>
            )}

            {/* Page Numbers */}
            {pages.map((p) => {
                const isActive = p === currentPage;
                return (
                    <Link
                        key={p}
                        href={getPageLink(p)}
                        className={`px-4 py-2 border rounded-lg font-medium transition duration-200 ${
                            isActive
                                ? "bg-black text-white border-black font-semibold shadow-sm"
                                : "border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700"
                        }`}
                    >
                        {p}
                    </Link>
                );
            })}

            {/* Next Page Link */}
            {currentPage < totalPages ? (
                <Link
                    href={getPageLink(currentPage + 1)}
                    className="px-3.5 py-2 border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-slate-300 font-medium text-slate-700 transition duration-200"
                >
                    Next
                </Link>
            ) : (
                <span className="px-3.5 py-2 border border-slate-100 rounded-lg text-slate-300 bg-slate-50 cursor-not-allowed font-medium select-none">
                    Next
                </span>
            )}
        </div>
    );
};

export default Pagination;

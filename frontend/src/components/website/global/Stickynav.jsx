'use client';

import React from "react";
import { Percent } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Stickynav({ isMenuOpen }) {

    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/products" },
        { name: "Pages", path: "/page" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav
  className={` border-slate-200 shadow
    sticky top-0 z-50
    ${isMenuOpen ? "block" : "hidden md:block"}
  `}
>
            <div className="max-w-7xl border-b bg-white  border-slate-200  mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between">

                <ul className="flex flex-col md:flex-row  gap-6 md:gap-8 uppercase text-sm font-semibold">
                    {navItems.map((item) => {

                        const isActive = pathname === item.path;

                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`transition ${isActive
                                        ? "text-red-500"
                                        : "hover:text-red-500"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-4 md:mt-0 flex items-center gap-2  text-sm font-semibold cursor-pointer hover:text-red-500">
                    <Percent size={18} />
                    <span>SPECIAL OFFERS</span>
                </div>

            </div>
        </nav>
    );
}
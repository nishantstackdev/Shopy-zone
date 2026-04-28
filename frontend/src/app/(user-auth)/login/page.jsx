"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">

            {/* Main Card */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">

                {/* Left Section (Banner) */}
                <div className="md:w-1/2 bg-gradient-to-br from-red-500 to-pink-500 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Welcome Back 👋
                    </h2>
                    <p className="text-sm opacity-90">
                        Login to continue shopping your favorite products.
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />

                            {/* Show/Hide Button */}
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2.5 text-sm cursor-pointer text-gray-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <span className="text-sm text-red-500 cursor-pointer hover:underline">
                                Forgot Password?
                            </span>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                        >
                            Login
                        </button>

                        {/* Register Link */}
                        <p className="text-sm text-center text-gray-500">
                            Don’t have an account?{" "}
                            <Link href="/register">
                                <span className="text-red-500 cursor-pointer hover:underline">
                                    Register
                                </span>
                            </Link>

                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { instance, notify } from "@/helper/helper";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
    
    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
4
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            return notify("Passwords do not match", false);
        }

        setloading(true);
        instance.post("user/create", form)
            .then((res) => {
                if (res.data.success) {
                    notify(res?.data?.message, true);
                    router.push(`/verify-otp?email=${res.data.email}`);
                    router.refresh();
                    setForm({
                        name:"",
                        email:"",
                        password:"",
                        confirmPassword:""
                    })
                }
            })
            .catch((err) => {
                const message =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something Went Wrong";
                notify(message, false);
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">

                {/* Left Section (Banner) */}
                <div className="md:w-1/2 bg-gradient-to-br from-pink-500 to-red-400 text-white p-10 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-4 text-white">Join With Us 👋</h2>
                    <p className="text-sm opacity-90 text-white">
                        Create your account and start shopping amazing deals today.
                    </p>
                </div>

                {/* Right Section (Form) */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Account</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                        />

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                        />

                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                        />

                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 text-black"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition flex justify-center items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                                    Registering...
                                </>
                            ) : (
                                "Register"
                            )}
                        </button>

                        <p className="text-sm text-center text-gray-500">
                            Already have an account?{" "}
                            <Link href="/login">
                                <span className="text-red-500 cursor-pointer hover:underline font-semibold">
                                    Login
                                </span>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
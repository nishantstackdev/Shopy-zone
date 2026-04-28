"use client";
import { useRef, useState } from "react";
import { instance, notify } from "@/helper/helper";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function OTPPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  // console.log(email,"email")
  const [loading, setloading] = useState(false)
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const router = useRouter()

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace → move to previous
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("")


    setloading(true);
    instance.post("user/verify-otp", { otp: finalOtp, email })
      .then((res) => {
        // console.log(res)
        if (res.data.success) {
          notify(res?.data?.message, true);
          router.push("/login");
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

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Verify OTP 🔐
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit}>

          {/* OTP Inputs */}
          <div className="flex justify-between gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            ))}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Verifying...
              </>
            ) : (
              "verify"
            )}
          </button>

          {/* Resend */}
          <p className="text-sm text-gray-500 mt-4">
            Didn’t receive code?{" "}
            <span className="text-red-500 cursor-pointer hover:underline">
              Resend
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}
'use client';

import React, { useEffect, useState } from "react";

export default function Saletimer() {

  const getInitialTime = () => 23 * 60 * 60; // 23 hours in seconds

  const [timeLeft, setTimeLeft] = useState(getInitialTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return getInitialTime(); // restart again
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const timeUnits = [
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Minutes", value: String(minutes).padStart(2, "0") },
    { label: "Seconds", value: String(seconds).padStart(2, "0") },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 items-center">
      {timeUnits.map((item) => (
        <div key={item.label} className="flex flex-col items-center">

          {/* BLACK CIRCLE */}
          <div className="bg-black text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2 shadow-md">
            <p className="text-lg sm:text-xl font-bold tracking-tight">
              {item.value}
            </p>
          </div>

          {/* LABEL */}
          <span className="text-[11px] sm:text-xs font-medium text-black">
            {item.label}
          </span>

        </div>
      ))}
    </div>
  );
}
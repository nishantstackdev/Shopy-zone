"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
      disable: function () {
      return window.innerWidth < 768;
    },
      offset: 30,
      anchorPlacement: "top-center", // 👈 ye main fix hai
    });
  }, []);

  return null;
}
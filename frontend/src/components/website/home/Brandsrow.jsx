import React from "react";
import { GetBrands } from "@/api/Brand";
import BrandSlider from "./BrandSlider";

export default async function Brandsrow() {
 const allbrands = await GetBrands()
const brands = allbrands.allBrand
  return (
    <BrandSlider brands={brands} />
  );
}
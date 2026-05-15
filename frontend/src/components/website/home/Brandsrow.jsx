import React from "react";
import { GetBrands } from "@/api/Brand";
import BrandSlider from "./BrandSlider";

export const dynamic = 'force-dynamic';

export default async function Brandsrow() {
  const allbrands = await GetBrands()
  const brands = allbrands.allBrand
  return (
    <BrandSlider brands={brands} />
  );
}
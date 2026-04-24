import React from "react";
import { getProduct } from "@/api/Product";
import ProductTableClient from "@/components/admin/ProductTableClient";

async function CategoryTable(){
  const product = await getProduct()
  
  return (
    <>
     <ProductTableClient product={product.allProduct} />
    </>
  );
};

export default CategoryTable;
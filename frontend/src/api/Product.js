import { instance } from "@/helper/helper"
async function getProduct(query = {}) {
  const filter = new URLSearchParams()
  if (query.id) filter.append("id", query.id)
  if (query.status) filter.append("status", query.status)
  if (query.stock) filter.append("stock", query.stock)
  if (query.limit) filter.append("limit", query.limit)
  if (query.is_popular) filter.append("is_popular", query.is_popular)
  if (query.is_home) filter.append("is_home", query.is_home)
  if (query.category_slug) filter.append("category_slug", query.category_slug)
  if (query.brand_slug) filter.append("brand_slug", query.brand_slug)
  if (query.color_slug) filter.append("color_slug", query.color_slug)
  if (query.min_price) filter.append("min_price", query.min_price)
  if (query.max_price) filter.append("max_price", query.max_price)
  // getProduct function mein ye line add kar
  if (query.category_id) filter.append("category_id", query.category_id)
  try {
    const res = await instance.get(`product?${filter.toString()}`);
    // console.log(res)
    return res.data;

  } catch (err) {
    // console.log(err);
    return [];
  }
}

async function GetProductById(id) {
  try {
    const res = await instance.get(`product/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export { getProduct, GetProductById }
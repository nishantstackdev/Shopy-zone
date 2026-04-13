import { instance } from "@/helper/helper";

async function GetCategories(query = {}) {
  const filter = new URLSearchParams()
  if (query.id) filter.append("id", query.id)
  if (query.status) filter.append("Status", query.status)
  if (query.is_top) filter.append("is_top", query.is_top)
  if (query.is_popular) filter.append("is_popular", query.is_popular)
  if (query.limit) filter.append("limit", query.limit)

  try {
    const res = await instance.get(`category?${filter.toString()}`);
    return res.data;
  } catch (err) {
    // console.log(err);
    return [];
  }
}
async function GetCategoriesById(id) {
  try {
    const res = await instance.get(`category/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}


export { GetCategories, GetCategoriesById }
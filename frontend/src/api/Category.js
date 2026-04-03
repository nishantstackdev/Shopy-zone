import { instance } from "@/helper/helper";

async function GetCategories() {
  try {
    const res = await instance.get("category");
    return res.data;
  } catch (err) {
    console.log(err);
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
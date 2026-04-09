import { instance } from "@/helper/helper"
async function GetBrands() {
  try {
    const res = await instance.get("brand");
    console.log(res)
    return res.data;
    
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function GetBrandsById(id) {
  try {
    const res = await instance.get(`brand/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
export { GetBrands, GetBrandsById }
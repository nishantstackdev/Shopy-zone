import { instance } from "@/helper/helper"
async function GetBrands(query={}) {
  const filter = new URLSearchParams()
  if(query.id) filter.append("id",query.id)
  if(query.status) filter.append("status",query.status)
  if(query.is_home) filter.append("is_home",query.is_home)
  
  try {
    const res = await instance.get(`brand?${filter.toString()}`);
    // console.log(res)
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
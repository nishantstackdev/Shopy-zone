import { instance } from "@/helper/helper";


export async function GetCategories() {
  try {
    const res = await instance.get("category");
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
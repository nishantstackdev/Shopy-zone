import { instance } from "@/helper/helper"

async function GetColor() {
  try {
    const res = await instance.get("color")
    // console.log(res)
    return res.data;
    
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function GetColorById(id) {
  try {
    const res = await instance.get(`color/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export { GetColor, GetColorById }
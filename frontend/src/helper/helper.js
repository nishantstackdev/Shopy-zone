import {  toast } from 'react-toastify';
import axios from 'axios';
const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" })
function slugCreate(value) {
    const slug = value
        .toLowerCase()
        .trim()
        .replace(/\s+/g , '-')
    return slug
}
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export {slugCreate,notify,instance}

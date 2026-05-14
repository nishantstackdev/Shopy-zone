// services/auth.js

import { cookies } from "next/headers"
import { instance } from "@/helper/helper"

const getMe = async () => {

    // await required in Next 15
    const cookieStore = await cookies()

    const token = cookieStore.get("jwt")?.value ?? null

    if (!token) {
        return { user: null }
    }

    const res = await instance.get("user/get", {
        headers: {
            Authorization: token
        }
    })

    return res.data
}

export default getMe
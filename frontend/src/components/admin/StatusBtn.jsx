'use client'
import { instance, notify } from "@/helper/helper"
import { useRouter } from "next/navigation"

function StatusBtn({ value, id, field }) {
    const router = useRouter()
    function statusHandler() {
        instance.patch(`category/update/${id}`, { field })
            .then((res) => {
                if (res.data.success) {
                    notify(res?.data?.message, true)
                    router.refresh()
                }
                // console.log(res)
            })
            .catch((err) => {
                const message =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something Went Wrong"

                notify(message, false)
            })
    }
    const label = {
        status: ["Active", "Inactive"],
        is_home: ["Home", "Not Home"],
        is_top: ["Top", "Not Top"],
        is_popular: ["Popular", "Not Popular"]
    }
    const [truelabel, falselabel] = label[field]

    return (
        <button
            onClick={statusHandler}
            className={`px-6 py-2 rounded text-sm font-bold cursor-pointer ${value
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
                }`}
        >
            {value ? truelabel : falselabel}
        </button>
    )
}
export default StatusBtn
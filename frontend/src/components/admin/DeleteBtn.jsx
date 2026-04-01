'use client'
import React from 'react'
import axios from "axios"
import { notify } from "@/helper/helper"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react";
import Swal from 'sweetalert2'

export default function DeleteBtn({ id }) {
    const router = useRouter()

    function deleteHandler() {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {

            if (result.isConfirmed) {

                axios.delete(`http://localhost:8000/category/delete/${id}`, {
                    data: { field: "status" }
                })
                .then((res) => {
                    if (res.data.success) {

                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: res.data.message,
                            icon: "success"
                        });

                        notify(res?.data?.message, true);
                        router.refresh();
                    }
                })
                .catch((err) => {
                    const message =
                        err?.response?.data?.message ||
                        err?.message ||
                        "Something Went Wrong";

                    swalWithBootstrapButtons.fire({
                        title: "Error",
                        text: message,
                        icon: "error"
                    });

                    notify(message, false);
                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {

                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe 🙂",
                    icon: "info"
                });

            }

        });
    }

    return (
        <button
            onClick={deleteHandler}
            className="bg-red-100 p-2 rounded-lg hover:bg-red-200"
        >
            <Trash2 size={16} className="text-red-500" />
        </button>
    )
}
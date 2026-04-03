import { GetCategoriesById } from '@/api/Category'
import EditCategoryForm from '@/components/admin/EditCategory'
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params
    const category = await GetCategoriesById(resolvePromise.slug)
    const allcategories = category != null ? category.allcategories : null
    return (
        <EditCategoryForm category={allcategories}/>
    )
}

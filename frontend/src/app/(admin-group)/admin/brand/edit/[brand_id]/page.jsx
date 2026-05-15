import { GetBrandsById } from '@/api/Brand'
import EditBrandForm from '@/components/admin/EditBrand'
import React from 'react'

export const dynamic = 'force-dynamic';

export default async function page({ params }) {
    const resolvePromise = await params
    const allbrands = await GetBrandsById(resolvePromise.brand_id)
    const data = allbrands != null ? allbrands.allBrand : null
    return (
        <EditBrandForm brand={data} />
    )
}

import React from 'react'
import ProdLayout from "@/components/layouts/ProductLayout"

export default function page({ params }: { params: { subcategory: string, products: string, categories: string } }) {
    return (
        <div>
            <ProdLayout categoriesProp={params.categories} subcategoryProp={params.subcategory} productsProp={params.products} group='commercial' />
        </div>
    )
}

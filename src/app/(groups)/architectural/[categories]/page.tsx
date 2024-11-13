import React from 'react'
import Layout from "@/components/layouts/CategoriesLayout"
import Image from "next/image"

export default function page({ params }: { params: { categories: string } }) {
    return (
        <Layout categories={params.categories} group="architectural">
            <div className='relative'>
                <Image
                    src={"/architecture.jpg"}
                    alt='architectural banner'
                    width={3800}
                    height={2590}
                    className='w-full object-cover h-[300px] object-center'
                />
                <div className='text-3xl md:text-4xl lg:text-6xl absolute inset-0 text-center bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent flex items-center justify-center pt-36'>
                    <h1 className='heading uppercase text-white '>{params.categories.replace(/-/g, " ")}</h1>
                </div>
            </div>
        </Layout>
    )
}

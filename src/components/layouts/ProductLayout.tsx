import React from 'react'
import Image from "next/image"
import { GrCompliance } from "react-icons/gr";
import FinishGroup from "@/components/product/FinishGroup"
import { FeatureAccordion } from '@/components/product/FeatureAccordion';
import Related from '@/components/Related';
import { getCategories, getAllProducts } from "@/lib/directus"
import { notFound } from "next/navigation"
import GroupCTA from '@/components/global/GroupCTA';
import SizeSelect from "@/components/product/SizeSelect"
import Goback from '@/components/global/Goback';
import clsx from 'clsx';

interface ISubcategory {
    id: string,
    status: string,
    sort: number | null,
    Friendly_ID: number,
    Subcategory: string,
    Parent_Category: string,
    Hero_Image: string,
    Description: string
}

interface IProduct {
    id: string,
    status: string,
    sort: number | null,
    Name: string,
    Internal_Notes: string | null,
    Friendly_ID: string,
    Hero_Image: string,
    Segment: string[],
    test: string | null,
    Product_Category: ISubcategory
}


export default async function ProdLayout({ subcategoryProp, productsProp, categoriesProp, group }: { subcategoryProp: string, productsProp: string, categoriesProp: string, group: string }) {

    const categories = await getCategories()
    const products = await getAllProducts()

    const checkCategory = categories?.map((category) => {
        if (category.Name.toLowerCase() !== categoriesProp.replace(/-/g, " "))
            return null

        const checkSub: IProduct[] = category.Sub_Categories.map((sub: ISubcategory) => {
            if (subcategoryProp.replace(/-/g, " ") !== sub.Subcategory.toLowerCase())
                return null

            const checkProduct = products?.map((product) => {
                if (product.Product_Category.id !== sub.id && product.Name.toLowerCase() !== productsProp.replace(/-/g, " "))
                    return

                return product
            }).filter((product) => product)
            if (checkProduct && checkProduct.length <= 0)
                return null

            return checkProduct
        }).filter((sub: any) => sub).flat()
        if (checkSub.length <= 0)
            notFound()

        return checkSub
    }).filter(category => category).flat()

    if (checkCategory && checkCategory.length <= 0)
        notFound()

    return (
        <>
            <main className='min-h-[80vh] w-full h-full grid grid-cols-1 lg:grid-cols-2 bg-[#f5f5f5]' id='main'>
                <Image
                    src={"/1.jpg"}
                    alt='product preview'
                    width={1000}
                    height={1000}

                    className='object-cover h-full object-center'
                />
                <div className='px-6 md:px-14 py-10 lg:py-24 flex flex-col justify-center items-center'>
                    <div className='max-w-[480px] w-full'>
                        <Goback />
                        <p className='text-[12px] md:text-sm tracking-[6px] text-[#bab28f] uppercase'>{group} Hardware</p>
                        <div className='flex justify-between items-center mb-3'>
                            <h3 className={clsx('heading text-base md:text-xl uppercase',
                                group === "commercial" ? "text-[#296366]" : "text-[#383d4f]"
                            )}>
                                {
                                    checkCategory && checkCategory?.length > 0 &&
                                    checkCategory[0]?.Name
                                }
                            </h3>
                            <p className='text-sm heading font-bold'>$100 - $300</p>
                        </div>
                        <div className='flex gap-3 md:gap-9 border-b pb-4 pt-2 border-[#bab28f] items-center justify-center flex-wrap'>
                            {

                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className='flex items-center flex-col'>
                                        <div className='p-2 border border-neutral-500 rounded-full'>
                                            <GrCompliance size={20} />
                                        </div>
                                        <p className='text-xs heading uppercase '>FireCompliance</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between items-center h-[76px] border-b border-[#bab28f]'>
                            <div className='flex gap-2 items-center'>
                                <h3 className='heading'>FINISH:</h3>
                                <p>Brushed Nickel</p>
                            </div>

                            <FinishGroup />
                        </div>

                        <SizeSelect group={group} />

                        <div className='flex flex-col py-2 md:flex-row justify-between items-center h-[76px] border-b border-[#bab28f]'>
                            <h3 className='heading'>FIXING</h3>
                            <div className='flex gap-5 text-xs'>
                                <span>Back to Back (Pair)</span>
                                <span>Face Fix (Single)</span>
                                <span>Rear Fix (Single)</span>
                            </div>
                        </div>
                        <p className='text-xs my-5'>Guide</p>
                        <div className='grid grid-cols-2 text-center h-[50px]'>

                            <a href='#features' className={clsx(' text-white  border border-[#296366] rounded-l-full',
                                group === "commercial" ? "bg-[#296366] border-[#296366]" : "bg-[#383d4f] border-[#383d4f]"
                            )}>
                                <button className='bg-transparent w-full h-full text-center uppercase heading '>Features</button>
                            </a>

                            <Related group={group} />
                        </div>
                    </div>
                </div>
            </main>

            <section className='grid grid-cols-1 lg:grid-cols-2 items-start' id='features'>
                <div className=''>
                    <div className='grid grid-cols-2'>

                        {
                            Array.from({ length: 6 }).map((_, index) => (
                                <Image
                                    src={`/4.jpg`}
                                    alt=''
                                    width={1000}
                                    height={1000}
                                    className='object-cover object-center md:h-[250px] lg:h-[550px]'
                                    key={index}
                                />
                            ))
                        }

                    </div>
                </div>
                <div className='px-6 md:px-16 lg:pr-32 pt-16 lg:pt-32 sticky top-0 flex items-center justify-center'>
                    <div className='max-w-[500px] w-full'>
                        <div className='flex flex-col gap-4'>
                            {
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className='flex flex-col gap-2 pb-4 border-b'>
                                        <div className='flex items-center gap-4'>
                                            <div className='p-3 border border-neutral-500 rounded-full'>
                                                <GrCompliance size={30} />
                                            </div>
                                            <p className={clsx('heading uppercase ',
                                                group === "commercial" ? "text-[#296366]" : "text-[#383d4f]"
                                            )}>Fire Compliance</p>
                                        </div>
                                        <p className='text-justify text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, harum, iste, in amet modi quo at iure porro necessitatibus fugiat numquam aliquid unde esse. Ad.</p>
                                    </div>
                                ))
                            }

                        </div>
                        <FeatureAccordion />
                        <div className='bg-[#f5f5f5] rounded-full mt-40 sticky bottom-2 flex justify-between items-center pr-12'>
                            <a href="#main" className='grow'>
                                <button className={clsx(' basis-1/2 px-6 py-2 text-white uppercase heading rounded-full h-[50px] w-full text-center',
                                    group === "commercial" ? "bg-[#296366]" : "bg-[#383d4f]"
                                )}>Preview</button>
                            </a>
                            <div className='text-xs flex flex-col p-2 basis-1/2 text-center items-center justify-center font-bold'>
                                <p>POLO PULL HANDLE</p>
                                <p>$100 - $300</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='pt-10'>
                <GroupCTA group={group} />
            </div>
        </>
    )
}

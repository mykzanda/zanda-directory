import React from 'react'
import { getSub, getCat, checkProds } from "@/lib/directus"
import { notFound } from "next/navigation"
import { Image } from "@nextui-org/react";
import {
    IconTableColumn,
} from "@tabler/icons-react";
import { inter } from "@/app/font"
import ProductDialog from "@/components/ProductDialog"
import Goback from '../global/Goback';
import GroupCTA from "@/components/global/GroupCTA"


export default async function Layout({ categories, children, group }: { categories: string, children: React.ReactNode, group: string }) {

    let groupName = group === "commercial" ? "Commercial" : "Architectural"

    //unslug param url
    const slugName = categories.replace(/-/g, " ")
    //get category id by slug
    const category = await getCat(slugName)
    const products = await checkProds()
    //check if all the products are commercial
    const segmentCheck = products?.filter(product => product.Segment && product.Segment.includes(groupName))
    //validate products if they have sub categories then get the ID
    const validateSubs = segmentCheck?.filter(valid => valid.Product_Category).map(valid => valid.Product_Category)
    //throw not found exception
    async function getSubcategory() {
        if (category && category.length > 0) {
            const sub_categories = await getSub(category[0].id) //get the sub categories by parent id
            const displaySub = sub_categories?.map((sub) => {
                if (validateSubs?.includes(sub.id)) {
                    return sub
                }
                return
            })
            return displaySub?.filter(display => display)
        }
        notFound()
    }
    const data = await getSubcategory()

    return (
        <>
            <main className="max-h-screen">
                {
                    children
                }
            </main>
            <section className='max-w-screen-xl w-full mx-auto'>
                <div className="px-5 py-16 md:px-8">
                    <Goback />
                    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            data?.map((cat: any, index: number) => {
                                return (
                                    <ProductDialog key={index} subcategory={cat.Subcategory} category={slugName} subId={cat.id} group={groupName}>
                                        <div className='relative flex overflow-hidden flex-col gap-4 rounded-2xl group hover:cursor-pointer text-white w-full'>
                                            <Image src={`${process.env.DIRECTUS_API_URL}/assets/${cat.Hero_Image}`}
                                                alt='unsplash'
                                                width={"100%"}
                                                height={400}
                                                className='rounded-[8px] object-cover object-center h-[400px] w-full z-0'
                                            />
                                            <div className='text-sm flex flex-col gap-3 absolute inset-0 bottom-0 bg-black bg-opacity-50 justify-end p-8 group'>
                                                <div className='flex flex-col items-start text-start gap-3 transition-all duration-100 group-hover:ml-5'>
                                                    <IconTableColumn />
                                                    <h3 className='text-lg font-bold uppercase'>{cat.Subcategory}</h3>
                                                    <p className={`w-5/6 ${inter.className}`}>{cat.Description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </ProductDialog>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <GroupCTA group={group} />
        </>
    )
}

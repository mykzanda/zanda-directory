import React from 'react'
import Link from "next/link"
import {
    IconTableColumn,
} from "@tabler/icons-react";
import { checkProds, getCategories } from "@/lib/directus"
import Goback from "@/components/global/Goback"
import GroupCTA from "@/components/global/GroupCTA"
import { Image } from "@nextui-org/react";

const slugify = require('slugify');

export default async function Layout({ children, group }: { children: React.ReactNode, group: string }) {

    let groupName = group === "commercial" ? "Commercial" : "Architectural"

    //get all the categories first
    const category = await getCategories()
    //then get all the products
    const products = await checkProds()
    //check if all the products are commercial
    const segmentCheck = products?.filter(product => product.Segment && product.Segment.includes(groupName))
    //validate products if they have sub categories then get the ID
    const validateSubs = segmentCheck?.filter(valid => valid.Product_Category).map(valid => valid.Product_Category)

    //get parent category based on validated subcategories
    const subs = category?.map((cat: any) => {
        const subcategories = cat.Sub_Categories
        const subcats = subcategories.map((sub: any) => {
            if (validateSubs?.includes(sub.id)) {
                return sub.id
            }
            return
        })
        return subcats.filter((sub: string) => sub)
    })
    //filter categories where it is not empty then flatten to get the ID
    const nonEmptySubs = subs?.filter(sub => sub.length > 0).flat()
    //again cross check to categories array and get the category object
    const displayCat = category?.map((cat: any) => {
        const valids = nonEmptySubs?.map((flat_subs) => {
            const sub: string[] = cat.Sub_Categories.map((subId: { id: string }) => subId.id).filter((filter_sub: string) => filter_sub === flat_subs)
            return sub
        })
        const flatten_subs = valids?.flat()
        if (flatten_subs && flatten_subs?.length > 0) {
            return cat
        }
        return
    }).filter(display => display)


    return (
        <>
            <main className="max-h-screen">
                {children}
            </main>
            <section className='max-w-screen-xl w-full mx-auto'>
                <div className="px-5 py-16 md:px-8">
                    <Goback />
                    <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 lg:columns-3 [&>a:not(:first-child)]:mt-8">
                        {
                            displayCat?.map((item: any, index: number) => {

                                const link = slugify(item.Name, { lower: true })

                                return (
                                    <Link key={index} href={`/${groupName.toLowerCase()}/${link}`} className='relative flex overflow-hidden flex-col gap-4 rounded-2xl group hover:cursor-pointer text-white w-full'>
                                        <Image src={`${process.env.DIRECTUS_API_URL}/assets/${item.Hero_Image}`}
                                            alt='unsplash'
                                            width={"100%"}
                                            height={400}

                                            className='rounded-[8px] max-w-none w-full object-cover object-center z-0 h-[400px] '
                                        />
                                        <div className='text-sm flex flex-col gap-3 absolute inset-0 bottom-0 bg-black bg-opacity-50 justify-end p-8 group'>
                                            <div className='flex flex-col gap-3 transition-all duration-100 group-hover:ml-5'>
                                                <IconTableColumn />
                                                <h3 className='text-lg heading font-bold uppercase'>{item.Name}</h3>
                                                <p className='w-5/6'>{item.Description}</p>
                                            </div>
                                        </div>
                                    </Link>
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

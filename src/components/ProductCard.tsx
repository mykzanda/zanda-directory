import React from 'react'
import Image from "next/image"
import clsx from 'clsx'

const slugify = require('slugify')

export default function ProductCard({ name, sub, category, image, group }: { name: string, sub: string, category: string, image: string, group: string }) {

    const colors = ["#85C851", "#FFB11A", "#35384C"]

    return (
        <div className="w-full">
            <div className="">
                <div className="group">
                    <div
                        className="relative overflow-hidden rounded-2xl mb-4"
                    >
                        <a href={`/${group.toLowerCase()}/${slugify(category, { lower: true })}/${slugify(sub, { lower: true })}/${slugify(name, { lower: true })}`}>
                            <Image
                                className="rounded-2xl object-cover w-full h-full transform group-hover:scale-105 transition duration-200"
                                src={`${process.env.DIRECTUS_API_URL}/assets/${image}`}
                                alt="product image"
                                width={442}
                                height={527}
                            />
                        </a>
                        <div className="absolute top-4 left-4 right-4 md:block hidden">
                            <div className="flex justify-between flex-wrap gap-4">
                                <div className="flex flex-wrap gap-2">
                                    <div className={clsx(" rounded-full px-3 py-2",
                                        group.toLowerCase() === "commercial" ? "bg-[#296366]" : "bg-[#383d4f]"
                                    )}>
                                        <span className="block font-semibold text-white">New arrival</span>
                                    </div>
                                    <div className=" rounded-full px-3 py-2">
                                        <span className="block font-semibold text-[#bab28f]">
                                            30% OFF
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div>
                            <h2 className="font-heading text-sm font-bold uppercase mb-2">
                                {name}
                            </h2>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <p className="text-[#bab28f] font-semibold">$145.00</p>
                            <div className="flex items-center justify-end flex-wrap gap-2">
                                {
                                    colors.map((color: string, index: number) => {
                                        return (
                                            <a key={index} href="#" className="inline-block">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >

                                                    <circle cx={12} cy={12} r={8} fill={color} />
                                                </svg>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

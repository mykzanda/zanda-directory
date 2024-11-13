import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {

    const colors = ["#85C851", "#FFB11A", "#35384C"]

    return (
        <Carousel className="w-full max-w-[13rem] sm:max-w-sm mx-auto">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="">
                        <div className="w-auto" key={index}>
                            <div className="">
                                <div className="group">
                                    <div
                                        className="relative overflow-hidden rounded-2xl mb-4"
                                    >
                                        <a href={`#`}>
                                            <Image
                                                className="rounded-2xl object-cover w-full h-full transform group-hover:scale-105 transition duration-200"
                                                src={`/1.jpg`}
                                                alt="product image"
                                                width={442}
                                                height={527}
                                            />
                                        </a>
                                        <div className="absolute top-4 left-4 right-4 sm:block hidden">
                                            <div className="flex justify-between flex-wrap gap-4">
                                                <div className="flex flex-wrap gap-2">
                                                    <div className="bg-[#296366] rounded-full px-3 py-2">
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
                                                test
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
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

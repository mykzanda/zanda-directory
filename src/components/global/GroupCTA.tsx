import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function GroupCTA({ group }: { group: string }) {
    return (
        <section className='pb-10 px-5 max-w-screen-xl w-full mx-auto'>
            <div className='w-full rounded-[16px] overflow-hidden relative '>
                {
                    group === "commercial"
                        ?
                        <Image
                            src={"/architecture.jpg"}
                            alt='architecture'
                            width={3872}
                            height={100}
                            className='max-h-56 h-full object-cover object-center'
                        />
                        :
                        <Image
                            src={"/commercial.jpg"}
                            alt='commercial'
                            width={3872}
                            height={100}
                            className='max-h-56 h-full object-cover object-center'
                        />
                }
                <div className='bg-gradient-to-tl from-[rgba(0,0,0,0.7)] to-transparent absolute inset-0 flex flex-col md:flex-row items-center justify-between text-white p-5 md:p-14'>
                    <p className='heading uppercase text-center mb-2 text-2xl md:text-4xl max-w-96 md:max-w-max'>Browse Our {group === "commercial" ? "Architectural" : "Commercial"} Hardwares</p>
                    <Link href={group === "commercial" ? "/architectural" : "/commercial"} className="uppercase border border-white p-4 md:py-4 md:px-8 com heading hover:bg-white transition-all duration-100 hover:text-[#383d4f] text-nowrap">View Collection</Link>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Socials from './Socials'
import { inter } from "@/app/font"

export default function Footer() {

    const links = ["home", "collections", "products", "services"]

    return (
        <footer className='bg-[#101010]  pb-12 px-5'>
            <div className='max-w-screen-xl w-full mx-auto relative'>
                <div className='w-[101px] h-1 absolute top-0 left-0 bg-[#bab28f]' />

                <div className='flex justify-between items-center mb-9 pt-[75px] flex-col md:flex-row gap-8'>
                    <Image
                        src={"/header-logo.png"}
                        alt='logo'
                        width={143}
                        height={25}
                    />
                    <ul className='flex gap-[34px] heading flex-col md:flex-row text-center'>
                        {
                            links.map((link: string, index: number) => (
                                <li className='sub-title text-white hover:text-[#bab28f] uppercase text-sm' key={index}>
                                    <Link href={"#header"}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='flex justify-between mb-14 md:text-start text-center'>
                    <p className={`text-[rgba(255,255,255,0.5)] md:max-w-[540px] w-full text-xs ${inter.className}`}>Zanda Architectural Hardware is a designer, manufacturer and supplier of high quality architectural door hardware.
                        <br /> <br />
                        Zanda is a wholly owned Australian manufacturer, controlling everything from design right through to delivery, using only direct distribution from Zanda’s own warehouses to our distributor base.</p>
                    <div className='md:block hidden'><Socials /></div>

                </div>
                <div className='flex justify-between w-full items-center'>
                    <p className={`text-[rgba(255,255,255,0.5)] max-w-[540px] text-xs ${inter.className}`}>Copyright 2021. All Rights Reserved</p>
                    <div className='md:invisible visible'>
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

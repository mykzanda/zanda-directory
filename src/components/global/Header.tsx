"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";

export function Header() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />

        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [show, setShow] = useState(false)

    const links = ["home", "collections", "products", "services"]


    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-4xl w-full mx-auto z-50 px-6 md:px-0", className)}
        >
            <Menu setActive={setActive}>
                <div className=" gap-8 items-center md:flex hidden">
                    <MenuItem setActive={setActive} active={active} item="SERVICES">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="PRODUCTS">
                        <div className="  text-sm grid grid-cols-1 gap-10 p-4">
                            <ProductItem
                                title="Jura Elite"
                                href="/"
                                src="/1.jpg"
                                description="Lorem ipsum, dolor sit amet consectetur adipisicing."
                            />
                            <ProductItem
                                title="Jura Elite"
                                href="/"
                                src="/1.jpg"
                                description="Lorem ipsum, dolor sit amet consectetur adipisicing."
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="PRICING">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                </div>

                <RxHamburgerMenu className="md:hidden block text-white hover:cursor-pointer" size={25} onClick={() => { setShow(!show) }} />
            </Menu>

            <div className={clsx("absolute gap-6 inset-x-0 mx-6 -bottom-[290px] bg-[#fafafa] shadow-lg rounded-[15px] md:hidden p-6",
                show ? "flex" : "hidden"
            )}>
                <div className="w-1/2 h-[230px] bg-[#F4F4F5] rounded-[5px] p-4">
                    <div className="text-lg font-medium mb-2">
                        shadcn/ui
                    </div>
                    <p className="text-sm text-justify leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                    </p>
                </div>
                <div className="w-1/2">
                    <ul className='flex justify-center items-center h-full gap-[34px] heading flex-col md:flex-row text-center'>
                        {
                            links.map((link: string, index: number) => (
                                <li className='sub-title  hover:text-[#bab28f] uppercase text-sm' key={index}>
                                    <Link href={"#header"}>{link}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

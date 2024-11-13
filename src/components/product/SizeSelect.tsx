"use client"

import React, { useState } from 'react'
import clsx from 'clsx'

export default function SizeSelect({ group }: { group: string }) {

    const [selected, setSelected] = useState("XS")
    const sizes = ["XS", "S", "M", "L", "XL"]
    const color = group === "commercial" ? "bg-[#296366]" : "bg-[#383d4f]"

    return (
        <div className='flex justify-between items-center h-[76px] border-b border-[#bab28f]'>
            <h3 className='heading'>SIZE</h3>
            <div className='flex gap-5 text-xs'>
                {
                    sizes.map((size: string, index: number) => {
                        return (
                            <span onClick={() => { setSelected(size) }} key={index} className={clsx('hover: cursor-pointer',
                                selected === size ? `text-white ${color} px-2 rounded-full` : " ",
                            )}>{size}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

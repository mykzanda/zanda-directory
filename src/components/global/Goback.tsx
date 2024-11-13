"use client"
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function Goback() {

    const router = useRouter()

    return (
        <a onClick={() => { router.back() }} className='flex gap-5 items-center mb-5 hover:cursor-pointer'><FaLongArrowAltLeft /> Go back</a>
    )
}

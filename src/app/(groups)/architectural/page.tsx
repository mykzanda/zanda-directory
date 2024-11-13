import Layout from "@/components/layouts/GroupLayout"
import { Image } from "@nextui-org/react";

export default function page() {
    return (
        <Layout group="architectural">
            <div className='relative'>
                <Image
                    src={"/architecture.jpg"}
                    alt='architectural banner'
                    width={3800}
                    height={2590}
                    className='w-full object-cover h-[300px] object-center z-0 rounded-none'

                />
                <div className='text-6xl absolute inset-0 text-center bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent flex items-center justify-center pt-36'>
                    <Image
                        src={"/archi-logo.png"}
                        alt='Zanda Commercial Logo'
                        width={196}
                        height={50}
                    />
                    {/* <h1 className='heading uppercase text-white pt-48'>Commercial</h1> */}
                </div>
            </div>
        </Layout>
    )
}

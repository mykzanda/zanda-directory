import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import FinishGroup from "@/components/product/FinishGroup"
import clsx from "clsx"

export default function Related({ group }: { group: string }) {
    return (
        <Dialog>
            <DialogTrigger className={clsx("border border-[#296366] text-[#296366] w-full h-full rounded-r-full heading",
                group === "commercial" ? "border-[#296366] text-[#296366]" : "border-[#383d4f] text-[#383d4f]"
            )}>RELATED</DialogTrigger>
            <DialogContent className="max-w-[1200px] related">
                <DialogHeader className="">
                    <DialogTitle className="text-center heading mb-8"> RELATED PRODUCTS - DOOR HANDLES</DialogTitle>
                    <DialogDescription>
                        <div className=" grid-cols-3 gap-5 sm:grid hidden">
                            {
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index}>
                                        <Image
                                            src={"/2.jpg"}
                                            alt="product"
                                            width={1000}
                                            height={1000}
                                            className='object-cover object-center h-[25vh] rounded-[15px]'
                                        />
                                        <div className="pt-6 flex flex-col gap-6">
                                            <div>
                                                <p className="flex items-center"><span className="heading text-xl related-line">TOORAK PULL HANDLE</span><span>$500</span></p>
                                                <p>Zanda Commercial Entrance Pull Handle Collection</p>
                                            </div>
                                            <div className="flex justify-between items-center flex-wrap">
                                                <FinishGroup />
                                                <button className={clsx("px-10 py-3 border text-white heading rounded-full",
                                                    group === "commercial" ? "bg-[#296366]" : "bg-[#383d4f]"
                                                )}>PREVIEW</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 gap-5 sm:hidden">
                            <Carousel className="w-full max-w-[13rem] sm:max-w-sm mx-auto">
                                <CarouselContent>
                                    {
                                        Array.from({ length: 3 }).map((_, index) => (
                                            <CarouselItem key={index}>
                                                <Image
                                                    src={"/2.jpg"}
                                                    alt="product"
                                                    width={1000}
                                                    height={1000}
                                                    className='object-cover object-center h-[25vh] rounded-[15px]'
                                                />
                                                <div className="pt-6 flex flex-col gap-6">
                                                    <div>
                                                        <p className="flex items-center"><span className="heading text-xl related-line">TOORAK PULL HANDLE</span><span>$500</span></p>
                                                        <p>Zanda Commercial Entrance Pull Handle Collection</p>
                                                    </div>
                                                    <div className="flex flex-col justify-between items-center gap-4">
                                                        <FinishGroup />
                                                        <button className="px-10 py-3 border bg-[#296366] text-white heading rounded-full">PREVIEW</button>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

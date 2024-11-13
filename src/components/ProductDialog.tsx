import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { getProducts } from "@/lib/directus"
import ProductCard from "./ProductCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default async function ProductDialog({
    children,
    group,
    subcategory,
    category,
    subId
}: {
    children: React.ReactNode,
    subcategory: string,
    category: string,
    subId: string,
    group: string,
}) {
    const products = await getProducts(subId)
    const toShow = products?.map((product) => {
        if (product.Segment.includes(group)) {
            return product
        } else {
            return
        }
    }).slice(0, 3)

    return (
        <Dialog>
            <DialogTrigger className="w-full h-full rounded-r-full heading">{children}</DialogTrigger>
            <DialogContent className="max-w-screen-xl related h-fit bg-[#f5f5f5]">
                <DialogHeader className="">
                    <DialogTitle className="text-center heading mb-8 uppercase">{category} - {subcategory}</DialogTitle>
                    <DialogDescription className="h-full">
                    </DialogDescription>
                </DialogHeader>
                <div className="sm:hidden block">
                    <Carousel className="w-full max-w-[13rem] sm:max-w-sm mx-auto">
                        <CarouselContent>
                            {
                                toShow?.map((show, index: number) => {
                                    return (
                                        <CarouselItem key={index}>
                                            <ProductCard name={show?.Name} sub={subcategory} category={category} image={show?.Hero_Image} group={group.toLowerCase()} />
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div className="sm:grid hidden w-full grid-cols-3">
                    {
                        toShow?.map((show, index: number) => {
                            return (
                                <ProductCard key={index} name={show?.Name} sub={subcategory} category={category} image={show?.Hero_Image} group={group} />
                            )
                        })
                    }
                </div>
            </DialogContent>

        </Dialog>

    )
}

import Image from "next/image";
import { inter } from "@/app/font"
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen relative ">

      <video src="https://res.cloudinary.com/dhavkybgu/video/upload/v1708480378/jbouprt3pfnaf4ymfqc9.mov" autoPlay loop muted className="object-cover h-screen w-full absolute -z-[1] bg-black"></video>
      <div className="absolute bottom-2 h-[70vh] md:h-[50vh] flex items-center justify-center w-full px-5">
        <div className=" text-white max-w-[440px] w-full flex flex-col gap-1 rounded-lg">
          <div className="text-center py-7 glass rounded-t-[10px]">
            <p className="text-3xl uppercase heading">Zanda</p>
            <p className={`${inter.className} text-sm`}>Architecture Hardware</p>
          </div>
          <div className="grid grid-cols-2 text-center gap-1 text-sm">
            <Link href={"/architectural"} className="uppercase glass py-4 arc heading">Architectural</Link>
            <Link href={"/commercial"} className="uppercase glass py-4 com heading">Commercial</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

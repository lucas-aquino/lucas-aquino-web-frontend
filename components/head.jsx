import Image from "next/image"
import { jetBrainsMono } from "@/fonts/font"
import GradientText from "./gradientText"
import Tooltip from "./tooltips"

export default function Head({ className }){
  return (
    <section className={`relative ${ jetBrainsMono.className } select-none text-custom-iceberg px-4 xl:px-0 ${ className }`} >
      <h4 className="relative z-20">
        <GradientText className="transition-all ease-in-out duration-150 font-bold md:font-normal lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:mb-6 mb-0">
          Hello i'm
        </GradientText>
      </h4>
      <h1 className="relative z-20 transition-all ease-in-out duration-150 font-extrabold lg:text-8xl md:text-7xl sm:text-6xl text-5xl xl:mb-8 lg:mb-4 mb-1">lucas-aquino</h1>
      <div className="relative z-20">
        <h2>
          <GradientText className="transition-all ease-in-out duration-150 font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1 md:mb-4">
            Fullstack Web Developer
          </GradientText>
        </h2>
        <h3 className="transition-all ease-in-out duration-150 font-extralight lg:text-lg md:text-base sm:text-sm text-xs ml-8">React.js, Next.js, Node.js, Javascript, Java, MSQL Server</h3>
      </div>
      <div className="absolute inset-y-0 right-5 xl:right-0 mx-0 my-auto size-[10rem] md:size-[16rem] lg:size-[18rem] xl:size-[23rem] p-0 select-none rounded-full backdrop-blur-md backdrop-brightness-200 backdrop-contrast-75 aspect-square overflow-hidden z-10">
        <img
          src={'/img/profile.avif'}
        ></img>
      </div>
    </section>
  )
}
import Image from "next/image"
import { jetBrainsMono } from "@/fonts/font"


export default function Head({ className }){
  return (
    <section className={`relative ${ jetBrainsMono.className } select-none text-custom-iceberg ${ className }`} >
      <h4 className="font-bold md:font-normal xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl bg-text-gradient bg-clip-text text-transparent inline-block xl:mb-6 mb-0">Hello i'm</h4>
      <h1 className="font-extrabold xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl xl:mb-8 lg:mb-4 mb-1">lucas-aquino</h1>
      <div>
        <h2 className="font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl bg-text-gradient bg-clip-text text-transparent inline-block mb-4">Fullstack Web Developer</h2>
        <h3 className="font-extralight xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs ml-8">React.js, Next.js, Node.js, Javascript, Java, MSQL Server</h3>
      </div>
      <div className="absolute -top-5 -end-1 p-0 select-none">
        <Image
          src={'/img/imagen-resume-web.avif'}
          width={370}
          height={370}
        ></Image>
      </div>
    </section>
  )
}
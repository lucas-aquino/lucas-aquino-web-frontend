import Image from "next/image"
import { jetBrainsMono } from "@/fonts/font"


export default function Head({ className }){
  return (
    <div className={`relative ${ jetBrainsMono.className } select-none text-custom-iceberg ${ className }`} >
      <h4 className="font-normal text-7xl bg-text-gradient bg-clip-text text-transparent inline-block mb-6">Hello i'm</h4>
      <h1 className="font-extrabold text-9xl mb-8">lucas-aquino</h1>
      <div>
        <h2 className="font-bold text-4xl bg-text-gradient bg-clip-text text-transparent inline-block mb-4">Fullstack Web Developer</h2>
        <h3 className="font-extralight text-xl ml-8">React.js, Next.js, Node.js, Javascript, Java, MSQL Server</h3>
      </div>
      <div className="absolute -top-4 -end-1 p-0 select-none">
        <Image
          src={'/img/imagen-resume-web.png'}
          width={370}
          height={370}
        ></Image>
      </div>
    </div>
  )
}
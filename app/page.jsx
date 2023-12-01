import NavBar from "@/components/navbar"
import Head from "@/components/head"
import Article from "@/components/article"
import { LuFileDown } from "react-icons/lu"
import ButtonOutline from "@/components/buttonOutline"

import { HiOutlineDocumentDownload } from "react-icons/hi"




export default function Home() {
  return (
    <main className="flex min-h-screen w-100 flex-col items-center bg-custom-almost-black subpixel-antialiased bg-blue-500">
      <NavBar></NavBar>
      <section className={`px-10 w-screen xl:max-w-[1226px] z-40 xl:p-0`}>
        <Head className='mt-14 mb-40' ></Head>
        <section className="grid grid-row-2 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          <Article className="lg:col-span-2 text-custom-iceberg"></Article>
          <div className="flex flex-col justify-center">
            <ButtonOutline className='transition-all ease-out duration-300 relative self-center font-bold z-40 border-4 text-4xl pl-10 pr-12 py-4 group border-custom-iceberg hover:border-custom-dark-blue-grey text-custom-iceberg backdrop-blur-2xl hover:bg-custom-iceberg/75 bg-blend-saturation hover:pl-8 hover:pr-10'>
              <HiOutlineDocumentDownload size='2.25rem' fontWeight='700' className="mr-5 z-40 transition-all ease-out duration-500 group-hover:scale-125"/> <span className="z-40 transition-all ease-out duration-150">Resume</span> 
              <div className="transition-all ease-out duration-500 absolute boton-2 left-0 z-0 h-full w-full group-hover:bg-saturated-gradient group-hover:scale-125 rounded-full blur-2xl opacity-50"></div>
            </ButtonOutline>
          </div>
        </section>
      </section>
      <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-gradient-radial-home  backdrop-blur-sm'></div>
      <div className="absolute top-0 left-0 z-0 bg-cover bg-no-repeat bg-center w-screen h-screen bg-local bg-[url('/img/bg_home.avif')]">
        <div className='w-full h-full  bg-gradient-linear-bg-home z-1'></div>
      </div>
    </main>
  )
}

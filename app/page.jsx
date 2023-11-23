import NavBar from "@/components/navbar"
import Head from "@/components/head"
import Article from "@/components/article"
import { LuFileDown } from "react-icons/lu"
import ButtonOutline from "@/components/buttonOutline"

import { HiOutlineDocumentDownload } from "react-icons/hi"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-custom-almost-black subpixel-antialiased">
      <NavBar></NavBar>
      <section className='container max-w-[1226px] z-40'>
        <Head className='mt-14 mb-40' ></Head>
        <section className="grid grid-cols-3 gap-x-8">
          <Article className="col-span-2"></Article>
          <div className="flex flex-col justify-center">
            <ButtonOutline className='self-center font-bold border-4 text-4xl px-10 py-4'>
              <HiOutlineDocumentDownload size='2.25rem' fontWeight='700' className="mr-5"/> Resume
            </ButtonOutline>
          </div>
        </section>
      </section>
      <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-gradient-radial-home'></div>
      <div className="absolute top-0 left-0 z-0 bg-cover bg-no-repeat bg-center w-screen h-[966px] bg-local bg-[url('/img/bg_home.png')]">
        <div className='w-full h-full  bg-gradient-linear-bg-home z-1'></div>
      </div>
    </main>
  )
}

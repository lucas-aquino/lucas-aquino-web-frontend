import NavBar from "@/components/navbar"
import Head from "@/components/head"
import Article from "@/components/article"
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline"
import { jetBrainsMono } from "@/fonts/font"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-custom-almost-black subpixel-antialiased">
      <NavBar></NavBar>
      <section className='container max-w-[1226px] z-40'>
        <Head className='mt-14 mb-40' ></Head>
        <section className="grid grid-cols-2">
          <Article className=""></Article>
          <div className="bg-red-500 flex flex-col justify-center">
            <button className={`${ jetBrainsMono.className } border-2 rounded-lg text-xl w-3 h-6`}> <DocumentArrowDownIcon className=""></DocumentArrowDownIcon> Resume</button>
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

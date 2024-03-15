import NavBar from "@/components/navbar"
import Head from "@/components/head"
import Article from "@/components/article"
import { LuFileDown } from "react-icons/lu"
import ButtonOutline from "@/components/buttonOutline"
import { jetBrainsMono, abel } from "@/fonts/font"

import { HiOutlineDocumentDownload } from "react-icons/hi"
import GradientText from "@/components/gradientText"
import ProyectList from "@/components/ProyectList"
import Link from "next/link"
import Tooltip from "@/components/tooltips"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <main className="flex min-h-screen w-100 flex-col items-center bg-custom-almost-black subpixel-antialiased">
      <NavBar></NavBar>
      <section className={`px-2 w-screen xl:max-w-[1226px] z-40 xl:p-0`}>
        <Head className='mt-14 mb-40' ></Head>
        <section className="transition-all ease-out duration-300 grid grid-row-2 gap-y-8 lg:grid-cols-6  lg:gap-y-0 mb-40">
          <Article className="lg:col-span-3 lg:col-start-1 text-custom-iceberg" title={'Sobre mi'} titleClassName={'text-6xl'}>
            Soy un desarrollador backend con un año de experiencia. Me considero una persona proactiva, me gusta trabajar en equipo y con ganas de aprender. En mi anterior empleo, fui responsable de adaptar la aplicación de gestión contable de la empresa para los requerimientos de los distintos clientes. Estoy siempre buscando nuevas oportunidades para crecer profesionalmente y contribuir al éxito de las empresas.
          </Article>
          <div className="flex flex-col justify-center lg:col-end-6">
            <Link href={`/resume`} target="_blank" className="flex flex-col justify-center ">
              <Tooltip tooltipContent='Open in new tab' containerClassName={`flex flex-col justify-center`} >
                <ButtonOutline 
                  className='transition-all ease-out duration-300 relative self-center font-bold z-40 border-4 text-4xl pl-10 pr-12 py-4 group border-custom-iceberg hover:border-custom-dark-blue-grey text-custom-iceberg backdrop-blur-2xl hover:bg-custom-iceberg/75 bg-blend-saturation hover:pl-8 hover:pr-10'>
                  <HiOutlineDocumentDownload size='2.25rem' fontWeight='700' className="mr-5 z-40 transition-all ease-out duration-500 group-hover:scale-125"/> <span className="z-40 transition-all ease-out duration-150">Resume</span> 
                  <div className="transition-all ease-out duration-500 absolute boton-2 left-0 z-0 h-full w-full group-hover:bg-saturated-gradient group-hover:scale-125 rounded-full blur-2xl opacity-50"></div>
                </ButtonOutline>
              </Tooltip>
            </Link>
          </div>
        </section>
        <section className="mt-8 mb-20">
          <h2 className={`${ jetBrainsMono.className } text-custom-iceberg transition-all ease-in-out duration-150 font-extrabold text-7xl mb-16 select-none`}>{
            '</>Proyectos'
          }</h2>
          <ProyectList className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-10 px-5 md:px-3 xl:px-0"></ProyectList>
        </section>
      </section>
      <Footer></Footer>
      <div className='fixed top-0 left-0 z-30 w-full h-screen bg-gradient-radial-home  backdrop-blur-sm'></div>
      <div className="fixed top-0 left-0 z-0 bg-cover bg-no-repeat bg-center w-full h-screen bg-scroll bg-[url('/img/bg_home.avif')]">
        <div className='w-full h-full bg-gradient-linear-bg-home z-1'></div>
      </div>
    </main>
  )
}

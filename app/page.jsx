import NavBar from "@/components/navbar"
import Head from "@/components/head"
import { jetBrainsMono, abel } from "@/fonts/font"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-custom-almost-black subpixel-antialiased">
      <NavBar></NavBar>
      <section className='container max-w-[1226px] z-40'>
        <Head className='mt-14 mb-40' ></Head>
        <section>
          <article className="relative px-8 pb-6 pt-14 bg-article-gradient rounded-b-xl">
            <span className={`absolute -top-7 ${ jetBrainsMono.className } font-extrabold text-7xl italic bg-text-gradient bg-clip-text text-transparent inline-block mb-6 pr-3`} >Sobre mi</span>
            <p className={`${ abel.className } text-xl`}>
              Soy un desarrollador backend con un año de experiencia. Me considero una persona proactiva, me gusta trabajar en equipo y con ganas de aprender. En mi anterior empleo, fui responsable de adaptar la aplicación de gestión contable de la empresa para los requerimientos de los distintos clientes. Estoy siempre buscando nuevas oportunidades para crecer profesionalmente y contribuir al éxito de las empresas.
            </p>
          </article>
        </section>
      </section>
      <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-gradient-radial-home'></div>
      <div className="absolute top-0 left-0 z-0 bg-cover bg-no-repeat bg-center w-screen h-[966px] bg-local bg-[url('/img/bg_home.png')]">
      <div className='w-full h-full  bg-gradient-linear-bg-home z-1'></div>
      </div>
    </main>
  )
}

import NavBar from "@/components/navbar"
import Head from "@/components/head"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-custom-almost-black">
      <NavBar></NavBar>
      <section className='container max-w-[1226px] z-40'>
        <Head className='my-14' ></Head>
      </section>
      <div className='absolute top-0 left-0 z-30 w-screen h-screen bg-gradient-radial-home'></div>
      <div className="absolute top-0 left-0 z-0 w-screen h-[966px] bg-local bg-[url('/img/bg_home.png')]">
        <div className='w-full h-full  bg-gradient-linear-bg-home z-1'></div>
      </div>
      
    </main>
  )
}

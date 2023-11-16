import Image from 'next/image'




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-custom-almost-black">
      <nav>
        
      </nav>
      <section className='container bg-red-700 z-40'>

      </section>
      <div className="absolute top-0 left-0 z-0 w-full h-[966px] bg-local bg-[url('/img/bg_home.png')]">
        <div className='w-full h-full  bg-gradient-linear-bg-home z-1'></div>
      </div>
      
    </main>
  )
}

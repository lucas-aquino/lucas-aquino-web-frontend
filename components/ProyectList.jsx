"use client"
import Article from "./article"
import StackList from "./stackList"

const proyectos = [
  {
    title: 'Ecommerce',
    img: '/img/projects/ecommerce_react_class_component/ecommerce_react_class_component_img_01.avif',
    desc: 'Esta ecommerce se desarrolló utilizando Node, Vite, React y TailwindCSS, aprovechando la API FakeStoreAPI para obtener datos de productos ficticios. Tiene una página de inicio con productos y carrito de compras.',
    stack: [
      'REACT',
      'NODE',
      'TAILWINDCSS',
    ]
  },
]

export default function ProyectList ({ className }) {
  return (
    <div className={`${className}`}>
      {
        proyectos.map((proyecto, i) => 
        <Article className='pt-14 pb-8' title={proyecto.title} titleClassName={'text-5xl w-full'} key={i} bodyClassName={`h-full flex flex-col`}>
          <p className="grow mb-6">{proyecto.desc}</p>
          <div className="overflow-hidden rounded-2xl aspect-[16/9] mb-6">
            <img src={proyecto.img} alt="" className="object-cover min-h-full min-w-full"/>
          </div>
          <div className="flex">
            <StackList stackList={proyecto.stack}></StackList>
          </div>
        </Article>)
      }
    </div>
  )
}





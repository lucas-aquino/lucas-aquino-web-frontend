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
  {
    title: 'Proyecto 2',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.materialup.com%2Fuploads%2Fa955ad08-03eb-4e8b-bad5-560967829af5%2Fpreview.jpg&f=1&nofb=1&ipt=3c5beb8494393bba1517b0c2fd7adc497db2c44efb4958ba46774de56cd82ecb&ipo=images',
    desc: 'aliquid.',
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
        <Article className='pt-14 pb-8' title={proyecto.title} titleClassName={'text-5xl w-full'} key={i} descClassName={`flex flex-col`}>
          <div className=" bg-blue-500 grow">
            <p className="mb-4">{proyecto.desc}</p>
          </div>

          <div className=" grow-0">
            <div className="overflow-hidden rounded-2xl aspect-[16/9] mb-8 bg-lime-500 ">
              <img src={proyecto.img} alt="" className="object-cover min-h-full min-w-full"/>
            </div>
          </div>
          <div className="grow-0 mb-2 flex">
            <StackList stackList={proyecto.stack}></StackList>
          </div>
        </Article>)
      }
    </div>
  )
}





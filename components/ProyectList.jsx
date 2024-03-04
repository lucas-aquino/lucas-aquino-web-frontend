"use client"
import Article from "./article"
import TecIcon from "./tecicon"
import Tooltip from "./tooltips"
import StackList from "./stackList"

const proyectos = [
  {
    title: 'Proyecto',
    img: 'https://miro.medium.com/v2/resize:fit:3200/1*htFmoRC8JO3W8CDZJLw_-w.jpeg',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: [
      'REACT',
      'NEXT',
      'NODE'
    ]
  },
  {
    title: 'Proyecto 2',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.materialup.com%2Fuploads%2Fa955ad08-03eb-4e8b-bad5-560967829af5%2Fpreview.jpg&f=1&nofb=1&ipt=3c5beb8494393bba1517b0c2fd7adc497db2c44efb4958ba46774de56cd82ecb&ipo=images',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: []
  },
  {
    title: 'Proyecto 3',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F85%2F2f%2F8b%2F852f8b20380d8ee31c12da4180a13078.png&f=1&nofb=1&ipt=a6586b4b5668a4a1ab046c755266bda4201344bfc4279831e9eb339a96b434cb&ipo=images',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: []
  },
  {
    title: 'Proyecto 4',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4IfYl6nUat9-WC1lbvxUtQHaEo%26pid%3DApi&f=1&ipt=112adad308c4fe7ada54ff7be1c2f919626beb4d01c186bdc0a4d9bece0d3d12&ipo=images',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: []
  },
  {
    title: 'Proyecto 5',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F746931%2Fscreenshots%2F11276631%2Fdaniel_developer_1_4x.png&f=1&nofb=1&ipt=22e6cec3b6367246378386537c2dfe18f264a2649d0da80fea4a81ce3f30c9bf&ipo=images',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: []
  },
  {
    title: 'Proyecto 6',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fxdguru.b-cdn.net%2Fwp-content%2Fuploads%2F2020%2F01%2Fdeveloper-portfolio-xd-template-1014x487.jpg&f=1&nofb=1&ipt=7366ebcb999a851d18e6123ca195737f349dcf167e0fdc99171c2ddf947e8b22&ipo=images',
    desc: 'Reprehenderit delectus est perferendis magnam ducimus aut facere. Dignissimos odio sint quasi dolorem enim deserunt praesentium eius. Itaque consequatur corporis dignissimos cumque. At est sed est consequatur rerum occaecati eum. Rerum ad nihil sint est rem est. Est voluptatem est est aliquid.',
    stack: []
  },
]

export default function ProyectList ({ className }) {
  return (
    <div className={`${className}`}>
      {
        proyectos.map((proyecto, i) => 
        <Article className='pt-14 pb-8' title={proyecto.title} titleClassName={'text-5xl w-full'} key={i}>
          <p className="mb-4">{proyecto.desc}</p>
          <div className="overflow-hidden rounded-2xl aspect-[16/9] mb-8">
            <img src={proyecto.img} alt="" className="object-cover min-h-full min-w-full"/>
          </div>
          <StackList stackList={proyecto.stack}></StackList>
        </Article>)
      }
    </div>
  )
}





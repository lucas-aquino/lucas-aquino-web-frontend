import Logo from '/components/logo.jsx'
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import Tooltip from "@/components/tooltips"

export default function NavBar() {
  return(
    <nav className='transition-all ease-out duration-300 px-2 xl:px-10 flex justify-center z-40 w-full py-4 xl:py-12 '>
      <div className='w-[1226px] flex flex-row justify-between items-center'>
        <Logo className='ml-6 xl:ml-0'></Logo>
        <div className='grid grid-flow-col auto-cols-max gap-8 mr-4'>
          <Link className='group' href={`https://github.com/lucas-aquino`} target="_blank">
            <FaGithub className='text-custom-iceberg transition-transform ease-in-out duration-300 group-hover:scale-125' size={'2.1em'} />
          </Link>
          <Link className='group' href={`https://www.linkedin.com/in/lucas--aquino/`} target="_blank">
            <img src='/svg/dev_icons/LINKEDIN.svg' className='h-[2.1rem] transition-transform ease-in-out duration-300 group-hover:scale-125' alt="" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

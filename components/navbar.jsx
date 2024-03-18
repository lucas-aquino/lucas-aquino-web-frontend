import Logo from '/components/logo.jsx'
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import Tooltip from "@/components/tooltips"

export default function NavBar() {
  return(
    <nav className='transition-all ease-out duration-300 px-2 xl:px-10 flex justify-center z-40 w-full py-4 xl:py-12 '>
      <div className='w-[1226px] flex flex-row justify-between items-center'>
        <Logo className='ml-6 xl:ml-0'></Logo>
        <div className=''>
          <Link href={`https://github.com/lucas-aquino`} target="_blank">
            <Tooltip tooltipContent='Open github lucas-aquino'>
              <FaGithub size={'2.1em'} />
            </Tooltip>
          </Link>
        </div>
      </div>
    </nav>
  )
}

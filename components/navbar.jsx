import Logo from '/components/logo.jsx'

import ButtonOutline from './buttonOutline'

import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return(
    <nav className='transition-all ease-out duration-300 px-2 xl:px-10 flex justify-center z-40 w-full py-4 xl:py-12 xl:px-0'>
      <div className='w-[1226px] flex flex-row justify-between items-center'>
        <Logo className='ml-6 xl:ml-0'></Logo>
        <div className=''>
          <ButtonOutline className='self-center h-full box-border border border-custom-iceberg text-custom-iceberg font-light font-extralight pl-1 py-1 pr-4'>
            <span className='mr-1'><FaGithub size={'2.1em'} /></span><span className='select-text'>/lucas-aquino</span>
          </ButtonOutline>
        </div>
      </div>
    </nav>
  )
}

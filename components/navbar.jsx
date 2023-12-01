import Logo from '/components/logo.jsx'

import ButtonOutline from './buttonOutline'

import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return(
    <nav className='px-10 flex justify-center z-40 w-full py-12 xl:px-0'>
      <div className='w-[1226px] flex flex-row justify-between items-center'>
        <Logo></Logo>
        <div>
          <ButtonOutline className='self-center h-full box-border border border-custom-iceberg text-custom-iceberg font-light font-extralight pl-1 py-1 pr-4'>
            <span className='mr-1'><FaGithub size={'2.1em'} /></span><span className='select-text'>/lucas-aquino</span>
          </ButtonOutline>
        </div>
      </div>
    </nav>
  )
}

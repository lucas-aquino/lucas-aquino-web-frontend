import Logo from '/components/logo.jsx'

import ButtonOutline from './buttonOutline'

import { FaGithub } from "react-icons/fa";

export default function NavBar() {
  return(
    <nav className='flex justify-center z-40 w-full py-12'>
      <div className='w-[1226px] flex flex-row justify-between items-center'>
        <Logo></Logo>
        <div>
          <ButtonOutline className='self-center h-full border-2 font-light font-extralight pl-1 py-1 pr-4'>
            <span className='mr-1'><FaGithub size={'2.1em'} /></span>/lucas-aquino
          </ButtonOutline>
        </div>
      </div>
    </nav>
  )
}

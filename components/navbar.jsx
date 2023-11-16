import Logo from '/components/logo.jsx'


export default function NavBar() {
  return(
    <nav className='flex justify-center z-40 w-full py-12'>
      <div className='w-[1226px]'>
        <Logo></Logo>
      </div>
    </nav>
  )
}

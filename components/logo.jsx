import Image from 'next/image'

const Logo = ({ ...rest }) => {
  return (
    <img src='/svg/la_logo.svg' width={68} height={41} {...rest} ></img>
  )
} 

export default Logo

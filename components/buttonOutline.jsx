import { jetBrainsMono } from "@/fonts/font"


export default function ButtonOutline({ children, className, ...rest }) {
  return (
    <button className={ `${ jetBrainsMono.className } ${ className } flex flex-row justify-center items-center rounded-full tracking-wide select-none` } { ...rest }> 
      { children }
    </button>
  )
}




import { jetBrainsMono } from "@/fonts/font"


export default function ButtonOutline({ children, className, ...rest }) {
  return (
    <button className={ `${ jetBrainsMono.className } ${ className } flex flex-row justify-center items-center border-4 rounded-full font-bold rounded-full px-10 py-4 tracking-wide` } { ...rest }> 
      { children } 
    </button>
  )
}




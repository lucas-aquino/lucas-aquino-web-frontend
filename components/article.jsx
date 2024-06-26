import { jetBrainsMono, abel, poppins, archivo} from "@/fonts/font"

import GradientText from "./gradientText"

//TODO: hacer este componente mas generico
export default function Article({ className, titleClassName, bodyClassName, children, title, ...rest}) {
  return (
    <article className={`relative select-none px-8 pb-8 pt-14 bg-article-gradient rounded-3xl backdrop-blur-md backdrop-brightness-125 italic ${ className } mt-8 drop-shadow-lg border border-custom-blue-zodiac`} {...rest}>
      <GradientText className={`absolute -top-7 ${ jetBrainsMono.className } font-extrabold mb-6 pr-3 ${ titleClassName }`} >{ title }</GradientText>
      <div className={`${ archivo.className } tracking-wider font-extralight text-base ${ bodyClassName }`}>
        { children }
      </div>
    </article>
  )
}





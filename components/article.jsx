import { jetBrainsMono, abel } from "@/fonts/font"

//TODO: hacer este componente mas generico
export default function Article({ className, ...rest}) {
  return (
    <article className={`relative select-none px-8 pb-6 pt-14 bg-article-gradient rounded-b-xl backdrop-blur-md ${ className }`} {...rest}>
      <span className={`absolute -top-7 ${ jetBrainsMono.className } font-extrabold text-7xl italic bg-text-gradient bg-clip-text text-transparent inline-block mb-6 pr-3`} >Sobre mi</span>
      <p className={`${ abel.className } text-xl`}>
        Soy un desarrollador backend con un año de experiencia. Me considero una persona proactiva, me gusta trabajar en equipo y con ganas de aprender. En mi anterior empleo, fui responsable de adaptar la aplicación de gestión contable de la empresa para los requerimientos de los distintos clientes. Estoy siempre buscando nuevas oportunidades para crecer profesionalmente y contribuir al éxito de las empresas.
      </p>
    </article>
  )
}





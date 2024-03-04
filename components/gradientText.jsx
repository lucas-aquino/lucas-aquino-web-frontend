

export default function GradientText({ className, children, ...rest }) {
  return (
    <span className={`bg-text-gradient bg-clip-text text-transparent inline-block py-2 ${ className }`} {...rest}>
      { children }
    </span>
  )
}
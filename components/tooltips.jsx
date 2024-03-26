

const tooltipStyles = [
  'invisible',
  'group-hover:visible',
  'opacity-0',
  'group-hover:opacity-100',
  'bg-custom-iceberg/10',
  'backdrop-brightness-200',
  'backdrop-contrast-75',
  'rounded-xl',
  'backdrop-blur-md',
  'transition',
  'duration-300',
  'ease-in-out',
  'px-3',
  'py-1',
  'text-center',
  'pointer-events-none',
  'whitespace-nowrap',
  'absolute',
  '-top-full',
]

export default function Tooltip({ children, className, containerClassName, tooltipContent }) {
  return (
    <div
      className={`group relative ${ containerClassName }`}
    >
      { children }
        <div
          className={`${tooltipStyles.join(' ')} ${ className }`}>
          { tooltipContent }
        </div>
    </div>
  )
}


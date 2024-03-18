export default function Tooltip({ children, className, containerClassName, tooltipContent }) {
//invisible group-hover:visible opacity-0 group-hover:opacity-100 
  return (
    <div
      className={`group relative ${ containerClassName }`}
    >
      { children }
      <span
        className={` bg-custom-iceberg/10 rounded-xl backdrop-blur-md transition duration-300 ease-in-out absolute bottom-full mt-0 mb-0 group-hover:mt-2 group-hover:mb-2 px-3 py-1 text-center pointer-events-none whitespace-nowrap  ${ className }`}
      >
        { tooltipContent }
      </span>
    </div>
  )
}


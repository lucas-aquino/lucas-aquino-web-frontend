import Tooltip from "./tooltips"
import TecIcon from "./tecicon"


export default function StackList({ className, stackList = [] }) {


  return (
    <>
      {
        stackList.map((stack, i) =>
          <Tooltip
            className="capitalize"
            tooltipContent={stack}
            key={i}
          >
            <TecIcon tec={stack}></TecIcon>
          </Tooltip>)
      }
    </>
  )

}




import Tooltip from "./tooltips"
import TecIcon from "./tecicon"


export default function StackList({ stackList = [] }) {


  return (
    <div className="mb-2 flex">
      {
        stackList.map((stack, i) =>
          <Tooltip
            className="capitalize"
            tooltipContent={stack}
          >
            <TecIcon tec={stack}></TecIcon>
          </Tooltip>)
      }
    </div>
  )

}




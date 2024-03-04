'use Client'

export default function TecIcon({ tec }) {

  return (
    <img src={`/svg/dev_icons/${ tec }.svg`} alt="" className="w-8 mr-3 fill-custom-light-green-blue"/>
  )
}
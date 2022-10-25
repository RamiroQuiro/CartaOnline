import React from 'react'
import diseño1 from "../img/diseño1.png"
import diseño2 from "../img/diseño2.png"
import diseño3 from "../img/diseño3.png"

export default function CarriselVertical({transladar}) {
  console.log('estoy renzediranzo',transladar)
  return (
    <div
    style={{
      transform:`translateY(${transladar*-1}px)` 
    }}
    className={` flex flex-col items-center w-full rounded-xl px-16 h-[30%]  duration-700  gap-[50px]  justify-start`}>
    <img
      className="w-auto h-[300px] object-contain object-center  rounded-xl  "
      src={diseño1}
      alt=""
    />
    <img
      className="w-auto h-[300px] object-contain object-center  rounded-xl  "
      src={diseño2}
      alt=""
    />
    <img
      className="w-auto h-[300px] object-cover object-center  rounded-xl  "
      src={diseño3}
      alt=""
    />
  </div>
  )
}

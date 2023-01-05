import React from 'react'
import diseño1 from "../img/diseño1.png"
import diseño2 from "../img/diseño2.png"
import diseño3 from "../img/diseño3.png"

export default function CarriselVertical({transladar,className}) {

const arrayImg=[
  {
    src:diseño1,
    id:1,
  },
  {
    src:diseño2,
    id:2,
  },
  {
    src:diseño3,
    id:3,
  },
]


  return (
    <div
    style={{
      transform:`translateY(${transladar*-1}rem)` 
    }}
    className={`${className} flex flex-col items-center w-full rounded-xl md:px-16 px-5 lg:h-[30%] h-[100px]  duration-700 gap-16 justify-start`}>
   
   {
    arrayImg?.map((img,i)=>(
      <img
      key={i}
        className="lg:w-[400px] h-[300px] object-contain object-center  rounded-xl  "
        src={img.src}
        alt={img.src}
      />

    ))
   }
 
  </div>
  )
}

import React from 'react'

export default function Galeria({imagenes}) {
  return (
    <div className="flex flex-wrap ">
               {
                   imagenes?.map((imagen,index)=>(

                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={imagen.url}
                    />
                  </div>
                   ))

               }
               
                </div>
  )
}

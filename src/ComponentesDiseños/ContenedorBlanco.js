import React from 'react'

export default function ContenedorBlanco({id,className,children}) {
  return (
    <div id={id} className={`${className}  bg-gray-200/90 w-full   duration-300 shadow-md border-2  text-medium px-1 md:px-5 py-5 rounded-lg`}>
        
        {children}
    </div>
  )
}

import React from 'react'

export default function h2({children,className}) {
  return (
    <h2 className={`${className} font-medium  mb-2 text-gray-700 text-2xl`}>
   {children}
  </h2>
  )
}

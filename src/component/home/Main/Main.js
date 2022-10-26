import React from 'react'

export default function Main({children}) {
  return (
    <main className="w-full bg-gray-50/70 mx-auto h-flex flex-col  items-center">
        {children}
    </main>
  )
}

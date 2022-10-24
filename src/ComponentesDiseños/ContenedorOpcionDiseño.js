import React from 'react'

export default function ContenedorOpcionDiseño({onClick,id,isActive}) {

  return (
    <div 
    onClick={()=>onClick(id)}
    id={id}
    className={`${isActive==id?'bg-gray-100/50 shadow-lg scale-105':''} md:flex md:items-start  p-5 cursor-pointer border rounded-lg bg-white hover:bg-gray-100/50 hover:shadow-md duration-150 md:w-3/4`}>
    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    </span>

    <div className="mt-4 md:mx-4 md:mt-0">
      <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
        Menu Carta
      </h1>

      <p class="mt-3 text-gray-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident ab nulla quod dignissimos vel non corrupti doloribus
        voluptatum eveniet
      </p>
    </div>
  </div>
  )
}

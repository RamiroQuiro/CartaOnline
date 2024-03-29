import React from 'react'

export default function ContenedorOpcionDiseño({onClick,id,isActive,title,children}) {

  return (
    <div 
    onClick={()=>onClick(id)}
    id={id}
    className={`${isActive==id?'bg-gray-100/50 shadow-lg lg:scale-105':''} flex items-start max-h-20 lg:max-h-full lg:h-32 lg:p-5 p-2 cursor-pointer border rounded-lg bg-white hover:bg-gray-100/50 hover:shadow-lg duration-150 flex-auto w-full lg:w-3/4`}>
    <span className="lg:inline-block lg:p-2 text-blue-500 bg-blue-100 rounded-xl mr-2 items-center m-auto lg:mx-4 ">
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

    <div className="lg:mx-4 lg:mt-0 flex lg:block items-center gap-2 justify-between w-full lg:text-left text-center">
      <h1 className="lg:text-2xl font-semibold text-gray-700 capitalize ">
       {title}
      </h1>

      <p className="lg:mt-3 text-gray-500 leading-tight text-sm ">
       {children}
      </p>
    </div>
  </div>
  )
}

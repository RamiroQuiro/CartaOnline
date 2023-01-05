import React from 'react'
import tilde from "../../../img/garrapata.png";

export default function SectionBanner() {
  return ( 
  <section className=" w-full bg-orange-500/5 sectionBanner my-20 md:h-screen flex md:flex-row flex-col items-center">
  <div className="w-5/6 flex md:flex-row flex-col justify-around items-center mx-auto md:px-6 px-2 gap-8 md:gap-0 py-14">
    <div className='md:w-2/3 w-full '>
    <div className="md:text-4xl text-2xl text-center text-gray-100/80 break-words bg-paleta-facebook/80 backdrop-blur-sm md:mx-5 mx-auto rounded-bl-xl rounded-tl-5xl rounded-br-5xl rounded-tr-xl hover:rounded-bl-5xl hover:rounded-tr-5xl hover:rounded-tl-md hover:rounded-br-md py-12 px-2 -rotate-3 hover:-rotate-0 duration-75 z-30 font-bold md:w-[80%] w-full">
      <h2 className="py-5 px-2">Queres tener tu CartaOnline?</h2>
      <h2 className="py-5 px-2">
        Crea un menú en tan sólo simples pasos:
      </h2>
      </div>
    </div>
    <div className="md:text-2xl text-lg md:w-1/2 w-12/12 mx-auto bg-white/30 backdrop-blur-sm rounded-lg  font-medium pl-4 py-5 md:py-16">
      <ul className="flex flex-col items-start justify-center ">
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-facebook hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1 group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Registrate en Carta-Online
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-facebook hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Elige la plantilla que deseas
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-facebook hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Edita los colores y formato de Texto
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-facebook hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Carga tus items e imagenes{" "}
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-facebook hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Empeza a vender y recibir pedidos
        </li>
      </ul>
    </div>
  </div>
</section>
  )
}

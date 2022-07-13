import React from 'react'
import tilde from "../../../img/garrapata.png";

export default function SectionBanner() {
  return ( 
  <section className=" w-full bg-orange-500/5">
  <div className="w-5/6 flex justify-around items-center mx-auto px-6 py-10">
    <div className="text-4xl text-center text-orange-100/80 break-words bg-orange-500 mx-5  rounded-tl-5xl rounded-br-5xl hover:rounded-bl-5xl hover:rounded-tr-5xl hover:rounded-tl-md hover:rounded-br-md py-8 px-1 -rotate-3 hover:-rotate-0 duration-150 z-30 font-bold w-1/2">
      <h2 className="py-5 px-2">Queres tener tu CartaOnline?</h2>
      <h2 className="py-5 px-2">
        Crea un menú en tan sólo simples pasos:
      </h2>
    </div>
    <div className="text-2xl w-1/2 mx-auto  font-medium pl-14 py-20">
      <ul className="flex flex-col items-start justify-center ">
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1 group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Registrate en Carta-Online
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Elige la plantilla que deseas
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Edita los colores y formato de Texto
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
          <img
            className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
            src={tilde}
            width="40px"
            height="40px"
            alt="tilde"
          />
          Carga tus items e imagenes{" "}
        </li>
        <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
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

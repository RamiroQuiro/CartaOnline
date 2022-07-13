import React from 'react'

export default function TituloandBackground() {
  return (
    <div className="flex items-start pt-10 justify-between w-full h-screen ">
    <div className="w-1/2 flex gap-5 pr-7 flex-col items-start text-left ">
      <h2 className="text-xl font-medium">
        Menu | Carta | Folleto Digital
      </h2>
      <h1 className="text-6xl capitalize font-bold ">
        Tus Productos <br /> al Servicio de todos
      </h1>
      <hr className="bg-blue-500 h-2 w-6/12 animate-pulse" />
      <p className="font-medium text-lg">
        Ofrece tus productos en tu Carta-Online, y recibe pedidos por
        whatsApp, la via principal de comunicación. Actualiza Productos y
        Precios en tiempo Real
      </p>
    </div>
    <div className="w-1/2 bg-color flex flex-col bg-gradient-to-tr from-amber-300/70 to-amber-500/80 h-4/5 rounded-l-5xl"></div>
  </div>
  )
}

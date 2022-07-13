import React from 'react'
import diseñoFacil from "../../img/material-escolar.png";
import actualiza from "../../img/004-red.png";
import recibePedidos from "../../img/003-telefono-inteligente.png";

export default function FeatureHome() {

const feature=[
    {
        img:diseñoFacil,
        h3:"Diseño Claro",
        p:"Carga tu menu sin tantas vueltas ni tantas imagenes, has simple la interacción",
    },
    {
        img:actualiza,
        h3:"Actualiza cuando lo deseas",
        p:"Crea la mejor experiencia para tus clientes. Cambia tu Menú Digital sin costos adicionales.",
    },
    {
        img:recibePedidos,
        h3:"Recibe tu pedidos directo en el celular",
        p:"Así de facil, eligen en los items, y envían al celular que vos configures",
    },
    
]

  return (
    <div className="flex w-full gap-10 justify-around  items-center -translate-y-10 ">
         {
             feature.map((feat,i)=>(
                <div key={i} className="bg-white flex w-1/3 h-32 z-40 items-center justify-center gap-4 mx-auto rounded-full shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
                <img
                  alt="diseñoFacil"
                  width="64px"
                  height="64px"
                  src={feat.img}
                />
                <div className="w-3/5">
                  <h3 className="text-xl font-medium text-center">{feat.h3}</h3>
                  <p className="text-sm">
                    {feat.p}
                  </p>
                </div>
              </div>
             ))
         }
         

        </div>
  )
}

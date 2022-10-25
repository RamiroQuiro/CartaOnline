import React, { useEffect, useState } from "react";
import ContenedorBlanco from "../../../ComponentesDiseños/ContenedorBlanco";
import ContenedorOpcionDiseño from "../../../ComponentesDiseños/ContenedorOpcionDiseño";
import H2 from "../../../ComponentesDiseños/H2";
import CarriselVertical from "../../../ComponentesDiseños/CarriselVertical";
import { useOutletContext } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Diseños() {

const [perfilCuenta] =useOutletContext()
const [opcion,setOpcion]=useState(50)
const [isActive,setIsActive]= useState(0)
const docRef = doc(db, `listado/empresas/`);

useEffect(() => {
  const diseño=()=>{
    const diseñoFolleto=perfilCuenta?.styles?.diseñoFolleto
  setIsActive(diseñoFolleto)
  switch (diseñoFolleto) {
    case 1:
        setOpcion(50)
      break;
    case 2:
        setOpcion(400)
      break;
    case 3:
        setOpcion(750)
      break;
  
    default:
      break;
  }}
  diseño()
},[])


const handleStyleFolleto = async (id) => {
  const referencedBusinessName= `${perfilCuenta?.perfilUser?.businessName}.styles.diseñoFolleto`
  await updateDoc(docRef, {
    [referencedBusinessName]: id,
  }).then((data)=>{
    toast.success('Diseño Cambiado')
  })
};




const handleCarrusel=(id)=>{
  setIsActive(id)
  handleStyleFolleto(id)
  switch (id) {
    case 1:
        setOpcion(50)
      break;
    case 2:
        setOpcion(400)
      break;
    case 3:
        setOpcion(750)
      break;
  
    default:
      break;
  }
}

  return (
    <ContenedorBlanco>
      <H2 className="text-left">Elige un Diseño para tu carta</H2>
      <div className="mt-2">
        <span className="inline-block w-40 h-1 bg-paleta-300 rounded-full"></span>
        <span className="inline-block w-3 h-1 ml-1 bg-paleta-300 rounded-full"></span>
        <span className="inline-block w-1 h-1 ml-1 bg-paleta-300 rounded-full"></span>
      </div>
      <div className="w-full flex flex-wrap items-center ">
        <div className="flex-auto w-1/2 flex flex-col gap-3 my-8 items-center justify-center">
          <ContenedorOpcionDiseño
          onClick={handleCarrusel}
          isActive={isActive}
          id={1}
          />
          <ContenedorOpcionDiseño
          onClick={handleCarrusel}
          isActive={isActive}
          id={2}
          />
          <ContenedorOpcionDiseño
          onClick={handleCarrusel}
          isActive={isActive}
          id={3}
          />
          
        </div>
        <div className="flex-auto w-1/2 h-[620px] bg-white rounded-tl-5xl rounded-bl-5xl relative rounded-lg flex flex-col overflow-hidden items-center justify-center">
          <div className="min-h-[20%] w-full bg-gradient-to-b  from-gray-500/30 to-transparent backdrop-blur-sm z-40 absolute top-0 left-0"></div>
            <CarriselVertical
            transladar={opcion}
            />
          <div className=" min-h-[20%] w-full bg-gradient-to-t from-gray-500/30 to-transparent backdrop-blur-sm absolute bottom-0 left-0"></div>
        </div>
      </div>
    </ContenedorBlanco>
  );
}

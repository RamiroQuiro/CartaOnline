import React, { useEffect, useState } from "react";
import ContenedorBlanco from "../../../ComponentesDiseños/ContenedorBlanco";
import ContenedorOpcionDiseño from "../../../ComponentesDiseños/ContenedorOpcionDiseño";
import H2 from "../../../ComponentesDiseños/H2";
import CarriselVertical from "../../../ComponentesDiseños/CarriselVertical";
import { useOutletContext } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import toast from "react-hot-toast";

export default function SelectorDiseños() {

const {perfilCuenta,movil} =useOutletContext()
const [opcion,setOpcion]=useState(0)
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
      setOpcion(400)
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

const descipcionFolletos=[
  {
    title:"Modelo 1",
    descripcion:"Folleto pensado para varios items y varias categoria",
  },
  {
    title:"Modelo 2",
    descripcion:"Modelo simple con los items ordenados en columna a la derecha",
  },
  {
    title:"Modelo 3",
    descripcion:"Modelo a de pocos items en donde a primera vista se vizualzan los items",
  },
]


const handleCarrusel=(id)=>{
  setIsActive(id)
  handleStyleFolleto(id)
  switch (id) {
    case 1:
        setOpcion(0)
      break;
    case 2:
    if(!movil){
      setOpcion(23)
    }else{
      setOpcion(18)
    }
      break;
    case 3:
      if(!movil){
        setOpcion(46)
      }else{
        setOpcion(36)
      }
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
        <div className=" lg:w-1/2 w-11-12 mx-auto  flex flex-col gap-1  lg:gap-3 my-8 items-center justify-center">

          {
            descipcionFolletos?.map((element,i)=>(
              
              <ContenedorOpcionDiseño
              onClick={handleCarrusel}
              isActive={isActive}
              id={i+1}
              title={element.title}
              >
                {element.descripcion}
                </ContenedorOpcionDiseño>
            ))
          }
  
          
        </div>
        <div className="flex-auto md:w-1/2 w-full md:h-[620px] h-[300px] bg-white md:rounded-tl-5xl md:rounded-bl-5xl relative rounded-lg flex flex-col overflow-hidden items-center justify-center mb-20">
          <div className="min-h-[20%] md:block hidden w-full bg-gradient-to-b  from-gray-500/30 to-transparent backdrop-blur-sm z-40 absolute top-0 left-0"></div>
           {
           perfilCuenta&&
           <CarriselVertical
            transladar={opcion}
            />}
          <div className=" min-h-[20%] w-full md:block hidden bg-gradient-to-t from-gray-500/30 to-transparent backdrop-blur-sm absolute bottom-0 left-0"></div>
        </div>
      </div>
    </ContenedorBlanco>
  );
}

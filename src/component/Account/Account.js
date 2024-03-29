import React, { useEffect, useState } from "react";
import "./account.css";
import InventarioProductos from "./InventarioProductos";

import { doc, getDoc } from "firebase/firestore";
import { Outlet, useOutletContext } from "react-router-dom";
import { useContexto } from "../contexto/ContextProvider";
import PerfilCuenta from "./PerfilCuenta";
import { db } from "../Firebase";
import { Auth } from "../contexto/AuthContext";

export default function Account() {

 const[listadoItems,perfilUser,perfilUserLogin]= useOutletContext()

// configuraciones para InventarioProductos
const {eliminarItems}= useContexto()
const [listadoItemss,setListadoItemss]=useState(listadoItems)
const [perfilUsers,setPerfilUsers]=useState(perfilUser)

const handleDeleteItems=(productID)=>{
 eliminarItems(listadoItems?.items?.find(items=>items.productID===productID))
}
const a=listadoItems
useEffect(() => {
const traer=async () => {
  setListadoItemss(listadoItems)
  setPerfilUsers(perfilUser)
  
}
traer()
},[])

  return (
    <div>
      <div className="board min-h-screen">
     
        <div className="md:w-10/12 mx-auto pt-8 md:pt-0 flex flex-col  md:flex-row gap-5">
       
        <InventarioProductos listadoItems={listadoItems} handleDeleteItems={handleDeleteItems} /> 
        <PerfilCuenta perfilUser={perfilUser}
        listadoItems={listadoItems}
        />        </div>
      </div>
    </div>
  );
}

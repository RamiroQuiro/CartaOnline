import React, { useEffect, useState } from "react";
import "./account.css";
import { Auth } from "./contexto/AuthContext";
import InventarioProductos from "./InventarioProductos";
import PerfilCuenta from "./PerfilCuenta";
import ImagenesStock from "./ImagenesStock";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Outlet, useOutletContext } from "react-router-dom";
import { useContexto } from "./contexto/ContextProvider";

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
     
        <div className="containerAccount md:flex md:flex-col">
       
        <InventarioProductos listadoItems={listadoItems} handleDeleteItems={handleDeleteItems} /> 
        <PerfilCuenta perfilUser={perfilUser}
        listadoItems={listadoItems}
        />
        <ImagenesStock perfilUser={perfilUser}/>
        </div>
      </div>
    </div>
  );
}

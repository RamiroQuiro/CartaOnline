import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {VscCheck } from "react-icons/vsc";
import { Auth } from './contexto/AuthContext';
import { db } from './Firebase';

export default function PerfilCuenta({perfilUser}) {

  const {user,editarPerfil}= Auth()
  const [perfil,setPerfil]= useState({})




    
  return (
    <section className="perfilCuenta  inventarioComidas w-full   hover:-translate-y-2 cursor-pointer duration-300 shadow-md border-2 border text-medium px-5 py-5 rounded-lg">
       <h2 className="font-bold text-gray-700 text-2xl">
            Imagenes Subidas
          </h2>
          <div className='grid grid-column-3'>
asasa
          </div>
          
    </section>
  );
}

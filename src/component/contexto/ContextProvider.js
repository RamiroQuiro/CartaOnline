import { arrayRemove, arrayUnion,  doc, updateDoc } from "firebase/firestore";
import React, { createContext, useContext,    useReducer,  } from "react";
import { db } from "../Firebase";
import toast from 'react-hot-toast'
import ReducerPedidos from "./ReducerPedidos";
import { Auth } from "./AuthContext";

export const contextState = createContext();

 export const useContexto = () => {
   const context = useContext(contextState);
   return context;
 };


const estadoInicial={
  pedidosGral:[]
}

export default function ContextProvider  ({ children }) {
  const {userPerfil,user }=Auth()
// const docRef = doc(db, `usuarios/${user?.uid}`);
const id=user?.uid
const docRefItems = doc(db, `listado/empresas`);
const [state, dispatch] = useReducer(ReducerPedidos, estadoInicial)
const traerPedidos=(stateMenu)=>{
    // setPedidoGral(...pedidoGral,stateMenu)
// console.log([stateMenu])
     dispatch({
      type: 'ADD_ORDERS',
      payload:stateMenu
    })
}
// const suma = () => {
// dispatch({
//   type:'RESTAR',
//   payload:' count',
// })
//   };
//   const resta = () => {
 
//     };
    
const stateGral=()=>{
  console.log(state)
  return state
}

// funciones Firestore

// crear Items nuevos en la collection Items
const crearCategoria=async(categoria)=>{
    const referencedBusinessName=`${id}.categorias.${categoria}`
    await updateDoc(docRefItems,{ [referencedBusinessName]:arrayUnion()})
  
  toast('Categoria Agregada!', {
    icon: '👏',
  });}

const crearItems=async(item,categoria)=>{
    const referencedBusinessName=`${id}.categorias.${categoria}`
    await updateDoc(docRefItems,{[referencedBusinessName]:arrayUnion(item)})
    
  toast('Items Agregado!', {
    icon: '👏',
  });

}
// eliminar items
const eliminarItems=async(item,categoria)=>{
  const referencedBusinessName=`${id}.categorias.${categoria}`
    await updateDoc(docRefItems,{[referencedBusinessName]:arrayRemove(item)})
  toast('Items Eliminado!', {
    icon: '👏',
  });
}

const eliminarCategory = async(newObject)=>{
  const referencedBusinessName = `${id}.categorias`
  await updateDoc(docRefItems,{[referencedBusinessName]:newObject})
}

// traer una sola vez el listado de items
const listarItems= async (hola)=>{
// const docRef=doc(db,'listado','items');
// const docSnap  = await getDoc(docRefItems)
// console.log(hola,docSnap.data().listado)

}





  return (
    <contextState.Provider value={{...state,crearItems,eliminarItems,listarItems,stateGral,traerPedidos,crearCategoria,eliminarCategory}}>
        {children}
    </contextState.Provider>
  );
};

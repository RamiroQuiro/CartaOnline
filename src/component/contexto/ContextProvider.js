import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import ReducerPedidos from "./ReducerPedidos";

export const contextState = createContext();

 export const useContexto = () => {
   const context = useContext(contextState);
   return context;
 };

//  const useContexto=()=> useContext(contextState)

const estadoInicial={
  pedidosGral:[
//     {
//       ItemsMenu: "",
//   cantidad: 0,
//   precio:'0',
//   productID:0,
// },
]
}

export default function ContextProvider  ({ children }) {

const [state, dispatch] = useReducer(ReducerPedidos, estadoInicial)
//  const [pedidoGral,setPedidoGral]=useState([])

const traerPedidos=(stateMenu)=>{
    // setPedidoGral(...pedidoGral,stateMenu)
// console.log([stateMenu])
     dispatch({
      type: 'ADD_ORDERS',
      payload:stateMenu
    })
}

const suma = () => {

dispatch({
  type:'RESTAR',
  payload:' count',
})

  };
  const resta = () => {
 
    };
    
const stateGral=()=>state




  return (
    <contextState.Provider value={{...state,stateGral,traerPedidos}}>
        {children}
    </contextState.Provider>
  );
};

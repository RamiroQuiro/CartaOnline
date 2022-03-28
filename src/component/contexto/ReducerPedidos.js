export default function ReducerPedidos(state, action) {
  switch (action.type) {
    case 'ADD_ORDERS':{
     const payload=action.payload
      const buscado=state.pedidosGral.find(items=> items.productID===payload.productID);
       console.log(buscado);
       console.log(payload);

      return buscado
      ?{...state,
        pedidosGral:state.pedidosGral.map(items => 
          items.productID===payload.productID 
          ?{...items, cantidad:payload.cantidad}
          : items
          )
 
      }:{ pedidosGral: [...state.pedidosGral,action.payload] }

        // return state.pedidosGral.map(todo=> todo.productID === todoID.productID ? todoID:todo)
        // return { pedidosGral: [...state.pedidosGral,action.payload, cantidad:action.payload] };
}

    default:
      break;
  }
  
}

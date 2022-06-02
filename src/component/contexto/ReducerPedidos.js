export default function ReducerPedidos(state, action) {
  switch (action.type) {
    case 'ADD_ORDERS':{
     const payload=action.payload
      const buscado=state.pedidosGral.find(items=> items.productID===payload.productID);
      return buscado
      ?{...state,
        pedidosGral:state.pedidosGral.map(items => 
          items.productID===payload.productID 
          ?{...items, cantidad:payload.cantidad}
          : items
          )
 
      }:{ pedidosGral: [...state.pedidosGral,action.payload] }
}
    default:
      break;
  }
  
}

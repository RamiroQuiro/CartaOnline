import React,{useState} from 'react'
import menuCarta from '../base/menuCarta'
import ItemsMenu from "./ItemsMenu";





export default function MenuLista1() {

 
    
    


  return (
    <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
  {menuCarta.menuHamburguesas.map((menu) => (
      <ItemsMenu
        key={menu.id}
        optionMenu={menu.optionMenu}
        description={menu.description}
        precio={menu.precio}
        productID={menu.productID}
   />
    ))}
  </div>
  )
}

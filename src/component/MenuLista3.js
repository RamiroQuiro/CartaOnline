import React from 'react'
import ItemsMenu from "./ItemsMenu";
import menuCarta from '../base/menuCarta'



export default function MenuLista3() {
  return (
    <div className="menuLista text-white  text-left Hamburguesas tercerColumna  ">
    {menuCarta.menuSandwich.map((menu) => (
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

import React from 'react'
import ItemsMenu from "./ItemsMenu";
import menuCarta from '../base/menuCarta'
import './menu2.css'

export default function MenuLista2() {
  return (
    <div className="menuLista text-white   text-left Hamburguesas segundaColumna  ">
            <h2 className="text-3xl etiquetasMenu text-center titulo my-4 mt-8 text-white font-bold italic">
             Chops
            </h2>
            <h2 className='text-3xl text-center text-orange-500 italic'>& bebidas</h2>
            <div className=" items-menuLista">
            
            {menuCarta.menuTragos.map((menu) => (
              <ItemsMenu
              key={menu.id}
              optionMenu={menu.optionMenu}
              description={menu.description}
              precio={menu.precio}
              productID={menu.productID}
              />
            ))}</div>
          </div>
  )
}

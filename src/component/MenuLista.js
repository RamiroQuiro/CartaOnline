import React, { Children ,useState} from "react";
import menuCarta from '../base/menuCarta'
import ItemsMenu from "./ItemsMenu";





export default function MenuLista({
  children,
  titleMenu,
  optionMenu,
  description,
  precio,
}) {


  console.log(menuCarta.menuHamburguesas);




return (
    <form className="menuLista text-white  text-left ">
      <h1 className="titulo-menuLista etiquetasMenu py-2 font-bold">{titleMenu}</h1>        
      <ul className="items-menuLista text-center mx-auto  " handleCantidadItems={handleCantidadItems} cantidadItems={cantidadItems.cantidad}suma={suma} resta={resta}>
        
      {menuCarta.menuHamburguesas.map((menu) => (
              <ItemsMenu
                optionMenu={menu.optionMenu}
                description={menu.description}
                precio={menu.precio}
                productoID={menu.id}
                />
                ))}
      
      </ul>
    </form>
  );
}

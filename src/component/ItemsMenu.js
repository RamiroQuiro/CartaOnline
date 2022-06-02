import React, { useState,  } from "react";
import "./itemsMenu.css";
import {useContexto} from './contexto/ContextProvider';

import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { useEffect } from "react";

export default function ItemsMenu({ optionMenu, description, precio,productID }) {

const {traerPedidos}=useContexto()

  
  const [cantidadItems, setCantidadItems] = useState({
    ItemsMenu: "",
    cantidad: 0,
    precio:'$0',
    productID:0,
  });

  const count = cantidadItems.cantidad + 1;

  const handleCantidadItems = (e) => {
    setCantidadItems({
      ...cantidadItems,
      cantidad: count,
      ItemsMenu: `${e.target.value}`,
      precio: `${precio}`,
      productID:productID
    });

  };
  const suma = () => {
    setCantidadItems({...cantidadItems,
      cantidad: count});
    };
    const resta = () => {
      setCantidadItems({...cantidadItems,
        cantidad:(cantidadItems.cantidad-1)});
      };
      
      
      useEffect(()=>{
        traerPedidos(cantidadItems)
  },[cantidadItems])

  return (
    <li key={productID} className=" text-left m-0 flex justify-between align-center px-5">
      <div className="py-2  itemDescription ">
        <button
          htmlFor="cantidadItems "
          onClick={handleCantidadItems}
          className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
          value={optionMenu}
        >
          {optionMenu}
        </button>
        <div className="descriptionSpan text-gray-100   "> {description}.</div>
      </div>
      <div className="inline itemPrecio text-2xl text-center font-bold m-auto">
        ${precio}
      </div>

      <input
        type="number"
        name="ItemsMenu"
        id={productID}
        className="cantidadItems  focus:bg-orange-400 font-bold rounded border-orange-100"
        placeholder="0"
        value={cantidadItems.cantidad}
      />
      <div className=" flex flex-col ml-3 algin-center justify-center">
        <VscTriangleUp className="cursor-pointer" onClick={suma} />
        <VscTriangleDown className="cursor-pointer" onClick={resta}/>
      </div>
    </li>
  );
}

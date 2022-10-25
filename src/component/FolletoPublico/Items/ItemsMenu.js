import React, { useState } from "react";
import "./itemsMenu.css";
import { useContexto } from "../../contexto/ContextProvider";

import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { useEffect } from "react";

export default function ItemsMenu({
  optionMenu,
  description,
  precio,
  productID,
  textColor1,
  textColor2,
}) {
  const { traerPedidos,stateGral } = useContexto();
  const [cantidadItems, setCantidadItems] = useState({
    ItemsMenu: "",
    cantidad: 0,
    precio: "$0",
    productID: 0,
  });

  const count = cantidadItems.cantidad + 1;

  const handleCantidadItems = (e) => {
    setCantidadItems({
      ...cantidadItems,
      cantidad: count,
      ItemsMenu: `${e.target.value || e.target.name}`,
      precio: `${precio}`,
      productID: productID,
    });
  };
  const suma = () => {
    setCantidadItems({ ...cantidadItems, cantidad: count });
  };
  const resta = () => {
    setCantidadItems({
      ...cantidadItems,
      cantidad: cantidadItems.cantidad - 1,
    });
  };

  useEffect(() => {
    traerPedidos(cantidadItems);
  }, [cantidadItems]);

  return (
    <li
      key={productID}
      style={{ color: `${textColor2}` }}
      className=" text-left w-full m-0 flex justify-between align-center px-5 py-0.5 border-b border-b-gray-100/50md:border-0 md:py-0"
    >
       <div className="md:py-2 py-1 itemDescription ">
        <button
          style={{ color: `${textColor1}` }}
          htmlFor="cantidadItems "
          onClick={handleCantidadItems}
          className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
          value={optionMenu}
        >
          {optionMenu}
        </button>
        <div
          style={{ color: `${textColor2}` }}
          className="descriptionSpan text-gray-100 font-medium  "
        >
          {" "}
          {description}.
        </div>
      </div>
      <div
        style={{ color: `${textColor2}` }}
        className="inline itemPrecio text-xl text-center font-bold m-auto"
      >
        ${precio}
      </div>

      <input
        type="number"
        name="ItemsMenu"
        id={productID}
        style={{ outlineColor: `${textColor1}`}}
        className="cantidadItems text-lg text-center focus:bg-orange-400 font-bold rounded border-orange-100"
        placeholder="0"
        value={cantidadItems.cantidad}
      />
      <div 
      style={{fill:`${textColor1}`}}
      className=" flex flex-col ml-3 algin-center justify-center">
        <VscTriangleUp
        style={{fill:`${textColor1}`}}
          className="cursor-pointer"
          name={optionMenu}
          onClick={handleCantidadItems}
        />
        <VscTriangleDown 
         style={{fill:`${textColor1}`}}
         className="cursor-pointer" onClick={resta} />
      </div>
    </li>
  );
}

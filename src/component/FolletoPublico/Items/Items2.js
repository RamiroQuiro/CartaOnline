import React,{useEffect,useState} from 'react'
import { useContexto } from "../../contexto/ContextProvider";

import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

export default function Items2({ nombre,
    descripcion,
    precio,
    productID,
    textColor1,
    textColor2,
  }) {
    const { traerPedidos } = useContexto();
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
        <div key={productID} className="md:w-10/12 w-11/12 flex items-ceter justify-between my-1 text-left relative">
        <div className="md:py-2  py-1 w-4/6 ">
          <button
            htmlFor="cantidadItems "
            style={{ color: `${textColor1}` }}
            onClick={handleCantidadItems}
            className="cursor-pointer font-bold text-yellow-400 m-0 text-lg  "
            value={nombre}
          >
            {nombre}
          </button>
          
          <div
            style={{ color: `${textColor2}` }}
            className="descriptionSpan text-gray-100 font-medium  "
          >
            {" "}
            {descripcion}.
          </div>
        </div>
        {/* <div className="w-6/12 -translate-y-5 absolute border-b-2 border-dotted bottom-0 ml-16"></div> */}
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
          style={{ outlineColor: `${textColor1} `,color: `${textColor2}`}}
          className="cantidadItems text-lg text-center focus:bg-yellow-400 font-bold rounded border-orange-100"
          placeholder="0"
          value={cantidadItems.cantidad}
        />
        <div
          className=" flex flex-col ml-3 algin-center justify-center"
        >
          <VscTriangleUp
            className="cursor-pointer"
            name={nombre}
            onClick={handleCantidadItems}
          />
          <VscTriangleDown
            className="cursor-pointer"
            onClick={resta}
          />
        </div>
      </div>
    );
  }
  

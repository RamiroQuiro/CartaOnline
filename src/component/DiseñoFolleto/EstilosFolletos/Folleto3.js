import React from "react";
import fondo from "../../../img/Hojas.jpg";
import { Link } from "react-router-dom";
import Items2 from "../../FolletoPublico/Items/Items2";

export default function Folleto3({
  styles,
  perfilCuenta,
  imagen,
  categorias,
  businessName,
}) {
  const itemsMenu = (categoria, i) => {
    return (
      <div className={`w-full flex flex-col items-center  `}>
        <h1
          key={i}
          style={{ color: `${styles.textColor1}` }}
          className="text-3xl  border-r-2 border-b-2 border-t-2 rounded-sm font-serif mb-1 w-10/12 text-center py-2"
        >
          {categoria}
        </h1>
        {/* <hr className="w-10/12 mb-1 border-l-4" /> */}
        {perfilCuenta?.categorias?.[categoria]
          ?.filter((item) => item.active === true)
          .map((item) => (
            <Items2
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
              productID={item.productID}
              textColor1={styles.textColor1}
              textColor2={styles.textColor2}
            />
          ))}
      </div>
    );
  };

  return (
    <div
      style={{
        background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
      }}
      className=" lg:w-[60%] md:w-11/12  w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col md:flex-row justify-around items-stretch relative  "
    >
      <div className="bg-zinc-500 md:w-2/6 w-full md:min-h-max  relative">
        <img
          src={fondo}
          alt=""
          className="md:h-full h-32 w-full md:w-auto object-cover"
        />
        <div className="absolute h-full w-full top-0 left-0 bg-gray-50/20 backdrop-blur-sm">
          <div className="md:w-16 h-full items-center flex mx-auto break-all text-center">
            <p className="text-mono text-white text-7xl font-medium tracking-wide leading-relaxed mx-auto text-center">
              {" "}
              | Menu |
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-wrap  items-stretch justify-between relative  w-full h-full">
        <h1
          style={{ color: `${styles.textColor1}` }}
          className="text-center text-4xl font-serif font-bold my-5 mx-auto"
        >
          {" "}
          {perfilCuenta?.perfilUser?.businessName}
        </h1>
        <h3 className="w-4/6 break-words font-sm font-medium text-center mx-auto mb-10">
          {perfilCuenta?.perfilUser?.descripcion}
        </h3>
        <div className="md:w-11/12 w-full flex flex-col h-full items-center justify-center py-2 gap-3 mx-auto mb-10">
          {categorias?.map((categoria, i) => itemsMenu(categoria, i))}
        </div>
        {
          <Link
            to={`/${businessName}/enviando`}
            perfilCuenta={perfilCuenta}
            className="absolute inset-x-[30%] text-white bottom-16 rounded-full w-32 text-center mx-auto font-medium  text-sm bg-green-500/70 border border-white px-1 py-1"
          >
            Realizar Pedido
          </Link>
        }
        <div className="bg-gray-100/30 backdrop-blur-sm px-3 py-5 text-sm font-bold flex   w-full mx-auto  items-center justify-around gap-2 mt-2">
          <p>{perfilCuenta?.perfilUser?.facebook}</p>
          <p>{perfilCuenta?.perfilUser?.instagram}</p>
          <p>{perfilCuenta?.perfilUser?.nTel1}</p>
          <p>{perfilCuenta?.perfilUser?.direccion}</p>
        </div>
      </div>
    </div>
  );
}

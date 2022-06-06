import React, { useEffect, useState } from "react";

import imagen1 from "../img/burguer.jpg";
import imagen2 from "../img/pizzas.jpg";
import imagen3 from "../img/sandwich.jpg";
import "./home.css";
import "./menu1.css";
import "./menu2.css";
import "./menu3.css";
import { Link, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase";
import ItemsMenu from "./ItemsMenu";
import { Auth } from "./contexto/AuthContext";

export default function Home() {
  const {user}=Auth()
  const [listado, setListado] = useState([]);
  const [perfilCuenta, setPerfilCuenta] = useState({});
  const [styles, setStyles] = useState({});

  const docRefe = doc(db, `listado/empresas`);

const params=useParams()
const businessName=params.businessName

 
  useEffect(() => {
    
    const unsub = onSnapshot(docRefe, (listado) => {
      setListado(listado.data()[businessName].items.filter(items=>items.active===true));
    });
    return () => unsub();
  }, [perfilCuenta]);

    


  useEffect(() => {
    const unsub = onSnapshot(docRefe, (datos) => {
      const datosTraidos = datos.data();
      setPerfilCuenta(datosTraidos[businessName]);
      setStyles(datosTraidos[businessName].styles);
    });
    return () => unsub();
  }, []);



  return (
    <div className="containerHome mx-auto  ">
      <div 
      style={{
         background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
       }}
      className=" containerCarta  mx-auto rounded-lg grid gap-4 grid-cols-3 justify-items-center justify-self-stretch  ">
     
     
     {  !listado?
        <div className="text-center">
          <h1 className="text-center animate-pulse font-extrabold">Cargando...</h1>
        </div>
        :
      <div className="columnasMenus w-1/3   flex flex-col">
          <div className=" absolute containerImagenIzquierda rounded-full">
            <img
              src={imagen1}
              alt=""
              className="mb-4 objet-cover  rounded-full "
            />
          </div>

{/* Lista 1 */}

          <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
            {
            listado&&
            listado
              .filter((items) => items.lista == 1)
              .map((menu) => (
                <ItemsMenu
                textColor1={styles?.textColor1}
                textColor2={styles?.textColor2}
                key={menu.productID}
                  optionMenu={menu.nombre}
                  description={menu.descripcion}
                  precio={menu.precio}
                  productID={menu.productID}
                />
              ))}
          </div>
        </div> 
     
     }
        <div className="columnasMenus  w-1/3  flex flex-col ">
          <div className="titulo text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
            <h1 
                 style={{color:`${styles?.textColor1}`}}
            className="text-paleta-200  font-bold text-4xl italic">
              {
              perfilCuenta?.businessName
              }

            </h1>
            <hr className="h-4 w-10/12 mx-auto my-2" />
            <p 
            style={{color:`${styles?.textColor2}`}}
            className="text-white text-sm my-0 font-medium">
              {
              perfilCuenta?.descripcion || "Descripcion de la empresa"
              }
            </p>
            <div className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-10">
              <span> • • </span>
              <span> • • </span>
              <span> • • </span>
            </div>

          </div>
         {/* Lista 2 */}

         <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
            {
            listado&&
            listado
              .filter((items) => items.lista == 2)
              .map((menu) => (
                <ItemsMenu
                textColor1={styles?.textColor1}
                textColor2={styles?.textColor2}
                  key={menu.productID}
                  optionMenu={menu.nombre}
                  description={menu.descripcion}
                  precio={menu.precio}
                  productID={menu.productID}
                />
              ))}
          </div>

          <Link
            to={`/${businessName}/enviando`}
            perfilCuenta={perfilCuenta}
            className="rounded-full buttonEnviar w-4/12 mx-auto 5 font-bold  text-sm bg-green-500 border border-4 border-white px-1 py-1"
          >
            Realizar Pedido
          </Link>
        </div>
        <div className="columnasMenus  w-1/3 flex flex-col">
          <div className=" absolute containerImg  rounded-full ">
            <img
              src={imagen2}
              alt=""
              className="mx-auto objet-cover  rounded-full "
            />
          </div>
          {/* Lista 3 */}

          <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
            {
            listado&&
            listado
              .filter((items) => items.lista == 3)
              .map((menu) => (
                <ItemsMenu
                textColor1={styles?.textColor1}
                textColor2={styles?.textColor2}
                  key={menu.productID}
                  optionMenu={menu.nombre}
                  description={menu.descripcion}
                  precio={menu.precio}
                  productID={menu.productID}
                />
              ))}
          </div>
          <div className=" absolute containerImgAbajo rounded-full">
            <img
              src={imagen3}
              alt=""
              className="mb-4 objet-cover  rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

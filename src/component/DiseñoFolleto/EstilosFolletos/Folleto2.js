import { doc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase";
import ItemsMenu from "../../FolletoPublico/ItemsMenu";

export default function Folleto2() {
  const [listado, setListado] = useState([]);
  const [perfilCuenta, setPerfilCuenta] = useState({});
  const [styles, setStyles] = useState({});
  const [imagen, setImagenes] = useState({
    logo: "",
    imagen1: "",
    imagen2: "url",
    imagen3: "url",
  });

  const docRefe = doc(db, `listado/empresas`);

  const params = useParams();
  const businessName = 2112;

  useEffect(() => {
    const unsub = onSnapshot(docRefe, (listado) => {
      setListado(
        listado
          .data()
          [businessName].items.filter((items) => items.active === true)
      );
    });
    return () => unsub();
  }, [perfilCuenta]);

  useEffect(() => {
    const unsub = onSnapshot(docRefe, (datos) => {
      const datosTraidos = datos.data();
      setPerfilCuenta(datosTraidos[businessName]);
      setStyles(datosTraidos[businessName].styles);
      setImagenes({
        logo: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.posicion == "logo"
        )?.url,
        imagen1: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.posicion == "imagen1"
        )?.url,
        imagen2: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.posicion == "imagen2"
        )?.url,
        imagen3: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.posicion == "imagen3"
        )?.url,
      });
    });

    return () => unsub();
  }, []);
  
  const theme={
      encabezado:"bg-[#D5946C]/80 text-white text-2xl font-bold text-center h-10 w-8/12 mx-auto -rotate-1 px-5"
  }
  return (
    <div className="bg-gray-50 px-2 m-auto py-3 h-screen w-full">
      <div className="bg-[#3C4A57] h-[98%] rounded-lg w-full flex  flex-col">
        <div className="grid grid-cols-3 h-full w-full py-10">
          <div className="border-r-4 border-[#D5946C] border-dashed">
            <h1 className={theme.encabezado}>Milanesas</h1>

            <div className=" text-white  text-left Hamburguesas primerColumna   ">
              {listado &&
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
          <div className="flex justify-between items-center flex-col">
            <img
              src={imagen.logo}
              alt=""
              className="sepia-[50%] object-cover my-2 w-1/2"
            />
            <h1 className="font-black my-2 text-center text-6xl text-[#D5946C]">
              {perfilCuenta.businessName}
            </h1>
            <span className="font-mono my-2 text-center text-xl text-[#D5946C]">
              {perfilCuenta.descripcion}
            </span>
          </div>
          <div className="border-l-4 border-[#D5946C] border-dashed">
          <h1 className={theme.encabezado}>Lomitos</h1>
            <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
              {listado &&
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
          </div>
        </div>
        <div className="w-full h-1/4 border-t-2 bg-red-400 border-[#D5946C] border-dashed">
          parte abajo
        </div>
      </div>
    </div>
  );
}

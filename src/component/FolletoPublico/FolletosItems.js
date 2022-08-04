import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import ItemsMenu from "./ItemsMenu";
import { Auth } from "../contexto/AuthContext";

export default function Home() {
  const [listado, setListado] = useState([]);
  
  const [perfilCuenta, setPerfilCuenta] = useState({});
  const [categorias, setCategorias]=useState([])
  const [styles, setStyles] = useState({});
  const [imagen, setImagenes] = useState({
    imagen1: "imagen1",
    imagen2: "url",
    imagen3: "url",
  });


  const docRefe = doc(db, `listado/empresas`);

const params=useParams()
const businessName=params.businessName

 
  useEffect(() => {
    const category = () => {
      if (perfilCuenta) {
        const array=perfilCuenta?.categorias
        if (array) {
          const obj = Object.keys(array);
          setCategorias(obj);
        }
      }
    };
    category();
    const unsub = onSnapshot(docRefe, (listado) => {
      categorias.map(categoria=>
        setListado(listado.data()[businessName].categorias?.[categoria].filter(items=>items.active===true))
      )
    });
    return () => unsub();
  }, [perfilCuenta]);

    


  useEffect(() => {
    const unsub = onSnapshot(docRefe, (datos) => {
      const datosTraidos = datos.data();
      setPerfilCuenta(datosTraidos[businessName]);
      setStyles(datosTraidos[businessName].styles);
      setImagenes({
        imagen1: datosTraidos[businessName]?.images?.find((imagen) => imagen.nombre == "imagen1")?.url,
        imagen2: datosTraidos[businessName]?.images?.find((imagen) => imagen.nombre == "imagen2")?.url,
        imagen3: datosTraidos[businessName]?.images?.find((imagen) => imagen.nombre == "imagen3")?.url,
      });
    });
    
    return () => unsub();

  }, []);


   


  return (
    <div className="flex flex-col flex-wrap  py-5 w-full">
      <div
        style={{
          background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
        }}
        className=" w-[95%] min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890]  overflow-hidden m-auto rounded-lg flex flex-col justify-around items-center "
      >
        <header className="w-full flex  min-h-[25%]">
          <div className="h-full w-1/3 flex items-center justify-center relative">
            <div className=" absolute peer w-[80%] -rotate-6 rounded-xl">
              <img
                width={"300px"}
                height="300px"
                src={imagen.imagen1}
                alt=""
                className="mb-4  objet-cover object-center w-full h-auto z-30  rounded-xl "
              />
            </div>
            
          </div>
          {/* Titulo y Descripcion */}
          <div className="h-full w-1/3 flex items-center justify-center relative">
            <div className="text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
              <h1
                style={{ color: `${styles?.textColor1}` }}
                className="text-paleta-200  font-bold text-4xl italic"
              >
                {perfilCuenta?.businessName}
              </h1>
              <hr className="h-4 w-10/12 mx-auto my-2" />
              <p
                style={{ color: `${styles?.textColor2}` }}
                className="text-white text-sm my-0"
              >
                {perfilCuenta?.descripcion || "Descripcion de la empresa"}
              </p>
              <div className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-10">
                <span> • • </span>
                <span> • • </span>
                <span> • • </span>
              </div>
            </div>
          </div>
          <div className=" h-full w-1/3 flex items-center justify-center relative">
            <div className=" absolute peer w-[80%] rotate-6 rounded-xl">
              <img
                width={"300px"}
                height="300px"
                src={imagen.imagen2}
                alt=""
                className="mb-4  objet-cover object-center w-full h-auto z-30  rounded-xl "
              />
            </div>
            
          </div>
        </header>
        {/* Titulo y Descripcion */}

        <div className="w-full py-10 min-h-4/6 flex flex-wrap justify-center items-center space-x-3 space-y-2.5">
          {
              categorias?.map((categoria,i)=>(
                <div key={i} className="p-3 rounded-lg bg-gray-50/10 backdrop-blur-sm flex flex-col min-h-[50%] min-w-[30%] items-center">
                      <h3
                      style={{ color: `${styles?.textColor1}` }}
                      className="text-xl  -skew-y-3 mb-2  text-center w-6/12 font-medium bg-gray-500 px-4 py-1 rounded-tl-lg rounded-br-lg"
                    >{categoria}</h3>
                    {
                        perfilCuenta?.categorias?.[categoria]
                        ?.filter((item) => item.active === true)
                        .map((item)=>(
                          <ItemsMenu
                          textColor1={styles?.textColor1}
                          textColor2={styles?.textColor2}
                            key={item.productID}
                            optionMenu={item.nombre}
                            description={item.descripcion}
                            precio={item.precio}
                            productID={item.productID}
                          />
                          ))
                    }      
                </div>
              ))
          }
        </div>

        <footer className="w-full px-16 flex bg-gray-100/50 mx-auto gap-4 py-0.5 justify-between items-center">
          <span>{perfilCuenta.facebook || "facebook"}</span>
          {

        <Link to={`/${businessName}/enviando`} perfilCuenta={perfilCuenta} className="fixed inset-x-[40%] bottom-8 rounded-full w-32 text-center mx-auto font-medium  text-sm bg-green-500 border border-4 border-white px-1 py-1">
            Realizar Pedido
          </Link>
          }
          <span>{perfilCuenta.instagram || "Instagram"}</span>
          <span>{perfilCuenta.direccion}</span>
        </footer>
      </div>
    </div>
  );
}




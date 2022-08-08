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
    <div className="flex flex-col w-full md:py-2 py-5">
      <div
        style={{
          background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
        }}
        className=" md:w-[98%] w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col md:gap-4 justify-around items-center justify-self-auto relative "
      >
          <header className="w-full flex md:flex-row flex-col items-center justify-center  h-2/6">
          <div className="md:h-full py-2 md:py-0 h-1/3 w-full  md:w-1/3 md:flex items-center justify-center relative">
            <div className=" md:absolute peer w-[50%] md:w-[80%] mx-auto md:-rotate-6 rounded-xl">
              <img
                width={"300px"}
                height="300px"
                src={imagen.imagen1}
                alt=""
                className="md:mb-4  objet-cover object-center w-full h-auto z-30  rounded-xl "
              />
            </div>
            
          </div>
          {/* Titulo y Descripcion */}
          <div className="h-full md:w-1/3 flex flex-wrap items-center justify-center relative">
            <div className="text-center md:w-8/12 mx-auto h-1/3 mt-5 mb-5">
              <h1
                style={{ color: `${styles?.textColor1}` }}
                className="text-paleta-200  font-bold md:text-4xl text-2xl italic"
              >
                {perfilCuenta?.businessName}
              </h1>
              <hr className="h-4 w-10/12 mx-auto my-1 md:my-2" />
              <p
                style={{ color: `${styles?.textColor2}` }}
                className="text-white text-sm px-2 md:px-0"
              >
                {perfilCuenta?.descripcion || "Descripcion de la empresa"}
              </p>
              <div 
              style={{ color: `${styles?.textColor1}`}}
              className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-5">
                <span> • • </span>
                <span> • • </span>
                <span> • • </span>
              </div>
            </div>
          </div>
          <div className=" h-full lg:w-1/3 w-1/5 hidden md:flex items-center justify-center relative">
            <div className=" absolute peer w-full mx-auto md:w-[80%] rotate-6 rounded-xl">
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

        <div className="w-full min-h-[4/5]  md:py-6 md:px-3 flex md:flex-row flex-wrap  justify-center items-center gap-1 md:gap-4">
          {
              categorias?.map((categoria,i)=>(
                <div key={i} className="md:p-3 p-2 rounded-lg bg-gray-50/10 backdrop-blur-sm flex flex-col min-h-[30%] w-11/12 flex-initial md:w-[30%] items-center">
                      <h3
                      style={{ color: `${styles?.textColor1}` }}
                      className="md:text-xl -skew-y-3 text-lg text-center w-6/12 font-medium bg-gray-500 px-4 py-1 rounded-lg"
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

        <footer className="w-full mt-14 bottom-0 px-16 flex flex-wrap bg-gray-100/50 mx-auto md:gap-4 py-0.5 justify-between items-center">
          <span>{perfilCuenta.facebook || "facebook"}</span>
          {

        <Link to={`/${businessName}/enviando`} perfilCuenta={perfilCuenta} className="fixed inset-x-[30%] text-white bottom-12 rounded-full w-32 text-center mx-auto font-medium  text-sm bg-green-500/70 border border-white px-1 py-1">
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




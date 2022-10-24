import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import Folleto1 from "../DiseñoFolleto/EstilosFolletos/Folleto1";
import Folleto2 from "../DiseñoFolleto/EstilosFolletos/Folleto2";
import Folleto3 from "../DiseñoFolleto/EstilosFolletos/Folleto3";

export default function Home() {
  const [listado, setListado] = useState([]);
  const [diseños, setDiseños] = useState(null);
  const [perfilCuenta, setPerfilCuenta] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [styles, setStyles] = useState({});
  const [imagen, setImagenes] = useState({
    imagen1: "imagen1",
    imagen2: "url",
    imagen3: "url",
  });

  const docRefe = doc(db, `listado/empresas`);

  const params = useParams();
  const businessName = params.businessName;

  useEffect(() => {
    const category = () => {
      if (perfilCuenta) {
        const array = perfilCuenta?.categorias;
        if (array) {
          const obj = Object.keys(array);
          setCategorias(obj);
        }
      }
    };
    category();
    const unsub = onSnapshot(docRefe, (listado) => {
      categorias.map((categoria) =>
        setListado(
          listado
            .data()
            [businessName].categorias?.[categoria].filter(
              (items) => items.active === true
            )
        )
      );
      setDiseños(listado.data()[businessName]?.perfilUser?.diseñoFolleto);
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
          (imagen) => imagen.nombre == "imagen1"
        )?.url,
        imagen2: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.nombre == "imagen2"
        )?.url,
        imagen3: datosTraidos[businessName]?.images?.find(
          (imagen) => imagen.nombre == "imagen3"
        )?.url,
      });
    });

    return () => unsub();
  }, []);


  if(!styles?.diseñoFolleto){
    return (  <div className="flex flex-col w-full md:py-2 py-5">
         <div
      
        className=" md:w-[98%] w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col md:gap-4 justify-around items-center justify-self-auto relative "
      >
      Cargando..
      </div>
      </div>)
  }else{
    switch (styles?.diseñoFolleto) {
      case 1:
        return (
          <div className="flex flex-col w-full md:py-2 py-5">
            <Folleto1
              styles={styles}
              imagen={imagen}
              categorias={categorias}
              businessName={businessName}
              perfilCuenta={perfilCuenta}
            />
          </div>
        );
        break;
  case 2:
    return (
      <div className="flex flex-col w-full md:py-2 py-5">
         <Folleto2
          styles={styles}
          imagen={imagen}
          categorias={categorias}
          businessName={businessName}
          perfilCuenta={perfilCuenta}
        />
      </div>
    );
    break
    case 3:
    return (
      <div className="flex flex-col w-full md:py-2 py-5">
          <Folleto3
          styles={styles}
          imagen={imagen}
          categorias={categorias}
          businessName={businessName}
          perfilCuenta={perfilCuenta}
       /> 
      </div>
    );
    break
      default:
        break;
    }
  }
  
}

import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { db, storage } from "../Firebase";
import { FaEdit, FaTimes } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import AcordionDiseños from "./AcordionDiseños";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import ModalLoading from "../modal/ModalLoading";
import Modelo1 from "./Modelo1";
import ModeloOriginal from "./ModeloOriginal";
import Pruebadiseño from "./Pruebadiseño";
const sytileInicial = {
  color1: "#2e2e2e",
  color2: "#271717",
  SelectionRange: 19,
  porcentaje: 0,
  porcentaje2: 92,
  textColor1: "#fd9e1c",
  textColor2: "#ffffff",
};

export default function DiseñoFolleto({ perfilUserLogin }) {
  const [perfilCuenta, listadoItems] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [filet, setFile] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [previewURL3, setPreviewURL3] = useState(null);
  const [items, setItems] = useState([]);
  const [styles, setStyles] = useState(sytileInicial);
  const docRef = doc(db, `listado/empresas/`);
  const businessName = listadoItems?.businessName;
  const businessNameImages = perfilCuenta?.businessName + ".images";
  const [imagen, setImagenes] = useState(null);

  // const imagenes=perfilCuenta.images
  useEffect(() => {
    const cargarImagenes = async () => {
      const imagenes = await perfilCuenta.images;
      setImagenes(imagenes);
      // setImagenes({
      //   imagen1: imagenes?.find((imagen) => imagen.nombre == "imagen1")?.url,
      //   imagen2: imagenes?.find((imagen) => imagen.nombre == "imagen2")?.url,
      //   imagen3: imagenes?.find((imagen) => imagen.nombre == "imagen3")?.url,
      // });
    };
    cargarImagenes();
    const cargarStyles = async () => {
      const styles = await perfilCuenta.styles;
      setStyles(styles);
    };
    cargarStyles();

    const cargarItems = async () => {
      const cargaItems = await perfilCuenta.categorias;
      if (cargaItems) {
        const newArray = Object.keys(cargaItems);
        const newItems = Object.values(cargaItems);
        if (newArray.length > 0) {
          setCategorias(newArray);
          if (newItems) {
            setItems(
              newItems.reduce((a, b) => {
                return [...a, ...b];
              }, [])
            );
          }
        }
      }
    };
    cargarItems();
  }, [filet]);

  useEffect(() => {
    if (!filet) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(filet);
  }, [filet]);

  // useEffect(() => {
  //   if (!file2) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPreviewURL2(reader.result);
  //   };
  //   reader.readAsDataURL(file2);
  // }, [file2]);

  // useEffect(() => {
  //   if (!file3) {
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPreviewURL3(reader.result);
  //   };
  //   reader.readAsDataURL(file3);
  // }, [file3]);

  const handleSubmitFile = async (e) => {
    const file = e.target.files[0];
    setFile(filet);
    setLoading(true);
    const fileName = e.target.name;
    console.log(fileName);
    const fileRef = ref(storage, `imagenes/${businessName}/${fileName}`);
    await uploadBytes(fileRef, file).then(async () => {
      await getDownloadURL(fileRef).then(async (url) => {
        await updateDoc(docRef, {
          [businessNameImages]: imagen.map((img) =>
            img.posicion == fileName
              ? { ...img, url: url, nombre: fileName }
              : img
          ),
        })
          .then(() => {
            setLoading(false);
            toast.success("Imagen subida correctamente");
          })
          .catch((error) => {
            setLoading(false);
            alert("Error al subir imagen, intente de nuevo");
            console.log(error);
          });
      });
    });
  };

  const handleDeleteImagen = (e) => {
    e.preventDefault();
    const desertRef = ref(storage, imagen[e.target.id]);
    // console.log(imagen[e.target.id]);
    deleteObject(desertRef);
  };

  {
    /* enviar estilos personalizados */
  }
  const handleStyleFolleto = async (e) => {
    e.preventDefault();
    const referencedBusinessName = businessName + "." + "styles";
    await updateDoc(docRef, {
      [referencedBusinessName]: styles,
    }).then(() => {
      toast.success("Estilos actualizados");
    });
  };

  const handleResetStyles = async (e) => {
    e.preventDefault();
    const referencedBusinessName = businessName + "." + "styles";
    await updateDoc(docRef, {
      [referencedBusinessName]: sytileInicial,
    }).then(() => {
      toast.success("Estilos actualizados");
    });
  };

  return (
    <div className="board min-h-full">
      {loading == true && <ModalLoading />}
      <Toaster />
      <div className=" w-[95%] pl-10 px-2 mx-auto">
        <section className="perfilCuenta flex flex-col  bg-gray-100 :bg-gray-500 :bg-opacity-40 bg-opacity-60 backdrop-filter backdrop-blur-sm w-full  shadow-md border-2  :border-gray-600 text-medium  py-5 px-2 gap-2 rounded-lg">
          <div className="flex justify-around items-center w-full  rounded text-xs px-1  :bg-paleta-100 :text-white">
            <div>diseño Folleto</div>
            <div>Diseño Afiches</div>
            <div>Diseños</div>
          </div>
          <div className="flex">
            {/* Outlet de los diseños */}
            <div className="flex flex-col z-50 bg-gray-50 rounded border  :bg-paleta-100 :text-white text-sm w-diez">
              <AcordionDiseños
                handleUpSelect={"handleUpSelect"}
                businessName={businessName}
                sytileInicial={sytileInicial}
                styles={styles}
                setStyles={setStyles}
              />

              {/* botonera */}
              <form className="flex flex-col gap-5 justify-around items-center mb-2 ">
                <button
                  className={` font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 p-1.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                  onClick={handleStyleFolleto}
                >
                  aplicar estilos
                </button>
                <button
                  className={` font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 p-1.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                  onClick={handleResetStyles}
                >
                  Resetear Estilos
                </button>
              </form>
            </div>

            {/* empieza folleto */}
             <Modelo1 
            styles={styles}
            categorias={categorias}
            items={items}
            perfilCuenta={perfilCuenta}
            handleDeleteImagen={handleDeleteImagen}
            handleSubmitFile={handleSubmitFile}
            imagen={imagen}
            /> 

            {/* <Pruebadiseño
             styles={styles}
             categorias={categorias}
             items={items}
             perfilCuenta={perfilCuenta}
             handleDeleteImagen={handleDeleteImagen}
             handleSubmitFile={handleSubmitFile}
             imagen={imagen}
             /> */}

            {/* <ModeloOriginal
            styles={styles}
            categorias={categorias}
            items={items}
            listadoItems={listadoItems}
            handleDeleteImagen={handleDeleteImagen}
            handleSubmitFile={handleSubmitFile}
            /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import AcordionDiseños from "../AcordionDiseños";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../Firebase";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import toast from "react-hot-toast";

import ModalLoading from "../../modal/ModalLoading";
import RenderEditorDiseño from "./RenderEditorDiseño";
import { Auth } from "../../contexto/AuthContext";
const sytileInicial = {
  color1: "#2e2e2e",
  color2: "#271717",
  SelectionRange: 19,
  porcentaje: 0,
  porcentaje2: 92,
  textColor1: "#fd9e1c",
  textColor2: "#ffffff",
};

export default function EditorFolleto() {
  const storages=getStorage()
  const {user}=Auth()
  const {perfilCuenta, listadoItems} = useOutletContext();
  const [imagen, setImagenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filet, setFile] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);
  const [items, setItems] = useState([]);
  const [styles, setStyles] = useState(sytileInicial);
  const docRef = doc(db, `listado/empresas/`);
  const businessName =user?.uid

  // const imagenes=perfilCuenta.images
  useEffect(() => {
    const cargarImagenes = async () => {
      const imagenes = await perfilCuenta.images;
      setImagenes(imagenes);
 
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
  }, [filet,imagen]);

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

  const handleSubmitFile = async (e) => {
    const file = e.target.files[0];
    setFile(filet);
    setLoading(true);
    const referencedBusinessName= `${businessName}.images`
    const fileName = e.target.name;
    const fileRef = ref(storage, `imagenes/${businessName}/${fileName}`);
    await uploadBytes(fileRef, file).then(async () => {
      await getDownloadURL(fileRef).then(async (url) => {
        await updateDoc(docRef, {
          [referencedBusinessName]: imagen.map((img) =>
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
  
  const handleDeleteImagen =async  (name) => {
    const referencedBusinessName= `${businessName}.images`
    const desertRef = ref(storages, `imagenes/${businessName}/${name}`);
    deleteObject(desertRef).then((data)=>toast.success('imagen borrada'))
    await updateDoc(docRef, {
      [referencedBusinessName]: imagen.map((img) =>
        img.posicion == name
          ? { ...img, url: "", nombre: name }
          : img
      ),
    })
      .then(() => {
        setLoading(false);
        toast.success("Imagen borrada correctamente");
      })
      .catch((error) => {
        setLoading(false);
        alert("Error al borrar imagen, intente de nuevo");
        console.log(error);
      });
  };

  {
    /* enviar estilos personalizados */
  }
  const handleStyleFolleto = async (e) => {
    e.preventDefault();
    const referencedBusinessName= `${businessName}.styles`
    await updateDoc(docRef, {
      [referencedBusinessName]: styles,
    }).then(() => {
      toast.success("Estilos actualizados");
    });
  };

  const handleResetStyles = async (e) => {
    e.preventDefault();
    const referencedBusinessName= `${businessName}.styles`
    await updateDoc(docRef, {
      [referencedBusinessName]: sytileInicial,
    }).then(() => {
      toast.success("Estilos actualizados");
    });
  };

//   const Render = ({diseñoFolleto}) => {
// console.log(diseñoFolleto)
//     switch (diseñoFolleto) {
//       case 1:
//         return (
//           <ModeloOriginal
//             styles={styles}
//             categorias={categorias}
//             items={items}
//             listadoItems={listadoItems}
//             handleDeleteImagen={handleDeleteImagen}
//             handleSubmitFile={handleSubmitFile}
//           />
//         );
//         break
//       case 2:
//         return (
//           <Pruebadiseño
//             styles={styles}
//             categorias={categorias}
//             items={items}
//             perfilCuenta={perfilCuenta}
//             handleDeleteImagen={handleDeleteImagen}
//             handleSubmitFile={handleSubmitFile}
//             imagen={imagen}
//           />
//         );
//         break;
//       case 3:
//         return (
//           <Modelo1
//             styles={styles}
//             categorias={categorias}
//             items={items}
//             perfilCuenta={perfilCuenta}
//             handleDeleteImagen={handleDeleteImagen}
//             handleSubmitFile={handleSubmitFile}
//             imagen={imagen}
//           />
//         );
//         break;
//       default:
//         break;
//     }
//   };
  return (
    <div className="flex md:flex-row flex-col">
      {loading == true && <ModalLoading />}
      {/* Outlet de los diseños */}
      <div className="flex md:flex-col z-50 bg-gray-50 rounded border relative    text-sm md:w-diez">
        <AcordionDiseños
          handleUpSelect={"handleUpSelect"}
          businessName={businessName}
          sytileInicial={sytileInicial}
          styles={styles}
          setStyles={setStyles}
        />

        {/* botonera */}
        <form className="flex flex-col gap-2 justify-center md:justify-around items-center mb-2 ">
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

      {styles?.diseñoFolleto && 
      
      <RenderEditorDiseño
      styles={styles}
      categorias={categorias}
      items={items}
      perfilCuenta={perfilCuenta}
      handleDeleteImagen={handleDeleteImagen}
      handleSubmitFile={handleSubmitFile}
      imagen={imagen}
      />
      }
     
    </div>
  );
}

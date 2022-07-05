import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { db, storage } from "./Firebase";
import { FaEdit, FaTimes } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import AcordionDiseños from "./AcordionDiseños";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
  const [filet, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [previewURL3, setPreviewURL3] = useState(null);
  const [items, setItems] = useState(null);
  const [styles, setStyles] = useState(sytileInicial);
  const docRef = doc(db, `listado/empresas/`);
  const businessName = listadoItems?.businessName;
  const businessNameImages = perfilCuenta?.businessName + ".images";
  const [imagen, setImagenes] = useState(null);

  // const imagenes=perfilCuenta.images
  useEffect(() => {
    const cargarImagenes = async () => {
      const imagenes = await perfilCuenta.images;
      setImagenes(imagenes)
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
      const items = await perfilCuenta.items;
      setItems(items?.filter((item) => item.active === true));
    };
    cargarItems();

    //
  }, [filet]);

  console.log(listadoItems,perfilCuenta)
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

  useEffect(() => {
    if (!file2) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL2(reader.result);
    };
    reader.readAsDataURL(file2);
  }, [file2]);

  useEffect(() => {
    if (!file3) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL3(reader.result);
    };
    reader.readAsDataURL(file3);
  }, [file3]);

  const handleUpSelect = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const handleUpSelect2 = (e) => {
    const file = e.target.files[0];
    setFile2(file);
  };
  const handleUpSelect3 = (e) => {
    const file = e.target.files[0];
    setFile3(file);
  };

  const handleSubmitFile = async (e) => {
    const file = e.target.files[0];
    setFile(filet)
    const fileName = e.target.name;
    const fileRef = ref(storage, `imagenes/${businessName}/${fileName}`);
    console.log(`imagenes/${businessName}/${file.name}`);
    await uploadBytes(fileRef, file).then(async () => {
      await getDownloadURL(fileRef).then(async (url) => {
        await updateDoc(docRef, {
            [businessNameImages]:imagen.map(img=>img.nombre==fileName?{...img,url:url}:img)
        })
          .then(() => {
            toast.success("Imagen subida correctamente");
          })
          .catch((error) => {
            alert("Error al subir imagen, intente de nuevo");
            console.log(error);
          });
      });
    });
  };

  const handleDeleteImagen=(e)=> {
    e.preventDefault()
    const desertRef=ref(storage, imagen[e.target.id])
    console.log(imagen[e.target.id])
    deleteObject(desertRef)
  }

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
            {/* botonera */}
            <div className="flex flex-col z-50 bg-gray-50 rounded border  :bg-paleta-100 :text-white text-sm w-diez">
              <AcordionDiseños
                handleUpSelect={"handleUpSelect"}
                businessName={businessName}
                sytileInicial={sytileInicial}
                styles={styles}
                setStyles={setStyles}
              />

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

            <div className="flex flex-col w-full">
              <div
                style={{
                  background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
                }}
                className=" containerCarta  mx-auto rounded-lg grid  grid-cols-3 justify-items-auto justify-self-auto "
              >
                <div className="columnasMenus relative  flex flex-col">
                  <div className=" absolute peer  containerImagenIzquierda rounded-full">
                    <img
                    width={'300px'}
                    height="300px"
                      src={imagen?.find(img=>img.nombre=="imagen1")?.url}
                      alt=""
                      className="mb-4  objet-cover object-center w-full h-auto z-30  rounded-full "
                    />
                  </div>
                  <div className="peer-hover:flex hover:flex mx-auto group hidden md:left-5 top-5 absolute cursor-pointer z-50 bg-gray-700/80 p-1 rounded">
                    <label
                      htmlFor="imagen1"
                      name="imagen1"
                      className="scale-75 group-hover:block block cursor-pointer"
                    >
                      <FaEdit />
                      <input
                        // ref={filePickerRef}
                        id="imagen1"
                        type="file"
                        name="imagen1"
                        className="hidden"
                        onChange={handleSubmitFile}
                      />
                    </label>
                    <button 
                   id="imagen1"
                    onClick={handleDeleteImagen}
                    className="scale-75 group-hover:block block cursor-pointer">
                      <FaTimes id="imagen1" />
                    </button>
                  </div>
                  {/* Lista 1 */}

                  <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
                    {/* items lista 1 */}
                    <ul>
                      {items &&
                        items
                          ?.filter((items) => items.lista == 1)
                          .map((menu, index) => (
                            <li
                              key={index}
                              className=" text-left m-0 flex justify-between align-center px-5"
                            >
                              <div className="py-2  itemDescription ">
                                <p
                                  style={{ color: `${styles?.textColor1}` }}
                                  htmlFor="cantidadItems "
                                  className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
                                >
                                  {menu.nombre}
                                </p>
                                <div
                                  style={{ color: `${styles?.textColor2}` }}
                                  className="descriptionSpan font-medium text-gray-100   "
                                >
                                  {" "}
                                  {menu.descripcion}.
                                </div>
                              </div>
                              <div
                                style={{ color: `${styles?.textColor2}` }}
                                className="inline itemPrecio text-2xl text-center font-bold m-auto"
                              >
                                ${menu.precio}
                              </div>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
                <div className="columnasMenus relative  flex flex-col ">
                  <div className="titulo text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
                    <h1
                      style={{ color: `${styles?.textColor1}` }}
                      className="text-paleta-200  font-bold text-4xl italic"
                    >
                      {listadoItems?.businessName}
                    </h1>
                    <hr className="h-4 w-10/12 mx-auto my-2" />
                    <p
                      style={{ color: `${styles?.textColor2}` }}
                      className="text-white text-sm my-0"
                    >
                      {listadoItems?.descripcion || "Descripcion de la empresa"}
                    </p>
                    <div className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-10">
                      <span> • • </span>
                      <span> • • </span>
                      <span> • • </span>
                    </div>
                  </div>
                  {/* Lista 2 */}

                  <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
                    {/* items lista 2 */}
                    <ul>
                      {items &&
                        items
                          ?.filter((items) => items.lista == 2)
                          .map((menu, index) => (
                            <li
                              key={index}
                              className=" text-left m-0 flex justify-between align-center px-5"
                            >
                              <div className="py-2  itemDescription ">
                                <p
                                  style={{ color: `${styles?.textColor1}` }}
                                  htmlFor="cantidadItems "
                                  className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
                                >
                                  {menu.nombre}
                                </p>
                                <div
                                  style={{ color: `${styles?.textColor2}` }}
                                  className="descriptionSpan font-medium text-gray-100   "
                                >
                                  {" "}
                                  {menu.descripcion}.
                                </div>
                              </div>
                              <div
                                style={{ color: `${styles?.textColor2}` }}
                                className="inline itemPrecio text-2xl text-center font-bold m-auto"
                              >
                                ${menu.precio}
                              </div>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
                <div className="columnasMenus relative flex flex-col">
                  <div className=" absolute group peer containerImg  rounded-full ">
                    <img
                      src={imagen?.find(img=>img.nombre=="imagen2")?.url}
                      width={'300px'}
                      height="300px"
                      alt=""
                      className="mx-auto objet-cover object-center peer rounded-full "
                    />
                                </div>
                  <div className="peer-hover:flex hover:flex mx-auto group hidden md:left-12 top-5 absolute cursor-pointer z-50 bg-gray-700/80 p-1 rounded">
                    <label
                      htmlFor="imagen2"
                      name="imagen2"
                      className="scale-75 group-hover:block block cursor-pointer"
                    >
                      <FaEdit />
                      <input
                        // ref={filePickerRef}
                        id="imagen2"
                        type="file"
                        name="imagen2"
                        className="hidden"
                        onChange={handleSubmitFile}
                      />
                    </label>
                    <button 
                   id="imagen2"
                    onClick={handleDeleteImagen}
                    className="scale-75 group-hover:block block cursor-pointer">
                      <FaTimes id="imagen2" />
                    </button>
                  </div>
                  {/* Lista 3 */}

                  <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
                    {items &&
                      items
                        ?.filter((items) => items.lista == 3)
                        .map((menu, index) => (
                          <li
                            key={index}
                            className=" text-left m-0 flex justify-between align-center px-5"
                          >
                            <div className="py-2  itemDescription ">
                              <p
                                style={{ color: `${styles?.textColor1}` }}
                                htmlFor="cantidadItems "
                                className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
                              >
                                {menu.nombre}
                              </p>
                              <div
                                style={{ color: `${styles?.textColor2}` }}
                                className="descriptionSpan text-gray-100 font-medium  "
                              >
                                {" "}
                                {menu.descripcion}.
                              </div>
                            </div>
                            <div
                              style={{ color: `${styles?.textColor2}` }}
                              className="inline itemPrecio text-2xl text-center font-bold m-auto"
                            >
                              ${menu.precio}
                            </div>
                          </li>
                        ))}
                  </div>
                  <div className=" absolute group containerImgAbajo  rounded-full">
                    <div className="overflow-hidden mx-auto rounded-full mt-2">
                      <img
                        src={imagen?.find(img=>img.nombre=="imagen3")?.url}
                        height="100%"
                        width="100%"
                        alt=""
                        className="mx-auto objet-cover objet-center -translate-y-12 overflow-hidden rounded-full "
                      />
                    </div>
                    <div className="group-hover:flex hover:flex mx-auto group hidden md:left-1/2 top-8 absolute cursor-pointer z-50 bg-gray-700/80 p-1 rounded">
                    <label
                      htmlFor="imagen3"
                      name="imagen3"
                      className="scale-75 group-hover:block block cursor-pointer"
                    >
                      <FaEdit />
                      <input
                        // ref={filePickerRef}
                        id="imagen3"
                        type="file"
                        name="imagen3"
                        className="hidden"
                        onChange={handleSubmitFile}
                      />
                    </label>
                    <button 
                   id="imagen3"
                    onClick={handleDeleteImagen}
                    className="scale-75 group-hover:block block cursor-pointer">
                      <FaTimes id="imagen3" />
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

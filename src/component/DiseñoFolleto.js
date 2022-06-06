import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { db } from "./Firebase";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import ItemsMenu from "./ItemsMenu";

export default function DiseñoFolleto() {
  const [perfilCuenta, listadoItems] = useOutletContext();
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [previewURL3, setPreviewURL3] = useState(null);
  const [items, setItems] = useState(null);
  const [styles, setStyles] = useState({
    color1: "#2e2e2e",
    color2: "#271717",
    SelectionRange: 19,
    porcentaje: 0,
    porcentaje2: 92,
    textColor1: "#232323",
    textColor2: "#ffffff",
  });
  const docRef = doc(db, `listado/empresas/`);
  const businessName = listadoItems?.businessName;
  const [imagen, setImagenes] = useState({
    imagen1: "imagen1",
    imagen2: "url",
    imagen3: "url",
  });

  // const imagenes=perfilCuenta.images
  useEffect(() => {
    const cargarImagenes = async () => {
      const imagenes = await perfilCuenta.images;
      setImagenes({
        imagen1: imagenes?.find((imagen) => imagen.posicion === 1)?.url,
        imagen2: imagenes?.find((imagen) => imagen.posicion === 2)?.url,
        imagen3: imagenes?.find((imagen) => imagen.posicion === 3)?.url,
      });
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
  }, []);

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

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

  const handlePaletaColors = (e) => {
    e.preventDefault();
    setStyles({ ...styles, [e.target.name]: e.target.value });
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

  return (
    <div className="board min-h-full">
      <Toaster />
      <div className=" w-11/12 pl-6 px-4 mx-auto">
        <section className="perfilCuenta flex  bg-gray-100 dark:bg-gray-500 dark:bg-opacity-40 bg-opacity-60 backdrop-filter backdrop-blur-sm w-full  shadow-md border-2  dark:border-gray-600 text-medium  py-5 px-3 gap-2 rounded-lg">
          <div className="flex flex-col z-50 bg-gray-50 rounded border px-1 dark:bg-paleta-100 dark:text-white text-sm w-diez">
            <form className="flex flex-col gap-5 justify-around items-center ">
              <div className="flex flex-col gap-2  border-t-2 border-b-2 py-2 px-1 justify-center items-center">
                <label className="text-center text-paleta-100 font-bold border-b-2 w-full">
                  Paleta de colores
                </label>
                <div className="flex flex-col">
                  <div className=" flex flex-col  gap-2 justify-center items-center">
                    <input
                      name="color1"
                      type="color"
                      onChange={handlePaletaColors}
                      value={styles?.color1}
                      className="rounded-lg h-10 w-10 p-0.5 "
                    />
                    <label
                      for="default-range"
                      className=" mb-2 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300"
                    >
                      <input
                        name="porcentaje"
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-2 py-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-50"
                        value={styles?.porcentaje}
                        onChange={handlePaletaColors}
                      />
                      <div>
                        <input
                          name="porcentaje"
                          type="number"
                          className="w-1/4 text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase text-gray-900 dark:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
                          value={styles?.porcentaje}
                          onChange={handlePaletaColors}
                        />
                        <span className="text-xs">% de Color</span>
                      </div>
                    </label>
                  </div>
                  <div className=" flex flex-col  gap-2 justify-center items-center">
                    <input
                      name="color2"
                      value={styles?.color2}
                      type="color"
                      onChange={handlePaletaColors}
                      className="rounded-lg h-10 w-10 p-0.5 "
                    />
                    <label
                      for="default-range"
                      className=" mb-1 text-xs font-medium uppercase text-center text-gray-900 dark:text-gray-300"
                    >
                      <input
                        name="porcentaje2"
                        type="range"
                        min="0"
                        max="100"
                        className="w-full h-2 py-1.5 bg-gray-400  bg-opacity-20 rounded-lg appearance-none cursor-pointer dark:bg-gray-50"
                        value={styles?.porcentaje2}
                        onChange={handlePaletaColors}
                      />
                      <div className="flex ">
                        <input
                          name="porcentaje2"
                          type="number"
                          className="w-1/4 bg-transparent text-right  text-xs font-medium uppercase text-gray-900 dark:text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
                          value={styles?.porcentaje2}
                          onChange={handlePaletaColors}
                        />
                        <span className="text-xs">% de Color</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3  border-b-2 py- px-1 justify-center items-center">
                <label  className="text-center font-medium text-xs w-full">
                  Angulo de Degradado
                </label>
                <div className="flex flex-col  gap-1 justify-center items-center  ">
                  <input
                    name="SelectionRange"
                    type="range"
                    min="5"
                    max="360"
                    className="w-full h-2 py-1.5 bg-gray-400  bg-opacity-20 rounded-lg appearance-none cursor-pointer dark:bg-gray-50"
                    onChange={handlePaletaColors}
                  />
                  <div className="flex justify-center items-center">
                    <input
                      name="SelectionRange"
                      type="number"
                      className="w-1/6  text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase  text-gray-900 dark:text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent"
                      value={styles?.SelectionRange}
                      onChange={handlePaletaColors}
                    />
                    <span className="text-xl font-bold">°</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-xs border-b-2 justify-center items-center">
                <label  className="text-center text-paleta-100 font-bold border-b-2 pb-1 text-sm w-full" >
                  Paleta de colores Textos
                </label>
                <div className="flex flex-col justify-center gap-2 items-center ">
                  <div className=" flex flex-col gap-2 justify-center items-center">
                    <input
                      name="textColor1"
                      type="color"
                      onChange={handlePaletaColors}
                      value={styles?.textColor1}
                      className="rounded-lg h-10 w-10 p-0.5 "
                    />
                    <label
                     className="text-center text-paleta-100 font-bold w-full">
                      Color de los Titulos
                    </label>
                  </div>
                  <div className=" flex flex-col gap-2 justify-center items-center">
                    <input
                      name="textColor2"
                      value={styles?.textColor2}
                      type="color"
                      onChange={handlePaletaColors}
                      className="rounded-lg h-10 w-10 p-0.5 "
                    />
                    <label
                      for="default-range"
                      className="text-center text-paleta-100 font-bold  w-full">
                      Color de Textos
                    </label>
                  </div>
                </div>
              </div>

              <button
                 className={`uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 p-1.5 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `}
                 
                onClick={handleStyleFolleto}
              >
                aplicar estilos
              </button>
            </form>
          </div>

          {/* empieza folleto */}
          <div
            style={{
              background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
            }}
            className=" containerCarta  mx-auto rounded-lg grid gap-4 grid-cols-3 justify-items-center justify-self-stretch  "
          >
            <div className="columnasMenus  w-1/3   flex flex-col">
              {!imagen?.imagen1 ? (
                <div className="rounded-full objet-cover  ">
                  {previewURL ? (
                    <div className=" absolute containerImagenIzquierda rounded-full">
                      <img
                        src={previewURL}
                        alt=""
                        width="100%"
                        height="auto"
                        className="mb-4 relative rounded-full "
                      />
                    </div>
                  ) : (
                    <form className=" relative top-0 w-full h-1/2  rounded-full">
                      <label
                        htmlFor="subirArchivo"
                        className="bg-paleta-100 absolute z-50"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <div className="py-3 animate-bounce duration-300">
                            {/* <FcUpload className="text-4xl" /> */}
                          </div>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click para seleccionar archivo
                            </span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          accept="image/*"
                          id="subirArchivo"
                          type="file"
                          name="subirArchivo"
                          className="hidden"
                          onChange={handleUpSelect}
                        />
                      </label>
                    </form>
                  )}
                </div>
              ) : (
                <div className=" absolute containerImagenIzquierda rounded-full">
                  <img
                    src={imagen?.imagen1}
                    alt=""
                    className="mb-4 objet-cover  rounded-full "
                  />
                </div>
              )}

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
            <div className="columnasMenus  w-1/3  flex flex-col ">
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
            <div className="columnasMenus  w-1/3 flex flex-col">
              {!imagen?.imagen2 ? (
                <div className="rounded-full objet-cover  ">
                  {previewURL2 ? (
                    <div className=" absolute containerImg  rounded-full ">
                      <img
                        src={previewURL2}
                        alt=""
                        width="100%"
                        height="auto"
                        className="mx-auto objet-cover  rounded-full "
                      />
                    </div>
                  ) : (
                    <form className=" relative top-0 right-0 w-full h-1/2  rounded-full">
                      <label
                        htmlFor="subirArchivo2"
                        className="bg-paleta-100 absolute z-50"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <div className="py-3 animate-bounce duration-300">
                            {/* <FcUpload className="text-4xl" /> */}
                          </div>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click para seleccionar archivo
                            </span>
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          accept="image/*"
                          id="subirArchivo2"
                          type="file"
                          name="subirArchivo"
                          className="hidden"
                          onChange={handleUpSelect2}
                        />
                      </label>
                    </form>
                  )}
                </div>
              ) : (
                <div className=" absolute containerImg  rounded-full ">
                  <img
                    src={imagen?.imagen2}
                    height="100%"
                    width="100%"
                    alt=""
                    className="mx-auto objet-cover  rounded-full "
                  />
                </div>
              )}

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
              <div className=" absolute containerImgAbajo rounded-full">
                {!imagen?.imagen3 ? (
                  <div className="rounded-full objet-cover absolute w-full right-0  ">
                    {previewURL3 ? (
                      <img
                        src={previewURL3}
                        alt=""
                        width="100%"
                        height="auto"
                        className="mb-4 objet-cover  rounded-full "
                      />
                    ) : (
                      <form className=" absolute bottom-0 right-0 w-full h-1/2  rounded-full">
                        <label
                          htmlFor="subirArchivo3"
                          className="bg-paleta-100 absolute z-50"
                        >
                          <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <div className="py-3 animate-bounce duration-300">
                              {/* <FcUpload className="text-4xl" /> */}
                            </div>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click para seleccionar archivo
                              </span>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            accept="image/*"
                            id="subirArchivo3"
                            type="file"
                            name="subirArchivo"
                            className="hidden"
                            onChange={handleUpSelect3}
                          />
                        </label>
                      </form>
                    )}
                  </div>
                ) : (
                  <img
                    src={imagen?.imagen3}
                    height="100%"
                    width="100%"
                    alt=""
                    className="mb-4 objet-cover  rounded-full "
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

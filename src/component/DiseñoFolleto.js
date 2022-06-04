import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { HexColorPicker } from "react-colorful";
import { db } from "./Firebase";
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function DiseñoFolleto() {
  const [perfilCuenta, listadoItems] = useOutletContext();
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [previewURL3, setPreviewURL3] = useState(null);
  const [color1, setColor1] = useState("#2e2e2e");
  const [color2, setColor2] = useState("#271717");
  const [SelectionRange, setSelectionRange] = useState(19);
  const [porcentaje, setPorcentaje] = useState(0);
  const [porcentaje2, setPorcentaje2] = useState(92);
  const docRef = doc(db, `listado/empresas/`);
  const businessName=listadoItems?.businessName
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
  {
    /* enviar estilos personalizados */
  }
  const handleStyleFolleto =async (e) => {
e.preventDefault()
const referencedBusinessName=businessName+"."+"styles"
await updateDoc(docRef, {
[referencedBusinessName]:{
  color1: color1,
  color2: color2,
  SelectionRange: SelectionRange,
  porcentaje: porcentaje,
  porcentaje2: porcentaje2,
  textColor: '#232323',
}})}

  return (
    <div className="board min-h-full">
      <div className=" w-5/6 mx-auto">
        <section className="perfilCuenta  bg-gray-100 dark:bg-gray-500 dark:bg-opacity-40 bg-opacity-60 backdrop-filter backdrop-blur-sm w-full  shadow-md border-2 border dark:border-gray-600 text-medium  py-5 rounded-lg">
          <div className="flex w-full">
            <form className="w-full flex justify-around items-center py-3">
                <div className="flex flex-col justify-center items-center">
                <label className="text-center w-full">Paleta de colores</label>
              <div className="flex">
              <div className=" flex flex-col gap-2 justify-center items-center">
               
                <input
                  name="color1"
                  type="color"
                  onChange={(e) => {
                    setColor1(e.target.value);
                  }}
                  value={color1}
                  className="rounded-lg h-10 w-10 p-0.5 "
                />
                 <label for="default-range" className="w-2/4 mb-2 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300">
                <input
                  name="color1"
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 py-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-50"
                  value={porcentaje}
                  onChange={(e) => {
                    setPorcentaje(e.target.value);
                  }}
                />
                <div>
                 <input 
              type="number"
              className="w-1/4 text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
              value={porcentaje}
              onChange={(e) => {  setPorcentaje(e.target.value); }}
              />
              <span>% de Color</span>
              </div>
                </label>
              </div>
              <div className=" flex flex-col gap-2 justify-center items-center">
                
                <input
                  name="color2"
                  value={color2}
                  type="color"
                  onChange={(e) => {
                    setColor2(e.target.value);
                  }}
                  className="rounded-lg h-10 w-10 p-0.5 "
                />
                <label for="default-range" className="w-2/4 mb-2 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300">
                <input
                  name="color2"
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2 py-1.5 bg-gray-200 bg-opacity-20 rounded-lg appearance-none cursor-pointer dark:bg-gray-50"
                  value={porcentaje2}
                  onChange={(e) => {
                    setPorcentaje2(e.target.value);
                  }}
                />
              <div className="flex ">
              <input 
              type="number"
              className="w-1/4 bg-transparent text-right mx-0 px-0 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
              value={porcentaje2}
              onChange={(e) => {  setPorcentaje2(e.target.value); }}
              />
              <span>% de Color</span>
              </div>
              </label>
              </div>
              </div>
              </div>
              <div className="flex flex-col uppercase font-medium"> 
              <label htmlFor="rango">angulo de degradado</label>
              <div className="flex" >
              <input
              name="rango"
                type="range"
                min="5"
                max="360"
                onChange={(e) => {
                  setSelectionRange(e.target.value);
                }}
              />
               <div className="flex ">
              <input 
              type="number"
              className="w-1/6 text-right bg-transparent mx-0 px-0 text-sm font-medium uppercase text-center text-gray-900 dark:text-gray-300  focus:outline-none focus:ring-2 focus:ring-paleta-600 rounded-lg focus:border-transparent
              "
              value={SelectionRange}
              onChange={(e) => {  setSelectionRange(e.target.value); }}
              />
              <span className="text-xl font-bold">°</span>
              </div>
              </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm py-2 px-4 rounded-lg"
                onClick={handleStyleFolleto}
              >
                aplicar estilos
              </button>
            </form>
          </div>

          {/* empieza folleto */}
          <div
            style={{
              background: `linear-gradient(${SelectionRange}deg ,${color1} ${porcentaje}%, ${color2} ${porcentaje2}%) `,
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
                {listadoItems?.items
                  ?.filter((item) => item.lista === "2")
                  .map((item) => (
                    <div className="flex flex-col justify-center items-center">
                      {item.nombre}
                    </div>
                  ))}
              </div>
            </div>
            <div className="columnasMenus  w-1/3  flex flex-col ">
              <div className="titulo text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
                <h1 className="text-paleta-200  font-bold text-4xl italic">
                  {listadoItems?.businessName}
                </h1>
                <hr className="h-4 w-10/12 mx-auto my-2" />
                <p className="text-white text-sm my-0">
                  {listadoItems?.descripcion || "Descripcion de la empresa"}
                </p>
                <div className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-10">
                  <span> • • </span>
                  <span> • • </span>
                  <span> • • </span>
                </div>
              </div>
              {/* Lista 2 */}

              <div className="menuLista text-white  text-left Hamburguesas primerColumna  "></div>
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

              <div className="menuLista text-white  text-left Hamburguesas primerColumna  "></div>
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

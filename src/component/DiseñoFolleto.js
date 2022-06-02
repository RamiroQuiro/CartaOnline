import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import FolletosItems from "./FolletosItems";

export default function DiseñoFolleto() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [previewURL2, setPreviewURL2] = useState(null);
  const [previewURL3, setPreviewURL3] = useState(null);

  const [imagen, setImagenes] = useState({
    imagen1: "imagen1",
    imagen2: "url",
    imagen3: "url",
  });
  const [perfilCuenta, listadoItems] = useOutletContext();
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

  return (
    <div className="board min-h-full">
      <div className=" w-5/6 mx-auto">
        <section className="perfilCuenta  inventarioComidas w-full  shadow-md border-2 border text-medium  py-5 rounded-lg">
          <div className=" containerCarta  mx-auto rounded-lg grid gap-4 grid-cols-3 justify-items-center justify-self-stretch  ">
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
                {
                  listadoItems?.items?.filter((item) => item.lista === "2").map((item) => (
                      <div className="flex flex-col justify-center items-center">
                        {item.nombre}
                      </div>
                  ))
                }
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
              {
                !imagen?.imagen3 ? (
                  
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

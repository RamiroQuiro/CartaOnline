import React from 'react'
import { FaEdit, FaTimes } from "react-icons/fa";

export default function ModeloOriginal({styles,imagen,handleDeleteImagen,handleSubmitFile,listadoItems,items,categorias}) {
  return (
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
                      width={"300px"}
                      height="300px"
                      src={imagen?.find((img) => img.nombre == "imagen1")?.url}
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
                      className="scale-75 group-hover:block block cursor-pointer"
                    >
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

                  <div className="menuLista text-white flex flex-col justify-around items-center text-left Hamburguesas primerColumna  ">
                    {/* items lista 2 */}
                    <h3
                      style={{ color: `${styles?.textColor1}` }}
                      className="text-xl text-center w-6/12 font-medium bg-gray-500 px-4 py-1 rounded-lg"
                    >
                      {categorias[0]}
                    </h3>
                    <ul>
                      {items &&
                        items
                          ?.filter((items) => items.categoria == categorias[0])
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
                      src={imagen?.find((img) => img.nombre == "imagen2")?.url}
                      width={"300px"}
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
                      className="scale-75 group-hover:block block cursor-pointer"
                    >
                      <FaTimes id="imagen2" />
                    </button>
                  </div>
                  {/* Lista 3 */}

                  <div className="menuLista text-white  text-left Hamburguesas primerColumna  ">
                    <h3>categoria {categorias[0]}</h3>
                    {items &&
                      items
                        ?.filter((items) => items.categoria == categorias[-1])
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
                        src={
                          imagen?.find((img) => img.nombre == "imagen3")?.url
                        }
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
                        className="scale-75 group-hover:block block cursor-pointer"
                      >
                        <FaTimes id="imagen3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import React, {  useEffect, useState } from "react";
import toast, {  Toaster } from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import pensando from "../../img/pensando.png";
import "./pageItems.css";
import { db } from "../Firebase";
import { useContexto } from "../contexto/ContextProvider";
import ModalNewItems from "../modal/ModalNewItems";
import ModalNewCategory from "../modal/ModalNewCategory";

export default function PageItems() {
  const { eliminarItems, eliminarCategory } = useContexto();
  const [listadoItems, perfilUser,movil,docRefCategorias ] = useOutletContext();
  const [habilitarEdicion, setHabilitarEdicion] = useState(false);

  const [itemsState, setItemsState] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const docRef = doc(db, `listado/empresas/`);
  const businessName = docRefCategorias


  useEffect(() => {
    const category = () => {
      if (listadoItems) {
        const array = listadoItems?.categorias;
        if (array) {
          const obj = Object.keys(array);
          setCategorias(obj);
        }
      }
    };
    category();
  }, [listadoItems]);

  const handleDeleteItems = (productID, categoria) => {
    eliminarItems(
      listadoItems?.categorias?.[categoria].find(
        (items) => items.productID === productID
      ),
      categoria
    );
  };
  const handleDeleteCategory = (categoria) => {
    delete listadoItems?.categorias?.[categoria];
    const newObject = listadoItems?.categorias;
    eliminarCategory(newObject);
  };

  // traer y remover el objeto del array .listado
  const handleEditItems = async (e) => {
    e.preventDefault();
    setHabilitarEdicion(!habilitarEdicion);
  };
  const handleSelecciondeItems = async (productID, categoria) => {
    const data = await getDoc(docRef);
    const buscado = data
      .data()
      [businessName].categorias?.[categoria]?.find(
        (items) => items.productID === productID
      );
    setItemsState(buscado);
  };

  const handleChangeData = async (categoria) => {
    const referencedBusinessName = `${businessName}.categorias.${categoria}`;

    await updateDoc(docRef, {
      [referencedBusinessName]: listadoItems?.categorias?.[categoria]?.map(
        (items) =>
          items.productID === itemsState.productID
            ? {
                ...items,
                active: itemsState.active,
                nombre: itemsState.nombre,
                precio: itemsState.precio,
                descripcion: itemsState.descripcion,
                categoria: itemsState.categoria,
                productID: itemsState.productID,
              }
            : items
      ),
    }).then(() => {
      toast.success("Actualizado");
    });
    setHabilitarEdicion(!habilitarEdicion);
  };

  const handleOnChange = (e) => {
    setItemsState({
      ...itemsState,
      [e.target.name]: e.target.value,
      active: e.target.checked,
    });
  };

  return (
    <div className="board min-h-screen">
      <div className="  md:w-10/12 mx-auto pt-8 md:pt-0 flex flex-col  md:flex-row gap-5">
        <section className="bg-gray-200/60 backdrop-blur-sm   w-full h-full  shadow-md border-2 text-medium px-1 md:px-5 py-5 rounded md:rounded-lg">
          <div className="flex flex-col md:flex-row  mx-auto gap-4 lg:py-8 justify-around lg:px-15">
            <div className="  bg-gray-200/90 w-full  duration-300 shadow-md border-2  text-medium px-2 md:px-5 py-5 rounded-lg">
              <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between md:items-center mb-6">
                <h2 className="font-medium text-gray-700 text-lg md:text-xl">
                  Lista de Productos
                </h2>
                <button
                  onClick={() => setEstadoModal(!estadoModal)}
                  className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
                >
                  Crear Categorias
                </button>
                {estadoModal && (
                  <ModalNewCategory
                    categorias={categorias}
                    estado={estadoModal}
                    setEstadoModal={setEstadoModal}
                  />
                )}
                <button
                  onClick={() => setEstadoModal2(!estadoModal2)}
                  className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
                >
                  Crear Items
                </button>
              </div>
              {estadoModal2 && (
                <ModalNewItems
                  categorias={categorias}
                  estado={estadoModal2}
                  setEstadoModal={setEstadoModal2}
                />
              )}

              {!categorias ? (
                <div className="flex justify-center items-center h-full">
                  <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
                    cargando items...
                  </td>
                  <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
                    cargando items...
                  </td>
                  <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
                    cargando items...
                  </td>
                  <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
                    cargando items...
                  </td>
                </div>
              ) : (
                <>
                  <table className="w-full text-sm text-left text-gray-400 ">
                  <thead className="text-xs w-full text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className="bg-gray-500  ">
                        <th scope="col" className="px-2 py-1.5">
                          Items
                        </th>
                        <th scope="col" className="px-2 text-center py-1.5">
                          Precio
                        </th>
                        <th scope="col" className="px-2 text-center py-1.5">
                          Estado
                        </th>
                        <th scope="col" className="px-2 text-center">
                          Accion
                        </th>
                      </tr>
                    </thead>

                    {categorias?.map((categoria, i) => (
                      <>
                        {" "}
                        <div className="bg-paleta-600/50 group px-2 py-1 text-sm flex justify-between items-center  mt-3 rounded-t-lg text-bold text-gray-800 font-medium cursor-pointer border-blue-400 hover:bg-paleta-300/80  uppercase">
                          <h3>{categoria}</h3>
                          <span
                            onClick={() => handleDeleteCategory(categoria)}
                            className="text-xs text-gray-600 invisible group-hover:visible"
                          >
                            x
                          </span>
                        </div>
                        <tbody className="" key={i}>
                          {listadoItems?.categorias?.[categoria].map(
                            (lista, iItems) => (
                              <tr
                                onClick={() =>
                                  handleSelecciondeItems(
                                    lista.productID,
                                    categoria
                                  )
                                }
                                key={iItems}
                                className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50"
                      >
                                <td
                                  scope="row"
                                  className=" px-4 py-2 font- text-gray-900  whitespace-nowrap"
                                >
                                  {lista.nombre}
                                </td>
                                <td className="px-2 text-center py-2">
                                  {" "}
                                  ${lista.precio}
                                </td>
                                <td
                                  className={
                                    lista.active
                                      ? "px-2 text-center text-xs text-green-400  py-2"
                                      : "px-2 text-center text-xs text-red-400  py-2"
                                  }
                                >
                                  {" "}
                                  {lista.active ? "activo" : "inactivo"}
                                </td>
                                <td className=" text-xs  text-center text-blue-400">
                                  <button
                                    onClick={() =>
                                      handleDeleteItems(
                                        lista.productID,
                                        categoria
                                      )
                                    }
                                  >
                                    eliminar
                                  </button>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </>
                    ))}
                  </table>
                </>
              )}
            </div>
            <div className="  bg-gray-200/90 w-full  duration-300 shadow-md border-2  text-medium px-2 md:px-5 py-5 rounded-lg">
              <h2 className="font-bold text-gray-700 text-2xl text-center">
                Detalle de Items
              </h2>
              {!itemsState ? (
                <div>
                  <img src={pensando} />
                </div>
              ) : (
                <div className="cardFood-container shadow-md  text-gray-700 font-medium h-96 bg-white md:w-8/12 w-11/12 max-w-11/12 mx-auto flex flex-col justify-between rounded z-50 overflow-y-auto">
                  <div className="cardFood-bgArriba h-2/3 flex justify-center px-4 items-center">
                    {!habilitarEdicion ? (
                      <h1 className="text-4xl break-words text-white uppercase font-medium bg-gray-800 rounded-r-lg border-r-8 border-paleta-600 bg-opacity-80 px-2 py-2">
                        {itemsState?.nombre}
                      </h1>
                    ) : (
                      <input
                        className="text-4xl w-full break-words text-gray-700 uppercase font-medium bg-gray-200 rounded-r-lg border-r-8 border-paleta-600 bg-opacity-80 px-2 py-2"
                        name="nombre"
                        value={itemsState?.nombre}
                        onChange={handleOnChange}
                      />
                    )}
                  </div>

                  <div className="cardFood-footer w-full py-10 px-5 mt-5 h-2/4">
                    {!habilitarEdicion ? (
                      <div className="text  flex gap-3 my-2 justify-between">
                        <h2>💲{itemsState?.precio}</h2>
                        <div className="inline-block flex flex-col justify-between ">
                          <label
                            htmlFor="orange-toggle"
                            className="relative inline-flex items-center  cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={itemsState.active}
                              name="active"
                              id="orange-toggle"
                              className="sr-only peer"
                            />
                            <div className="w-10 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                            <span className="ml-3 text-sm font-medium  peer-checked:text-gray-900 text-gray-500">
                              Activo
                            </span>
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="text flex gap-3 my-2 justify-between w-full ">
                        <input
                          className="bg-gray-200  px-2 py-1 rounded w-full focus:none font-medium text-gray-800  outline-none"
                          name="precio"
                          value={`${itemsState?.precio}`}
                          onChange={handleOnChange}
                        />

                        <div className="flex flex-col justify-between ">
                          <label
                            htmlFor="orange-toggle"
                            className="relative inline-flex items-center  cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={itemsState.active}
                              name="active"
                              id="orange-toggle"
                              className="sr-only peer"
                              onChange={handleOnChange}
                            />
                            <div className="w-10 h-5 mx-auto bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                            <span className="ml-3 text-sm font-medium peer-checked:font-bold peer-checked:text-gray-900 text-gray-300">
                              Activo
                            </span>
                          </label>
                        </div>
                      </div>
                    )}
                    {!habilitarEdicion ? (
                      <p className="break-all">{itemsState?.descripcion}</p>
                    ) : (
                      <textarea
                        className="bg-gray-200 break-all  px-2 py-1 rounded w-full focus:none font-medium text-gray-800  outline-none"
                        onChange={handleOnChange}
                        name="descripcion"
                        value={itemsState?.descripcion}
                      ></textarea>
                    )}
                  </div>
                </div>
              )}
              {itemsState && (
                <button
                  className="  uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 w-2/6 mx-auto mt-4 px-5 py-2"
                  onClick={
                    !habilitarEdicion
                      ? handleEditItems
                      : () => handleChangeData(itemsState.categoria)
                  }
                >
                  {!habilitarEdicion ? "Editar Datos" : "Actualizar Datos"}
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </div>
  );
}

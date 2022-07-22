import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import toast, { LoaderIcon, Toaster } from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import pensando from "../../img/pensando.png";
import { Auth } from "../contexto/AuthContext";
import "./pageItems.css";
import { db } from "../Firebase";
import { useContexto } from "../contexto/ContextProvider";
import ModalNewItems from "../modal/ModalNewItems";

export default function PageItems() {
  const {eliminarItems}=useContexto()
  const [listadoItems, perfilUser] = useOutletContext();
  const [habilitarEdicion, setHabilitarEdicion] = useState(false);
  const [itemsState, setItemsState] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [check,setCheck] = useState(true);
  const docRef = doc(db, `listado/empresas/`);
  const businessName=perfilUser?.businessName
  
  const handleDeleteItems=(productID)=>{
    eliminarItems(listadoItems.items?.find(items=>items.productID===productID))
  }
  //  eliminarItems(listadoItems?.find(items=>items.productID===productID))
   
  // traer y remover el objeto del array .listado
  const handleEditItems =async (e) => {
    e.preventDefault();
    setHabilitarEdicion(!habilitarEdicion);
  };
  const handleSelecciondeItems = async (productID) => {
    const data = await getDoc(docRef);
    const buscado = data.data()[businessName]
    .items?.find((items) => items.productID === productID);
    setItemsState(buscado);
    setCheck(itemsState?.active,);
  };

  const handleChangeData = async (e) => {
    e.preventDefault();
    const referencedBusinessName=businessName+"."+"items"
    await updateDoc(docRef,{[referencedBusinessName]:listadoItems?.items?.map(items=>
      items.productID===itemsState.productID?
      {...items,
        active:itemsState.active,
        nombre:itemsState.nombre,
        precio:itemsState.precio,
        descripcion:itemsState.descripcion,
        lista:itemsState.lista,
        productID:itemsState.productID,
      }
      :items)})
    setHabilitarEdicion(!habilitarEdicion);
  };

  const handleOnChange = (e) => {
    setItemsState({ ...itemsState, [e.target.name]: e.target.value ,active:e.target.checked});
  };

  const handlecheck=({target:{checked}})=>{
    setCheck(checked)
    setItemsState({...itemsState,active:checked})
  }

  return (
    <div className="board min-h-screen">
      <div className=" w-5/6 mx-auto  h-full">
        <section className="perfilCuenta  inventarioComidas w-full h-full  shadow-md border-2 border text-medium px-5 py-5 rounded-lg">
          <div className="flex  mx-auto gap-4 lg:py-8 justify-around lg:px-15">
            <div className="perfilCuenta  inventarioComidas w-full   duration-300 shadow-md border-2 border text-medium px-5 py-5 rounded-lg">
              <div className="head mb-6   ">
                <h2 className="font-bold text-gray-700 text-2xl">
                  Lista de Productos
                </h2>
                <button
                  onClick={() => setEstadoModal(!estadoModal)}
                  className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
                >
                  Crear Items
                </button>
              </div>
              {estadoModal && (
                <ModalNewItems
                  estado={estadoModal}
                  setEstadoModal={setEstadoModal}
                />
              )}
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-gray-400 dark:bg-gray-700  ">
                    <th scope="col" className="px-6 py-3">
                      Items
                    </th>
                    <th scope="col" className="px-6 text-center py-3">
                      Lista
                    </th>
                    <th scope="col" className="px-6 text-center py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 text-center">
                      Accion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                  !listadoItems?
                  <tr className="flex justify-center items-center h-full">
                    <td className="w-full text-center text-gray-500 dark:text-gray-400">loading...</td>
                    <td className="w-full text-center text-gray-500 dark:text-gray-400">loading...</td>
                    <td className="w-full text-center text-gray-500 dark:text-gray-400">loading...</td>
                    <td className="w-full text-center text-gray-500 dark:text-gray-400">loading...</td>
                    
                  </tr>
                  :
                  listadoItems?.items?.map((lista) => (
                    <tr
                      onClick={(productID) =>
                        handleSelecciondeItems(lista.productID)
                      }
                      key={lista.productID}
                      className="bg-white border-b cursor-pointer border-blue-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td
                        scope="row"
                        className=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        {lista.nombre}
                      </td>
                      <td className="px-6 text-center py-4"> {lista.lista}</td>
                      <td className={lista.active? "px-6 text-center text-xs text-green-400  py-4": "px-6 text-center text-xs text-red-400  py-4"}> {lista.active? 'activo': 'inactivo'}</td>
                      <td className=" text-xs  text-center text-blue-400">
                        <button
                          onClick={(productID) =>
                            handleDeleteItems(lista.productID)
                          }
                        >
                          eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="perfilCuenta  inventarioComidas w-full   duration-300 shadow-md border-2 border text-medium px-5 py-5 rounded-lg mx-auto flex flex-col gap-3">
              <h2 className="font-bold text-gray-700 text-2xl text-center">
                Detalle de Items
              </h2>
              {!itemsState ? (
                <div>
                  <img src={pensando} />
                </div>
              ) : (
         
                <div className="cardFood-container shadow-md  text-gray-700 font-medium h-96 bg-white w-8/12 max-w-11/12 mx-auto flex flex-col justify-between rounded z-50 overflow-y-auto">
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
                        <h2>🗒Lista {itemsState?.lista}</h2>{" "}
                        <div className="inline-block flex flex-col justify-between ">
                          <label
                            htmlFor="orange-toggle"
                            className="relative inline-flex items-center  cursor-pointer"
                          >
                            <input
                               type="checkbox"
                               onChange={handlecheck}
                               name="active"
                              id="orange-toggle"
                              className="sr-only peer"
                              checked={itemsState?.active}
                            />
                            <div className="w-10 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                            <span className="ml-3 text-sm font-medium  peer-checked:text-gray-900 text-gray-500" >
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
                      <div className=" flex flex-col justify-center  w-1/2">
                         <label
                           htmlFor="lista"
                              className="bg-gray-200  px-2 py-1 rounded w-full focus:none font-medium text-gray-800  outline-none"
                         >
                         </label>
                         <select
                           name="lista"
                           value={itemsState.lista}
                           onChange={handleOnChange}
                           className="bg-gray-200  px-2 py-1 rounded gap-2 rounded focus:none font-medium text-gray-800  outline-none"
                         >
                           <option value="1">Lista 1</option>
                           <option value="2">Lista 2</option>
                           <option value="3">Lista 3</option>
                         </select>
                       </div>
                        <div className="inline-block flex flex-col justify-between ">
                          <label
                            htmlFor="orange-toggle"
                            className="relative inline-flex items-center  cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={itemsState?.active}
                              onChange={handleOnChange}
                              id="orange-toggle"
                              className="sr-only peer"
                              
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
                    <p className="break-all">{itemsState?.descripcion}</p>):(
                    
                    <textarea className="bg-gray-200 break-all  px-2 py-1 rounded w-full focus:none font-medium text-gray-800  outline-none"  onChange={handleOnChange} name="descripcion" value={itemsState?.descripcion}></textarea>
                    )}
                  </div>
                </div>
              )}
              {itemsState&&
              <button
                className="  uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 w-2/6 mx-auto mt-4 px-5 py-2"
                onClick={!habilitarEdicion ? handleEditItems : handleChangeData}
              >
                {!habilitarEdicion ? "Editar Datos" : "Actualizar Datos"}
              </button>}
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </div>
  );
}

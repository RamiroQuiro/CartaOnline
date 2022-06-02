import React, { useEffect, useState } from "react";
import "./inventarioProductos.css";
import ModalNewItems from "./ModalNewItems";

export default function InventarioProductos({
  listadoItems,
  handleDeleteItems,
}) {
  const [estadoModal, setEstadoModal] = useState(false);

  return (
    <section className="inventarioComidas w-full hover:-translate-y-2 cursor-pointer duration-300 shadow-md   border border-2  row-span-3 text-medium px-5 p-4 rounded-lg">
      <div className="head mb-6   ">
        <h2 className="font-bold text-gray-700 text-2xl">
          Lista de Productos Activos
        </h2>
        <button
          onClick={() => setEstadoModal(!estadoModal)}
          className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >
          Crear Items
        </button>
      </div>
      {estadoModal && (
        <ModalNewItems estado={estadoModal} setEstadoModal={setEstadoModal} />
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
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 text-center py-3">
              {" "}
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
          listadoItems?.items
            ?.filter((item) => item.active === true)
            .map((lista) => (
              <tr
                key={lista.productID}
                className="bg-white border-b border-blue-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  scope="row"
                  className=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {lista.nombre}
                </td>
                <td className="px-6 text-center py-4"> {lista.lista}</td>
                <td className="px-6 py-4"> $ {lista.precio}</td>
                <td className=" py-4 text-xs text-center mx-auto text-blue-400">
                  <button
                    onClick={(productID) => handleDeleteItems(lista.productID)}
                  >
                    eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

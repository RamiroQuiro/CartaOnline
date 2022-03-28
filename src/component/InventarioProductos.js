import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./inventarioProductos.css";
import NewItems from "./NewItems";



export default function  InventarioProductos() {



  return (
    <section className="inventarioComidas w-full hover:shadow-lg duration-500 shadow-md border border-2  row-span-3 text-medium px-5 py-5 rounded-lg">
      <div className="head mb-6   ">
        <h2 className="font-bold text-gray-700 text-2xl">Lista de Productos</h2>
        <Link 
        to={<NewItems/>}
        type="button"
        className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-gray-100 hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2">Crear Items</Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-gray-400  ">
            <th scope="col" class="px-6 py-3">
              Items
            </th>
            <th scope="col" class="px-6 text-center py-3">
              Lista
            </th>
            <th scope="col" class="px-6 py-3">
              Precio
            </th>
            <th scope="col" class="px-6 py-3">
              {" "}
              Accion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-blue-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td
              scope="row"
              class=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Hamburguesas
            </td>
            <td className="px-6 text-center py-4">1</td>
            <td className="px-6 py-4">$50</td>
            <td className=" py-4 text-xs">editar | eliminar</td>
          </tr>
          <tr className="bg-white border-b border-blue-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td
              scope="row"
              class=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Hamburguesas
            </td>
            <td className="px-6 text-center py-4">1</td>
            <td className="px-6 py-4">$50</td>
            <td className=" py-4 text-xs">editar | eliminar</td>
          </tr>
          <tr className="bg-white border-b border-blue-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td
              scope="row"
              class=" px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Hamburguesas
            </td>
            <td className="px-6 text-center py-4">1</td>
            <td className="px-6 py-4">$50</td>
            <td className=" py-4 text-xs">editar | eliminar</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

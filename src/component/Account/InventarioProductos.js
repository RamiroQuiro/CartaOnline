import React, { useEffect, useState } from "react";
import ModalNewItems from "../modal/ModalNewItems";
import ModalNewCategory from "../modal/ModalNewCategory";
import "./inventarioProductos.css";
export default function InventarioProductos({
  listadoItems,
  handleDeleteItems,
}) {
  const [estadoModal, setEstadoModal] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [categorias, setCategorias] = useState(null);
  
  useEffect(() => {
    const category = () => {
      if (listadoItems) {
        const array=listadoItems?.categorias
        if (array) {
          const obj = Object.keys(array);
          setCategorias(obj);
        }
      }
    };
    category();
  }, [listadoItems]);

  return (
    <section className="inventarioComidas w-full hover:-translate-y-2 cursor-pointer duration-300 shadow-md    border-2  row-span-3 text-medium px-5 p-4 rounded-lg">
      <div className="head mb-6   ">
        <h2 className="font-bold text-gray-700 text-2xl">
          Lista de Productos Activos
        </h2>
        <button
          onClick={() => setEstadoModal(!estadoModal)}
          className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >
          Crear Categoria
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
            loading...
          </td>
          <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
            loading...
          </td>
          <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
            loading...
          </td>
          <td className="w-full text-center bg-gray-500 animate-pulse dark:text-gray-400">
            loading...
          </td>
        </div>
      ) : (
        <>
         <table
                className="w-full text-sm text-left text-gray-400"
              >
          <thead className="text-xs w-full text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-gray-500  ">
              <th scope="col" className="px-6 py-1.5">
                Items
              </th>
              <th scope="col" className="px-6 text-center py-1.5">
                Precio
              </th>
              <th scope="col" className="px-6 text-center py-1.5">
                Acción
              </th>
            </tr>
          </thead>
          {categorias?.map((categoria, i) => (
            <>
              {" "}
              <h3 className="bg-paleta-600/50 px-2 py-1 text-sm  mt-3 rounded-t-lg text-bold text-gray-800 font-medium cursor-pointer border-blue-400 hover:bg-paleta-300/80  uppercase">
                          {categoria}
                        </h3>
                <tbody>
                  {listadoItems?.categorias?.[categoria]
                    ?.filter((item) => item.active === true)
                    .map((lista, iItems) => (
                      <tr
                        key={iItems}
                        className=" border-b cursor-pointer border-blue-400 bg-gray-100 dark:border-gray-700 hover:bg-gray-50"
                      >
                        <td
                          scope="row"
                          className=" px-6 py-1  text-gray-800  whitespace-nowrap"
                        >
                          {lista.nombre}
                        </td>
                        <td className="px-6 text-center  text-gray-800 py-1">
                          {" "}
                          ${lista.precio}
                        </td>

                        <td className=" text-xs text-center text-blue-400">
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
            
            </>
          ))}
            </table>
        </>
      )}
    </section>
  );
}

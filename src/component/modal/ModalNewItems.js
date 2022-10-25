import React, { useState } from "react";
import { useContexto } from "../contexto/ContextProvider";
import uuid from "react-uuid";
import "./modalNewItems.css";
import toast, { Toaster } from "react-hot-toast";

export default function ModalNewItems({ categorias, setEstadoModal }) {
  const { crearItems } = useContexto();
  const [producto, setProducto] = useState({
    nombre: "nombre",
    descripcion: "descripcion",
    precio: 152,
    productID: 152,
    categoria: "1",
    active: true,
  });
  // const [check,setCheck] = useState(true);

 
  const handleChange = ({ target: { name, value, } }) => {
    setProducto({ ...producto, [name]: value, productID: uuid()});
  };

const handlecheck=({target:{checked}})=>{
  // setCheck(checked)
  setProducto({...producto,active:checked})
}

  const handleCreateItems = (e) => {
    e.preventDefault();
    crearItems(producto,producto.categoria);
    setEstadoModal(false);
    e.target.reset();
  };

  
  return (
    <div
      className={
        "main-modal  card_open fixed  inset-0 z-90 overflow-hidden flex justify-center items-center"
      }
    >
      <form
        onSubmit={handleCreateItems}
        className="modal-container py-3  bg-white w-8/12 max-w-11/12 mx-auto rounded-xl z-50 overflow-y-auto"
      >
        <div className="modal-content py-2 text-left px-2">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-medium text-gray-700">Crear Items</p>
            <button
              onClick={() => {
                setEstadoModal(false);
              }}
              className="modal-close cursor-pointer z-50"
            >
              <svg
                className="fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </button>
          </div>
          {/* inputs */}
          <div className="my-3 px-2 mx-auto flex flex-col justify-center">
            <label htmlFor="name" className="font-medium text-gray-700 text-sm">
              Nombre
            </label>
            <input
            required
              onChange={handleChange}
              type="text"
              name="nombre"
              id=""
              className="border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-3 outline-none "
            />
          </div>
          <div className="my-3 px-2 mx-auto flex flex-col justify-center">
            <label
              htmlFor="description"
              className="font-medium text-gray-700 text-sm"
            >
              Descripción
            </label>
            <textarea

              onChange={handleChange}
              name="descripcion"
              id=""
              className="border border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-3 outline-none "
            />
          </div>
          <div className="my-3 px-2 mx-auto flex gap-2  justify-center">
            <div className=" flex flex-col justify-center w-1/2">
              <label
                htmlFor="precio"
                className="font-medium text-gray-700 text-sm"
              >
                Precio
              </label>
              <input
              required
                onChange={handleChange}
                type="number"
                name="precio"
                id=""
                className="border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-3 outline-none  "
              />
            </div>
            <div className=" flex flex-col justify-center  w-1/2">
              <label
                htmlFor="lista"
                className="font-medium text-gray-700 text-sm"
              >
                Lista
              </label>
              <select
                onChange={handleChange}
                name="categoria"
                id=""
                className="border text-sm focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-3 outline-none "
                placeholder="Seleccione una Categoria"
              >
                <option value="" placeholder="Seleccione una Categoria" select className="text-[xs] text-gray-400">Seleccione una Categoria</option>
                {categorias?.map((categoria,i)=>(
                  <option key={i} value={categoria}>{categoria}</option>

                ))}
              </select>
            </div>
          </div>
          <div className="my-3 px-2 mx-auto flex justify-around">
            <button 
            type="submit"
            className="uppercase font-medium text-xs border text-white w-1/3 inline-block bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-2 py-2">
              {" "}
              -> Crear
            </button>
            <div className="inline-block flex flex-col justify-center ">
              <label
                htmlFor="orange-toggle"
                class="relative inline-flex items-center mr-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={handlecheck}
                  name="active"
                  id="orange-toggle"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-2 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                <span className="ml-3 text-sm font-medium  peer-checked:text-gray-700 text-gray-300">
                  Activo
                </span>
              </label>
            </div>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

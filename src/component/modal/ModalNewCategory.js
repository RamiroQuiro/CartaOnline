import React, { useState } from "react";
import { useContexto } from "../contexto/ContextProvider";
import uuid from "react-uuid";
import "./modalNewItems.css";
import toast, { Toaster } from "react-hot-toast";

export default function ModalNewCategory({ estadoModal, setEstadoModal }) {
  const { crearCategoria } = useContexto();
  const [producto, setProducto] = useState("");
  const [check,setCheck] = useState(true);

 
  const handleChange = ({ target: { name, value, } }) => {
    setProducto(value);
  };


  const handleCreateItems = (e) => {
    e.preventDefault();
    crearCategoria(producto);
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
            <p className="text-xl font-medium text-gray-700">Crear Categorias</p>
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
              onChange={handleChange}
              type="text"
              name="nombre"
              id=""
              className="border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-3 outline-none "
            />
          </div>
        
          <div className="my-3 px-2 mx-auto flex justify-around">
            <button 
            type="submit"
            className="uppercase font-medium text-xs border text-white w-1/3 inline-block bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-2 py-2">
              {" "}
              -> Crear
            </button>
       
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

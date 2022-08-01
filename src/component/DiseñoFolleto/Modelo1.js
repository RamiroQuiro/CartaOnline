import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

export default function Modelo1({
  styles,
  imagen,
  handleDeleteImagen,
  handleSubmitFile,
  perfilCuenta,
  categorias,
  items,
}) {


    console.log(perfilCuenta)
  return (
    <div className="flex w-full">
      <div
        style={{
          background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
        }}
        className=" w-[95%] min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col justify-around items-center justify-self-auto "
      >
        <header className="w-full flex  h-2/6">
          <div className="h-full w-1/3 flex items-center justify-center relative">
            <div className=" absolute peer w-[80%] -rotate-6 rounded-xl">
              <img
                width={"300px"}
                height="300px"
                src={imagen?.find((img) => img.nombre == "imagen1")?.url}
                alt=""
                className="mb-4  objet-cover object-center w-full h-auto z-30  rounded-xl "
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
          </div>
          {/* Titulo y Descripcion */}
          <div className="h-full w-1/3 flex items-center justify-center relative">
            <div className="text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
              <h1
                style={{ color: `${styles?.textColor1}` }}
                className="text-paleta-200  font-bold text-4xl italic"
              >
                {perfilCuenta?.businessName}
              </h1>
              <hr className="h-4 w-10/12 mx-auto my-2" />
              <p
                style={{ color: `${styles?.textColor2}` }}
                className="text-white text-sm my-0"
              >
                {perfilCuenta?.descripcion || "Descripcion de la empresa"}
              </p>
              <div className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-10">
                <span> • • </span>
                <span> • • </span>
                <span> • • </span>
              </div>
            </div>
          </div>
          <div className=" h-full w-1/3 flex items-center justify-center relative">
            <div className=" absolute peer w-[80%] rotate-6 rounded-xl">
              <img
                width={"300px"}
                height="300px"
                src={imagen?.find((img) => img.nombre == "imagen2")?.url}
                alt=""
                className="mb-4  objet-cover object-center w-full h-auto z-30  rounded-xl "
              />
            </div>
            <div className="peer-hover:flex hover:flex mx-auto group hidden md:left-5 top-5 absolute cursor-pointer z-50 bg-gray-700/80 p-1 rounded">
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
          </div>
        </header>
        {/* Titulo y Descripcion */}

        <div className="w-full h-4/6 flex flex-wrap justify-center items-center space-x-3 space-y-2.5">
          {
              categorias?.map((categoria,i)=>(
                <div key={i} className="p-3 rounded-lg bg-gray-50/10 backdrop-blur-sm flex flex-col min-h-[50%] min-w-[30%] items-center">
                      <h3
                      style={{ color: `${styles?.textColor1}` }}
                      className="text-xl text-center w-6/12 font-medium bg-gray-500 px-4 py-1 rounded-lg"
                    >{categoria}</h3>
                    {
                        perfilCuenta?.categorias?.[categoria].map((item,index)=>(
                            <li
                            key={index}
                            className=" text-left w-full m-0 flex justify-between align-center px-5"
                          >
                            <div className="py-2  itemDescription ">
                              <p
                                style={{ color: `${styles?.textColor1}` }}
                                htmlFor="cantidadItems "
                                className="cursor-pointer font-bold text-yellow-400 m-0 text-lg"
                              >
                                {item.nombre}
                              </p>
                              <div
                                style={{ color: `${styles?.textColor2}` }}
                                className="descriptionSpan text-gray-100 font-medium  "
                              >
                                {" "}
                                {item.descripcion}.
                              </div>
                            </div>
                            <div
                              style={{ color: `${styles?.textColor2}` }}
                              className="inline itemPrecio text-2xl text-center font-bold m-auto"
                            >
                              ${item.precio}
                            </div>
                          </li>)
                        )
                    }      
                </div>
              ))
          }
        </div>

        <footer className="w-full px-16 flex bg-gray-100/50 mx-auto gap-4 py-2 justify-between items-center">
          <span>{perfilCuenta.facebook || "facebook"}</span>
          <span>{perfilCuenta.instagram || "Instagram"}</span>
          <span>{perfilCuenta.direccion}</span>
        </footer>
      </div>
    </div>
  );
}

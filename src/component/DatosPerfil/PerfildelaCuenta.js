import {  doc, getDoc,  updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Auth } from "../contexto/AuthContext";
import { db } from "../Firebase";

import toast, { Toaster } from "react-hot-toast";
import {  Navigate, useOutletContext } from "react-router-dom";
import PerfilRedesSociales from "../PerfilRedesSociales";
import SubidaLogo from "./SubidaLogo";

export default function PerfildelaCuenta() {
  const {nombreDiscponible}=Auth()
  const [perfilUserLogin, listadoItems,movil,uidUser] = useOutletContext();
  const [perfilUser, setPerfilUser] = useState({});
  const [habilitarEdicion, setHabilitarEdicion] = useState(false);
  const [editarPerfil, setEditarPerfil] = useState({});
  const docRef = doc(db, `usuarios/${uidUser}`);
  const docRefPubli=doc(db, "listado/empresas")

  const handleChange = ({ target: { name, value } }) => {
    setPerfilUser({ ...perfilUser, [name]: value });
  };

  const handleEditItems = (e) => {
    e.preventDefault();
    setHabilitarEdicion(!habilitarEdicion);
  };

  const handleChangeData = async (e) => {
    e.preventDefault();
   
    await updateDoc(docRef, { perfilUser });
    const referencedBusinessName= `${uidUser}.perfilUser`
     await updateDoc(docRefPubli, {
       [referencedBusinessName]: perfilUser,
     }).then(() => {
       toast("Perfil Actualizado!", {
         icon: "💪💪",
       });
     });
     setHabilitarEdicion(!habilitarEdicion);
  };
  useEffect(() => {
const traerNombre=async()=>{
const response=  await nombreDiscponible()
 response.filter(element=>element.perfilUser?.businessName=="ramon")
}
console.log(traerNombre())
    const traer = async () =>
      await traerDataProfile().then((data) => setEditarPerfil(data));
    traer();
  }, [habilitarEdicion]);

  const traerDataProfile = async () => {
    const data = await getDoc(docRef);
    setPerfilUser(data?.data().perfilUser);
  };


  return (
    <div className="board min-h-screen">
      <div className=" md:w-10/12 mx-auto pt-8 md:pt-0 flex flex-col  md:flex-row gap-5">
        <section className=" bg-gray-200/60 backdrop-blur-sm   w-full h-full  shadow-md border-2 text-medium px-1 md:px-5 py-5 rounded md:rounded-lg">
          <div className="flex flex-col md:flex-row  mx-auto gap-4 lg:py-8 justify-around lg:px-15">
            <div className="  bg-gray-200/90 w-full   duration-300 shadow-md border-2  text-medium px-1 md:px-5 py-5 rounded-lg">
              <h2 className="font-bold text-center mb-2 text-gray-700 text-2xl">
                Datos de Perfil
              </h2>
              <form className="px-5 flex flex-col text-gray-700 gap-2">
                <div className="flex  flex-col font-medium">
                  <label>Nombre de Empresa</label>
                  {!habilitarEdicion ? (
                    <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                      {" "}
                      {perfilUser?.businessName || "---"}
                    </h1>
                  ) : (
                    <input
                      className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                      onChange={handleChange}
                      name="businessName"
                      value={perfilUser?.businessName}
                      type="text"
                    />
                  )}
                </div>
                <div className="flex  flex-col font-medium">
                  <label>Nombre de Usuario</label>
                  {!habilitarEdicion ? (
                    <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                      {" "}
                      {perfilUser?.userName || "---"}
                    </h1>
                  ) : (
                    <input
                      className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                      onChange={handleChange}
                      name="userName"
                      value={perfilUser?.userName}
                      type="text"
                    />
                  )}
                </div>
                <div className="flex flex-col font-medium">
                  <label>Dirección</label>
                  {!habilitarEdicion ? (
                    <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                      {" "}
                      {perfilUser?.direccion || "---"}
                    </h1>
                  ) : (
                    <input
                      className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none"
                      onChange={handleChange}
                      name="direccion"
                      value={perfilUser.direccion}
                      type="text"
                    />
                  )}
                </div>
                <div className="flex flex-col font-medium">
                  <label>Correo Electronico</label>
                  {!habilitarEdicion ? (
                    <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                      {" "}
                      {perfilUser?.email || "---"}
                    </h1>
                  ) : (
                    <input
                      className=" border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                      onChange={handleChange}
                      name="email"
                      value={perfilUser?.email}
                      type="email"
                    />
                  )}
                </div>
                <div className="flex flex-col font-medium">
                  <label>
                    Numero de telefonos{" "}
                    <span className="text-xs">
                      {" "}
                      (el N° de la izquierda sera el N° principal){" "}
                    </span>{" "}
                  </label>
                  <div className="flex gap-2">
                    {!habilitarEdicion ? (
                      <>
                        <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                          {" "}
                          {perfilUser?.nTel1 || "---"}
                        </h1>
                        {"  |  "}
                        <h1 className="duration-300 text-xl py-1 px-2 outline-none text-paleta-300 ">
                          {" "}
                          {perfilUser?.nTel2 || "---"}
                        </h1>
                      </>
                    ) : (
                      <>
                        <input
                          className=" border focus:border-2 w-1/2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                          onChange={handleChange}
                          name="nTel1"
                          value={perfilUser?.nTel1}
                          type="number"
                        />
                        <input
                          className=" border focus:border-2 w-1/2 duration-300 border-blue-100 focus:bg-white bg-gray}-50 rounded py-1 px-1 outline-none "
                          onChange={handleChange}
                          name="nTel2"
                          value={perfilUser?.nTel2}
                          type="number"
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col font-medium">
                  <label>Descripcion que irá abajo del Nombre/Logo</label>
                  {!habilitarEdicion ? (
                    <p className="duration-300 text-sm py-1 px-2 outline-none text-paleta-300 ">
                      {" "}
                      {perfilUser?.descripcion || "---"}
                    </p>
                  ) : (
                    <textarea
                      className="text-sm border focus:border-2 duration-300 border-blue-100 focus:bg-white bg-gray-50 rounded py-1 px-1 outline-none "
                      onChange={handleChange}
                      name="descripcion"
                      value={perfilUser?.descripcion}
                      type="textarea"
                    />
                  )}
                </div>

                <button
                  className="w-2/6 mx-auto uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-300 hover:text-blue-400 mt-4 px-3 py-2"
                  onClick={
                    !habilitarEdicion ? handleEditItems : handleChangeData
                  }
                >
                  {!habilitarEdicion ? "Editar Datos" : "Actualizar Datos"}
                </button>
              </form>
            </div>
            <div className="perfilCuenta  inventarioComidas w-full   duration-300 shadow-md border-2  text-medium px-5 py-5 rounded-lg">
              <PerfilRedesSociales
                habilitarEdicion={habilitarEdicion}
                perfilUser={perfilUser}
                handleChange={handleChange}
                handleEditItems={handleEditItems}
              />

              <SubidaLogo setPerfilUser={setPerfilUser} perfilUserLogin={perfilUserLogin} />
            </div>
          </div>
        </section>
      </div>
      <Toaster />
    </div>
  );
}

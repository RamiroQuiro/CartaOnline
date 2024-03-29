import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { VscCheck } from "react-icons/vsc";
import "./perfilCuenta.css";
import { CgProfile } from "react-icons/cg";
import { FcPhoneAndroid, FcFeedback, FcHome  } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Auth } from "../contexto/AuthContext";

export default function PerfilCuenta({ perfilUser ,listadoItems}) {
  const { user, editarPerfil } = Auth();
  const [perfil, setPerfil] = useState({
    businessName: "",
    userName: "",
    nTel: 0,
    email: "",
  });
  const logo=listadoItems?.images?.find(imagen=>imagen.posicion==="logo")

const navigate = useNavigate()
  const onClickEdit = (e) => {
    e.preventDefault();
    navigate('/perfildelaCuenta')
  };

  return (
    <section className="   bg-gray-200/60 backdrop-blur-sm w-full   cursor-pointer duration-300 shadow-md border-2  text-medium p-4 rounded-lg">
      <div className="flex justify-between items-center mb-6   ">
        <h2 className="text-right  font-medium  text-gray-700 md:text-xl text-lg">
          Tarjeta de presetación
        </h2>
        <button
          onClick={onClickEdit}
          className="uppercase font-medium text-xs border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >
          Editar Datos
        </button>
      </div>
      <div className="containerCardProfile rounded py-4 flex  w-full h bg-paleta-100">
        <div className="logoCardProfile m-auto w-1/2 h-full">
          <div className="m-auto flex flex-col gap-3 justify-center items-center h-full">
            <img src={logo?.url} width="100" height="100" alt={logo?.nombre} />
            <h2 className="font-bold text-xl tracking-wide uppercase">
              {perfilUser?.businessName}
            </h2>
          </div>
        </div>
        <div className="detallesCardProfile flex justify-center items-center  w-1/2 p-5">
          <div className="flex gap-2 flex-col text-left -ml-10 text-white">
            <div className=" font-medium jutify-center items-center text-sm flex gap-2 -ml-2 ">
              <CgProfile className="font-bold scale-150 	" />{" "}
              <h2 className="text-paleta- font-bold text-2xl">
                {perfilUser?.userName}
              </h2>
            </div>
            <div  className=" font-medium jutify-center items-center text-sm flex gap-2 -ml-2">
              <FcPhoneAndroid />{" "}
              <p>
                {perfilUser?.nTel1 || "--"} | {perfilUser?.nTel2}{" "}
              </p>
            </div>
            <div className=" font-medium jutify-center items-center text-sm  flex gap-2 ">
              <FcFeedback /> <p>{perfilUser?.email} </p>
            </div>
            <div className=" flex jutify-center items-center gap-2  font-medium text-sm ">
              <FcHome /> <p>{perfilUser?.direccion}</p>
            </div>
            <div className=" flex gap-2 jutify-center items-center font-medium  text-sm ">
          <div className="flex">
          <i className="gg-facebook  inline-block"></i>
          <p  className=" inline-block"> / {perfilUser?.facebook}</p></div>
        </div>
        <div className=" flex gap-2 jutify-center items-center  -ml-2 font-medium text-sm ">
          <div className="flex"> <i className="gg-instagram   inline-block"></i><p  className="pl-2 inline-block">  / {perfilUser?.instagram}</p></div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

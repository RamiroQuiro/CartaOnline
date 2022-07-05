import { onLog } from "firebase/app";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink, useNavigate ,useOutletContext} from "react-router-dom";
import { Auth } from "./contexto/AuthContext";
import { db, gAuth } from "./Firebase";
import { FaShapes, FaCogs,FaBookOpen,FaColumns,FaFileImage } from "react-icons/fa";
import "./navbar.css";

export default function Navbar({perfilUser}) {
  const { user } = Auth();

  const navigate = useNavigate();

  const handlelogOut = () => {
    signOut(gAuth)
      .then(() => {
        toast("Sesion Cerrada \n Nos vemos pronto", {
          style: {
            textAlign: "center",
            fontbold: true,
            marginTop: "10px",
          },
        });
      })
      .catch((error) => {
        toast(error);
      });
    navigate("/login");
  };
  return (
    <div className="">
      <Toaster />
      <header className="flex mx-auto py-2 px-5">
        <div className="logo group relative duration-300  flex   hover:-translate-y-0.5  hover:shadow-xl py-1 items-center gap-5 text-2xl font-bold text-paleta-300">
          <Link 
          to={`/${perfilUser?.businessName}`}
          target="_blank"
          className="">
            {perfilUser?.businessName}
          </Link>
          <span className="text-sm opacity-0 py-2  group-hover:opacity-100 translate-y-12 group-hover:translate-y-7 absolute  whitespace-nowrap text-gray-100  left-full bottom-full ml-2 -mb-2 bg-paleta-300 bg-opacity-90 duration-200 font-bold  px-3   border-r-2 border-paleta-600  ">Ir al folleto</span>
        </div>
        <div className="headerDerecha flex gap-5">
          <h4>{perfilUser?.userName}</h4>
          😊
          <i
            className="gg-log-out  logout cursor-pointer "
            onClick={handlelogOut}
          ></i>
        </div>
      </header>
      <nav className="nav rounded bg-paleta-100  overflow-hidden hover:overflow-visible z-30 left-5">
        <NavLink
          className={ ({ isActive }) =>isActive ? "buttonActive group" : "button group relative duration-300"}
          to={"account"}
          data-tooltip-target="tooltip-bottom"
        >
          <FaShapes className="icon " />
          <span className=" overflow-hidden opacity-0  group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 absolute  whitespace-nowrap  -z-20 text-gray-800  left-full bottom-full -ml-2 -mb-2 bg-paleta-600 bg-opacity-90 duration-200 font-bold text-xs px-3 py-2 rounded-tl-lg rounded-r-lg border-r-2 border-paleta-200  ">Mi Cuenta</span>
        </NavLink>

      
        <NavLink 
         className={ ({ isActive }) =>isActive ? "buttonActive group" : "button group relative duration-300"}
        to={"perfildelaCuenta"}>
          <FaCogs />
          <span className="text-sm opacity-0  group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 absolute whitespace-nowrap  text-gray-800  left-full bottom-full -ml-2 -mb-2 bg-paleta-600 bg-opacity-90 duration-200 font-bold px-3 py-2 rounded-tl-lg rounded-r-lg border-r-2 border-paleta-200  ">Datos de Perfil</span>
        </NavLink>
        <NavLink  
        className={ ({ isActive }) =>isActive ? "buttonActive group"  : "button group relative duration-300"}
         to={"pageItems"}>
          <FaBookOpen />
        <span className="text-sm opacity-0  group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 absolute  text-gray-800  left-full bottom-full -ml-2 -mb-2  bg-paleta-600 bg-opacity-90 duration-200 font-bold whitespace-nowrap  px-3 py-2 rounded-tl-lg rounded-r-lg border-r-2 border-paleta-200  ">Carga de Items</span>
        </NavLink>
        {/* <NavLink 
        className={ ({ isActive }) =>isActive ? "buttonActive group" : "button group relative duration-300"}
        to={"pageIgames"}>
          <FaFileImage />
          <span className="text-sm opacity-0  group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 absolute  text-gray-800  left-full bottom-full -ml-2 -mb-4  bg-paleta-600 bg-opacity-90 duration-200 font-boldpx-3 py-2  whitespace-nowrap  rounded-tl-lg rounded-r-lg border-r-2 border-paleta-200  ">Stock Imagenes</span>
        </NavLink> */}
        <NavLink 
        className={ ({ isActive }) =>isActive ? "buttonActive group" : "button group relative duration-300"}
        to={"disenioFolleto"}>
          <FaColumns />
          <span className="text-sm opacity-0  group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 absolute  text-gray-800  left-full bottom-full -ml-2 -mb-4  bg-paleta-600 bg-opacity-90 duration-200 font-bold  px-3 py-2  whitespace-nowrap  rounded-tl-lg rounded-r-lg border-r-2 border-paleta-200  ">Diseño de Folleto</span>
        </NavLink>

      </nav>
    </div>
  );
}

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../img/Logo.png";
import loginImg from "../../img/empleado.png";

 export default function NavBarHome() {
  const [toggle, setToggles] = useState(false);
  const handleToggle = () => {
    setToggles(!toggle);}

  return (
    <>
      <div className="md:hidden z-50 flex w-full mx-auto justify-between  pt-5">
        <img
          src={Logo}
          alt="logo"
          width={"100px"}
          height="100px"
          className={`${toggle ? "opacity-0" : "opacity-100 "} duration-300`}
        />
        <button className=" right-16 fixed " onClick={handleToggle}>
          <img
            src={"menulinea"}
            alt="menu linear"
            width={"40px"}
            height="40px"
            className={`${
              !toggle ? " duration-300" : " duration-300 rotate-90"
            } fixed`}
          />
        </button>
      </div>
      <div
        className={`${
          !toggle ? "-translate-x-[200%] md:translate-x-0 " : "translate-x-0 "
        } duration-300   md:px-24 pt-5 pb-3 md:py-0 mx-auto md:h-20  w-full z-40 md:gap-0 gap-3 md:flex-row flex-col flex justify-between items-center fixed bg-gradient-to-b from-orange-100/50   to-transparent backdrop-blur-sm `}
      >
        <div className=" md:w-1/5 w-full px-10">
          <img
            src={Logo}
            alt="logo"
            width={"100px"}
            height="100px"
            className=""
          />
        </div>
        <nav className="flex md:flex-row flex-col text-left md:text-center font-medium text-lg w-full px-10 py-5 md:gap-0 gap-2 text-gray-800  md:justify-around md:items-center">
            
          <a href="#producto"
            className="hover:scale-110 duration-150 border-b py-2"
            >

            Producto
            </a>
            <a href="#precio"
            className="hover:scale-110 duration-150 border-b py-2"
            >

            Precio
            </a>
            <a href="#contacto"
            className="hover:scale-110 duration-150 border-b py-2"
            >

            Contacto
            </a>
        </nav>
        <Link
          to={"login"}
          className="md:w-1/5 w-10/12 bg-gradient-to-tr from-orange-300/30 overflow-visible to-orange-300 flex justify-start gap-5 items-center mx-auto rounded-l-2xl py-5 pr-2 h-8"
        >
          <img alt="diseñoFacil" width="48px" height="48px" src={loginImg} />
          <div className="text-gray-50 font-bold">Ingresar</div>
        </Link>
      </div>
    </>
  );
}
